import { mergeTypes } from 'merge-graphql-schemas';

import hospitalTypes from './hospital';

const typeDefs = [hospitalTypes];

export default mergeTypes(typeDefs, {all: true});