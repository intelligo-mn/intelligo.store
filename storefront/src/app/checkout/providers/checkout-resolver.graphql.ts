import {gql} from 'apollo-angular';


import { CART_FRAGMENT, ORDER_ADDRESS_FRAGMENT } from '../../common/graphql/fragments.graphql';

export const GET_ORDER_FOR_CHECKOUT = gql`
    query GetOrderForCheckout {
        activeOrder {
            ...Cart
            shippingAddress {
                ...OrderAddress
            }
        }
    }
    ${CART_FRAGMENT}
    ${ORDER_ADDRESS_FRAGMENT}
`;
