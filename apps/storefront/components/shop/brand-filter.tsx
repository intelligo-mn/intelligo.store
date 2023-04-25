import { CheckBox } from "@components/ui/checkbox";
import { useBrandsInfiniteQuery } from "@framework/brand/brands.query";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "next-i18next";
import { Type } from "@framework/types";
import Button from "@components/ui/button";

export const BrandFilter = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { pathname, query } = router;

  const {
    data,
    isLoading,
    hasNextPage,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
  } = useBrandsInfiniteQuery({
    limit: 5,
  });

  const selectedBrands = query?.brand ? (query.brand as string).split(",") : [];
  const [formState, setFormState] = React.useState<string[]>(selectedBrands);
  React.useEffect(() => {
    setFormState(selectedBrands);
  }, [query?.brand]);

  function handleItemClick(e: React.FormEvent<HTMLInputElement>): void {
    const { value } = e.currentTarget;
    let currentFormState = formState.includes(value)
      ? formState.filter((i) => i !== value)
      : [...formState, value];
    // setFormState(currentFormState);
    const { brand, ...restQuery } = query;
    router.push(
      {
        pathname,
        query: {
          ...restQuery,
          ...(!!currentFormState.length
            ? { brand: currentFormState.join(",") }
            : {}),
        },
      },
      undefined,
      { scroll: false }
    );
  }

  return (
    <div className="block border-b border-gray-300 pb-7 mb-7">
      <h3 className="text-heading text-sm md:text-base font-semibold mb-7">
        {t("text-brands")}
      </h3>
      <div className="mt-2 flex flex-col space-y-4">
        {!isLoading &&
          data?.pages?.map((page) => {
            return page?.data.map((brand: Type) => (
              <CheckBox
                key={brand?.id}
                label={brand?.name}
                name={brand?.name.toLowerCase()}
                checked={formState?.includes(brand.slug)}
                value={brand?.slug}
                onChange={handleItemClick}
              />
            ));
          })}

        <div className="w-full">
          {hasNextPage && (
            <Button
              variant="custom"
              disabled={loadingMore}
              onClick={() => fetchNextPage()}
              className="text-sm text-heading ltr:pl-9 rtl:pr-9 pt-1"
            >
              {t("button-load-more")}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
