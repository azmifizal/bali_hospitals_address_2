import User from '../../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import secret from '../../helpers/config.env';

export default {
    Query: {
        login: async (root, args) => {
            try {
                const emailCheck = await User.findOne({ email: args.email });
                if (!emailCheck) {
                    throw new Error(`Email does't exist!`);
                } else {
                    const passCheck = await bcrypt.compare(args.password, emailCheck.password);
                    if (!passCheck) {
                        throw new Error(`Password not match!`);
                    } else {
                        const pl = {
                            userId: emailCheck.id,
                            name: emailCheck.name,
                            email: emailCheck.email,
                            permissionLevel: emailCheck.permissionLevel
                        }
                        const token = jwt.sign(pl, secret.key_s, {expiresIn: '24h'});
                        return {
                            ...pl,
                            token
                        }
                    }
                }
            } catch (error) {
                throw error;
            }
        }
    }
}