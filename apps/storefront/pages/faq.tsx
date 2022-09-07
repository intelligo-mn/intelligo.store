import Container from "apps/storefront/components/ui/container";
import { getLayout } from "apps/storefront/components/layout/layout";
import Subscription from "apps/storefront/components/common/subscription";
import Accordion from "apps/storefront/components/common/accordion";
import PageHeader from "apps/storefront/components/ui/page-header";
import { faq } from "apps/storefront/settings/faq.settings";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {QueryClient} from "react-query";
import {API_ENDPOINTS} from "apps/storefront/framework/rest/utils/endpoints";
import {fetchSettings} from "apps/storefront/framework/rest/settings/settings.query";

export default function FAQ() {
  return (
    <>
      <PageHeader pageHeader="text-page-faq" />
      <Container>
        <div className="py-16 lg:py-20 px-0 max-w-5xl mx-auto space-y-4">
          <Accordion items={faq} translatorNS="faq" />
        </div>
        <Subscription />
      </Container>
    </>
  );
}

FAQ.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(API_ENDPOINTS.SETTINGS, fetchSettings);

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "menu",
        "forms",
        "footer",
        "faq",
      ])),
    },
  };
};