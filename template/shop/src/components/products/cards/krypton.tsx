import Link from '@/components/ui/link';
import { Image } from '@/components/ui/image';
import cn from 'classnames';
import usePrice from '@/lib/use-price';
import { useTranslation } from 'next-i18next';
import { ROUTES } from '@/lib/routes';
import { productPlaceholder } from '@/lib/placeholders';
import { Product } from '@/framework/types';

type KryptonProps = {
  product: any;
  className?: string;
};

const Krypton: React.FC<KryptonProps> = ({ product, className }) => {
  const { t } = useTranslation('common');
  // const { name, slug, image } = product ?? {};
  // const { price, basePrice, discount } = usePrice({
  //   amount: product.sale_price ? product.sale_price : product.price!,
  //   baseAmount: product.price,
  // });

  const { name, image, slug, min_price, max_price, product_type } =
    product ?? {};
  const { price, basePrice, discount } = usePrice({
    amount: product.sale_price ? product.sale_price : product.price!,
    baseAmount: product.price,
  });
  const { price: minPrice } = usePrice({
    amount: min_price,
  });
  const { price: maxPrice } = usePrice({
    amount: max_price,
  });

  return (
    <Link href={`${ROUTES.PRODUCT}/${slug}`}>
      <article
        className={cn(
          'product-card cart-type-krypton h-full rounded border border-border-200 bg-light overflow-hidden cursor-pointer transition-shadow duration-200 hover:shadow-sm',
          className
        )}
      >
        <div className="relative flex items-center justify-center w-auto h-48 sm:h-64">
          <span className="sr-only">{t('text-product-image')}</span>
          <Image
            src={image?.original ?? productPlaceholder}
            alt={name}
            layout="fill"
            objectFit="contain"
            className="product-image"
          />
          {discount && (
            <div className="absolute top-3 ltr:right-3 rtl:left-3 md:top-4 ltr:md:right-4 rtl:md:left-4 rounded-full text-xs leading-6 font-semibold px-2 md:px-2.5 bg-yellow-500 text-light">
              {discount}
            </div>
          )}
        </div>
        {/* End of product image */}

        <header className="p-3 md:p-6 text-center">
          <h3 className="text-sm text-heading font-semibold truncate mb-2">
            {name}
          </h3>
          {/* End of product title */}

          {product_type.toLowerCase() === 'variable' ? (
            <div>
              <span className="text-sm text-sub-heading">{minPrice}</span>
              <span> - </span>
              <span className="text-sm text-sub-heading">{maxPrice}</span>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <span className="text-sm text-sub-heading">{price}</span>
              {basePrice && (
                <del className="text-sm text-muted ltr:ml-2 rtl:mr-2">
                  {basePrice}
                </del>
              )}
            </div>
          )}
        </header>
      </article>
    </Link>
  );
};

export default Krypton;
