import type { GetStaticPaths, GetStaticProps } from 'next';
import type { Shop } from '__generated__/__types__';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import invariant from 'tiny-invariant';
import { addApolloState, initializeApollo } from './client';
import { PRODUCTS_PER_PAGE } from './client/variables';
import { ProductsDocument } from './gql/products.graphql';
import { SettingsDocument } from './gql/settings.graphql';
import {
  ShopDocument,
  ShopQuery,
  ShopsDocument,
  ShopsQuery,
} from './gql/shops.graphql';
import { getProducts } from './utils/products';

// This function gets called at build time
type ParsedQueryParams = {
  slug: string;
};
export const getStaticPaths: GetStaticPaths<ParsedQueryParams> = async ({
  locales,
}) => {
  invariant(locales, 'locales is not defined');
  const apolloClient = initializeApollo();
  const {
    data: { shops },
  } = await apolloClient.query<ShopsQuery>({
    query: ShopsDocument,
    variables: {
      first: 100,
      is_active: true,
    },
  });
  invariant(shops, 'shops is not defined');
  const paths = shops.data.flatMap((shop) =>
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
    limit: number;
    shop_id: string;
  };
};
export const getStaticProps: GetStaticProps<
  PageProps,
  ParsedQueryParams
> = async ({ params, locale }) => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: SettingsDocument,
  });
  const { data } = await apolloClient.query<ShopQuery>({
    query: ShopDocument,
    variables: {
      slug: params!.slug,
    },
  });
  await apolloClient.query({
    query: ProductsDocument,
    variables: getProducts({
      shop_id: Number(data?.shop?.id),
      limit: PRODUCTS_PER_PAGE,
    }),
  });
  if (!data?.shop) {
    return {
      notFound: true,
    };
  }
  return addApolloState(apolloClient, {
    props: {
      shop: data.shop,
      variables: {
        limit: PRODUCTS_PER_PAGE,
        shop_id: Number(data?.shop?.id),
      },
      ...(await serverSideTranslations(locale!, ['common'])),
    },
    revalidate: 120,
  });
};
