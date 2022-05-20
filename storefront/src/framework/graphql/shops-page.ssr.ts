import type { ShopQueryOptions, TypeQueryOptions } from '@/types';
import type { GetStaticProps } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { addApolloState, initializeApollo } from './client';
import { SHOPS_PER_PAGE, TYPES_PER_PAGE } from './client/variables';
import { GroupsDocument } from './gql/groups.graphql';
import { SettingsDocument } from './gql/settings.graphql';
import { ShopsDocument } from './gql/shops.graphql';
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: SettingsDocument,
  });
  await apolloClient.query({
    query: GroupsDocument,
  });
  await apolloClient.query({
    query: ShopsDocument,
    variables: {
      is_active: true,
    },
  });
  return addApolloState(apolloClient, {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  });
};
