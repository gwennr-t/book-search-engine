import { gql } from '@apollo/client';

export const GET_ME = gql`{
    me {
        _id
        name
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
    }
}`;
