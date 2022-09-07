import Container from "apps/storefront/components/ui/container";
import { getLayout } from "apps/storefront/components/layout/layout";
import Subscription from "apps/storefront/components/common/subscription";
import { ShopFilters } from "apps/storefront/components/shop/filters";
import StickyBox from "react-sticky-box";
import ActiveLink from "apps/storefront/components/ui/active-link";
import { BreadcrumbItems } from "apps/storefront/components/common/breadcrumb";
import { ROUTES } from "apps/storefront/lib/routes";
import { useTranslation } from "next-i18next";
import Divider from "apps/storefront/components/ui/divider";
import ProductSearchBlock from "apps/storefront/components/product/product-search-block";

export { getStaticProps } from "apps/storefront/framework/rest/ssr/products-filter";

export default function Products() {
  const { t } = useTranslation("common");

  return (
    <>
      <Divider className="mb-2" />
      <Container>
        <div className={`flex pt-8 pb-16 lg:pb-20`}>
          <div className="flex-shrink-0 ltr:pr-24 rtl:lr-24 hidden lg:block w-96">
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

Products.getLayout = getLayout;
