import { Image } from '@/components/ui/image';
import cn from 'classnames';
import { AddToCart } from '@/components/products/add-to-cart/add-to-cart';
import usePrice from '@/lib/use-price';
import { useTranslation } from 'next-i18next';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { productPlaceholder } from '@/lib/placeholders';
import { Product } from '@/framework/types';
import { PlusIcon } from '@/components/icons/plus-icon';

type ArgonProps = {
  product: any;
  className?: string;
};

const Argon: React.FC<ArgonProps> = ({ product, className }) => {
  const { t } = useTranslation('common');
  // const { name, image, quantity } = product ?? {};
  // const { price, basePrice, discount } = usePrice({
  //   amount: product.sale_price ? product.sale_price : product.price!,
  //   baseAmount: product.price,
  // });

  const { name, image, quantity, min_price, max_price, product_type } =
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

  const { openModal } = useModalAction();

  function handleProductQuickView() {
    return openModal('PRODUCT_DETAILS', product.slug);
  }

  return (
    <article
      className={cn(
        'product-card cart-type-argon rounded bg-light overflow-hidden shadow-downfall-sm transition-all duration-200 hover:shadow-downfall-lg transform hover:-translate-y-0.5 h-full',
        className
      )}
      onClick={handleProductQuickView}
      role="button"
    >
      <div className="relative flex items-center justify-center w-auto h-48 sm:h-52">
        <span className="sr-only">{t('text-product-image')}</span>
        <Image
          src={image?.original ?? productPlaceholder}
          alt={name}
          layout="fill"
          objectFit="contain"
          className="product-image"
        />

        {discount && (
          <div className="absolute top-3 ltr:left-3 rtl:right-3 md:top-[22px] ltr:md:left-4 rtl:md:right-4 rounded text-xs leading-6 font-semibold px-1.5 sm:px-2 md:px-2.5 bg-accent text-light">
            {discount}
          </div>
        )}

        <div className="absolute top-3 ltr:right-3 rtl:left-3 md:top-4 ltr:md:right-4 rtl:md:left-4">
          {product_type.toLowerCase() === 'variable' ? (
            <>
              {Number(quantity) > 0 && (
                <button
                  onClick={handleProductQuickView}
                  className="flex items-center justify-center text-sm transition-colors border rounded w-7 h-7 md:w-9 md:h-9 text-heading bg-light border-border-200 hover:bg-accent hover:border-accent hover:text-light focus:outline-none focus:bg-accent focus:border-accent focus:text-light"
                >
                  <PlusIcon className="w-5 h-5 stroke-2" />
                </button>
              )}
            </>
          ) : (
            <>
              {Number(quantity) > 0 && (
                <AddToCart variant="argon" data={product} />
              )}
            </>
          )}

          {Number(quantity) <= 0 && (
            <div className="px-2 py-1 text-xs bg-red-500 rounded text-light">
              {t('text-out-stock')}
            </div>
          )}
        </div>
      </div>
      {/* End of product image */}

      <header className="p-3 md:p-6">
        {product_type.toLowerCase() === 'variable' ? (
          <div className="mb-2">
            <span className="text-sm font-semibold md:text-base text-heading">
              {minPrice}
            </span>
            <span> - </span>
            <span className="text-sm font-semibold md:text-base text-heading">
              {maxPrice}
            </span>
          </div>
        ) : (
          <div className="flex items-center mb-2">
            <span className="text-sm font-semibold md:text-base text-heading">
              {price}
            </span>
            {basePrice && (
              <del className="text-xs md:text-sm text-body ltr:ml-2 rtl:mr-2">
                {basePrice}
              </del>
            )}
          </div>
        )}
        {/* End of product price */}

        <h3 className="text-xs md:text-sm text-body">{name}</h3>
        {/* End of product title */}
      </header>
    </article>
  );
};

export default Argon;
