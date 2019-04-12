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

export const edit = async (permission, id, input, {auth, permissionLevel}) => {
    if (!auth) throw new Error('Authentication false!');
    if (!permission.includes(permissionLevel)) throw new Error('Authorization not allowed!');
    
    try {
        // return console.log(id, input.location.districts);
        const result = await Hospital.findOneAndUpdate({_id: id}, {$set: {
            'code': input.code,
            'name': input.name,
            'type': input.type,
            'class': input.class,
            'owner': input.owner,
            'location.adress': input.location.adress,
            'location.districts': input.location.districts,
            'location.postal_code': input.location.postal_code,
            'location.email': input.location.email,
            'location.phone': input.location.phone,
            'location.fax': input.location.fax,
            'last_update': input.last_update
        }}, {'new': true});
        return result;
    } catch (error) {
        throw error;
    }
}

export const del = async (permission, id, {auth, permissionLevel}) => {
    if (!auth) throw new Error('Authentication false!');
    if (!permission.includes(permissionLevel)) throw new Error('Authorization not allowed!');

    try {
        const result = await Hospital.findOneAndDelete({ _id: id});
        return result;
    } catch (error) {
        throw error;
    }
}