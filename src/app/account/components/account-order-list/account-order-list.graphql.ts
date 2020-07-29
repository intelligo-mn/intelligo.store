import gql from 'graphql-tag';

export const GET_ORDER_LIST = gql`
    query GetOrderList($options: OrderListOptions) {
        activeCustomer {
            id
            orders(options: $options) {
                items {
                    id
                    updatedAt
                    code
                    state
                    currencyCode
                    total
                }
                totalItems
            }
        }
    }
`;
