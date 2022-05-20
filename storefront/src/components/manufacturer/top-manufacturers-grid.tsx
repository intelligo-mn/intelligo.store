import NotFound from '@/components/ui/not-found';
import Carousel from '@/components/ui/carousel';
import ManufacturerCard from '@/components/manufacturer/card';
import SectionBlock from '@/components/ui/section-block';
import { ROUTES } from '@/lib/routes';
import ErrorMessage from '@/components/ui/error-message';
import { useTopManufacturers } from '@/framework/manufacturer';
import ManufacturerLoader from '@/components/ui/loaders/manufacturer-loader';
import rangeMap from '@/lib/range-map';

const breakpoints = {
  320: {
    slidesPerView: 1,
  },

  600: {
    slidesPerView: 2,
  },

  960: {
    slidesPerView: 3,
  },

  1280: {
    slidesPerView: 4,
  },

  1600: {
    slidesPerView: 5,
  },
  2600: {
    slidesPerView: 7,
  },
};

const TopManufacturersGrid: React.FC = () => {
  const { manufacturers, isLoading, error } = useTopManufacturers({
    limit: 10,
  });

  if (error) return <ErrorMessage message={error.message} />;

  if (isLoading && manufacturers.length) {
    return (
      <SectionBlock title="text-top-manufacturer" href={ROUTES.MANUFACTURERS}>
        <div className="">
          <div className="grid w-full grid-flow-col gap-6">
            {rangeMap(4, (i) => (
              <ManufacturerLoader key={i} uniqueKey={`manufacturer-${i}`} />
            ))}
          </div>
        </div>
      </SectionBlock>
    );
  }
  return (
    <SectionBlock title="text-top-manufacturer" href={ROUTES.MANUFACTURERS}>
      {!isLoading && !manufacturers.length ? (
        <div className="min-h-full pt-6 pb-8 px-9 lg:p-8">
          <NotFound text="text-no-category" className="h-96" />
        </div>
      ) : (
        <div>
          <Carousel
            items={manufacturers}
            breakpoints={breakpoints}
            spaceBetween={30}
          >
            {(item) => <ManufacturerCard item={item} />}
          </Carousel>
        </div>
      )}
    </SectionBlock>
  );
};

export default TopManufacturersGrid;
