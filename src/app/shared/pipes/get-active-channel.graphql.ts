import gql from 'graphql-tag';

export const GET_ACTIVE_CHANNEL = gql`
    query GetActiveChannel {
        activeChannel {
            id
            code
            currencyCode
            defaultLanguageCode
        }
    }
`;
