import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import client from '@/framework/client';
import { TYPES_PER_PAGE } from '@/framework/client/variables';
import { TypeQueryOptions } from '@/types';
import { API_ENDPOINTS } from './client/api-endpoints';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    [API_ENDPOINTS.SETTINGS],
    client.settings.all
  );

  await queryClient.fetchQuery(
    [API_ENDPOINTS.TYPES, { limit: TYPES_PER_PAGE }],
    ({ queryKey }) => client.types.all(queryKey[1] as TypeQueryOptions)
  );

  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
