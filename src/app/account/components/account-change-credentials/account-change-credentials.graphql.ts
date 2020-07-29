import gql from 'graphql-tag';

export const CHANGE_PASSWORD = gql`
    mutation ChangePassword($old: String! $new: String!) {
        updateCustomerPassword(currentPassword: $old newPassword: $new)
    }
`;

export const CHANGE_EMAIL_ADDRESS = gql`
    mutation ChangeEmailAddress($password: String! $emailAddress: String!) {
        requestUpdateCustomerEmailAddress(password: $password newEmailAddress: $emailAddress)
    }
`;
