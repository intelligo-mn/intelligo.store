import gql from 'graphql-tag';

export const schema = gql`
    extend type Mutation {
        updateWebhook(url: String!): String
    }

    extend type Query {
        webhook: String
    }
`;
