import Button from '@/components/ui/button';
import NotFound from '@/components/ui/not-found';
import { useTranslation } from 'next-i18next';
import rangeMap from '@/lib/range-map';
import ManufacturerLoader from '@/components/ui/loaders/manufacturer-loader';
import { useManufacturers } from '@/framework/manufacturer';
import ErrorMessage from '@/components/ui/error-message';
import ManufacturerCard from './card';
import { MANUFACTURERS_PER_PAGE } from '@/framework/client/variables';

interface ManufacturersGridProps {
  limit?: number;
}
const ManufacturersGrid: React.FC<ManufacturersGridProps> = ({
  limit = MANUFACTURERS_PER_PAGE,
}) => {
  const { t } = useTranslation('common');
  const { manufacturers, loadMore, isLoadingMore, isLoading, hasMore, error } =
    useManufacturers({
      limit,
    });
  if (error) return <ErrorMessage message={error.message} />;

  if (!isLoading && !manufacturers.length) {
    return (
      <div className="min-h-full bg-white px-4 pt-6 pb-8 lg:p-8">
        <NotFound text="text-no-manufacturers" />
      </div>
    );
  }

  return (
    <div className="mx-auto w-full py-8 lg:py-14 xl:py-20">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-5 lg:gap-7">
        {isLoading && !manufacturers.length
          ? rangeMap(limit, (i) => (
              <ManufacturerLoader key={i} uniqueKey={`manufacturer-${i}`} />
            ))
          : manufacturers.map((item) => (
              <ManufacturerCard key={item.id} item={item} />
            ))}
      </div>
      {hasMore && (
        <div className="mt-12 flex items-center justify-center lg:mt-16">
          <Button onClick={loadMore} size="big" loading={isLoadingMore}>
            {t('text-explore-more')}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ManufacturersGrid;
