import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import client from './client';
import { API_ENDPOINTS } from './client/api-endpoints';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    [API_ENDPOINTS.SETTINGS],
    client.settings.all
  );
  await queryClient.prefetchQuery([API_ENDPOINTS.TYPES], ({ queryKey }) =>
    client.types.all(queryKey[1] as any)
  );
  await queryClient.prefetchInfiniteQuery(
    [API_ENDPOINTS.MANUFACTURERS, { limit: 30 }],
    ({ queryKey }) => client.manufacturers.all(queryKey[1] as any)
  );
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common', 'banner'])),
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
