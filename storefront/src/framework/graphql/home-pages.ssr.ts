import type { HomePageProps } from '@/types';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import invariant from 'tiny-invariant';
import { addApolloState, initializeApollo } from './client';
import { CATEGORIES_PER_PAGE, PRODUCTS_PER_PAGE } from './client/variables';
import { CategoriesDocument } from './gql/categories.graphql';
import {
  GroupDocument,
  GroupsDocument,
  GroupsQuery,
} from './gql/groups.graphql';
import {
  PopularProductsDocument,
  ProductsDocument,
} from './gql/products.graphql';
import { SettingsDocument } from './gql/settings.graphql';
import { getCategories } from './utils/categories';
import { getProducts } from './utils/products';
type ParsedQueryParams = {
  pages: string[];
};
// This function gets called at build time
const apolloClient = initializeApollo();
export const getStaticPaths: GetStaticPaths<ParsedQueryParams> = async ({
  locales,
}) => {
  invariant(locales, 'locales is not defined');
  // array of type
  const {
    data: { types },
  } = await apolloClient.query<GroupsQuery>({
    query: GroupsDocument,
  });
  // Get the paths we want to pre-render based on types
  const paths = types?.flatMap((type) =>
    locales.map((locale) => ({ params: { pages: [type.slug] }, locale }))
  );
  // We'll pre-render only these paths at build time also with the slash route.
  return {
    paths: paths.concat(
      locales.map((locale) => ({ params: { pages: [] }, locale }))
    ),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<
  HomePageProps,
  ParsedQueryParams
> = async ({ locale, params }) => {
  await apolloClient.query({
    query: SettingsDocument,
  });
  const {
    data: { types },
  } = await apolloClient.query<GroupsQuery>({
    query: GroupsDocument,
  });
  const { pages } = params!;
  let pageType: string | undefined;
  if (!pages) {
    pageType =
      types.find((type) => type?.settings?.isHome)?.slug ?? types[0].slug;
  } else {
    pageType = pages[0];
  }
  await apolloClient.query({
    query: GroupDocument,
    variables: {
      slug: pageType,
    },
  });
  const popularProductVariables = {
    type_slug: pageType,
    limit: 10,
  };
  await apolloClient.query({
    query: PopularProductsDocument,
    variables: popularProductVariables,
  });
  const productVariables = {
    type: pageType,
    limit: PRODUCTS_PER_PAGE,
  };
  await apolloClient.query({
    query: ProductsDocument,
    variables: getProducts(productVariables),
  });
  const categoryVariables = {
    type: pageType,
    limit: CATEGORIES_PER_PAGE,
    ...(types?.find((t) => t.slug === pageType)?.settings?.layoutType ===
    'minimal'
      ? {}
      : { parent: null }),
  };
  await apolloClient.query({
    query: CategoriesDocument,
    variables: getCategories(categoryVariables),
  });

  return addApolloState(apolloClient, {
    props: {
      variables: {
        products: productVariables,
        popularProducts: popularProductVariables,
        categories: categoryVariables,
        types: {
          type: pageType,
        },
      },
      layout:
        types.find((t) => t.slug === pageType)?.settings?.layoutType ??
        'default',
      ...(await serverSideTranslations(locale!, ['common', 'banner'])),
    },
    revalidate: 120,
  });
};
