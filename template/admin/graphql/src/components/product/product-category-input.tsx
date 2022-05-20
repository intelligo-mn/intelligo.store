import SelectInput from "@components/ui/select-input";
import Label from "@components/ui/label";
import { Control, useFormState, useWatch } from "react-hook-form";
import { useCategoriesQuery } from "@graphql/categories.graphql";
import { useEffect } from "react";
import { useTranslation } from "next-i18next";
import {
  QueryCategoriesHasTypeColumn,
  SqlOperator,
} from "__generated__/__types__";

interface Props {
  control: Control<any>;
  setValue: any;
}

const ProductCategoryInput = ({ control, setValue }: Props) => {
  const { t } = useTranslation();
  const type = useWatch({
    control,
    name: "type",
  });
  const { dirtyFields } = useFormState({
    control,
  });
  useEffect(() => {
    if (type?.slug && dirtyFields?.type) {
      setValue("categories", []);
    }
  }, [type?.slug]);

  const { data, loading } = useCategoriesQuery({
    fetchPolicy: "network-only",
    variables: {
      ...(type && {
        hasType: {
          column: QueryCategoriesHasTypeColumn.Slug,
          operator: SqlOperator.Eq,
          value: type?.slug,
        },
      }),
      first: 1000,
    },
  });
  return (
    <div className="mb-5">
      <Label>{t("form:input-label-categories")}</Label>
      <SelectInput
        name="categories"
        isMulti
        control={control}
        getOptionLabel={(option: any) => option.name}
        getOptionValue={(option: any) => option.id}
        // @ts-ignore
        options={data?.categories?.data ?? []}
        isLoading={loading}
      />
    </div>
  );
};

export default ProductCategoryInput;
