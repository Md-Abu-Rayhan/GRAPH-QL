const { GraphQLList, GraphQLID } = require('graphql');
const UserType = require('../TypeDefs/UserType');
const User = require('../../Models/User');

module.exports = {
    users: {
        type: new GraphQLList(UserType),
        resolve() {
            return User.find();
        }
    },
    user: {
        type: UserType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
            return User.findById(args.id);
        }
    }
};