import BannerCard from "apps/storefront/components/common/banner-card";
import Container from "apps/storefront/components/ui/container";
import BrandGridBlock from "apps/storefront/containers/brand-grid-block";
import CategoryBlock from "apps/storefront/containers/category-block";
import { getLayout } from "apps/storefront/components/layout/layout";
import BannerWithProducts from "apps/storefront/containers/banner-with-products";
import BannerBlock from "apps/storefront/containers/banner-block";
import Divider from "apps/storefront/components/ui/divider";
import DownloadApps from "apps/storefront/components/common/download-apps";
import Support from "apps/storefront/components/common/support";
import Instagram from "apps/storefront/components/common/instagram";
import ProductsFlashSaleBlock from "apps/storefront/containers/product-flash-sale-block";
import ProductsFeatured from "apps/storefront/containers/products-featured";
import BannerSliderBlock from "apps/storefront/containers/banner-slider-block";
import ExclusiveBlock from "apps/storefront/containers/exclusive-block";
import Subscription from "apps/storefront/components/common/subscription";
import NewArrivalsProductFeed from "apps/storefront/components/product/feeds/new-arrivals-product-feed";
import { ROUTES } from "apps/storefront/lib/routes";
import {
  masonryBanner,
  promotionBanner,
  modernDemoBanner as banner,
  modernDemoProductBanner as productBanner,
} from "apps/storefront/data/static/banners";

export { getStaticProps } from "apps/storefront/framework/rest/ssr/homepage/modern";

export default function Home() {
  return (
    <>
      <BannerBlock data={masonryBanner} />
      <Container>
        <ProductsFlashSaleBlock />
      </Container>
      <BannerSliderBlock data={promotionBanner} />
      <Container>
        <CategoryBlock sectionHeading="text-shop-by-category" variant="rounded" />
        <ProductsFeatured sectionHeading="text-featured-products" />
        <BannerCard
          data={banner[0]}
          href={`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
        />
        <BrandGridBlock sectionHeading="text-top-brands" />
        <BannerCard
          data={banner[1]}
          href={`${ROUTES.COLLECTIONS}/${banner[1].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
        />
        <BannerWithProducts
          sectionHeading="text-on-selling-products"
          categorySlug="/search"
          data={productBanner}
        />
        <ExclusiveBlock />
        <NewArrivalsProductFeed />
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
