import cn from 'classnames';
import NotFound from '@/components/ui/not-found';
import CategoriesLoader from '@/components/ui/loaders/categories-loader';
import CategoryCard from '@/components/ui/category-card';
import { useRouter } from 'next/router';
import CategoryBreadcrumb from '@/components/ui/category-breadcrumb-card';
import Scrollbar from '@/components/ui/scrollbar';
import isEmpty from 'lodash/isEmpty';
import { useTranslation } from 'next-i18next';
import findNestedData from '@/lib/find-nested-data';
import type { Category } from '@/types';
import ProductGridHome from '@/components/products/grids/home';

function findParentCategories(
  treeItems: any[],
  parentId: number | null = null,
  link = 'id'
): any[] {
  let itemList: any[] = [];
  if (parentId) {
    const parentItem = treeItems?.find((item) => item[link] === parentId);
    itemList = parentItem?.parent_id
      ? [
          ...findParentCategories(treeItems, parentItem.parent_id),
          parentItem,
          ...itemList,
        ]
      : [parentItem, ...itemList];
  }
  return itemList;
}

interface FilterCategoryGridProps {
  notFound: boolean;
  loading: boolean;
  categories: Category[];
  className?: string;
  variables: any;
}
const FilterCategoryGrid: React.FC<FilterCategoryGridProps> = ({
  notFound,
  categories,
  loading,
  variables,
}) => {
  const { t } = useTranslation('common');

  const router = useRouter();
  const { pathname, query } = router;
  const selectedCategory =
    Boolean(query.category) &&
    findNestedData(categories, query.category, 'children');
  const parentCategories = findParentCategories(
    categories,
    selectedCategory?.parent_id
  );
  const renderCategories = Boolean(selectedCategory)
    ? selectedCategory?.children
    : categories?.filter((category) => !category?.parent_id);

  const onCategoryClick = (slug: string) => {
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

  if (loading) {
    return (
      <div className="hidden xl:block">
        <div className="mt-8 w-72 px-2">
          <CategoriesLoader />
        </div>
      </div>
    );
  }
  if (notFound) {
    return (
      <div className="bg-light">
        <div className="min-h-full p-5 md:p-8 lg:p-12 2xl:p-16">
          <NotFound text="text-no-category" className="h-96" />
        </div>
      </div>
    );
  }
  return (
    <div className="bg-light">
      <div className="px-3 pt-3 md:px-6 md:pt-6 lg:px-10 lg:pt-10 2xl:px-14 2xl:pt-14">
        {query?.category ? (
          <Scrollbar className="w-full">
            <div
              className={cn('px-2 pt-2 pb-7', {
                'mb-8 divide-dashed border-b border-dashed border-gray-200':
                  query?.category,
              })}
            >
              <CategoryBreadcrumb
                categories={[...parentCategories, selectedCategory]}
              />
            </div>
          </Scrollbar>
        ) : (
          <h3 className="mb-8 px-2 pt-2 text-2xl font-semibold text-heading">
            {t('text-all-categories')}
          </h3>
        )}
      </div>

      <div className="p-5 !pt-0 md:p-8 lg:p-12 2xl:p-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-6">
          {Array.isArray(renderCategories) &&
            renderCategories?.map((item: any, idx: number) => (
              <CategoryCard
                key={idx}
                item={item}
                onClick={() => onCategoryClick(item?.slug!)}
              />
            ))}
        </div>
        {/* {isEmpty(renderCategories) && <Products layout="minimal" />} */}
        {isEmpty(renderCategories) && (
          <ProductGridHome
            gridClassName="!grid-cols-[repeat(auto-fill,minmax(290px,1fr))]"
            variables={variables}
          />
        )}
      </div>
    </div>
  );
};

export default FilterCategoryGrid;
