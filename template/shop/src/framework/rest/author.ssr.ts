import type { Author } from '@/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import invariant from 'tiny-invariant';
import client from './client';
import { PRODUCTS_PER_PAGE } from './client/variables';
import { QueryClient } from 'react-query';
import { API_ENDPOINTS } from '@/framework/client/api-endpoints';
import { dehydrate } from 'react-query/hydration';

// This function gets called at build time
type ParsedQueryParams = {
  author: string;
};
export const getStaticPaths: GetStaticPaths<ParsedQueryParams> = async ({
  locales,
}) => {
  invariant(locales, 'locales is not defined');
  const { data } = await client.authors.all({ limit: 100 });
  const paths = data?.flatMap((shop) =>
    locales.map((locale) => ({ params: { author: shop.slug }, locale }))
  );
  return {
    paths,
    fallback: 'blocking',
  };
};
type PageProps = {
  author: Author;
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
    const author = await client.authors.get(params!.author);
    return {
      props: {
        author,
        variables: {
          limit: PRODUCTS_PER_PAGE,
          author: author?.slug,
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
