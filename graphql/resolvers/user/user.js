import bcrypt from 'bcryptjs';
import User from '../../../models/user';

export const getAll = async (permission, {auth, permissionLevel}) => {

    if (!auth) throw new Error('Authentication false!');
    if (!permission.includes(permissionLevel)) throw new Error('Authorization not allowed!');
    
    try {
        let data = await User.find();
        return data;    
    } catch (error) {
        throw error;
    }
}

export const getOne = async (permission, id, {auth, permissionLevel}) => {

    if (!auth) throw new Error('Authentication false!');
    if (!permission.includes(permissionLevel)) throw new Error('Authorization not allowed!');
    
    try {
        let result = await User.findOne({ _id: id });
        return result;
    } catch (error) {
        throw error;
    }
}

export const add = async (permission, data, {auth, permissionLevel}) => {
    if (!auth) throw new Error('Authentication false!');
    if (!permission.includes(permissionLevel)) throw new Error('Authorization not allowed!');

    try {
        let salt = await bcrypt.genSalt(10);
        let key = await bcrypt.hash(data.password, salt);
        const result = await User.create({
            name: data.name,
            email: data.email,
            password: key,
            permissionLevel: data.permissionLevel
        });
        return result;
    } catch (error) {
        throw error;
    }
}

export const edit = async (permission, id, data, {auth, permissionLevel}) => {
    if (!auth) throw new Error('Authentication false!');
    if (!permission.includes(permissionLevel)) throw new Error('Authorization not allowed!');
    
    try {
        const result = User.findOneAndUpdate({_id: id}, data, {new: true});
        return result;
    } catch (error) {
        throw error;
    }
}

export const del = async (permission, id, {auth, permissionLevel}) => {
    if (!auth) throw new Error('Authentication false!');
    if (!permission.includes(permissionLevel)) throw new Error('Authorization not allowed!');

    try {
        const result = await User.findOneAndDelete({_id: id});
        return result;
    } catch (error) {
        throw error;
    }
}

    