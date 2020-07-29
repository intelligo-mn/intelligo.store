import gql from 'graphql-tag';

import { CART_FRAGMENT } from '../../../common/graphql/fragments.graphql';

export const GET_NEXT_ORDER_STATES = gql`
    query GetNextOrderStates {
        nextOrderStates
    }
`;

export const TRANSITION_TO_ADDING_ITEMS = gql`
    mutation TransitionToAddingItems {
        transitionOrderToState(state: "AddingItems") {
            ...Cart
        }
    }
    ${CART_FRAGMENT}
`;
