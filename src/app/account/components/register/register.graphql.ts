import gql from 'graphql-tag';

export const REGISTER = gql`
    mutation Register($input: RegisterCustomerInput!) {
        registerCustomerAccount(input: $input)
    }
`;
