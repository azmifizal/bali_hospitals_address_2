import Hospital from '../../models/hospital';

export default {
    Query: {
        // hospitals: () => {
        //     return Hospital.find()
        //                     .then(data => {
        //                         // return console.log(data);
        //                         return data;
        //                     })
        //                     .catch(err => {
        //                         return err;
        //                     });
        // }
        hospitals: async () => {
            try {
                const result = await Hospital.find();
                return result;
            } catch (err) {
                throw err;
            }
        }
    }
}