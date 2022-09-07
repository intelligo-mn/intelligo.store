import BannerCard from "apps/storefront/components/common/banner-card";
import Container from "apps/storefront/components/ui/container";
import BrandGridBlock from "apps/storefront/containers/brand-grid-block";
import CategoryBlock from "apps/storefront/containers/category-block";
import { getLayout } from "apps/storefront/components/layout/layout";
import BannerWithProducts from "apps/storefront/containers/banner-with-products";
import NewArrivalsProductFeed from "apps/storefront/components/product/feeds/new-arrivals-product-feed";
import BannerBlock from "apps/storefront/containers/banner-block";
import Divider from "apps/storefront/components/ui/divider";
import DownloadApps from "apps/storefront/components/common/download-apps";
import Support from "apps/storefront/components/common/support";
import Instagram from "apps/storefront/components/common/instagram";
import ProductsFeatured from "apps/storefront/containers/products-featured";
import BannerSliderBlock from "apps/storefront/containers/banner-slider-block";
import ExclusiveBlock from "apps/storefront/containers/exclusive-block";
import ProductsFlashSaleBlock from "apps/storefront/containers/product-flash-sale-block";
import Subscription from "apps/storefront/components/common/subscription";
import { ROUTES } from "apps/storefront/lib/routes";
import {
  classicDemoBanner as banner,
  classicDemoProductBanner as productBanner,
  promotionBanner,
  classicDemoBannerTwo as bannerTwo,
  classicDemoBannerThree as bannerThree
} from "apps/storefront/data/static/banners";

export { getStaticProps } from "apps/storefront/framework/rest/ssr/homepage/classic";

export default function Home() {
  return (
    <>
      <ExclusiveBlock className="mb-12 md:mb-14 xl:mb-16 px-2.5 mx-auto max-w-[1920px]" />
      <Container>
        <CategoryBlock sectionHeading="text-shop-by-category" />
        <ProductsFeatured
          sectionHeading="text-featured-products"
          variant="center"
        />
      </Container>
      <BannerBlock data={banner} />
      <Container>
        <BannerWithProducts
          sectionHeading="text-on-selling-products"
          categorySlug="/#"
          data={productBanner}
        />
      </Container>
      <BannerSliderBlock data={promotionBanner} />
      <Container>
        <ProductsFlashSaleBlock date={"2023-03-01T01:02:03"} />
      </Container>
      <BannerBlock data={bannerTwo} />
      <Container>
        <BrandGridBlock sectionHeading="text-top-brands" />
        <BannerCard
          data={bannerThree}
          href={`${ROUTES.COLLECTIONS}/${bannerThree.slug}`}
          className="mb-11 md:mb-12 lg:mb-14 2xl:mb-16"
          effectActive={true}
        />
        <NewArrivalsProductFeed />
        <DownloadApps />
        <Support />
        <Instagram />
        <Subscription className="bg-opacity-0 px-8 sm:px-16 xl:px-0" />
      </Container>
      <Divider className="mb-0" />
    </>
  );
}

Home.getLayout = getLayout;
