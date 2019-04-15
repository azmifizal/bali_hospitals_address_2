const { mergeTypes } = require('merge-graphql-schemas');

const hospitalTypes = require('./hospital');
const authTypes = require('./auth');
const userTypes = require('./user');

const typeDefs = [hospitalTypes, authTypes, userTypes];

module.exports = mergeTypes(typeDefs, {all: true});