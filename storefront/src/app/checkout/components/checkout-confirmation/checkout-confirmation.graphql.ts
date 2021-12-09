import {gql} from 'apollo-angular';


import { CART_FRAGMENT } from '../../../common/graphql/fragments.graphql';

export const GET_ORDER_BY_CODE = gql`
    query GetOrderByCode($code: String!) {
        orderByCode(code: $code) {
            ...Cart
            updatedAt
            customer {
                id
                emailAddress
                firstName
                lastName
                user {
                    id
                    identifier
                    verified
                }
            }
        }
    }
    ${CART_FRAGMENT}
`;
