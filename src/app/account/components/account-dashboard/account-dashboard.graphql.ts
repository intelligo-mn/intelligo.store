import gql from 'graphql-tag';

export const GET_ACCOUNT_OVERVIEW = gql`
    query GetAccountOverview {
        activeCustomer {
            id
            title
            firstName
            lastName
            emailAddress
        }
    }
`;
