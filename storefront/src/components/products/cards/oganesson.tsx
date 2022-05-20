import { Image } from '@/components/ui/image';
import cn from 'classnames';
import usePrice from '@/lib/use-price';
import { AddToCart } from '@/components/products/add-to-cart/add-to-cart';
import { useTranslation } from 'next-i18next';
import { productPlaceholder } from '@/lib/placeholders';
import { Product } from '@/framework/types';

type OganessonProps = {
  product: Product;
  className?: string;
};

const Oganesson: React.FC<OganessonProps> = ({ product, className }) => {
  const { t } = useTranslation('common');
  const { name, image, quantity } = product ?? {};
  const { price, basePrice, discount } = usePrice({
    amount: product.sale_price ? product.sale_price : product.price!,
    baseAmount: product.price,
  });

  return (
    <article
      className={cn('product-card cart-type-oganesson group h-full', className)}
    >
      <div className="relative flex items-center justify-center w-auto h-48 overflow-hidden transition-shadow rounded bg-light group-hover:shadow-sm sm:h-64">
        <span className="sr-only">{t('text-product-image')}</span>
        <Image
          src={image?.original ?? productPlaceholder}
          alt={name}
          layout="fill"
          objectFit="contain"
          className="product-image"
        />
        {discount && (
          <div className="absolute top-3 ltr:right-3 rtl:left-3 md:top-[22px] ltr:md:right-4 rtl:md:left-4 rounded text-xs leading-6 font-semibold px-1.5 md:px-2 lg:px-2.5 bg-accent text-light">
            {discount}
          </div>
        )}
        <div className="absolute bottom-4 ltr:right-4 rtl:left-4">
          {Number(quantity) > 0 ? (
            <AddToCart variant="oganesson" data={product} />
          ) : (
            <div className="px-2 py-1 text-xs bg-red-500 rounded text-light">
              {t('text-out-stock')}
            </div>
          )}
        </div>
      </div>
      {/* End of product image */}

      <header className="py-3.5 md:py-5 px-0.5">
        <div className="flex items-center mb-2">
          <span className="text-sm font-semibold md:text-base text-heading">
            {price}
          </span>
          {basePrice && (
            <del className="text-xs md:text-sm text-muted ltr:ml-2 rtl:mr-2">
              {basePrice}
            </del>
          )}
        </div>
        {/* End of product price */}

        <h3 className="text-xs truncate md:text-sm text-body">{name}</h3>
        {/* End of product title */}
      </header>
    </article>
  );
};

export default Oganesson;
