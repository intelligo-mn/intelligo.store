import Image from "next/image";
import { useModalState } from "@components/ui/modal/modal.context";
import { useIsRTL } from "@utils/locals";
import { ChevronLeft } from "@components/icons/chevron-left";
import { ChevronRight } from "@components/icons/chevron-right";
import {
  Swiper,
  SwiperSlide,
  SwiperOptions,
  Navigation,
} from "@components/ui/slider";
import useSwiperRef from "@utils/use-swiper-ref";

const swiperParams: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 0,
};

const RefundImageModal = () => {
  const { data } = useModalState();
  const { isRTL } = useIsRTL();

  const [nextEl, nextRef] = useSwiperRef<HTMLDivElement>();
  const [prevEl, prevRef] = useSwiperRef<HTMLDivElement>();

  return (
    <div className="p-3 bg-light block m-auto max-w-[680px] w-full rounded">
      <div className="relative">
        <Swiper
          id="refund-gallery"
          modules={[Navigation]}
          initialSlide={data?.initSlide}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.navigation.init();
            }, 100);
          }}
          loop={data?.images?.length > 1}
          navigation={{
            prevEl,
            nextEl,
          }}
          {...swiperParams}
        >
          {data?.images?.map((item: any) => (
            <SwiperSlide
              key={`refund-gallery-${item.id}`}
              className="flex items-center justify-center selection:bg-transparent"
            >
              <Image
                src={item?.original ?? "/product-placeholder-borderless.svg"}
                alt={`Refund gallery ${item.id}`}
                width={800}
                height={800}
                objectFit="contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {data?.images?.length > 1 && (
          <>
            <div
              ref={prevRef}
              className="refund-gallery-prev cursor-pointer absolute top-2/4 start-2 md:start-3 z-10 -mt-4 md:-mt-5 w-8 h-8 md:w-9 md:h-9 rounded-full bg-light shadow-xl border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200 hover:bg-gray-100"
            >
              {isRTL ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </div>
            <div
              ref={nextRef}
              className="refund-gallery-next cursor-pointer absolute top-2/4 end-2 md:end-3 z-10 -mt-4 md:-mt-5 w-8 h-8 md:w-9 md:h-9 rounded-full bg-light shadow-xl border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200 hover:bg-gray-100"
            >
              {isRTL ? (
                <ChevronLeft className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RefundImageModal;
