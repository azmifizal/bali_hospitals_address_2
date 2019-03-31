import User from '../../models/user';

export default {
    Query: {
        users: async () => {
            try {
                const data = await User.find();
                return data;
            } catch (error) {
                throw error;
            }
        }
    }
}