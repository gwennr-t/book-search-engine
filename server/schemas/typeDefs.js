const {gql} = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID!
        name: String!
        email: String!
        bookCount: Int
        savedBooks: []
    }

    type Book {
        bookId: ID
        authors: []
        description: String!
        title: String!
        image: String!
        link: String!
    }

    type Auth {
        token: ID!
        user User
    }

    type Query {
        me: User

    }

    type Mutation {
        createUser: (username: String!, email: String!, password: String!) :Auth

        login: (email: String!, password: String!) :Auth
        
        // (Look into creating what's known as an input type to handle all of these parameters!)//
        saveBook: (savedBooks: [], description: String!, title: String!, bookId: String!, image: String!, link: String!) :User
        
        deleteBook: (bookId: String!) :User
    }
`;

module.exports = typeDefs;
