import Router from 'next/router';
import Cookies from 'js-cookie';

export function getErrorMessage(error: any) {
  let processedError = {
    message: '',
    validation: [],
  };

  if (error.graphQLErrors) {
    for (const graphQLError of error.graphQLErrors) {
      if (
        graphQLError.extensions &&
        graphQLError.extensions.category === 'validation'
      ) {
        processedError['message'] = graphQLError.message;
        processedError['validation'] = graphQLError.extensions.validation;
        return processedError;
      } else if (
        graphQLError.extensions &&
        graphQLError.extensions.category === 'authorization'
      ) {
        Cookies.remove('auth_token');
        Cookies.remove('auth_permissions');
        Router.push('/');
      }
    }
  }
  processedError['message'] = error.message;
  return processedError;
}
