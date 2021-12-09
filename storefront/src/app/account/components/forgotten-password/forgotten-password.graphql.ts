import {gql} from 'apollo-angular';


import { ERROR_RESULT_FRAGMENT } from '../../../common/graphql/fragments.graphql';

export const REQUEST_PASSWORD_RESET = gql`
    mutation RequestPasswordReset($emailAddress: String!) {
        requestPasswordReset(emailAddress: $emailAddress) {
            ... on Success {
                success
            }
            ...ErrorResult
        }
    }
    ${ERROR_RESULT_FRAGMENT}
`;
