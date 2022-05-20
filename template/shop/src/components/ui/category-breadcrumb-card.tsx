import { useRouter } from 'next/router';
import { Image } from '@/components/ui/image';
import CategoryImg from '@/assets/category-img.png';
import ArrowForward from '@/assets/arrow-forward.png';
import BreadcrumbButton from '@/components/ui/breadcrumb-button';
import { useTranslation } from 'next-i18next';

interface BreadcrumbButtonProps {
  text: string;
  image?: any;
  onClick: () => void;
}

const BreadcrumbWithIndicator: React.FC<BreadcrumbButtonProps> = ({
  text,
  image,
  onClick,
}) => (
  <>
    <span className="relative w-[18px] h-[32px] flex-shrink-0">
      <Image
        className="w-full h-full"
        src={ArrowForward}
        alt=">"
        layout="responsive"
        width={18}
        height={32}
      />
    </span>
    <BreadcrumbButton text={text} image={image} onClick={onClick} />
  </>
);

interface CategoryBreadcrumbProps {
  categories: any;
}

const CategoryBreadcrumb: React.FC<CategoryBreadcrumbProps> = ({
  categories,
}) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { pathname, query } = router;

  const resetCategoryClick = () => {
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
  };

  const onCategoryClick = (slug: string) => {
    const { category, ...rest } = query;
    router.push(
      {
        pathname,
        query: { ...rest, category: slug },
      },
      undefined,
      {
        scroll: false,
      }
    );
  };

  return (
    <div className="flex items-center space-x-5 rtl:space-x-reverse">
      <BreadcrumbButton
        text={t('text-all-categories')}
        onClick={resetCategoryClick}
      />

      {categories?.map((category: any) => (
        <BreadcrumbWithIndicator
          key={category?.slug}
          text={category?.name}
          image={category?.image?.original}
          onClick={() => onCategoryClick(category?.slug)}
        />
      ))}
    </div>
  );
};

export default CategoryBreadcrumb;
