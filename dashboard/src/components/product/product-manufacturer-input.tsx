import SelectInput from "@components/ui/select-input";
import Label from "@components/ui/label";
import { Control, useWatch, useFormState } from "react-hook-form";
import { useManufacturersQuery } from "@graphql/manufacturers.graphql";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";

interface Props {
  control: Control<any>;
  setValue: any;
}

const ProductManufacturerInput = ({ control, setValue }: Props) => {
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
      setValue("manufacturer", []);
    }
  }, [type?.slug]);

  const { data, loading } = useManufacturersQuery({
    fetchPolicy: "network-only",
    variables: {
      first: 1000,
      is_approved: true,
      ...(type && {
        hasType: {
          column: "SLUG",
          value: type?.slug,
        },
      }),
    },
  });

  return (
    <div className="mb-5">
      <Label>{t("common:text-manufacturers")}</Label>
      <SelectInput
        name="manufacturer"
        control={control}
        getOptionLabel={(option: any) => option.name}
        getOptionValue={(option: any) => option.id}
        // @ts-ignore
        options={data?.manufacturers?.data ?? []}
        isLoading={loading}
      />
    </div>
  );
};

export default ProductManufacturerInput;
