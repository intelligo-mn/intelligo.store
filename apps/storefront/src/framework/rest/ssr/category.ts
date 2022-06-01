import { fetchSettings } from "@framework/settings/settings.query";
import { fetchInfiniteProducts } from "@framework/products/products.query";
import { Category } from "@framework/types";
import { API_ENDPOINTS } from "@framework/utils/endpoints";
import { GetStaticPathsContext, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import {
  fetchCategories,
  fetchCategory,
} from "@framework/category/categories.query";

// This function gets called at build time
export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const categories = await fetchCategories({
    queryKey: [API_ENDPOINTS.CATEGORIES, { limit: 100, parent: null }],
  });
  const paths = categories?.data?.flatMap((category: Category) =>
    locales?.map((locale) => ({ params: { slug: category.slug }, locale }))
  );
  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const slug = params?.slug as string;

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  try {
    await Promise.all([
      await queryClient.prefetchQuery(API_ENDPOINTS.SETTINGS, fetchSettings),

      await queryClient.prefetchQuery([API_ENDPOINTS.CATEGORIES, slug], () =>
        fetchCategory(slug)
      ),

      await queryClient.prefetchInfiniteQuery(
        [API_ENDPOINTS.PRODUCTS, { category: slug }],
        fetchInfiniteProducts
      ),
    ]);

    return {
      props: {
        ...(await serverSideTranslations(locale!, [
          "common",
          "menu",
          "forms",
          "footer",
        ])),
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
      revalidate: Number(process.env.REVALIDATE_DURATION) ?? 120,
    };
  } catch (error) {
    // If we get here means something went wrong in promise fetching
    return {
      notFound: true,
    };
  }
};
