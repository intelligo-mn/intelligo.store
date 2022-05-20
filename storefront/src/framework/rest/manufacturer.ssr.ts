import type { Manufacturer } from '@/types';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import invariant from 'tiny-invariant';
import client from './client';
import { PRODUCTS_PER_PAGE, TYPES_PER_PAGE } from './client/variables';
import { QueryClient } from 'react-query';
import { API_ENDPOINTS } from '@/framework/client/api-endpoints';
import { dehydrate } from 'react-query/hydration';

// This function gets called at build time
type ParsedQueryParams = {
  manufacturer: string;
};
export const getStaticPaths: GetStaticPaths<ParsedQueryParams> = async ({
  locales,
}) => {
  invariant(locales, 'locales is not defined');
  const { data } = await client.manufacturers.all({ limit: 100 });
  const paths = data?.flatMap((manufacturer) =>
    locales.map((locale) => ({
      params: { manufacturer: manufacturer.slug },
      locale,
    }))
  );
  return {
    paths,
    fallback: 'blocking',
  };
};
type PageProps = {
  manufacturer: Manufacturer;
};
export const getStaticProps: GetStaticProps<
  PageProps,
  ParsedQueryParams
> = async ({ params, locale }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    [API_ENDPOINTS.SETTINGS],
    client.settings.all
  );

  try {
    const manufacturer = await client.manufacturers.get(params!.manufacturer);
    return {
      props: {
        manufacturer,
        variables: {
          limit: PRODUCTS_PER_PAGE,
          manufacturer: manufacturer?.slug,
        },
        ...(await serverSideTranslations(locale!, ['common'])),
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
