const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require('./types');
const resolvers = require('./resolvers');

const Schema = makeExecutableSchema({
    // put type and resolver here?
    typeDefs,
    resolvers
});

module.exports = Schema;