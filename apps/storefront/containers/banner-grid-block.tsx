import BannerCard from "@components/common/banner-card";
import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";
import { useWindowSize } from "@utils/use-window-size";
import { ROUTES } from "@lib/routes";
import { StaticBanner } from "@framework/types";

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
  data: StaticBanner[],
	className?: string;
}

const BannerGridBlock: React.FC<BannerProps> = ({
  data = [],
	className = "mb-12 lg:mb-14 xl:mb-16 lg:pb-1 xl:pb-0",
}) => {
	const { width } = useWindowSize();
	return (
		<div className={`${className}`}>
			{width < 768 ? (
				<div>
					<Carousel breakpoints={breakpoints}>
						{data?.map((banner: any) => (
							<SwiperSlide key={`banner--key${banner.id}`}>
								<BannerCard
									data={banner}
									href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
									className="h-full"
								/>
							</SwiperSlide>
						))}
					</Carousel>
				</div>
			) : (
				<div className="md:grid md:grid-cols-2 md:gap-5 xl:gap-7 relative">
					{data?.map((banner: any) => (
						<BannerCard
							key={`banner--key${banner.id}`}
							data={banner}
							href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
							className={banner.type === "large" ? "col-span-2" : "col-span-1"}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default BannerGridBlock;
