import BannerCard from "apps/storefront/components/common/banner-card";
import Container from "apps/storefront/components/ui/container";
import CollectionBlock from "apps/storefront/containers/collection-block";
import BannerCarouselBlock from "apps/storefront/containers/banner-carousel-block";
import Divider from "apps/storefront/components/ui/divider";
import DownloadApps from "apps/storefront/components/common/download-apps";
import Support from "apps/storefront/components/common/support";
import Subscription from "apps/storefront/components/common/subscription";
import HeroBlock from "apps/storefront/containers/hero-block";
import BrandBlock from "apps/storefront/containers/brand-block";
import CategoryBlock from "apps/storefront/containers/category-block";
import FeatureBlock from "apps/storefront/containers/feature-block";
import { getLayout } from "apps/storefront/components/layout/layout";
import FlashSaleBlock from "apps/storefront/components/product/feeds/flash-sale-product-feed";
import BestSellerProductFeed from "apps/storefront/components/product/feeds/best-seller-product-feed";
import NewArrivalsProductFeed from "apps/storefront/components/product/feeds/new-arrivals-product-feed";
import { useEffect } from "react";
import { ROUTES } from "apps/storefront/lib/routes";
import { useUI } from "apps/storefront/contexts/ui.context";
import {
  standardDemoBanner as banner,
  standardDemoHeroBanner as heroBanner,
  standardDemoPromotionBanner as promotionalBanner,
} from "apps/storefront/data/static/banners";
import { collectionData } from "apps/storefront/data/static/collection";

export { getStaticProps } from "apps/storefront/framework/rest/ssr/homepage/standard";

export default function Home() {
  const { openModal, setModalView } = useUI();

  useEffect(() => {
    setModalView("NEWSLETTER_VIEW");
    setTimeout(() => {
      openModal();
    }, 2000);
  }, []);

  return (
    <>
      <HeroBlock data={heroBanner} />
      <Container>
        <FlashSaleBlock />
        <BannerCarouselBlock banners={promotionalBanner} />
        <CategoryBlock sectionHeading="text-shop-by-category" />
        <Divider />
        <BestSellerProductFeed />
        <BannerCard
          data={banner}
          href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
          classNameInner="h-28 sm:h-auto"
        />
        <NewArrivalsProductFeed />
        <Divider />
        <BrandBlock sectionHeading="text-top-brands" />
        <CollectionBlock data={collectionData} />
        <FeatureBlock />
        <DownloadApps className="bg-linen" />
        <Support />
        <Subscription className="bg-linen px-5 sm:px-8 md:px-16 2xl:px-24" />
      </Container>
    </>
  );
}

Home.getLayout = getLayout;
