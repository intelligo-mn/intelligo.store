import { useMemo } from 'react';
import {
  from,
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';
import Cookies from 'js-cookie';
import deepMerge from 'deepmerge';
import isEqual from 'lodash/isEqual';
import { AUTH_TOKEN_KEY } from '@/lib/constants';
import Router from 'next/router';
import type { AppProps } from 'next/app';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createApolloClient() {
  const authLink = setContext((_, { headers }) => {
    const token = Cookies.get(AUTH_TOKEN_KEY);
    //TODO: log headers to see if cookies are being sent
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const httpLink = createUploadLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT, // Server URL (must be absolute)
    credentials: 'same-origin',
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) => {
        if (message === 'PICKBAZAR_ERROR.NOT_AUTHORIZED') {
          // every 401/unauthorized error will be caught here and update the global local state
          Cookies.remove(AUTH_TOKEN_KEY);
          Router.reload();
          // authorize(false);
        }
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
      });

    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    // @ts-ignore
    link: from([authLink, errorLink, httpLink]),
    cache: new InMemoryCache({
      typePolicies: {
        User: {
          fields: {
            address: {
              merge: false,
            },
          },
        },
        Type: {
          fields: {
            settings: {
              merge: true,
            },
          },
        },
        Query: {
          fields: {
            products: {
              keyArgs: [
                'shop_id',
                'text',
                'min_price',
                'hasType',
                'hasCategories',
                'hasTags',
                'hasManufacturer',
                'hasAuthor',
                'orderBy',
              ],
              merge(existing, incoming) {
                return existing
                  ? {
                      ...incoming,
                      data: [...existing.data, ...incoming.data],
                    }
                  : incoming;
              },
            },
            //products:concatPagination()
            orders: {
              keyArgs: false,
              merge(existing, incoming) {
                return existing
                  ? {
                      ...incoming,
                      data: [...existing.data, ...incoming.data],
                    }
                  : incoming;
              },
            },
            categories: {
              merge: true,
            },
          },
        },
      },
    }),
  });
}

export function initializeApollo(initialState?: NormalizedCacheObject | null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = deepMerge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });
    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: AppProps['pageProps']
) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }
  return pageProps;
}

export function useApollo(pageProps: AppProps['pageProps']) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  return useMemo(() => initializeApollo(state), [state]);
}
