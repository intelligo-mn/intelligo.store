import type { GetStaticProps } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { addApolloState, initializeApollo } from './client';
import { AUTHORS_PER_PAGE } from './client/variables';
import { AuthorsDocument } from './gql/authors.graphql';
import { GroupsDocument } from './gql/groups.graphql';
import { SettingsDocument } from './gql/settings.graphql';
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: SettingsDocument,
  });
  await apolloClient.query({
    query: GroupsDocument,
  });
  await apolloClient.query({
    query: AuthorsDocument,
    variables: {
      first: AUTHORS_PER_PAGE,
    },
  });
  return addApolloState(apolloClient, {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  });
};
