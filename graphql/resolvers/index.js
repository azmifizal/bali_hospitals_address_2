const { mergeResolvers } = require('merge-graphql-schemas');
const hospitalResolvers  = require('./hospital');
const authResolvers = require('./auth');
const userResolvers = require('./user');

const Resolvers = [hospitalResolvers, authResolvers, userResolvers];

module.exports = mergeResolvers(Resolvers);