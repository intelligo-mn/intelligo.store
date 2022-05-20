import BackButton from '@/components/ui/back-button';
import { AddToCart } from '@/components/products/add-to-cart/add-to-cart';
import usePrice from '@/lib/use-price';
import { ThumbsCarousel } from '@/components/ui/thumb-carousel';
import { useTranslation } from 'next-i18next';
import { getVariations } from '@/lib/get-variations';
import { useMemo } from 'react';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import Truncate from '@/components/ui/truncate';
import { scroller, Element } from 'react-scroll';
import CategoryBadges from './category-badges';
import VariationPrice from './variation-price';
import { useRouter } from 'next/router';
import { ROUTES } from '@/lib/routes';
import type { Product } from '@/framework/types';
import { useAtom } from 'jotai';
import VariationGroups from './variation-groups';
import { isVariationSelected } from '@/lib/is-variation-selected';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { Waypoint } from 'react-waypoint';
import { stickyShortDetailsAtom } from '@/store/sticky-short-details-atom';
import { useAttributes } from './attributes.context';
import classNames from 'classnames';
import { displayImage } from '@/lib/display-product-preview-images';

type Props = {
  product: Product;
  backBtn?: boolean;
  isModal?: boolean;
};
const Details: React.FC<Props> = ({
  product,
  backBtn = true,
  isModal = false,
}) => {
  const {
    name,
    image, //could only had image we need to think it also
    description,
    unit,
    categories,
    gallery,
    type,
    quantity,
    shop,
    slug,
  } = product ?? {};
  const { t } = useTranslation('common');
  const [_, setShowStickyShortDetails] = useAtom(stickyShortDetailsAtom);

  const router = useRouter();
  const { closeModal } = useModalAction();

  const { attributes } = useAttributes();

  const { price, basePrice, discount } = usePrice({
    amount: product?.sale_price ? product?.sale_price : product?.price!,
    baseAmount: product?.price,
  });

  const navigate = (path: string) => {
    router.push(path);
    closeModal();
  };

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

  const scrollDetails = () => {
    scroller.scrollTo('details', {
      smooth: true,
      offset: -80,
    });
  };

  const onWaypointPositionChange = ({
    currentPosition,
  }: Waypoint.CallbackArgs) => {
    if (!currentPosition || currentPosition === 'above') {
      setShowStickyShortDetails(true);
    }
  };
  const hasVariations = !isEmpty(variations);
  const previewImages = displayImage(selectedVariation?.image, gallery, image);

  return (
    <article className="rounded-lg bg-light">
      <div className="flex flex-col border-b md:flex-row border-border-200 border-opacity-70">
        <div className="p-6 pt-10 md:w-1/2 lg:p-14 xl:p-16">
          <div className="flex items-center justify-between mb-8 lg:mb-10">
            {backBtn && <BackButton />}
            {discount && (
              <div className="px-3 text-xs font-semibold leading-6 bg-yellow-500 rounded-full text-light ltr:ml-auto rtl:mr-auto">
                {discount}
              </div>
            )}
          </div>

          <div className="h-full product-gallery">
            <ThumbsCarousel
              gallery={previewImages}
              hideThumbs={previewImages.length <= 1}
            />
          </div>
        </div>

        <div className="flex flex-col items-start p-5 pt-10 md:w-1/2 lg:p-14 xl:p-16">
          <Waypoint
            onLeave={() => setShowStickyShortDetails(true)}
            onEnter={() => setShowStickyShortDetails(false)}
            onPositionChange={onWaypointPositionChange}
          >
            <div className="w-full">
              <h1
                className={classNames(
                  `font-semibold text-lg md:text-xl xl:text-2xl tracking-tight text-heading`,
                  {
                    'cursor-pointer transition-colors hover:text-accent':
                      isModal,
                  }
                )}
                {...(isModal && {
                  onClick: () => navigate(`${ROUTES.PRODUCT}/${slug}`),
                })}
              >
                {name}
              </h1>

              {unit && !hasVariations && (
                <span className="block mt-2 text-sm font-normal text-body md:mt-3">
                  {unit}
                </span>
              )}

              {description && (
                <div className="mt-3 text-sm leading-7 md:mt-4 text-body">
                  <Truncate
                    character={150}
                    {...(!isModal && {
                      onClick: () => scrollDetails(),
                      compressText: 'common:text-see-more',
                    })}
                  >
                    {description}
                  </Truncate>
                </div>
              )}

              {hasVariations ? (
                <>
                  <div className="flex items-center my-5 md:my-10">
                    <VariationPrice
                      selectedVariation={selectedVariation}
                      minPrice={product.min_price}
                      maxPrice={product.max_price}
                    />
                  </div>
                  <div>
                    <VariationGroups variations={variations} />
                  </div>
                </>
              ) : (
                <span className="flex items-center my-5 md:my-10">
                  <ins className="text-2xl font-semibold no-underline md:text-3xl text-accent">
                    {price}
                  </ins>
                  {basePrice && (
                    <del className="text-sm font-normal md:text-base text-muted ltr:ml-2 rtl:mr-2">
                      {basePrice}
                    </del>
                  )}
                </span>
              )}

              <div className="flex flex-col items-center mt-4 md:mt-6 lg:flex-row">
                <div className="mb-3 lg:mb-0 w-full lg:max-w-[400px]">
                  <AddToCart
                    data={product}
                    variant="big"
                    variation={selectedVariation}
                    disabled={selectedVariation?.is_disable || !isSelected}
                  />
                </div>

                {!hasVariations && (
                  <>
                    {Number(quantity) > 0 ? (
                      <span className="text-base text-body whitespace-nowrap ltr:lg:ml-7 rtl:lg:mr-7">
                        {quantity} {t('text-pieces-available')}
                      </span>
                    ) : (
                      <div className="text-base text-red-500 whitespace-nowrap ltr:lg:ml-7 rtl:lg:mr-7">
                        {t('text-out-stock')}
                      </div>
                    )}
                  </>
                )}
                {!isEmpty(selectedVariation) && (
                  <span className="text-base text-body whitespace-nowrap ltr:lg:ml-7 rtl:lg:mr-7">
                    {selectedVariation?.is_disable ||
                    selectedVariation.quantity === 0
                      ? t('text-out-stock')
                      : `${selectedVariation.quantity} ${t(
                          'text-pieces-available'
                        )}`}
                  </span>
                )}
              </div>
            </div>
          </Waypoint>

          {!!categories?.length && (
            <CategoryBadges
              categories={categories}
              basePath={`/${type?.slug}`}
              onClose={closeModal}
            />
          )}

          {shop?.name && (
            <div className="flex items-center mt-2">
              <span className="py-1 text-sm font-semibold capitalize text-heading ltr:mr-6 rtl:ml-6">
                {t('common:text-sellers')}
              </span>

              <button
                onClick={() =>
                  navigate(`${ROUTES.SHOPS}/${encodeURIComponent(shop?.slug)}`)
                }
                className="text-sm tracking-wider underline transition text-accent hover:text-accent-hover hover:no-underline"
              >
                {shop?.name}
              </button>
            </div>
          )}
        </div>
      </div>

      <Element
        name="details"
        className="px-5 py-4 border-b lg:px-16 lg:py-14 border-border-200 border-opacity-70"
      >
        <h2 className="mb-4 text-lg font-semibold tracking-tight text-heading md:mb-6">
          {t('text-details')}
        </h2>
        <p className="text-sm text-body">{description}</p>
      </Element>
    </article>
  );
};

export default Details;
