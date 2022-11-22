import BannerCard from "@components/common/banner-card";
import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";
import { ROUTES } from "@lib/routes";
import {StaticBanner} from "@framework/types";

const breakpoints = {
	"1025": {
		slidesPerView: 3,
		spaceBetween: 28,
	},
	"480": {
		slidesPerView: 2,
		spaceBetween: 20,
	},
	"0": {
		slidesPerView: 1,
		spaceBetween: 12,
	},
};

interface BannerProps {
  banners: StaticBanner[];
	className?: string;
}

const BannerCarouselBlock: React.FC<BannerProps> = ({
	className = "mb-12 md:mb-12 lg:mb-14 pb-0.5 xl:pb-1.5",
  banners
}) => {
	return (
		<div className={className}>
			<Carousel breakpoints={breakpoints} autoplay={{ delay: 5000 }}>
				{banners?.map((banner: any) => (
					<SwiperSlide key={`promotion-banner-key-${banner?.id}`}>
						<BannerCard
							data={banner}
							href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
							effectActive={true}
						/>
					</SwiperSlide>
				))}
			</Carousel>
		</div>
	);
};

export default BannerCarouselBlock;
