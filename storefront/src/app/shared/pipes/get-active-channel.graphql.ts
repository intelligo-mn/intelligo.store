import {gql} from 'apollo-angular';


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
