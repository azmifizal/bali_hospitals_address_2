import { getAll, getOne, getSearch, add, edit, del } from './hospital';
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
        createHospital: (root, args, context) => {
            return add([ADM, USR], args.input, context.user);
        },
        updateHospital: (root, args, context) => {
            return edit([ADM, USR], args.id, args.input, context.user);
        },
        deleteHospital: (root, args, context) => {
            return del([ADM, USR], args.id, context.user);
        }
    }
}