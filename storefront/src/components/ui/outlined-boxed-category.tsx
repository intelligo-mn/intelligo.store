import { useRouter } from 'next/router';
import cn from 'classnames';
import { getIcon } from '@/lib/get-icon';
import * as CategoryIcons from '@/components/icons/category';

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
        'text-center rounded bg-light py-4 flex flex-col items-center justify-start relative overflow-hidden cursor-pointer border-2',
        selectedQueries === item?.slug
          ? 'border-gray-800'
          : 'border-border-100 xl:border-transparent'
      )}
      role="button"
      onClick={() => onCategoryClick(item?.slug!)}
    >
      <div className="w-full h-20 flex items-center justify-center">
        <span className="w-10 h-10 inline-block">
          {getIcon({
            iconList: CategoryIcons,
            iconName: item?.icon!,
            className: 'w-10 h-10',
          })}
        </span>
      </div>

      <span className="text-sm font-semibold text-heading text-center px-2.5 block">
        {item?.name}
      </span>
    </div>
  );
};

function OutlinedBoxedCategoryMenu({ items }: any) {
  return (
    <>
      {items?.map((item: any) => (
        <CategoryItem key={`${item.name}${item.slug}`} item={item} />
      ))}
    </>
  );
}

export default OutlinedBoxedCategoryMenu;
