import Hospital from '../../../models/hospital';


export const getAll = async (permission, {auth, permissionLevel}) => {
    if (!auth) throw new Error('Authentication false!');
    if (!permission.includes(permissionLevel)) throw new Error('Authorization not allowed!');
    
    try {
        const result = await Hospital.find();
        return result;
    } catch (err) {
        throw err;
    }
}

export const getOne = async (permission, id, {auth, permissionLevel}) => {
    if (!auth) throw new Error('Authentication false!');
    if (!permission.includes(permissionLevel)) throw new Error('Authorization not allowed!');
    
    try {
        const result = await Hospital.findOne({_id: id});
        return result;
    } catch (error) {
        throw error;
    }
}

export const getSearch = async (permission, key, {auth, permissionLevel}) => {
    if (!auth) throw new Error('Authentication false!');
    if (!permission.includes(permissionLevel)) throw new Error('Authorization not allowed!');
    
    try {
        const result = await Hospital.find({
                                    $or: [
                                        { 'name': { $regex: key, $options: 'i' } },
                                        { 'location.email': { $regex: key, $options: 'i' } },
                                        { 'location.address': { $regex: key, $options: 'i' } }
                                    ]
                                });
                                return result;  
    } catch (error) {
        throw error;
    }
}

export const add = async (permission, input , {auth, permissionLevel}) => {
    if (!auth) throw new Error('Authentication false!');
    if (!permission.includes(permissionLevel)) throw new Error('Authorization not allowed!');
    
    try {
        // return console.log(input);
        const result = await Hospital.create(input);
        return result;
    } catch (error) {
        throw error;
    }
}