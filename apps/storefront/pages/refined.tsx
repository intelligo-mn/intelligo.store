import BannerCard from "apps/storefront/components/common/banner-card";
import Container from "apps/storefront/components/ui/container";
import CategoryBlock from "apps/storefront/containers/category-block";
import { getLayout } from "apps/storefront/components/layout/layout-two";
import NewArrivalsProductFeed from "apps/storefront/components/product/feeds/new-arrivals-product-feed";
import ProductsFlashSaleBlock from "apps/storefront/containers/product-flash-sale-block";
import ProductsFeatured from "apps/storefront/containers/products-featured";
import Subscription from "apps/storefront/components/common/subscription";
import { ROUTES } from "apps/storefront/lib/routes";
import {
    homeRefinedHeroBanner as heroBanner,
    bannerDataFour,
    bannerDataFourMobile,
    homeEightWinterBanner,
    homeEightCoupons
} from "apps/storefront/data/static/banners";
import TestimonialCarousel from "apps/storefront/containers/testimonial-carousel";
import BrandBlock from "apps/storefront/containers/brand-block";
import CollectionBlock from "apps/storefront/containers/collection-block";
import { modernDemoCollectionData } from "apps/storefront/data/static/collection";
import ProductsTopBlock from "apps/storefront/containers/products-top-block";
import HeroWithCategory from "apps/storefront/containers/hero-with-category";
import SaleBannerWithProducts from "apps/storefront/containers/sale-banner-with-products";
import BannerBlock from "apps/storefront/containers/banner-block";
import Instagram from "apps/storefront/components/common/instagram";

export { getStaticProps } from "apps/storefront/framework/rest/ssr/homepage/refined";
export default function Home() {
  return (
    <>
        <Container>
          <HeroWithCategory
              data={heroBanner}
              paginationPosition="left"
              className="hero-slider-pagination-area mb-12 md:mb-14 xl:mb-16"
          />
          
          <BrandBlock sectionHeading="text-top-brands" />

          <SaleBannerWithProducts
              sectionHeading="text-on-selling-products"
              categorySlug="/search"
              variant="center"
          />
          
          <ProductsFeatured
            sectionHeading="text-featured-products"
            variant="flat"
            limit={8}
          />
          
          <BannerBlock
            data={bannerDataFour}
            className="mb-12 md:mb-14 xl:mb-16 hidden sm:flex"
          />
          
          <BannerBlock
            data={bannerDataFourMobile}
            className="mb-12 md:mb-14 xl:mb-16 sm:hidden"
          />
          
          <CategoryBlock 
            sectionHeading="text-browse-categories" 
          />
          
          <NewArrivalsProductFeed />
          
          <BannerCard
            data={homeEightWinterBanner}
            href={`${ROUTES.COLLECTIONS}/${homeEightWinterBanner.slug}`}
            className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
          />

          <ProductsFlashSaleBlock 
            date={"2023-03-01T01:02:03"} 
            variant="slider"
          />
          
          <ProductsTopBlock 
            sectionHeading="text-top-products" 
          />

          <CollectionBlock 
            variant="modern" 
            data={modernDemoCollectionData} 
          />
          
          <BannerCard
            data={homeEightCoupons}
            href={`${ROUTES.COLLECTIONS}/${homeEightCoupons.slug}`}
            className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
          />
          
          <TestimonialCarousel 
            sectionHeading="text-testimonial" 
          />
          
          <Instagram 
            className="mb-12 md:mb-14 xl:mb-16"
          />
          
          <Subscription 
            className="px-5 sm:px-8 md:px-16 2xl:px-24 relative overflow-hidden sm:items-center lg:items-start" 
            variant="modern"
          />
      </Container>
    </>
  );
}

Home.getLayout = getLayout;
