import { CheckBox } from "@components/ui/checkbox";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "next-i18next";
import { Category } from "@framework/types";
import Button from "@components/ui/button";
import { useCategoriesInfiniteQuery } from "@framework/category/categories.query";

export const CategoryFilter = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { pathname, query } = router;
  const {
    data,
    isLoading,
    hasNextPage,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
  } = useCategoriesInfiniteQuery({
    limit: 5,
    parent: null
  });

  const selectedCategories = query?.category
    ? (query.category as string).split(",")
    : [];
  const [formState, setFormState] = React.useState<string[]>(
    selectedCategories
  );

  React.useEffect(() => {
    setFormState(selectedCategories);
  }, [query?.category]);

  function handleItemClick(e: React.FormEvent<HTMLInputElement>): void {
    const { value } = e.currentTarget;
    let currentFormState = formState.includes(value)
      ? formState.filter((i) => i !== value)
      : [...formState, value];
    const { category, ...restQuery } = query;
    router.push(
      {
        pathname,
        query: {
          ...restQuery,
          ...(!!currentFormState.length
            ? { category: currentFormState.join(",") }
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
        {t("text-category")}
      </h3>
      <div className="mt-2 flex flex-col space-y-4">
        {!isLoading &&
          data?.pages?.map((page) => {
            return page?.data.map((category: Category) => (
              <CheckBox
                key={category.id}
                label={category.name}
                name={category.name.toLowerCase()}
                checked={formState.includes(category.slug)}
                value={category.slug}
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
