import BannerCard from "@components/common/banner-card";
import Container from "@components/ui/container";
import CategoryBlock from "@containers/category-block";
import { getLayout } from "@components/layout/layout-two";
import NewArrivalsProductFeed from "@components/product/feeds/new-arrivals-product-feed";
import ProductsFlashSaleBlock from "@containers/product-flash-sale-block";
import ProductsFeatured from "@containers/products-featured";
import Subscription from "@components/common/subscription";
import { ROUTES } from "@lib/routes";
import {
    homeRefinedHeroBanner as heroBanner,
    bannerDataFour,
    bannerDataFourMobile,
    homeEightWinterBanner,
    homeEightCoupons
} from "@data/static/banners";
import TestimonialCarousel from "@containers/testimonial-carousel";
import BrandBlock from "@containers/brand-block";
import CollectionBlock from "@containers/collection-block";
import { modernDemoCollectionData } from "@data/static/collection";
import ProductsTopBlock from "@containers/products-top-block";
import HeroWithCategory from "@containers/hero-with-category";
import SaleBannerWithProducts from "@containers/sale-banner-with-products";
import BannerBlock from "@containers/banner-block";
import Instagram from "@components/common/instagram";

export { getStaticProps } from "@framework/ssr/homepage/refined";
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
