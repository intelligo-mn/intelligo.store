import { Image } from '@/components/ui/image';
import cn from 'classnames';
import usePrice from '@/lib/use-price';
import { AddToCart } from '@/components/products/add-to-cart/add-to-cart';
import { useTranslation } from 'next-i18next';
import { PlusIcon } from '@/components/icons/plus-icon';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { productPlaceholder } from '@/lib/placeholders';

type XenonProps = {
  product: any;
  className?: string;
};

const Xenon: React.FC<XenonProps> = ({ product, className }) => {
  const { t } = useTranslation('common');
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
        'product-card cart-type-xenon rounded h-full bg-light overflow-hidden border border-border-200 border-opacity-70 transform transition-all duration-200 hover:shadow hover:border-transparent hover:-translate-y-0.5',
        className
      )}
    >
      <div
        className="relative flex items-center justify-center cursor-pointer w-auto h-48 sm:h-64"
        onClick={handleProductQuickView}
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
          <div className="absolute top-3 ltr:left-3 rtl:right-3 md:top-4 ltr:md:left-4 rtl:md:right-4 rounded text-xs leading-6 font-semibold px-1.5 md:px-2 lg:px-2.5 bg-accent text-light">
            {discount}
          </div>
        )}
      </div>
      {/* End of product image */}

      <header className="p-3 md:p-6">
        <h3
          className="text-xs md:text-sm text-body truncate cursor-pointer"
          onClick={handleProductQuickView}
        >
          {name}
        </h3>
        {/* End of product name */}

        {/* End of price */}
        <div className="flex items-center justify-between mt-2">
          {product_type.toLowerCase() === 'variable' ? (
            <>
              <div>
                <span className="text-sm md:text-base text-heading font-semibold">
                  {minPrice}
                </span>
                <span> - </span>
                <span className="text-sm md:text-base text-heading font-semibold">
                  {maxPrice}
                </span>
              </div>

              {Number(quantity) > 0 && (
                <button
                  onClick={handleProductQuickView}
                  className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center text-sm text-accent bg-light rounded border border-border-200 transition-colors hover:bg-accent hover:border-accent hover:text-light focus:outline-none focus:bg-accent focus:border-accent focus:text-light"
                >
                  <span className="sr-only">plus</span>
                  <PlusIcon className="w-5 h-5 stroke-2" />
                </button>
              )}
            </>
          ) : (
            <>
              <div className="flex md:items-center flex-col md:flex-row">
                <span className="text-sm md:text-base text-heading font-semibold">
                  {price}
                </span>
                {basePrice && (
                  <del className="text-xs text-muted mt-1 md:mt-0 ltr:md:ml-2 rtl:md:mr-2">
                    {basePrice}
                  </del>
                )}
              </div>

              {Number(quantity) > 0 && (
                <AddToCart
                  variant="argon"
                  data={product}
                  counterClass="absolute sm:static bottom-3 ltr:right-3 rtl:left-3 sm:bottom-0 ltr:sm:right-0 rtl:sm:left-0"
                />
              )}
            </>
          )}

          {Number(quantity) <= 0 && (
            <div className="bg-red-500 rounded text-xs text-light px-1 py-1 truncate">
              {t('text-out-stock')}
            </div>
          )}

          {/* End of cart */}
        </div>
      </header>
    </article>
  );
};

export default Xenon;
