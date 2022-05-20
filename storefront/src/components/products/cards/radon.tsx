import Link from '@/components/ui/link';
import { Image } from '@/components/ui/image';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { ROUTES } from '@/lib/routes';
import { Product } from '@/framework/types';
import { productPlaceholder } from '@/lib/placeholders';
import usePrice from '@/lib/use-price';

type RadonProps = {
  product: Product;
  className?: string;
};

const Radon: React.FC<RadonProps> = ({ product, className }) => {
  const { t } = useTranslation('common');
  const { name, slug, image, author, min_price, max_price, product_type } =
    product ?? {};

  const { price, basePrice, discount } = usePrice({
    amount: product.sale_price ? product.sale_price : product.price!,
    baseAmount: product.price,
  });
  const { price: minPrice } = usePrice({
    amount: min_price!,
  });
  const { price: maxPrice } = usePrice({
    amount: max_price!,
  });

  return (
    <article
      className={cn(
        'product-card cart-type-radon h-full flex flex-col overflow-hidden duration-200',
        className
      )}
    >
      {/* <div className="relative flex items-center justify-center w-auto h-64 sm:h-80"> */}
      <Link href={`${ROUTES.PRODUCT}/${slug}`} className="cursor-pointer">
        <Image
          src={image?.original ?? productPlaceholder}
          alt={name}
          layout="responsive"
          width={600}
          height={888}
          className="product-image rounded-lg"
        />
      </Link>
      {/* End of product image */}

      <header className="pt-4 flex flex-col shrink-0 space-y-2">
        {name && (
          <Link
            href={`${ROUTES.PRODUCT}/${slug}`}
            className="text-sm md:text-base text-heading font-semibold transition-colors hover:text-orange-500"
            title={name}
          >
            {name}
          </Link>
        )}

        {author && (
          <span className="text-xs md:text-sm text-gray-400">
            {t('text-by')}
            <Link
              href={`${ROUTES.AUTHORS}/${author?.slug!}`}
              className="text-body transition-colors hover:text-orange-500 ltr:ml-1 rtl:mr-1"
            >
              {author?.name}
            </Link>
          </span>
        )}

        <div className="flex items-center shrink-0">
          {product_type.toLowerCase() === 'variable' ? (
            <p className="text-sm md:text-base text-orange-500 font-semibold">
              {minPrice}

              <span className="text-heading"> - </span>

              {maxPrice}
            </p>
          ) : (
            <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
              <span className="text-base text-orange-500 font-semibold">
                {price}
              </span>
              {basePrice && (
                <del className="text-xs text-gray-400 font-semibold ltr:mr-2 rtl:ml-2">
                  {basePrice}
                </del>
              )}
              {discount && (
                <div className="text-xs text-accent">
                  ({t('text-save')} {discount})
                </div>
              )}
            </div>
          )}
        </div>
      </header>
      {/* End of product info */}
    </article>
  );
};

export default Radon;
