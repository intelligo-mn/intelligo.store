import gql from 'graphql-tag';

import { ADDRESS_FRAGMENT } from '../../../common/graphql/fragments.graphql';

export const UPDATE_ADDRESS = gql`
    mutation UpdateAddress($input: UpdateAddressInput!) {
        updateCustomerAddress(input: $input) {
            ...Address
        }
    }
    ${ADDRESS_FRAGMENT}
`;
