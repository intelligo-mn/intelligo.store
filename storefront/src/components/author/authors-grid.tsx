import Button from '@/components/ui/button';
import NotFound from '@/components/ui/not-found';
import { useTranslation } from 'next-i18next';
import rangeMap from '@/lib/range-map';
import AuthorLoader from '@/components/ui/loaders/author-loader';
import { useAuthors } from '@/framework/author';
import AuthorCard from '@/components/ui/author-card';
import ErrorMessage from '@/components/ui/error-message';
import { AUTHORS_PER_PAGE } from '@/framework/client/variables';

interface AuthorsGridProps {
  limit?: number;
}
const AuthorsGrid: React.FC<AuthorsGridProps> = ({
  limit = AUTHORS_PER_PAGE,
}) => {
  const { t } = useTranslation('common');
  const { authors, loadMore, isLoadingMore, isLoading, hasMore, error } =
    useAuthors({
      limit,
    });
  if (error) return <ErrorMessage message={error.message} />;

  if (!isLoading && !authors.length) {
    return (
      <div className="min-h-full bg-white px-4 pt-6 pb-8 lg:p-8">
        <NotFound text="text-no-authors" />
      </div>
    );
  }

  return (
    <div className="mx-auto w-full py-8 lg:py-14 xl:py-20">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 lg:gap-7">
        {isLoading && !authors.length
          ? rangeMap(limit, (i) => (
              <AuthorLoader key={i} uniqueKey={`author-${i}`} />
            ))
          : authors.map((item) => <AuthorCard key={item.id} item={item} />)}
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

export default AuthorsGrid;
