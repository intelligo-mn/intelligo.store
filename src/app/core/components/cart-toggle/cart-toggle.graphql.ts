import gql from 'graphql-tag';

export const GET_CART_TOTALS = gql`
    query GetCartTotals {
        activeOrder {
            id
            active
            lines {
                id
                quantity
            }
            total
        }
    }
`;
