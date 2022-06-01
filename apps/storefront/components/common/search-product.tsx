import Link from "@components/ui/link";
import Image from "next/image";
import usePrice from "@lib/use-price";
import { ROUTES } from "@lib/routes";
import isEmpty from "lodash/isEmpty";
import VariationPrice from "@components/product/product-variant-price";
import React from "react";
import {getVariations} from "@framework/utils/get-variations";

type SearchProductProps = {
  item: any;
};

const SearchProduct: React.FC<SearchProductProps> = ({ item }) => {
  const { price, basePrice } = usePrice({
    amount: item?.sale_price ? item?.sale_price : item?.price!,
    baseAmount: item?.price,
  });

  const variations = getVariations(item?.variations!);

  return (
    <Link
      href={`${ROUTES.PRODUCT}/${item?.slug}`}
      className="group w-full h-auto flex justify-start items-center"
    >
      <div className="relative flex w-16 md:w-24 h-16 md:h-24 rounded-md overflow-hidden bg-gray-200 flex-shrink-0 cursor-pointer ltr:mr-4 rtl:ml-4">
        <Image
          src={
            item?.image?.original ?? "/assets/placeholder/search-product.svg"
          }
          width={96}
          height={96}
          loading="eager"
          alt={item.name || "Product Image"}
          className="bg-gray-200 object-cover"
        />
      </div>
      <div className="flex flex-col w-full overflow-hidden">
        <h3 className="truncate text-sm text-heading mb-2">{item.name}</h3>

        <div className="text-heading font-semibold text-sm">
          {!isEmpty(variations) ? (
            <VariationPrice
              minPrice={item.min_price}
              maxPrice={item.max_price}
              basePriceClassName="text-heading font-semibold text-sm"
              discountPriceClassName="ltr:pl-2 rtl:pr-2 text-gray-400 font-normal"
            />
          ) : (
            <>
              <div className="text-heading font-semibold text-sm">
                {price}

                {basePrice && (
                  <del className="ltr:pl-2 rtl:pr-2 text-gray-400 font-normal">
                    {basePrice}
                  </del>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default SearchProduct;
