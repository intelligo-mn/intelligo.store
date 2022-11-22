import { fetchSettings } from "@framework/settings/settings.query";
import { fetchShops } from "@framework/shops/shops.query";
import { API_ENDPOINTS } from "@framework/utils/endpoints";
import { GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { QueryClient } from "react-query";
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

      await queryClient.prefetchInfiniteQuery(
        [API_ENDPOINTS.SHOPS, { is_active: 1 }],
        fetchShops
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
    };
  } catch (error) {
    // If we get here means something went wrong in promise fetching
    return {
      notFound: true,
    };
  }
};
