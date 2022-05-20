import { Image } from '@/components/ui/image';
import cn from 'classnames';
import usePrice from '@/lib/use-price';
import { AddToCart } from '@/components/products/add-to-cart/add-to-cart';
import { useTranslation } from 'next-i18next';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { Product } from '@/framework/types';
import { productPlaceholder } from '@/lib/placeholders';
import CartIcon from '@/components/icons/cart';

type HeliumProps = {
  product: any;
  className?: string;
};

const Helium: React.FC<HeliumProps> = ({ product, className }) => {
  const { t } = useTranslation('common');
  // const { name, image, unit, quantity } = product ?? {};
  // const { price, basePrice, discount } = usePrice({
  //   amount: product.sale_price ? product.sale_price : product.price!,
  //   baseAmount: product.price,
  // });

  const { name, image, unit, quantity, min_price, max_price, product_type } =
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
        'product-card cart-type-helium rounded border border-border-200 h-full bg-light overflow-hidden transition-shadow duration-200 hover:shadow-sm',
        className
      )}
    >
      <div
        onClick={handleProductQuickView}
        className="relative flex items-center justify-center w-auto h-48 sm:h-64"
        role="button"
      >
        <span className="sr-only">{t('text-product-image')}</span>
        <Image
          src={image?.original ?? productPlaceholder}
          alt={name}
          layout="fill"
          objectFit="contain"
          className="product-image"
        />
        {discount && (
          <div className="absolute top-3 ltr:right-3 rtl:left-3 md:top-4 ltr:md:right-4 rtl:md:left-4 rounded-full text-xs leading-6 font-semibold px-1.5 sm:px-2 md:px-2.5 bg-yellow-500 text-light">
            {discount}
          </div>
        )}
      </div>
      {/* End of product image */}

      <header className="p-3 md:py-6 md:p-5 relative">
        <h3
          onClick={handleProductQuickView}
          role="button"
          className="text-heading text-sm font-semibold truncate mb-2"
        >
          {name}
        </h3>
        <p className="text-muted text-xs">{unit}</p>
        {/* End of product info */}

        <div className="flex items-center justify-between min-h-6 mt-7 md:mt-8 relative">
          {product_type.toLowerCase() === 'variable' ? (
            <>
              <div>
                <span className="text-accent text-sm md:text-[15px] font-semibold">
                  {minPrice}
                </span>
                <span> - </span>
                <span className="text-accent text-sm md:text-[15px] font-semibold">
                  {maxPrice}
                </span>
              </div>

              {Number(quantity) > 0 && (
                <button
                  onClick={handleProductQuickView}
                  className="order-5 sm:order-4 py-2 px-3 sm:px-4 border-2 border-border-100 flex items-center justify-center sm:justify-start text-sm font-semibold rounded-full text-accent hover:text-light bg-light hover:bg-accent hover:border-accent transition-colors duration-300 focus:outline-none focus:bg-accent focus:border-accent focus:text-light"
                >
                  <CartIcon className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
                  <span>{t('text-cart')}</span>
                </button>
              )}
            </>
          ) : (
            <>
              <div className="relative">
                {basePrice && (
                  <del className="text-xs text-muted text-opacity-75 absolute -top-4 md:-top-5 italic">
                    {basePrice}
                  </del>
                )}
                <span className="text-accent text-sm md:text-base font-semibold">
                  {price}
                </span>
              </div>

              {Number(quantity) > 0 && (
                <AddToCart data={product} variant="single" />
              )}
            </>
          )}

          {Number(quantity) <= 0 && (
            <div className="bg-red-500 rounded text-xs text-light px-2 py-1">
              {t('text-out-stock')}
            </div>
          )}
          {/* End of product price */}
        </div>
      </header>
    </article>
  );
};

export default Helium;
