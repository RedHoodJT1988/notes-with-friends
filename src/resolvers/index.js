const Query = require('./query');
const Mutation = require('./mutation');
const { GraphWLDateTime, GraphQLDateTime } = require('graphql-iso-date');

module.exports = {
    Query, 
    Mutation,
    DateTime: GraphQLDateTime
};