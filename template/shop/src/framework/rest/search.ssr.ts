import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import invariant from 'tiny-invariant';
import { QueryClient } from 'react-query';
import { API_ENDPOINTS } from '@/framework/client/api-endpoints';
import { dehydrate } from 'react-query/hydration';
import client from '@/framework/client';
import { CategoryQueryOptions, TypeQueryOptions } from '@/types';
import { TYPES_PER_PAGE } from '@/framework/client/variables';

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}) => {
  invariant(params, 'params is required');
  const { searchType } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    [API_ENDPOINTS.SETTINGS],
    client.settings.all
  );

  await queryClient.prefetchQuery(
    [API_ENDPOINTS.TYPES, { limit: TYPES_PER_PAGE }],
    ({ queryKey }) => client.types.all(queryKey[1] as TypeQueryOptions)
  );

  const categoryVariable = {
    type: searchType,
    limit: 1000,
    parent: 'null',
  };

  await queryClient.prefetchQuery(
    [API_ENDPOINTS.CATEGORIES, categoryVariable],
    ({ queryKey }) => client.categories.all(queryKey[1] as CategoryQueryOptions)
  );

  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
