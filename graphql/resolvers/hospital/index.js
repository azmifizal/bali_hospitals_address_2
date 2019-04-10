import { getAll, getOne, getSearch, add } from './hospital';
import config from '../../../helpers/config.env';

const ADM = config.permissionLevels.SUPER_ADMIN;
const USR = config.permissionLevels.USER;

export default {
    Query: {
        hospitals: (root, args, context) => {
            return getAll([ADM, USR], context.user);
        },
        hospital: (root, args, context) => {
            return getOne([ADM, USR], args.id, context.user);
        },
        hospitalSearch: (root, args, context) => {
            return getSearch([ADM, USR], args.key, context.user);
        }
    },
    Mutation: {
        addHospital: (root, args, context) => {
            return add([ADM, USR], args.input, context.user);
        }
    }
}