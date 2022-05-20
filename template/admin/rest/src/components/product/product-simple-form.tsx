import Input from "@components/ui/input";
import Description from "@components/ui/description";
import Card from "@components/common/card";
import { useFormContext, useWatch } from "react-hook-form";
import { useTranslation } from "next-i18next";
import Label from "@components/ui/label";
import FileInput from "@components/ui/file-input";
import Checkbox from "@components/ui/checkbox/checkbox";

type IProps = {
  initialValues: any;
};

export default function ProductSimpleForm({ initialValues }: IProps) {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext();
  const { t } = useTranslation();

  const is_digital = watch("is_digital");
  const is_external = watch("is_external");

  return (
    <div className="flex flex-wrap my-5 sm:my-8">
      <Description
        title={t("form:form-title-simple-product-info")}
        details={`${
          initialValues
            ? t("form:item-description-edit")
            : t("form:item-description-add")
        } ${t("form:form-description-simple-product-info")}`}
        className="w-full px-0 sm:pe-4 md:pe-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8"
      />

      <Card className="w-full sm:w-8/12 md:w-2/3">
        <Input
          label={`${t("form:input-label-price")}*`}
          {...register("price")}
          type="number"
          error={t(errors.price?.message!)}
          variant="outline"
          className="mb-5"
        />
        <Input
          label={t("form:input-label-sale-price")}
          type="number"
          {...register("sale_price")}
          error={t(errors.sale_price?.message!)}
          variant="outline"
          className="mb-5"
        />

        <Input
          label={`${t("form:input-label-quantity")}*`}
          type="number"
          {...register("quantity")}
          error={t(errors.quantity?.message!)}
          variant="outline"
          className="mb-5"
        />

        <Input
          label={`${t("form:input-label-sku")}*`}
          {...register("sku")}
          error={t(errors.sku?.message!)}
          variant="outline"
          className="mb-5"
        />

        <Input
          label={t("form:input-label-width")}
          {...register("width")}
          error={t(errors.width?.message!)}
          variant="outline"
          className="mb-5"
        />
        <Input
          label={t("form:input-label-height")}
          {...register("height")}
          error={t(errors.height?.message!)}
          variant="outline"
          className="mb-5"
        />
        <Input
          label={t("form:input-label-length")}
          {...register("length")}
          error={t(errors.length?.message!)}
          variant="outline"
          className="mb-5"
        />
        <Checkbox
          {...register("is_digital")}
          id="is_digital"
          label={t("form:input-label-is-digital")}
          disabled={Boolean(is_external)}
          className="mb-5"
        />

        <Checkbox
          {...register("is_external")}
          id="is_external"
          label={t("form:input-label-is-external")}
          disabled={Boolean(is_digital)}
          className="mb-5"
        />

        {is_digital ? (
          <>
            <Label>{t("form:input-label-digital-file")}</Label>
            <FileInput
              name="digital_file_input"
              control={control}
              multiple={false}
              acceptFile={true}
            />
            <input type="hidden" {...register(`digital_file`)} />
          </>
        ) : null}
        {is_external ? (
          <div>
            <Input
              label={t("form:input-label-external-product-url")}
              {...register("external_product_url")}
              error={t(errors.external_product_url?.message!)}
              variant="outline"
              className="mb-5"
            />
            <Input
              label={t("form:input-label-external-product-button-text")}
              {...register("external_product_button_text")}
              error={t(errors.external_product_button_text?.message!)}
              variant="outline"
              className="mb-5"
            />
          </div>
        ) : null}
      </Card>
    </div>
  );
}
