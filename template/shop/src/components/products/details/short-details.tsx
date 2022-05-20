import { useRouter } from 'next/router';
import Image from 'next/image';
import cn from 'classnames';
import { AddToCart } from '@/components/products/add-to-cart/add-to-cart';
import usePrice from '@/lib/use-price';
import { getVariations } from '@/lib/get-variations';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import VariationPrice from './variation-price';
import { useTranslation } from 'next-i18next';
import { ROUTES } from '@/lib/routes';
import { useModalAction } from '@/components/ui/modal/modal.context';
import VariationGroups from './variation-groups';
import { Product } from '@/framework/types';
import { productPlaceholder } from '@/lib/placeholders';
import { isVariationSelected } from '@/lib/is-variation-selected';
import { useMemo } from 'react';
import { useAttributes } from './attributes.context';

interface ShortDetailsProps {
  product: Product;
  isSticky: boolean;
}
const ShortDetails: React.FC<ShortDetailsProps> = ({ product, isSticky }) => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const { closeModal } = useModalAction();
  const { attributes } = useAttributes();

  const { name, slug, image, unit, quantity, min_price, max_price } =
    product ?? {};

  const navigate = (path: string) => {
    router.push(path);
    closeModal();
  };

  const { price, basePrice, discount } = usePrice({
    amount: product?.sale_price ? product?.sale_price : product?.price!,
    baseAmount: product?.price!,
  });

  const variations = useMemo(
    () => getVariations(product?.variations),
    [product?.variations]
  );

  const isSelected = isVariationSelected(variations, attributes);

  let selectedVariation: any = {};
  if (isSelected) {
    selectedVariation = product?.variation_options?.find((o: any) =>
      isEqual(
        o.options.map((v: any) => v.value).sort(),
        Object.values(attributes).sort()
      )
    );
  }
  const hasVariations = !isEmpty(variations);
  return (
    <div
      className={cn(
        'max-w-6xl h-auto w-full hidden md:block bg-light fixed top-0 left-1/2 transform -translate-x-1/2 z-50 px-8 py-6 shadow transition-all duration-300',
        {
          'invisible opacity-0 -translate-y-1/2': !isSticky,
          'visible opacity-100 translate-y-0': isSticky,
        }
      )}
    >
      <div className="flex items-center">
        <div
          className={cn(
            'border border-border-200 border-opacity-70 rounded relative flex items-center justify-center overflow-hidden shrink-0',
            {
              'w-28 h-28': !hasVariations,
              'w-40 lg:w-52 h-40 lg:h-52': hasVariations,
            }
          )}
        >
          <Image
            src={selectedVariation?.image?.original! ?? image?.original}
            alt={name}
            layout="fill"
            objectFit="contain"
            className="product-image"
          />
        </div>

        <div className="px-8 flex flex-col justify-center ltr:mr-auto rtl:ml-auto overflow-hidden">
          <h3
            className="font-semibold text-lg lg:text-xl tracking-tight text-heading truncate cursor-pointer transition-colors hover:text-accent"
            onClick={() => navigate(`${ROUTES.PRODUCT}/${slug}`)}
            title={name}
          >
            {name}
          </h3>

          {unit && !hasVariations ? (
            <span className="text-sm font-normal text-body mt-2 block">
              {unit}
            </span>
          ) : (
            <span className="flex items-center mt-2">
              {hasVariations && (
                <VariationPrice
                  selectedVariation={selectedVariation}
                  minPrice={min_price}
                  maxPrice={max_price}
                />
              )}
            </span>
          )}
        </div>

        <div
          className={cn('w-full flex shrink-0', {
            'max-w-max': !hasVariations,
            'max-w-[40%]': hasVariations,
          })}
        >
          {!hasVariations && (
            <span className="ltr:mr-8 rtl:ml-8 flex items-center ">
              <ins className="text-xl lg:text-2xl font-semibold text-accent no-underline">
                {price}
              </ins>
              {basePrice && (
                <del className="text-sm lg:text-base font-normal text-muted ltr:ml-2 rtl:mr-2">
                  {basePrice}
                </del>
              )}
            </span>
          )}

          <div className="w-full">
            <div
              className={cn('flex flex-col overflow-y-auto justify-center', {
                'h-[140px]': hasVariations,
              })}
            >
              <VariationGroups variations={variations} />
            </div>

            <div className={cn({ 'mt-4': hasVariations })}>
              {quantity! > 0 ? (
                <AddToCart
                  data={product}
                  variant="big"
                  variation={selectedVariation}
                  disabled={selectedVariation?.is_disable || !isSelected}
                />
              ) : (
                <div className="bg-red-500 rounded text-sm text-light px-3 py-2">
                  {t('text-out-stock')}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortDetails;
