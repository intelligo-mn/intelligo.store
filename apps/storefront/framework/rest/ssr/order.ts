import { fetchSettings } from "@framework/settings/settings.query";
import { API_ENDPOINTS } from "@framework/utils/endpoints";
import { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  await queryClient.prefetchQuery(API_ENDPOINTS.SETTINGS, fetchSettings);

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
};
