import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './types';
import resolvers from './resolvers';

const Schema = makeExecutableSchema({
    // put type and resolver here?
    typeDefs,
    resolvers
});

export default Schema;