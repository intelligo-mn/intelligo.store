import { useRef } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { useIsRTL } from '@/lib/locals';
import { ArrowPrevIcon } from '@/components/icons/arrow-prev';
import { ArrowNextIcon } from '@/components/icons/arrow-next';
import { Swiper, SwiperSlide, Navigation } from '@/components/ui/slider';
import { productPlaceholder } from '@/lib/placeholders';
import { Image } from '@/components/ui/image';

interface CategoryItemProps {
  item: any;
}
const CategoryItem: React.FC<CategoryItemProps> = ({ item }) => {
  const router = useRouter();

  const { pathname, query } = router;
  const selectedQueries = query.category;

  const onCategoryClick = (slug: string) => {
    if (selectedQueries === slug) {
      const { category, ...rest } = query;
      router.push(
        {
          pathname,
          query: { ...rest },
        },
        undefined,
        {
          scroll: false,
        }
      );
      return;
    }
    router.push(
      {
        pathname,
        query: { ...query, category: slug },
      },
      undefined,
      {
        scroll: false,
      }
    );
  };

  return (
    <div
      className={cn(
        'text-center rounded bg-light relative overflow-hidden cursor-pointer border-2',
        selectedQueries === item.slug ? 'border-accent' : 'border-light'
      )}
      role="button"
      onClick={() => onCategoryClick(item?.slug!)}
    >
      <div className="flex items-center justify-center h-32 w-auto relative overflow-hidden mb-3 my-2">
        <Image
          src={item?.image?.original! ?? productPlaceholder}
          alt={item?.name!}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <span className="text-sm font-semibold text-heading text-center px-4 pb-4 block">
        {item.name}
      </span>
    </div>
  );
};

function SolidBoxedCategoryMenu({ items }: any) {
  const { t } = useTranslation('common');
  const { isRTL } = useIsRTL();

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const breakpoints = {
    320: {
      slidesPerView: 2,
    },

    440: {
      slidesPerView: 3,
    },

    620: {
      slidesPerView: 4,
    },

    820: {
      slidesPerView: 5,
    },

    1100: {
      slidesPerView: 6,
    },

    1280: {
      slidesPerView: 7,
    },
  };

  return (
    <div className="relative">
      <Swiper
        id="category-card-menu"
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current!, // Assert non-null
          nextEl: nextRef.current!, // Assert non-null
          disabledClass: 'swiper-button-disabled',
          hiddenClass: 'swiper-button-hidden',
        }}
        breakpoints={breakpoints}
        slidesPerView={7}
        spaceBetween={10}
      >
        {items?.map((category: any, idx: number) => (
          <SwiperSlide key={idx}>
            <CategoryItem item={category} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        ref={prevRef}
        className="category-slider-prev  w-8 h-8 flex items-center justify-center text-heading bg-light shadow-300 outline-none rounded-full absolute top-1/2 -mt-4 z-10 cursor-pointer ltr:-left-3 rtl:-right-3 ltr:lg:-left-4 focus:outline-none"
      >
        <span className="sr-only">{t('text-previous')}</span>
        {isRTL ? <ArrowNextIcon /> : <ArrowPrevIcon />}
      </div>
      <div
        ref={nextRef}
        className="category-slider-next w-8 h-8 flex items-center justify-center text-heading bg-light shadow-300 outline-none rounded-full absolute top-1/2 -mt-4 z-10 cursor-pointer ltr:-right-3 rtl:-left-3 ltr:lg:-right-4 rtl:lg:-left-4 focus:outline-none"
      >
        <span className="sr-only">{t('text-next')}</span>
        {isRTL ? <ArrowPrevIcon /> : <ArrowNextIcon />}
      </div>
    </div>
  );
}

export default SolidBoxedCategoryMenu;
