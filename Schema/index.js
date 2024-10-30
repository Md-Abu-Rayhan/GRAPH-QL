const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const { users, user } = require('./Queries/user');
const { createUser } = require('./Mutations/user');  // Assume you've moved createUser to a Mutations folder

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users,
        user
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser
    }
});

module.exports = new GraphQLSchema({ 
    query: RootQuery,
    mutation: Mutation
});