import type { Product } from '__generated__/__types__';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import invariant from 'tiny-invariant';
import { addApolloState, initializeApollo } from './client';
import {
  ProductDocument,
  ProductQuery,
  ProductsDocument,
  ProductsQuery,
} from './gql/products.graphql';
import { SettingsDocument } from './gql/settings.graphql';

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
    data: { products },
  } = await apolloClient.query<ProductsQuery>({
    query: ProductsDocument,
    variables: {
      first: 100,
    },
  });
  invariant(products, 'products is not defined');
  const paths = products.data.flatMap((product) =>
    locales.map((locale) => ({ params: { slug: product.slug }, locale }))
  );
  return {
    paths,
    fallback: 'blocking',
  };
};
type PageProps = {
  product: Product;
};
export const getStaticProps: GetStaticProps<
  PageProps,
  ParsedQueryParams
> = async ({ params, locale }) => {
  const apolloClient = initializeApollo();
  const { slug } = params!;
  await apolloClient.query({
    query: SettingsDocument,
  });
  const {
    data: { product },
  } = await apolloClient.query<ProductQuery>({
    query: ProductDocument,
    variables: { slug },
  });

  if (!product) {
    return {
      notFound: true,
    };
  }
  return addApolloState(apolloClient, {
    props: {
      product,
      ...(await serverSideTranslations(locale!, ['common'])),
    },
    revalidate: 60,
  });
};
