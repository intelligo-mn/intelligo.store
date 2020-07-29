import gql from 'graphql-tag';

export const SIGN_OUT = gql`
    mutation SignOut {
        logout
    }
`;
