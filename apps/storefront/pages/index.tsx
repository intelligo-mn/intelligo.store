import BannerCard from "@components/common/banner-card";
import Container from "@components/ui/container";
import CollectionBlock from "@containers/collection-block";
import BannerCarouselBlock from "@containers/banner-carousel-block";
import Divider from "@components/ui/divider";
import DownloadApps from "@components/common/download-apps";
import Support from "@components/common/support";
import Subscription from "@components/common/subscription";
import HeroBlock from "@containers/hero-block";
import BrandBlock from "@containers/brand-block";
import CategoryBlock from "@containers/category-block";
import FeatureBlock from "@containers/feature-block";
import { getLayout } from "@components/layout/layout";
import FlashSaleBlock from "@components/product/feeds/flash-sale-product-feed";
import BestSellerProductFeed from "@components/product/feeds/best-seller-product-feed";
import NewArrivalsProductFeed from "@components/product/feeds/new-arrivals-product-feed";
import TestimonialCarousel from "@containers/testimonial-carousel";
import { useEffect } from "react";
import { ROUTES } from "@lib/routes";
import { useUI } from "@contexts/ui.context";
import {
  standardDemoBanner as banner,
  standardDemoHeroBanner as heroBanner,
  standardDemoPromotionBanner as promotionalBanner,
} from "@data/static/banners";
import { collectionData } from "@data/static/collection";

export { getStaticProps } from "@framework/ssr/homepage/standard";

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
        {/* <FlashSaleBlock /> */}
        <BannerCarouselBlock banners={promotionalBanner} />
        <FeatureBlock />
        <BannerCard
          data={banner}
          href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
          classNameInner="h-28 sm:h-auto"
        />
      </Container>

      <CategoryBlock sectionHeading="text-shop-by-category" />
      <Container>
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
        <TestimonialCarousel sectionHeading="text-testimonial" />
      </Container>
      <BrandBlock sectionHeading="text-top-brands" />
      <Subscription className="bg-opacity-0 px-5 sm:px-16 xl:px-0 py-12 md:py-14 xl:py-16" />
      {/* <CollectionBlock data={collectionData} /> */}

      {/* <DownloadApps className="bg-linen" /> */}
      {/* <Support /> */}
    </>
  );
}

Home.getLayout = getLayout;
