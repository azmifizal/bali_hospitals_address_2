const { getAll, getOne, add, edit, del } = require('./user');
const config = require('../../../helpers/config.env');

const ADM = config.permissionLevels.SUPER_ADMIN;
const USR = config.permissionLevels.USER;

module.exports = {
    Query: {
        users: (root, args, context) => {
            return getAll([ADM], context.user);
        },
        user: async (root, args, context) => {
            return getOne([ADM], args.id, context.user);
        }
    },
    Mutation: {
        addUser: (root, args, context) => {
            return add(args.data, context.user);
        },
        editUser: (root, args, context) => {
            return edit([ADM, USR], args.id, args.data, context.user);
        },
        deleteUser: (root, args, context) => {
            return del([ADM, USR], args.id, context.user);
        } 
    }
}