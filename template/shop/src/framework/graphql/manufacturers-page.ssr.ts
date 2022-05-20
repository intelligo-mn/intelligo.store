import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { addApolloState, initializeApollo } from './client';
import { MANUFACTURERS_PER_PAGE } from './client/variables';
import { GroupsDocument } from './gql/groups.graphql';
import { ManufacturersDocument } from './gql/manufacturers.graphql';
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
    query: ManufacturersDocument,
    variables: {
      first: MANUFACTURERS_PER_PAGE,
    },
  });
  return addApolloState(apolloClient, {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  });
};
