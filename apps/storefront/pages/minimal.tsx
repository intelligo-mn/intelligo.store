import BannerCard from "apps/storefront/components/common/banner-card";
import Container from "apps/storefront/components/ui/container";
import BrandBlock from "apps/storefront/containers/brand-block";
import CategoryGridBlock from "apps/storefront/containers/category-grid-block";
import FeatureBlock from "apps/storefront/containers/feature-block";
import { getLayout } from "apps/storefront/components/layout/layout";
import CollectionBlock from "apps/storefront/containers/collection-block";
import Divider from "apps/storefront/components/ui/divider";
import ProductsWithFlashSale from "apps/storefront/containers/products-with-flash-sale";
import DownloadApps from "apps/storefront/components/common/download-apps";
import Support from "apps/storefront/components/common/support";
import HeroWithCategory from "apps/storefront/containers/hero-with-category";
import BannerGridBlock from "apps/storefront/containers/banner-grid-block";
import BestSellerProductFeed from "apps/storefront/components/product/feeds/best-seller-product-feed";
import NewArrivalsProductFeed from "apps/storefront/components/product/feeds/new-arrivals-product-feed";
import Subscription from "apps/storefront/components/common/subscription";
import { ROUTES } from "apps/storefront/lib/routes";
import {
  gridBanner,
  minimalDemoHeroBanner as heroBanner,
  minimalDemoBanner as banner,
} from "apps/storefront/data/static/banners";
import { collectionData } from "apps/storefront/data/static/collection";

export { getStaticProps } from "apps/storefront/framework/rest/ssr/homepage/minimal";

const flashSaleCarouselBreakpoint = {
  "1281": {
    slidesPerView: 1,
    spaceBetween: 28,
  },
  "768": {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  "0": {
    slidesPerView: 1,
    spaceBetween: 12,
  },
};

export default function Home() {
  return (
    <Container>
      <HeroWithCategory data={heroBanner} />
      <ProductsWithFlashSale carouselBreakpoint={flashSaleCarouselBreakpoint} />
      <BannerGridBlock data={gridBanner} />
      <CategoryGridBlock sectionHeading="text-featured-categories" />
      <Divider />
      <BestSellerProductFeed />
      <BannerCard
        data={banner}
        href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
        className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
      />
      <NewArrivalsProductFeed />
      <Divider />
      <BrandBlock sectionHeading="text-top-brands" />
      <FeatureBlock />
      <CollectionBlock data={collectionData} />
      <DownloadApps />
      <Support />
      <Subscription />
    </Container>
  );
}

Home.getLayout = getLayout;
