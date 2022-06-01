import { fetchSettings } from "@framework/settings/settings.query";
import { fetchInfiniteCategories } from "@framework/category/categories.query";
import { fetchInfiniteBrands } from "@framework/brand/brands.query";
import { fetchInfiniteProducts } from "@framework/products/products.query";
import { API_ENDPOINTS } from "@framework/utils/endpoints";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { fetchAttributes } from "@framework/attributes/attributes.query";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
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

      await queryClient.prefetchInfiniteQuery(
        [API_ENDPOINTS.PRODUCTS, {}],
        fetchInfiniteProducts
      ),

      await queryClient.prefetchInfiniteQuery(
        [
          API_ENDPOINTS.CATEGORIES,
          {
            limit: 5,
            parent: null,
          },
        ],
        fetchInfiniteCategories
      ),

      await queryClient.prefetchInfiniteQuery(
        [
          API_ENDPOINTS.TYPE,
          {
            limit: 5,
          },
        ],
        fetchInfiniteBrands
      ),

      await queryClient.prefetchQuery(
        API_ENDPOINTS.ATTRIBUTES,
        fetchAttributes
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
