import SelectInput from "apps/dashboard/src/components/ui/select-input";
import Label from "apps/dashboard/src/components/ui/label";
import { useFormContext } from "react-hook-form";
import Card from "apps/dashboard/src/components/common/card";
import ValidationError from "apps/dashboard/src/components/ui/form-validation-error";
import { ProductType } from "apps/dashboard/src/ts-types/generated";
import { useTranslation } from "next-i18next";

const productType = [
  { name: "Simple Product", value: ProductType.Simple },
  { name: "Variable Product", value: ProductType.Variable },
];

const ProductTypeInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { t } = useTranslation();

  return (
    <Card className="w-full sm:w-8/12 md:w-2/3">
      <div className="mb-5">
        <Label>{t("form:form-title-product-type")}</Label>
        <SelectInput
          name="productTypeValue"
          control={control}
          getOptionLabel={(option: any) => option.name}
          getOptionValue={(option: any) => option.value}
          options={productType}
        />
        <ValidationError message={t(errors.productTypeValue?.message)} />
      </div>
    </Card>
  );
};

export default ProductTypeInput;
