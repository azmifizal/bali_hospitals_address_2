import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './types/mergeTypes';
import resolvers from './resolvers/mergeResolvers';

const Schema = makeExecutableSchema({
    // put type and resolver here?
    typeDefs,
    resolvers
});

export default Schema;