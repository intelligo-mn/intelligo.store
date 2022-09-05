import { GetStaticProps } from "next";
import { QueryClient } from "react-query";
import { API_ENDPOINTS } from "@framework/utils/endpoints";
import { fetchSettings } from "@framework/settings/settings.query";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { fetchCategories } from "@framework/category/categories.query";
import { fetchBrands } from "@framework/brand/brands.query";
import { fetchProducts } from "@framework/products/products.query";
import { siteSettings } from "@settings/site.settings";
import { fetchFeaturedCategories } from "@framework/category/featured-categories.query";
import { dehydrate } from "react-query/hydration";

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

      await queryClient.prefetchQuery(
        [API_ENDPOINTS.CATEGORIES, { limit: 10, parent: null }],
        fetchCategories
      ),

      // Featured Categories
      await queryClient.prefetchQuery(
        [API_ENDPOINTS.FEATURED_CATEGORIES, { limit: 3 }],
        fetchFeaturedCategories
      ),

      // Fetch products based on tags -> flash-sale products
      await queryClient.prefetchQuery(
        [
          API_ENDPOINTS.PRODUCTS,
          {
            limit: 10,
            tags: siteSettings?.homePageBlocks?.flashSale?.slug,
          },
        ],
        fetchProducts
      ),

      // Fetch products based on tags -> featured-products products
      await queryClient.prefetchQuery(
        [
          API_ENDPOINTS.PRODUCTS,
          {
            limit: 5,
            tags: siteSettings?.homePageBlocks?.featuredProducts?.slug,
          },
        ],
        fetchProducts
      ),

      // Fetch products based on tags -> on-sale products
      await queryClient.prefetchQuery(
        [
          API_ENDPOINTS.PRODUCTS,
          {
            limit: 9,
            tags: siteSettings?.homePageBlocks?.onSaleSettings?.slug,
          },
        ],
        fetchProducts
      ),

      // Fetch products based on tags -> new arrival products
      await queryClient.prefetchQuery(
        [
          API_ENDPOINTS.PRODUCTS,
          {
            limit: 10,
            orderBy: "created_at",
            sortedBy: "DESC",
          },
        ],
        fetchProducts
      ),

      await queryClient.prefetchQuery(
        [API_ENDPOINTS.TYPE, { limit: 16 }],
        fetchBrands
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
