import { gql } from '@apollo/client';

export const CREATE_USER = gql `{
    mutation createUser(username: String!, email: String!, password: String!) {
        Auth {
            token
            user
        }
    }
}`;

export const LOGIN = gql `{
    mutation login(email: String!, password: String!) {
        Auth {
            token
            user
        }
    }
}`;

export const SAVE_BOOK = gql `{
    mutation saveBook(savedBooks: [Book], description: String!, title: String!, bookId: String!, image: String!, link: String!){
        User {
            _id: ID
            name: String
            email: String
            bookCount: Int
            savedBooks: [Book]!
        }
    }
}`;

export const DELETE_BOOK = gql `{
    mutation deleteBook(userId: ID!, commentId: ID!) {
        User {
            _id: ID
            name: String
            email: String
            bookCount: Int
            savedBooks: [Book]!
        }
    }
}`;

