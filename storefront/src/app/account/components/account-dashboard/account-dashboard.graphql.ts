import {gql} from 'apollo-angular';


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
