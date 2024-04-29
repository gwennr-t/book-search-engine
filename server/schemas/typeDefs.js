const {gql} = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID
        name: String
        email: String
        bookCount: Int
        savedBooks: [Book]!
    }

    type Book {
        bookId: ID
        authors: [Author]!
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth

        loginUser(email: String!, password: String!): Auth
        
        // (Look into creating what's known as an input type to handle all of these parameters!)//

        saveBook(savedBooks: [Book], description: String!, title: String!, bookId: String!, image: String!, link: String!): User
        
        removeBook(userId: ID!, commentId: ID!): User
    }
`;

module.exports = typeDefs;
