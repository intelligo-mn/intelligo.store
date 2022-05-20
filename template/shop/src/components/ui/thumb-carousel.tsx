import ChevronLeft from '@/components/icons/chevron-left';
import ChevronRight from '@/components/icons/chevron-right';
import {
  Swiper,
  SwiperSlide,
  SwiperOptions,
  Navigation,
  Thumbs,
} from '@/components/ui/slider';
import { Image } from '@/components/ui/image';
import { useRef, useState } from 'react';
import { productPlaceholder } from '@/lib/placeholders';
import { useIsRTL } from '@/lib/locals';
import classNames from 'classnames';

interface Props {
  gallery: any[];
  hideThumbs?: boolean;
  aspectRatio?: 'auto' | 'square';
}
// product gallery breakpoints
const galleryCarouselBreakpoints = {
  320: {
    slidesPerView: 2,
  },
  480: {
    slidesPerView: 3,
  },
  640: {
    slidesPerView: 3,
  },
  800: {
    slidesPerView: 4,
  },
};
const swiperParams: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 0,
};
export const ThumbsCarousel: React.FC<Props> = ({
  gallery,
  hideThumbs = false,
  aspectRatio = 'square',
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const { isRTL } = useIsRTL();
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      <div className="relative">
        <Swiper
          id="productGallery"
          modules={[Navigation, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          navigation={{
            prevEl: prevRef.current!, // Assert non-null
            nextEl: nextRef.current!, // Assert non-null
          }}
          {...swiperParams}
        >
          {gallery?.map((item: any) => (
            <SwiperSlide
              key={`product-gallery-${item.id}`}
              className="selection:bg-transparent flex justify-center items-center"
            >
              <Image
                src={item?.original ?? productPlaceholder}
                alt={`Product gallery ${item.id}`}
                width={aspectRatio === 'square' ? 450 : 420}
                height={aspectRatio === 'square' ? 450 : 560}
                // layout="responsive"
                className="ltr:ml-auto rtl:mr-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          ref={prevRef}
          className="product-gallery-prev cursor-pointer absolute top-2/4 ltr:-left-4 rtl:-right-4 ltr:md:-left-5 rtl:md:-right-5 z-10 -mt-4 md:-mt-5 w-8 h-8 md:w-9 md:h-9 rounded-full bg-light shadow-xl border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200 hover:bg-gray-100"
        >
          {isRTL ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </div>
        <div
          ref={nextRef}
          className="product-gallery-next cursor-pointer absolute top-2/4 ltr:-right-4 rtl:-left-4 ltr:md:-right-5 rtl:md:-left-5 z-10 -mt-4 md:-mt-5 w-8 h-8 md:w-9 md:h-9 rounded-full bg-light shadow-xl border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200 hover:bg-gray-100"
        >
          {isRTL ? (
            <ChevronLeft className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </div>
      </div>
      {/* End of product main slider */}

      <div
        className={classNames(
          'max-w-md mt-5 lg:mt-8 mx-auto relative lg:pb-2',
          {
            hidden: hideThumbs,
          }
        )}
      >
        <Swiper
          id="productGalleryThumbs"
          onSwiper={setThumbsSwiper}
          spaceBetween={20}
          watchSlidesProgress={true}
          freeMode={true}
          observer={true}
          observeParents={true}
          breakpoints={galleryCarouselBreakpoints}
        >
          {gallery?.map((item: any) => (
            <SwiperSlide
              key={`product-thumb-gallery-${item.id}`}
              className="flex items-center justify-center cursor-pointer rounded overflow-hidden border border-border-200 border-opacity-75 hover:opacity-75"
            >
              <Image
                src={item?.thumbnail ?? productPlaceholder}
                alt={`Product thumb gallery ${item.id}`}
                width={80}
                height={80}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
