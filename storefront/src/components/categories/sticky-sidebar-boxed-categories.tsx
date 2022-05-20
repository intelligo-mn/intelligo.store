import Scrollbar from '@/components/ui/scrollbar';
import NotFound from '@/components/ui/not-found';
import { Category } from '@/framework/types';
import CategoriesLoader from '@/components/ui/loaders/categories-loader';
import OutlinedBoxedCategoryMenu from '@/components/ui/outlined-boxed-category';

interface StickySidebarBoxedCategoriesProps {
  notFound: boolean;
  loading: boolean;
  categories: Category[];
  className?: string;
}
const StickySidebarBoxedCategories: React.FC<
  StickySidebarBoxedCategoriesProps
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
      className={`lg:sticky lg:top-22 h-full w-full lg:w-[380px] hidden xl:block bg-light lg:bg-gray-100 ${className}`}
    >
      <Scrollbar style={{ maxHeight: 'calc(100vh - 88px)' }}>
        <div className="p-5">
          {!notFound ? (
            <div className="grid grid-cols-2 gap-4">
              <OutlinedBoxedCategoryMenu items={categories} className="py-8" />
            </div>
          ) : (
            <div className="min-h-full pt-6 pb-8 px-4 lg:p-8">
              <NotFound text="text-no-category" className="h-96" />
            </div>
          )}
        </div>
      </Scrollbar>
    </aside>
  );
};

export default StickySidebarBoxedCategories;
