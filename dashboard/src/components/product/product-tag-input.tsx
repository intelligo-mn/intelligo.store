import SelectInput from "@components/ui/select-input";
import Label from "@components/ui/label";
import { Control, useFormState, useWatch } from "react-hook-form";
import { useEffect } from "react";
import { useTagsQuery } from "@data/tag/use-tags.query";
import { useTranslation } from "next-i18next";

interface Props {
  control: Control<any>;
  setValue: any;
}

const ProductTagInput = ({ control, setValue }: Props) => {
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
      setValue("tags", []);
    }
  }, [type?.slug]);

  const { data, isLoading: loading } = useTagsQuery({
    limit: 999,
    type: type?.slug,
  });

  return (
    <div>
      <Label>{t("sidebar-nav-item-tags")}</Label>
      <SelectInput
        name="tags"
        isMulti
        control={control}
        getOptionLabel={(option: any) => option.name}
        getOptionValue={(option: any) => option.id}
        // @ts-ignore
        options={data?.tags?.data}
        isLoading={loading}
      />
    </div>
  );
};

export default ProductTagInput;
