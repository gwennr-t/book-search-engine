const typeDefs = `
    type User {
        _id: ID!
        name: String!
        email: String!
        bookCount: Int
        savedBooks: []
    }

    type Book {
        bookId: ID!
        authors: []
        description: String!
        title: String!
        image: String!
        link: String!
    }

    type Auth {
        // token

        // user (References the User type.)
    }

    type Query {
        // me: Which returns a User type

    }

    type Mutation {
        // createUser: Accepts a username, email, and password as parameters; returns an Auth type.

        // login: Accepts an email and password as parameters; returns an Auth type.
        
        // saveBook: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a User type. (Look into creating what's known as an input type to handle all of these parameters!)
        
        // deleteBook: Accepts a book's bookId as a parameter; returns a User type.

    }
`;

module.exports = typeDefs;
