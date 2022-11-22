import BannerCard from "@components/common/banner-card";
import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";
import { ROUTES } from "@lib/routes";
import { StaticBanner } from "@framework/types";

interface BannerProps {
  data: StaticBanner[];
  className?: string;
}

const breakpoints = {
	"0": {
		slidesPerView: 2,
	},
};

const BannerSliderBlock: React.FC<BannerProps> = ({
	className = "mb-12 md:mb-14 xl:mb-16",
  data
}) => {
	return (
		<div className={`${className} mx-auto max-w-[1920px] overflow-hidden`}>
			<div className="-mx-32 sm:-mx-44 lg:-mx-60 xl:-mx-72 2xl:-mx-80">
				<Carousel
					breakpoints={breakpoints}
					centeredSlides={true}
					pagination={{
						clickable: true,
					}}
					paginationVariant="circle"
					buttonClassName="hidden"
				>
					{data.map((banner: any) => (
						<SwiperSlide
							key={`banner--key${banner.id}`}
							className="px-1.5 md:px-2.5 xl:px-3.5"
						>
							<BannerCard
								data={banner}
								effectActive={true}
								href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
							/>
						</SwiperSlide>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default BannerSliderBlock;
