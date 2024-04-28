const { User, Book } = require("../models");

const resolvers = {
  Query: {
    me: async (parent, args) => {
      const userInfo = await User.findOne({ _id: User._id });
      return userInfo;
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      //   if (!user) {
      //     return res.status(400).json({ message: "Can't find this user" });
      //   }

      const correctPw = await user.isCorrectPassword(password);

      //   if (!correctPw) {
      //     return res.status(400).json({ message: "Wrong password!" });
      //   }
      const token = signToken(user);

      return { token, user };
    },
    saveBook: async (parent, { book }) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { savedBooks: body } },
        { new: true, runValidators: true }
      );
      return updatedUser;
    },
    deleteBook: async (parent, { bookId }) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $pull: { savedBooks: { bookId: params.bookId } } },
        { new: true }
      );

      return updatedUser;
    },
  },
};

module.exports = resolvers;
