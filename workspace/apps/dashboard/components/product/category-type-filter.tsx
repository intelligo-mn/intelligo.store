import Select from "@components/ui/select/select";

import React from "react";
import { useTranslation } from "next-i18next";
import Label from "@components/ui/label";
import cn from "classnames";
import { useTypesQuery } from "@data/type/use-types.query";
import { useCategoriesQuery } from "@data/category/use-categories.query";

type Props = {
  onCategoryFilter: Function;
  onTypeFilter: Function;
  className?: string;
};

export default function CategoryTypeFilter({
  onTypeFilter,
  onCategoryFilter,
  className,
}: Props) {
  const { t } = useTranslation();

  const { data, isLoading: loading } = useTypesQuery({
    limit: 999,
  });
  const { data: categoryData, isLoading: categoryLoading } = useCategoriesQuery(
    {
      limit: 999,
    }
  );

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
          options={data?.types?.data}
          isLoading={loading}
          getOptionLabel={(option: any) => option.name}
          getOptionValue={(option: any) => option.slug}
          placeholder={t("common:filter-by-group-placeholder")}
          onChange={onTypeFilter}
        />
      </div>
      <div className="w-full">
        <Label>{t("common:filter-by-category")}</Label>
        <Select
          options={categoryData?.categories?.data}
          getOptionLabel={(option: any) => option.name}
          getOptionValue={(option: any) => option.slug}
          placeholder={t("common:filter-by-category-placeholder")}
          isLoading={categoryLoading}
          onChange={onCategoryFilter}
        />
      </div>
    </div>
  );
}
