import Router from 'next/router';
import { useTranslation } from 'next-i18next';
interface Props {
  categories: any;
  basePath: string;
  onClose?: () => void;
}

const CategoryBadges = ({ onClose, categories, basePath }: Props) => {
  const { t } = useTranslation('common');

  const handleClick = (path: string) => {
    Router.push(path);
    if (onClose) {
      onClose();
    }
  };
  return (
    <div className="w-full mt-4 md:mt-6 pt-4 md:pt-6 flex flex-row items-start border-t border-border-200 border-opacity-60">
      <span className="text-sm font-semibold text-heading capitalize ltr:mr-6 rtl:ml-6 py-1">
        {t('text-categories')}
      </span>
      <div className="flex flex-row flex-wrap">
        {categories?.map((category: any) => (
          <button
            onClick={() => handleClick(`${basePath}?category=${category.slug}`)}
            key={category.id}
            className="lowercase text-sm text-heading tracking-wider whitespace-nowrap py-1 px-2.5 bg-transparent border border-border-200 rounded ltr:mr-2 rtl:ml-2 mb-2 transition-colors hover:border-accent hover:text-accent focus:outline-none focus:bg-opacity-100"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBadges;
