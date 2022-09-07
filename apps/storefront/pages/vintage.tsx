import BannerCard from "apps/storefront/components/common/banner-card";
import Container from "apps/storefront/components/ui/container";
import BrandBlock from "apps/storefront/containers/brand-block";
import CategoryBlock from "apps/storefront/containers/category-block";
import CategoryGridBlock from "apps/storefront/containers/category-grid-block";
import { getLayout } from "apps/storefront/components/layout/layout";
import BannerWithProducts from "apps/storefront/containers/banner-with-products";
import NewArrivalsProductFeed from "apps/storefront/components/product/feeds/new-arrivals-product-feed";
import Divider from "apps/storefront/components/ui/divider";
import DownloadApps from "apps/storefront/components/common/download-apps";
import Support from "apps/storefront/components/common/support";
import Instagram from "apps/storefront/components/common/instagram";
import ProductsFlashSaleBlock from "apps/storefront/containers/product-flash-sale-block";
import ProductsFeatured from "apps/storefront/containers/products-featured";
import BannerSliderBlock from "apps/storefront/containers/banner-slider-block";
import ExclusiveBlock from "apps/storefront/containers/exclusive-block";
import HeroWithCategoryFlash from "apps/storefront/containers/hero-with-category-flash";
import Subscription from "apps/storefront/components/common/subscription";
import { ROUTES } from "apps/storefront/lib/routes";
import {
  promotionBanner,
  vintageDemoGridBanner as gridBanner,
  vintageDemoProductBanner as productBanner,
  vintageDemoBanner as banner,
} from "apps/storefront/data/static/banners";

export { getStaticProps } from "apps/storefront/framework/rest/ssr/homepage/vintage";

export default function Home() {
  return (
    <>
      <Container>
        <HeroWithCategoryFlash data={gridBanner} />
      </Container>
      <BannerSliderBlock data={promotionBanner} />
      <Container>
        <CategoryBlock sectionHeading="text-shop-by-category" />
        <BannerWithProducts
          sectionHeading="text-on-selling-products"
          categorySlug="/search"
          variant="reverse"
          data={productBanner}
        />
        <BannerCard
          data={banner[0]}
          href={`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
          className="mb-11 md:mb-12 lg:mb-14 2xl:mb-16"
        />
        <ProductsFeatured
          sectionHeading="text-featured-products"
          variant="center"
        />
        <BannerCard
          data={banner[1]}
          href={`${ROUTES.COLLECTIONS}/${banner[1].slug}`}
          className="mb-11 md:mb-12 lg:mb-14 2xl:mb-16"
        />
        <ProductsFlashSaleBlock date={"2023-03-01T01:02:03"} />
        <BrandBlock sectionHeading="text-top-brands" />
        <ExclusiveBlock />
        <NewArrivalsProductFeed />
        <BannerCard
          data={banner[2]}
          href={`${ROUTES.COLLECTIONS}/${banner[2].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
        />
        <CategoryGridBlock sectionHeading="text-featured-categories" />
        <DownloadApps />
        <Support />
        <Instagram />
        <Subscription className="bg-opacity-0 px-5 sm:px-16 xl:px-0 py-12 md:py-14 xl:py-16" />
      </Container>
      <Divider className="mb-0" />
    </>
  );
}

Home.getLayout = getLayout;
