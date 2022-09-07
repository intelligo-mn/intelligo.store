import BannerCard from "apps/storefront/components/common/banner-card";
import Container from "apps/storefront/components/ui/container";
import CategoryBlock from "apps/storefront/containers/category-block";
import { getLayout } from "apps/storefront/components/layout/layout";
import BannerWithProducts from "apps/storefront/containers/banner-with-products";
import NewArrivalsProductFeed from "apps/storefront/components/product/feeds/new-arrivals-product-feed";
import ProductsFlashSaleBlock from "apps/storefront/containers/product-flash-sale-block";
import ProductsFeatured from "apps/storefront/containers/products-featured";
import Subscription from "apps/storefront/components/common/subscription";
import { ROUTES } from "apps/storefront/lib/routes";
import HeroSlider from "apps/storefront/containers/hero-slider";
import BrandGridBlock from "apps/storefront/containers/brand-grid-block";
import SaleBannerGrid from "apps/storefront/containers/sale-banner-grid";
import {
  trendyDemoHeroBanner as heroBanner,
  homeTrendyCoupons as coupons,
  homeTrendyProductWithBanner as productWithBanner,
} from "apps/storefront/data/static/banners";
import TestimonialCarousel from "apps/storefront/containers/testimonial-carousel";

export { getStaticProps } from "apps/storefront/framework/rest/ssr/homepage/trendy";

export default function Home() {
  return (
    <>
      <Container>
        <HeroSlider data={heroBanner} paginationPosition="left" />
        <SaleBannerGrid />
        <CategoryBlock 
          sectionHeading="text-featured-categories" 
          variant="modern"
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
          data={coupons[0]}
          href={`${ROUTES.COLLECTIONS}/${coupons[0].slug}`}
          className="mb-11 md:mb-12 lg:mb-14 2xl:mb-16"
        />
        <NewArrivalsProductFeed />
        <BannerWithProducts
          sectionHeading="text-on-selling-products"
          categorySlug="/search"
          data={productWithBanner}
          style="modern"
          limit={4}
        />
        <BrandGridBlock 
          sectionHeading="text-top-brands"
          limit={12}
          variant="6column"
        />
        <TestimonialCarousel sectionHeading="text-testimonial" />
        <Subscription 
          className="px-5 sm:px-8 md:px-16 2xl:px-24 relative overflow-hidden sm:items-center lg:items-start" 
          variant="modern"
        />
      </Container>
    </>
  );
}

Home.getLayout = getLayout;
