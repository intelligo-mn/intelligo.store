import { GetStaticProps } from "next";
import { QueryClient } from "react-query";
import { API_ENDPOINTS } from "@framework/utils/endpoints";
import { fetchSettings } from "@framework/settings/settings.query";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { fetchCategories } from "@framework/category/categories.query";
import { fetchBrands } from "@framework/brand/brands.query";
import { fetchProducts } from "@framework/products/products.query";
import { siteSettings } from "@settings/site.settings";
import { dehydrate } from "react-query/hydration";
import { fetchPopularProducts } from "@framework/products/popular-products.query";

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

      // Fetch brands
      await queryClient.prefetchQuery(
        [API_ENDPOINTS.TYPE, { limit: 12 }],
        fetchBrands
      ),

      // Fetch products based on tags -> on-sale products
      await queryClient.prefetchQuery(
        [
          API_ENDPOINTS.PRODUCTS,
          {
            limit: 4,
            tags: siteSettings?.homePageBlocks?.onSaleSettings?.slug,
          },
        ],
        fetchProducts
      ),

      // Fetch products based on tags -> featured-products products
      await queryClient.prefetchQuery(
        [
          API_ENDPOINTS.PRODUCTS,
          {
            limit: 8,
            tags: siteSettings?.homePageBlocks?.featuredProducts?.slug,
          },
        ],
        fetchProducts
      ),

      //  fetch categories
      await queryClient.prefetchQuery(
        [API_ENDPOINTS.CATEGORIES, { limit: 10, parent: null }],
        fetchCategories
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

      // popular products
      await queryClient.prefetchQuery(
        [
          API_ENDPOINTS.POPULAR_PRODUCTS,
          {
            limit: 6,
          },
        ],
        fetchPopularProducts
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
