import Button from "@components/ui/button";
import React from "react";
import { useTranslation } from "next-i18next";
import { QueryProductsOrderByColumn, SortOrder } from "__generated__/__types__";

type Props = {
  refetch: Function;
};

export default function ClearFilterButton({ refetch }: Props) {
  const { t } = useTranslation();
  return (
    <Button
      onClick={() => {
        refetch({
          first: 10,
          hasType: null,
          // shop_id: null,
          hasCategories: null,
          // status: null,
          orderBy: [
            {
              column: QueryProductsOrderByColumn.CreatedAt,
              order: SortOrder.Desc,
            },
          ],
          page: 1,
        });
      }}
    >
      Clear
    </Button>
  );
}
