import type { ProductQueryOptions, Shop } from '@/types';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import invariant from 'tiny-invariant';
import client from './client';
import { API_ENDPOINTS } from './client/api-endpoints';
import { PRODUCTS_PER_PAGE } from './client/variables';

// This function gets called at build time
type ParsedQueryParams = {
  slug: string;
};
export const getStaticPaths: GetStaticPaths<ParsedQueryParams> = async ({
  locales,
}) => {
  invariant(locales, 'locales is not defined');
  const { data } = await client.shops.all({ limit: 100, is_active: 1 });
  const paths = data.flatMap((shop) =>
    locales.map((locale) => ({ params: { slug: shop.slug }, locale }))
  );
  return {
    paths,
    fallback: 'blocking',
  };
};
type PageProps = {
  shop: Shop;
  variables: {
    shop_id: string;
    limit: number;
  };
};
export const getStaticProps: GetStaticProps<
  PageProps,
  ParsedQueryParams
> = async ({ params, locale }) => {
  const { slug } = params!; //* we know it's required because of getStaticPaths
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    [API_ENDPOINTS.SETTINGS],
    client.settings.all
  );
  try {
    const shop = await client.shops.get(slug);
    await queryClient.prefetchInfiniteQuery(
      [API_ENDPOINTS.PRODUCTS, { limit: PRODUCTS_PER_PAGE, shop_id: shop.id }],
      ({ queryKey }) => client.products.all(queryKey[1] as ProductQueryOptions)
    );
    return {
      props: {
        shop,
        variables: {
          shop_id: shop?.id,
          limit: PRODUCTS_PER_PAGE,
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
