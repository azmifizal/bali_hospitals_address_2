const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../../helpers/config.env');

module.exports = {
    Query: {
        login: async (root, {data}) => {
            // return console.log(data.email);
            try {
                const emailCheck = await User.findOne({ email: data.email });
                if (!emailCheck) {
                    throw new Error(`Email does't exist!`);
                } else {
                    const passCheck = await bcrypt.compare(data.password, emailCheck.password);
                    if (!passCheck) {
                        throw new Error(`Password not match!`);
                    } else {
                        const pl = {
                            userId: emailCheck.id,
                            permissionLevel: emailCheck.permissionLevel
                        }
                        // const token = jwt.sign(pl, secret.key_s, {expiresIn: '24h'});
                        const token = jwt.sign(pl, secret.key_s);
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