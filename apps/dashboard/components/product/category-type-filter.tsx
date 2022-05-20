import Select from "@components/ui/select/select";
import { useCategoriesQuery } from "@graphql/categories.graphql";
import React from "react";
import { useTypesQuery } from "@graphql/type.graphql";
import { useTranslation } from "next-i18next";
import Label from "@components/ui/label";
import cn from "classnames";
import {
  QueryProductsHasCategoriesColumn,
  QueryProductsHasTypeColumn,
} from "__generated__/__types__";

type Props = {
  refetch: Function;
  className?: string;
};

export default function CategoryTypeFilter({ refetch, className }: Props) {
  const { t } = useTranslation();

  const { data, loading } = useTypesQuery({
    fetchPolicy: "network-only",
  });
  const { data: categoryData, loading: categoryLoading } = useCategoriesQuery({
    variables: {
      first: 999,
      page: 1,
    },
    fetchPolicy: "network-only",
  });

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:space-x-5 md:items-end space-y-5 md:space-y-0 w-full",
        className
      )}
    >
      <div className="w-full">
        <Label>{t("common:filter-by-group")}</Label>
        <Select
          options={data?.types}
          isLoading={loading}
          getOptionLabel={(option: any) => option.name}
          getOptionValue={(option: any) => option.slug}
          placeholder={t("common:filter-by-group-placeholder")}
          onChange={({ slug }: { slug: string }) => {
            refetch({
              page: 1,
              hasType: {
                column: QueryProductsHasTypeColumn.Slug,
                value: slug,
              },
            });
          }}
        />
      </div>
      <div className="w-full">
        <Label>{t("common:filter-by-category")}</Label>
        <Select
          options={categoryData?.categories?.data}
          getOptionLabel={(option: any) => option.name}
          getOptionValue={(option: any) => option.slug}
          isLoading={categoryLoading}
          placeholder={t("common:filter-by-category-placeholder")}
          onChange={({ slug }: { slug: string }) => {
            refetch({
              page: 1,
              hasCategories: {
                column: QueryProductsHasCategoriesColumn.Slug,
                value: slug,
              },
            });
          }}
        />
      </div>
    </div>
  );
}
