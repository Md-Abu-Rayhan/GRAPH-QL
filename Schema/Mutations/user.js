const { GraphQLList, GraphQLID, GraphQLString, GraphQLNonNull } = require('graphql');
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
    },

    createUser: {
        type: UserType,
        args: { 
            name: { type: new GraphQLNonNull(GraphQLString) },
            phone: { type: new GraphQLNonNull(GraphQLString) },
            email: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve(parent, args) {
            const newUser = new User({
                name: args.name,
                phone: args.phone,
                email: args.email
            });
            return newUser.save();
        }
    }
};