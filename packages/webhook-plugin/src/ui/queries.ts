import gql from 'graphql-tag';

export const updateWebhookMutation = gql`
    mutation updateWebhook($url: String!) {
        updateWebhook(url: $url)
    }
`;

export const getWebhookQuery = gql`
    query webhook {
        webhook
    }
`;
