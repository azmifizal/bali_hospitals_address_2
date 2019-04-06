import { mergeTypes } from 'merge-graphql-schemas';

import hospitalTypes from './hospital';
import authTypes from './auth';
import userTypes from './user';

const typeDefs = [hospitalTypes, authTypes, userTypes];

export default mergeTypes(typeDefs, {all: true});