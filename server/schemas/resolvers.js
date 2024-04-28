const {User, Book} = require('../models');

const resolvers = {
    Query: {
        user: async () => {
            return User.findById({});
        },
        books: async (parent, {_id}) => {
            const params = _id ? {_id} : {};
            return Book.find(params);
        },
    },
//     Mutation: {
//         createUser: async (parent, args) => {
//             const user = await User.create(args);
//             return user;
//         },
//         login: async (parent, args) => {
//             return
//         },
//         saveBook: async (parent, args) => {
//             return
//         },
//         deleteBook: async (parent, args) => {
//             return
//         },
//     },
};

module.exports = resolvers;