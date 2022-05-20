import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useIsRTL } from '@/lib/locals';
import { ArrowPrevIcon } from '@/components/icons/arrow-prev';
import { ArrowNextIcon } from '@/components/icons/arrow-next';
import { Swiper, SwiperSlide, Navigation } from '@/components/ui/slider';
import { productPlaceholder } from '@/lib/placeholders';
import { Image } from '@/components/ui/image';
import Link from './link';

interface CategoryItemProps {
  item: any;
}
const CategoryItem: React.FC<CategoryItemProps> = ({ item }) => {
  return (
    <div className="relative overflow-hidden text-center cursor-pointer group">
      <Link href={`${item?.type?.slug}/search/?category=${item.slug}`}>
        <Image
          src={item?.image?.original! ?? productPlaceholder}
          alt={item?.name!}
          width={200}
          height={240}
          layout="responsive"
          className="rounded-md"
        />
      </Link>
      <span className="block mt-2 text-base font-semibold transition-colors text-heading group-hover:text-orange-500 ltr:text-left rtl:text-right">
        {item.name}
      </span>
    </div>
  );
};

function SolidCardCategory({ items }: any) {
  const { t } = useTranslation('common');
  const { isRTL } = useIsRTL();

  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const breakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    540: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    820: {
      slidesPerView: 5,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 6,
      spaceBetween: 20,
    },

    1280: {
      slidesPerView: 7,
      spaceBetween: 24,
    },
    1800: {
      slidesPerView: 8,
      spaceBetween: 30,
    },
    2600: {
      slidesPerView: 9,
      spaceBetween: 40,
    },
  };

  return (
    <div className="relative">
      <Swiper
        id="category-card-menu"
        modules={[Navigation]}
        navigation={{
          prevEl,
          nextEl,
          disabledClass: 'swiper-button-disabled',
          hiddenClass: 'swiper-button-hidden',
        }}
        breakpoints={breakpoints}
        slidesPerView={7}
      >
        {items?.map((category: any, idx: number) => (
          <SwiperSlide key={idx}>
            <CategoryItem item={category} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        ref={(node) => setPrevEl(node)}
        className="absolute z-10 flex items-center justify-center w-8 h-8 -mt-4 rounded-full outline-none cursor-pointer banner-slider-prev text-heading bg-light shadow-300 top-1/2 ltr:-left-4 rtl:-right-4 focus:outline-none transition-colors hover:text-orange-500"
      >
        <span className="sr-only">{t('text-previous')}</span>
        {isRTL ? <ArrowNextIcon /> : <ArrowPrevIcon />}
      </div>
      <div
        ref={(node) => setNextEl(node)}
        className="absolute z-10 flex items-center justify-center w-8 h-8 -mt-4 rounded-full outline-none cursor-pointer banner-slider-next text-heading bg-light shadow-300 top-1/2 ltr:-right-4 rtl:-left-4 focus:outline-none transition-colors hover:text-orange-500"
      >
        <span className="sr-only">{t('text-next')}</span>
        {isRTL ? <ArrowPrevIcon /> : <ArrowNextIcon />}
      </div>
    </div>
  );
}

export default SolidCardCategory;
