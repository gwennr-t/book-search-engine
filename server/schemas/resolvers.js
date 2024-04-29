const { User, Book } = require("../models");
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
        populate('books');
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => 
    {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

        if (!user) {
          throw AuthenticationError;
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw AuthenticationError;
        }

        const token = signToken(user);

        return { token, user };
    },
    saveBook: async (parent, { user, savedBooks }) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: user._id },
          { $addToSet: { savedBooks: body } },
          { new: true, runValidators: true }
        );
      }
      throw AuthenticationError;
    },
    removeBook: async (parent, { user, bookId }) => {
      if (context.user) {
        return User.findOneAndUpdate (
          { _id: user._id },
          { $pull: { savedBooks: { bookId: params.bookId } } },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
