import BannerCard from "@components/common/banner-card";
import SellWithProgress from "@components/common/sale-with-progress";
import { useProductsQuery } from "@framework/products/products.query";
import classNames from "classnames";
import { ROUTES } from "@lib/routes";
import Alert from "@components/ui/alert";
import { useTranslation } from "next-i18next";
import isEmpty from "lodash/isEmpty";
import NotFoundItem from "@components/404/not-found-item";
import { siteSettings } from "@settings/site.settings";

interface Props {
  className?: string;
  limit?: number;
}

const banner = {
	id: 1,
	title: "banner-on-selected-items",
	slug: "search",
	image: {
		mobile: {
			url: "/assets/images/banner/banner-mobile-2.jpg",
			width: 450,
			height: 150,
		},
		desktop: {
			url: "/assets/images/banner/banner-2.jpg",
			width: 1190,
			height: 450,
		},
	},
};

const flashSaleCarouselBreakpoint = {
  "1280": {
    slidesPerView: 1,
  },
  "1025": {
    slidesPerView: 2,
    spaceBetween: 28,
  },
  "768": {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  "0": {
    slidesPerView: 1,
  },
};

const FlashSaleBlock: React.FC<Props> = ({
  className = "mb-12 lg:mb-14 xl:mb-7",
  limit = 10
}) => {
  const { t } = useTranslation();
  const flashSellSettings = siteSettings?.homePageBlocks?.flashSale;

  const {
    data: products,
    isLoading: loading,
    error,
  }: any = useProductsQuery({
    limit,
    tags: flashSellSettings?.slug,
  });

  if (!loading && isEmpty(products?.data)) {
    return <NotFoundItem text={t("text-no-flash-products-found")} />;
  }

  return (
    <div
      className={classNames(
        `grid grid-cols-1 xl:grid-cols-3 gap-y-12 lg:gap-y-14 xl:gap-y-0 xl:gap-x-7`,
        className
      )}
    >
      <BannerCard
        key={`banner--key${banner.id}`}
        data={banner}
        href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
        className="xl:h-full xl:col-span-2"
        effectActive={true}
      />
      {error ? (
        <Alert message={error?.message} />
      ) : (
        <SellWithProgress
          carouselBreakpoint={flashSaleCarouselBreakpoint}
          products={products?.data}
          loading={loading}
          className="col-span-full xl:col-span-1 lg:mb-1 xl:mb-0"
        />
      )}
    </div>
  );
};

export default FlashSaleBlock;
