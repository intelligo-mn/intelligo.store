import Container from "@components/ui/container";
import { getLayout } from "@components/layout/layout";
import Subscription from "@components/common/subscription";
import { ShopFilters } from "@components/shop/filters";
import StickyBox from "react-sticky-box";
import ActiveLink from "@components/ui/active-link";
import { BreadcrumbItems } from "@components/common/breadcrumb";
import { ROUTES } from "@lib/routes";
import { useTranslation } from "next-i18next";
import Divider from "@components/ui/divider";
import ProductSearchBlock from "@components/product/product-search-block";

export { getStaticProps } from "@framework/ssr/products-filter";

export default function Shop() {
  const { t } = useTranslation("common");

  return (
    <>
      <Divider className="mb-2" />
      <Container>
        <div className={`flex pt-8 pb-16 lg:pb-20`}>
          <div className="flex-shrink-0 ltr:pr-24 rtl:pl-24 hidden lg:block w-96">
            <StickyBox offsetTop={50} offsetBottom={20}>
              <div className="pb-7">
                <BreadcrumbItems separator="/">
                  <ActiveLink
                    href={"/"}
                    activeClassName="font-semibold text-heading"
                  >
                    <a>{t("breadcrumb-home")}</a>
                  </ActiveLink>
                  <ActiveLink
                    href={ROUTES.SEARCH}
                    activeClassName="font-semibold text-heading"
                  >
                    <a className="capitalize">{t("breadcrumb-search")}</a>
                  </ActiveLink>
                </BreadcrumbItems>
              </div>
              <ShopFilters />
            </StickyBox>
          </div>

          <div className="w-full ltr:lg:-ml-9 rtl:lg:-mr-9">
            <ProductSearchBlock />
          </div>
        </div>
        <Subscription />
      </Container>
    </>
  );
}

Shop.getLayout = getLayout;
