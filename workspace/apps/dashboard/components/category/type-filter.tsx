import Select from "@components/ui/select/select";
import React from "react";
import { useTranslation } from "next-i18next";
import cn from "classnames";
import { useTypesQuery } from "@data/type/use-types.query";

type Props = {
  onTypeFilter: Function;
  className?: string;
};

export default function TypeFilter({ onTypeFilter, className }: Props) {
  const { t } = useTranslation();

  const { data, isLoading: loading } = useTypesQuery({
    limit: 999
  });

  return (
    <div className={cn("flex w-full", className)}>
      <div className="w-full">
        <Select
          options={data?.types?.data}
          isLoading={loading}
          getOptionLabel={(option: any) => option.name}
          getOptionValue={(option: any) => option.slug}
          placeholder={t("common:filter-by-group-placeholder")}
          onChange={onTypeFilter}
        />
      </div>
    </div>
  );
}
