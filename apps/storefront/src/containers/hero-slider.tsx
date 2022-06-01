import BannerCard from "@components/common/banner-card";
import Carousel from "@components/ui/carousel/carousel";
import { ROUTES } from "@lib/routes";
import { SwiperSlide } from "swiper/react";
import cn from "classnames";

const breakpoints = {
	"1720": {
		slidesPerView: 3,
		spaceBetween: 12,
	},
	"1366": {
		slidesPerView: 3,
		spaceBetween: 12,
	},
	"1025": {
		slidesPerView: 3,
	},
	"768": {
		slidesPerView: 2,
	},
	"0": {
		slidesPerView: 1,
	},
};

interface Props {
	data: any;
	className?: string;
	buttonGroupClassName?: string;
	variant?: "box" | "fullWidth" | "fashion";
	variantRounded?: "rounded" | "default";
	paginationPosition?: "left" | "right" | "center" | "none";
	buttonClassName?: string;
	buttonPosition?: "inside" | "outside";
}

const HeroSlider: React.FC<Props> = ({
	className = "mb-12 md:mb-14 xl:mb-[60px]",
	variant = "box",
	variantRounded = "rounded",
	data,
	paginationPosition = "center",
	buttonClassName = "hidden",
	buttonPosition = "outside",
}) => {
	return (
		<div
			className={cn(
				"relative mb-5 md:mb-8",
				{
					"mx-auto max-w-[1920px]": variant === "fullWidth",
				},
				className
			)}
		>
			<Carousel
				autoplay={{
					delay: 5000,
				}}
				className={`mx-0 ${
					variant === "fullWidth" ? "carousel-full-width" : ""
				} pagination-${paginationPosition}`}
                buttonClassName={cn(buttonClassName)}
				pagination={{
					clickable: true,
				}}
				scrollbar={{ draggable: true, hide: false }}
				buttonPosition={buttonPosition}
				breakpoints={variant === "fashion" ? breakpoints : {}}
			>
				{data?.map((banner: any) => (
					<SwiperSlide
						className="carouselItem"
						key={`banner--key-${banner?.id}`}
					>
						<BannerCard
							data={banner}
							href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
							variant={variantRounded}
						/>
					</SwiperSlide>
				))}
			</Carousel>
		</div>
	);
};

export default HeroSlider;
