import type { Manufacturer } from '@/types';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import invariant from 'tiny-invariant';
import { addApolloState, initializeApollo } from './client';
import { PRODUCTS_PER_PAGE } from './client/variables';
import {
  ManufacturerDocument,
  ManufacturerQuery,
  ManufacturersDocument,
  ManufacturersQuery,
} from './gql/manufacturers.graphql';
import { ProductsDocument } from './gql/products.graphql';
import { SettingsDocument } from './gql/settings.graphql';
import { getProducts } from './utils/products';

// This function gets called at build time
type ParsedQueryParams = {
  manufacturer: string;
};
const apolloClient = initializeApollo();
export const getStaticPaths: GetStaticPaths<ParsedQueryParams> = async ({
  locales,
}) => {
  invariant(locales, 'locales is not defined');
  const {
    data: { manufacturers },
  } = await apolloClient.query<ManufacturersQuery>({
    query: ManufacturersDocument,
    variables: {
      first: 100,
    },
  });
  invariant(manufacturers, 'manufacturers is not defined');
  const paths = manufacturers.data.flatMap((manufacturer) =>
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
  const { manufacturer } = params!;
  await apolloClient.query({
    query: SettingsDocument,
  });
  const { data } = await apolloClient.query<ManufacturerQuery>({
    query: ManufacturerDocument,
    variables: { slug: manufacturer },
  });

  await apolloClient.query({
    query: ProductsDocument,
    variables: getProducts({
      limit: PRODUCTS_PER_PAGE,
      manufacturer: manufacturer.toString(),
    }),
  });
  if (!data?.manufacturer) {
    return {
      notFound: true,
    };
  }
  return addApolloState(apolloClient, {
    props: {
      manufacturer: data.manufacturer,
      variables: {
        limit: PRODUCTS_PER_PAGE,
        manufacturer: manufacturer.toString(),
      },
      ...(await serverSideTranslations(locale!, ['common'])),
    },
    revalidate: 120,
  });
};
