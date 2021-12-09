import {gql} from 'apollo-angular';


import { ERROR_RESULT_FRAGMENT } from '../../../common/graphql/fragments.graphql';

export const VERIFY = gql`
    mutation Verify($password: String!, $token: String!) {
        verifyCustomerAccount(password: $password, token: $token) {
            ...on CurrentUser {
                id
                identifier
            }
            ...ErrorResult
        }
    }
    ${ERROR_RESULT_FRAGMENT}
`;
