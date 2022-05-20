import NotFound from '@/components/ui/not-found';
import AuthorCarousel from '@/components/ui/carousel';
import SectionBlock from '@/components/ui/section-block';
import { ROUTES } from '@/lib/routes';
import ErrorMessage from '@/components/ui/error-message';
import { useTopAuthors } from '@/framework/author';
import AuthorCard from '@/components/ui/author-card';
import rangeMap from '@/lib/range-map';
import AuthorLoader from '@/components/ui/loaders/author-loader';

const TopAuthorsGrid: React.FC = () => {
  const { authors, isLoading, error } = useTopAuthors({
    limit: 10,
  });

  if (error) return <ErrorMessage message={error.message} />;

  if (isLoading && !authors.length) {
    return (
      <SectionBlock title="text-top-authors" href={ROUTES.AUTHORS}>
        <div className="hidden xl:block">
          <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
            {rangeMap(7, (i) => (
              <AuthorLoader key={i} uniqueKey={`author-${i}`} />
            ))}
          </div>
        </div>
      </SectionBlock>
    );
  }
  return (
    <SectionBlock title="text-top-authors" href={ROUTES.AUTHORS}>
      {!isLoading && !authors.length ? (
        <div className="min-h-full pt-6 pb-8 px-9 lg:p-8">
          <NotFound text="text-no-category" className="h-96" />
        </div>
      ) : (
        <div>
          <AuthorCarousel items={authors} className="pt-8 -mt-8">
            {(item) => <AuthorCard item={item} />}
          </AuthorCarousel>
        </div>
      )}
    </SectionBlock>
  );
};

export default TopAuthorsGrid;
