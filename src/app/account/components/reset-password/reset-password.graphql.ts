import gql from 'graphql-tag';

export const RESET_PASSWORD = gql`
    mutation ResetPassword($token: String! $password: String!) {
        resetPassword(token: $token password: $password) {
            user {
                id
                identifier
            }
        }
    }
`;
