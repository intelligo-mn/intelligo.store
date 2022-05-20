import Image from "next/image";
import usePrice from "@utils/use-price";
import { productPlaceholder } from "@utils/placeholders";
import { useModalAction } from "@components/ui/modal/modal.context";
import { AddToCart } from "@components/cart/add-to-cart/add-to-cart";
import { useTranslation } from "next-i18next";
import { PlusIcon } from "@components/icons/plus-icon";
import { Product, ProductType } from "@ts-types/generated";

interface Props {
  item: Product;
}

const ProductCard = ({ item }: Props) => {
  const { t } = useTranslation();
  const {
    slug,
    name,
    image,
    product_type,
    quantity,
    price,
    max_price,
    min_price,
    sale_price,
  } = item ?? {};
  const {
    price: currentPrice,
    basePrice,
    discount,
  } = usePrice({
    amount: sale_price ? sale_price : price!,
    baseAmount: price ?? 0,
  });
  const { price: minPrice } = usePrice({
    amount: min_price ?? 0,
  });
  const { price: maxPrice } = usePrice({
    amount: max_price ?? 0,
  });

  const { openModal } = useModalAction();

  function handleVariableProduct() {
    return openModal("SELECT_PRODUCT_VARIATION", slug);
  }
  return (
    <div className="cart-type-neon border border-border-200 rounded h-full bg-light overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md">
      {/* <h3>{name}</h3> */}

      <div className="relative flex items-center justify-center w-auto h-48 sm:h-64">
        <span className="sr-only">{t("text-product-image")}</span>
        <Image
          src={image?.original ?? productPlaceholder}
          alt={name}
          layout="fill"
          objectFit="contain"
          className="product-image"
        />
        {discount && (
          <div className="absolute top-3 end-3 md:top-4 md:end-4 rounded text-xs leading-6 font-semibold px-1.5 sm:px-2 md:px-2.5 bg-accent text-light">
            {discount}
          </div>
        )}
      </div>

      <header className="p-3 md:p-6">
        {product_type === ProductType.Variable ? (
          <div className="mb-2" onClick={handleVariableProduct}>
            <span className="text-sm md:text-base text-heading font-semibold">
              {minPrice}
            </span>
            <span> - </span>
            <span className="text-sm md:text-base text-heading font-semibold">
              {maxPrice}
            </span>
          </div>
        ) : (
          // <div>
          //   <div className="flex items-center mb-2">
          //     <span className="text-sm md:text-base text-heading font-semibold">
          //       {currentPrice}
          //     </span>
          //     {discount && (
          //       <del className="text-xs md:text-sm text-body ms-2">
          //         {basePrice}
          //       </del>
          //     )}
          //   </div>
          //   <div>
          //     {Number(quantity) > 0 && (
          //       <AddToCart variant="argon" data={item} />
          //     )}
          //   </div>
          // </div>

          <div className="flex items-center mb-2">
            <span className="text-sm md:text-base text-heading font-semibold">
              {currentPrice}
            </span>
            {basePrice && (
              <del className="text-xs md:text-sm text-muted ms-2">
                {basePrice}
              </del>
            )}
          </div>
        )}

        <h3 className="text-xs md:text-sm text-body truncate mb-4">{name}</h3>

        {product_type === ProductType.Variable ? (
          <>
            {Number(quantity) > 0 && (
              <button
                onClick={handleVariableProduct}
                className="group w-full h-7 md:h-9 flex items-center justify-between text-xs md:text-sm text-body-dark rounded bg-gray-100 transition-colors hover:bg-accent hover:border-accent hover:text-light focus:outline-none focus:bg-accent focus:border-accent focus:text-light"
              >
                <span className="flex-1">{t("text-add")}</span>
                <span className="w-7 h-7 md:w-9 md:h-9 bg-gray-200 grid place-items-center rounded-te rounded-be transition-colors duration-200 group-hover:bg-accent-600 group-focus:bg-accent-600">
                  <PlusIcon className="w-4 h-4 stroke-2" />
                </span>
              </button>
            )}
          </>
        ) : (
          <>
            {Number(quantity) > 0 && <AddToCart variant="neon" data={item} />}
          </>
        )}

        {Number(quantity) <= 0 && (
          <div className="bg-red-500 rounded text-xs text-light px-2 py-1">
            {t("text-out-stock")}
          </div>
        )}
      </header>
    </div>
  );
};

export default ProductCard;
