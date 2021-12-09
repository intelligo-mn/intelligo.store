import {gql} from 'apollo-angular';


import { ERROR_RESULT_FRAGMENT } from '../../../common/graphql/fragments.graphql';

export const CHANGE_PASSWORD = gql`
    mutation ChangePassword($old: String! $new: String!) {
        updateCustomerPassword(currentPassword: $old newPassword: $new) {
            ... on Success {
                success
            }
            ...ErrorResult
        }
    }
    ${ERROR_RESULT_FRAGMENT}
`;

export const CHANGE_EMAIL_ADDRESS = gql`
    mutation ChangeEmailAddress($password: String! $emailAddress: String!) {
        requestUpdateCustomerEmailAddress(password: $password newEmailAddress: $emailAddress) {
            ... on Success {
                success
            }
            ...ErrorResult
        }
    }
    ${ERROR_RESULT_FRAGMENT}
`;
