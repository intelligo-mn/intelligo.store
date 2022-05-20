import SelectInput from "@components/ui/select-input";
import Label from "@components/ui/label";
import ValidationError from "@components/ui/form-validation-error";
import { Control } from "react-hook-form";
import { useTypesQuery } from "@data/type/use-types.query";
import { useTranslation } from "next-i18next";

interface Props {
  control: Control<any>;
  error: string | undefined;
}

const ProductGroupInput = ({ control, error }: Props) => {
  const { t } = useTranslation();
  const { data, isLoading: loading } = useTypesQuery({
    limit: 200,
  });
  return (
    <div className="mb-5">
      <Label>{t("form:input-label-group")}*</Label>
      <SelectInput
        name="type"
        control={control}
        getOptionLabel={(option: any) => option.name}
        getOptionValue={(option: any) => option.id}
        options={data?.types!}
        isLoading={loading}
      />
      <ValidationError message={t(error!)} />
    </div>
  );
};

export default ProductGroupInput;
