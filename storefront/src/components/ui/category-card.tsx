import { Image } from '@/components/ui/image';
import { productPlaceholder } from '@/lib/placeholders';
import { formatString } from '@/lib/format-string';
import { useTranslation } from 'next-i18next';

interface CategoryItemProps {
  item: any;
  onClick: () => void;
}
const CategoryCard: React.FC<CategoryItemProps> = ({ item, onClick }) => {
  const { t } = useTranslation('common');

  return (
    <div
      className="relative w-full h-80 rounded-lg p-8 bg-light shadow-downfall-sm transition-shadow hover:shadow-downfall-lg group"
      onClick={onClick}
      role="button"
    >
      <div className="flex flex-col flex-1 h-full relative z-10">
        <h3 className="text-heading font-semibold text-lg mb-1">{item.name}</h3>
        <span className="text-body text-s">
          {item?.children?.length
            ? `${item?.children?.length} ${
                item?.children?.length > 1
                  ? t('text-categories')
                  : t('text-category')
              }`
            : formatString(item?.products_count, 'Item')}
        </span>

        <button className="mt-auto flex text-accent font-semibold text-sm underline opacity-100 lg:opacity-0 transition-opacity group-hover:opacity-100">
          {t('text-view-more')}
        </button>
      </div>

      <div className="absolute bottom-0 ltr:right-0 rtl:left-0 w-full h-full rounded-lg overflow-hidden">
        <Image
          className="w-full h-full"
          src={item?.image?.original ?? productPlaceholder}
          alt={item?.name ?? ''}
          layout="responsive"
          width={432}
          height={336}
        />
      </div>
    </div>
  );
};

export default CategoryCard;
