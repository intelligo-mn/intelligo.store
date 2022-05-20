import Scrollbar from '@/components/ui/scrollbar';
import NotFound from '@/components/ui/not-found';
import { Category } from '@/framework/types';
import TreeMenu from '@/components/ui/tree-menu';
import CategoriesLoader from '@/components/ui/loaders/categories-loader';
import { isMobile } from 'react-device-detect';

interface StickySidebarListCategoriesProps {
  notFound: boolean;
  loading: boolean;
  categories: Category[];
  className?: string;
}

const StickySidebarListCategories: React.FC<
  StickySidebarListCategoriesProps
> = ({ notFound, categories, loading, className }) => {
  if (loading) {
    return (
      <div className="hidden xl:block">
        <div className="w-72 mt-8 px-2">
          <CategoriesLoader />
        </div>
      </div>
    );
  }
  return (
    <aside
      className={`lg:sticky lg:top-22 h-full xl:w-72 hidden xl:block bg-light ${className}`}
    >
      {!isMobile && (
        <div className="max-h-full overflow-hidden flex-grow">
          <Scrollbar
            className="w-full max-h-screen"
            style={{ height: 'calc(100vh - 5.35rem)' }}
          >
            {!notFound ? (
              <div className="px-5">
                <TreeMenu items={categories} className="xl:py-8" />
              </div>
            ) : (
              <div className="min-h-full w-full pt-6 pb-8 px-9 lg:p-8">
                <NotFound text="text-no-category" className="h-96" />
              </div>
            )}
          </Scrollbar>
        </div>
      )}

      {isMobile && (
        <div className="max-h-full overflow-hidden flex-grow">
          {!notFound ? (
            <div className="px-5">
              <TreeMenu items={categories} className="xl:py-8" />
            </div>
          ) : (
            <div className="min-h-full w-full pt-6 pb-8 px-9 lg:p-8">
              <NotFound text="text-no-category" className="h-96" />
            </div>
          )}
        </div>
      )}
    </aside>
  );
};

export default StickySidebarListCategories;
