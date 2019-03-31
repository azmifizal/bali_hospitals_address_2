import Hospital from '../../models/hospital';

export default {
    Query: {
        hospitals: async(data, args, context, info) => {
            if (!context.auth) {
                return new Error('Not Allowed!');
            }

            try {
                const result = await Hospital.find();
                return result;
            } catch (err) {
                throw err;
            }
        }
    }
}