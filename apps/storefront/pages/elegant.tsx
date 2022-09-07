import BannerCard from "apps/storefront/components/common/banner-card";
import Container from "apps/storefront/components/ui/container";
import CategoryBlock from "apps/storefront/containers/category-block";
import { getLayout } from "apps/storefront/components/layout/layout-two";
import ExclusiveBlock from "apps/storefront/containers/exclusive-block";
import NewArrivalsProductFeed from "apps/storefront/components/product/feeds/new-arrivals-product-feed";
import ProductsFlashSaleBlock from "apps/storefront/containers/product-flash-sale-block";
import ProductsFeatured from "apps/storefront/containers/products-featured";
import Subscription from "apps/storefront/components/common/subscription";
import { ROUTES } from "apps/storefront/lib/routes";
import HeroSlider from "apps/storefront/containers/hero-slider";
import BrandGridBlock from "apps/storefront/containers/brand-grid-block";
import {
  homeElegantHeroSlider as heroBanner,
  elegantBannerDataThree,
  elegantHomeBanner
} from "apps/storefront/data/static/banners";
import TestimonialCarousel from "apps/storefront/containers/testimonial-carousel";
import BannerBlock from "apps/storefront/containers/banner-block";
import CollectionBlock from "apps/storefront/containers/collection-block";
import { modernDemoCollectionData } from "apps/storefront/data/static/collection";
import ProductsTopBlock from "apps/storefront/containers/products-top-block";


export { getStaticProps } from "apps/storefront/framework/rest/ssr/homepage/elegant";

export default function Home() {
  return (
    <>
      <HeroSlider 
        data={heroBanner} 
        paginationPosition="left" 
        buttonClassName="block" 
        variant="fullWidth" 
        variantRounded="default" 
        buttonPosition="inside" 
      />

      <Container>
        <BannerBlock
					data={elegantBannerDataThree}
					className="mb-12 md:mb-14 xl:mb-16"
				/>
        <CategoryBlock 
          sectionHeading="text-browse-categories" 
          variant="elegant"
          effectPosition="fullBody"
          type="vector"
        />
        <ProductsFeatured
          sectionHeading="text-featured-products"
          variant="combined"
          limit={4}
        />
        <ProductsFlashSaleBlock 
          date={"2023-03-01T01:02:03"} 
          variant="slider"
        />
        <BannerCard
					key={`banner--key${elegantHomeBanner.id}`}
					data={elegantHomeBanner}
					href={`${ROUTES.COLLECTIONS}/${elegantHomeBanner.slug}`}
					className="mb-12 md:mb-14 xl:mb-16 pb-0.5 md:pb-0 lg:pb-1 xl:pb-0 md:-mt-2.5"
				/>
        <BrandGridBlock 
          sectionHeading="text-top-brands"
          limit={12}
          variant="6column"
        />
        <ProductsTopBlock sectionHeading="text-top-products" />
        <ExclusiveBlock />
        <NewArrivalsProductFeed />
        <TestimonialCarousel sectionHeading="text-testimonial" />
        <CollectionBlock variant="modern" data={modernDemoCollectionData} />
        <Subscription 
          className="px-5 sm:px-8 md:px-16 2xl:px-24 relative overflow-hidden sm:items-center lg:items-start" 
          variant="modern"
        />
      </Container>
    </>
  );
}

Home.getLayout = getLayout;
