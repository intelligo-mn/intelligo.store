import gql from 'graphql-tag';

import { CART_FRAGMENT } from '../../../common/graphql/fragments.graphql';

export const GET_ACTIVE_ORDER = gql`
    query GetActiveOrder {
        activeOrder {
            ...Cart
        }
    }
    ${CART_FRAGMENT}
`;

export const ADJUST_ITEM_QUANTITY = gql`
    mutation AdjustItemQuantity($id: ID!, $qty: Int!) {
        adjustOrderLine(orderLineId: $id, quantity: $qty){
            ...Cart
        }
    }
    ${CART_FRAGMENT}
`;

export const REMOVE_ITEM_FROM_CART = gql`
    mutation RemoveItemFromCart($id: ID!) {
        removeOrderLine(orderLineId: $id){
            ...Cart
        }
    }
    ${CART_FRAGMENT}
`;
