import { fetchSettings } from "@framework/settings/settings.query";
import {
  fetchProduct,
  fetchProducts,
} from "@framework/products/products.query";
import { Product } from "@framework/types";
import { API_ENDPOINTS } from "@framework/utils/endpoints";
import { GetStaticPathsContext, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

// This function gets called at build time
export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const products = await fetchProducts({
    queryKey: [API_ENDPOINTS.PRODUCTS, { limit: 100 }],
  });
  const paths = products?.data?.flatMap((product: Product) =>
    locales?.map((locale) => ({ params: { slug: product.slug }, locale }))
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

  await queryClient.prefetchQuery(API_ENDPOINTS.SETTINGS, fetchSettings);

  try {
    const product = await fetchProduct(slug);
    return {
      props: {
        product,
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
    return {
      notFound: true,
    };
  }
};
