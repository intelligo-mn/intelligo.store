import { fetchSettings } from "@framework/settings/settings.query";
import { fetchInfiniteProducts } from "@framework/products/products.query";
import { fetchShop, fetchShops } from "@framework/shops/shops.query";
import { API_ENDPOINTS } from "@framework/utils/endpoints";
import { GetStaticPathsContext, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

// This function gets called at build time
export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const { data } = await fetchShops({
    queryKey: [API_ENDPOINTS.SHOPS, { is_active: 1 }],
  });

  const paths = data?.flatMap((shop: any) =>
    locales?.map((locale) => ({ params: { slug: shop.slug }, locale }))
  );

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: "blocking" };
}

// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  await queryClient.prefetchQuery(API_ENDPOINTS.SETTINGS, fetchSettings);

  try {
    const shop = await fetchShop(params!.slug as string);
    await queryClient.prefetchInfiniteQuery(
      [API_ENDPOINTS.PRODUCTS, { shop_id: shop?.id }],
      fetchInfiniteProducts
    );
    return {
      props: {
        data: { shop },
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
