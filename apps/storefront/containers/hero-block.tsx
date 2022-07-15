import BannerCard from "@components/common/banner-card";
import Carousel from "@components/ui/carousel/carousel";
import { useWindowSize } from "@utils/use-window-size";
import { ROUTES } from "@lib/routes";
import { SwiperSlide } from "swiper/react";
import { StaticBanner } from "@framework/types";

const breakpoints = {
	"1500": {
		slidesPerView: 2,
	},
	"0": {
		slidesPerView: 1,
	},
};

type Props = {
  data: StaticBanner[]
}

const HeroBlock: React.FC<Props> = ({ data }) => {
	const { width } = useWindowSize();
	return (
		<div className="heroBannerOne relative max-w-[1920px] mb-5 md:mb-12 lg:mb-14 2xl:mb-16 mx-auto overflow-hidden px-4 md:px-8 2xl:px-0">
			<Carousel
				breakpoints={breakpoints}
				centeredSlides={width < 1500 ? false : true}
				autoplay={{ delay: 5000 }}
				className="mx-0"
				buttonClassName="hidden"
				pagination={{
					clickable: true,
				}}
			>
				{data?.map((banner: any) => (
					<SwiperSlide
						className="carouselItem px-0 2xl:px-3.5"
						key={`banner--key-${banner?.id}`}
					>
						<BannerCard
							data={banner}
							href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
						/>
					</SwiperSlide>
				))}
			</Carousel>
		</div>
	);
};

export default HeroBlock;
