import {gql} from 'apollo-angular';


export const SIGN_OUT = gql`
    mutation SignOut {
        logout {
            success
        }
    }
`;
