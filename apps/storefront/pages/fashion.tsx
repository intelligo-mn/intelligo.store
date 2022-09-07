import BannerCard from "apps/storefront/components/common/banner-card";
import Container from "apps/storefront/components/ui/container";
import CategoryBlock from "apps/storefront/containers/category-block";
import { getLayout } from "apps/storefront/components/layout/layout-two";
import NewArrivalsProductFeed from "apps/storefront/components/product/feeds/new-arrivals-product-feed";
import ProductsFlashSaleBlock from "apps/storefront/containers/product-flash-sale-block";
import ProductsFeatured from "apps/storefront/containers/products-featured";
import Subscription from "apps/storefront/components/common/subscription";
import { ROUTES } from "apps/storefront/lib/routes";
import HeroSlider from "apps/storefront/containers/hero-slider";
import BrandGridBlock from "apps/storefront/containers/brand-grid-block";
import {
  fashionHomeHeroGridSlider as heroBanner,
  homeEightCoupons,
  fashionSaleBannerWithProducts,
  fashionSaleBannerData,
  fashionSaleBannerDataGallery
} from "apps/storefront/data/static/banners";
import TestimonialCarousel from "apps/storefront/containers/testimonial-carousel";
import CollectionBlock from "apps/storefront/containers/collection-block";
import { modernDemoCollectionData } from "apps/storefront/data/static/collection";
import SaleBannerWithProducts from "apps/storefront/containers/sale-banner-with-products";
import BannerBlock from "apps/storefront/containers/banner-block";
import Instagram from "apps/storefront/components/common/instagram";
import BannerCarouselBlock from "apps/storefront/containers/banner-carousel-block";

export { getStaticProps } from "apps/storefront/framework/rest/ssr/homepage/fashion";

export default function Home() {
  return (
    <>
        <Container>
          <HeroSlider 
            data={heroBanner} 
            paginationPosition="none" 
            variant="fashion"
            className="hero-grid-carousel"
          />

          <CategoryBlock 
            sectionHeading="text-browse-categories" 
            variant="elegant"
            effectPosition="fullBody"
            type="vector"
          />
          
          <ProductsFeatured
            sectionHeading="text-featured-products"
            variant="fashion"
            limit={6}
          />

          <BannerBlock
            data={fashionSaleBannerData}
            className="mb-12 md:mb-14 xl:mb-16 hidden sm:flex"
          />

          <SaleBannerWithProducts
            sectionHeading="text-on-selling-products"
            categorySlug="/search"
            variant="fashion"
            productVariant="gridSlim"
            imageHeight={275}
            imageWidth={275}
            limit={8}
            bannerData={fashionSaleBannerWithProducts}
          />

          <BrandGridBlock 
            sectionHeading="text-top-brands"
            limit={12}
            variant="6column"
          />
          
          <ProductsFlashSaleBlock 
            date={"2023-03-01T01:02:03"} 
            variant="slider"
          />

          <BannerCarouselBlock banners={fashionSaleBannerDataGallery} />

          <NewArrivalsProductFeed />
          
          <BannerCard
            data={homeEightCoupons}
            href={`${ROUTES.COLLECTIONS}/${homeEightCoupons.slug}`}
            className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
          />

          <CollectionBlock 
            variant="modern" 
            data={modernDemoCollectionData} 
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
