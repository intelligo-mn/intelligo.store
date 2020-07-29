import gql from 'graphql-tag';

export const SIGN_IN = gql`
    mutation SignIn($emailAddress: String!, $password: String!, $rememberMe: Boolean!) {
        login(username: $emailAddress, password: $password, rememberMe: $rememberMe) {
            user {
                id
            }
        }
    }
`;
