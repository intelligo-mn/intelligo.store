import Input from "@components/ui/input";
import TextArea from "@components/ui/text-area";
import { useForm, FormProvider } from "react-hook-form";
import Button from "@components/ui/button";
import { getErrorMessage } from "@utils/form-error";
import Description from "@components/ui/description";
import Card from "@components/common/card";
import Label from "@components/ui/label";
import Radio from "@components/ui/radio/radio";
import { useRouter } from "next/router";
import { ROUTES } from "@utils/routes";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import FileInput from "@components/ui/file-input";
import { productValidationSchema } from "./product-validation-schema";
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from "@graphql/products.graphql";
import ProductVariableForm from "./product-variable-form";
import ProductSimpleForm from "./product-simple-form";
import ProductGroupInput from "./product-group-input";
import ProductCategoryInput from "./product-category-input";
import ProductAuthorInput from "./product-author-input";
import ProductManufacturerInput from "./product-manufacturer-input";
import ProductTypeInput from "./product-type-input";
import { useTranslation } from "next-i18next";
import { useShopQuery } from "@graphql/shops.graphql";
import ProductTagInput from "./product-tag-input";
import Alert from "@components/ui/alert";
import { useState } from "react";
import { Product, ProductType } from "__generated__/__types__";
import {
  getProductDefaultValues,
  getProductInputValues,
  ProductFormValues,
} from "./form-utils";

type ProductFormProps = {
  initialValues?: Product | null;
};

export default function CreateOrUpdateProductForm({
  initialValues,
}: ProductFormProps) {
  const { t } = useTranslation();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { data } = useShopQuery({
    variables: {
      slug: router.query.shop as string,
    },
  });
  const shopId = data?.shop?.id!;
  const methods = useForm<ProductFormValues>({
    resolver: yupResolver(productValidationSchema),
    shouldUnregister: true,
    //@ts-ignore
    defaultValues: getProductDefaultValues(initialValues),
  });
  const {
    register,
    handleSubmit,
    control,
    setValue,
    setError,
    watch,
    formState: { errors },
  } = methods;

  const [createProduct, { loading: creating }] = useCreateProductMutation({
    onCompleted: () => {
      router.push(`/${router.query.shop}${ROUTES.PRODUCTS}`);
    },
    onError: (error) => {
      const serverErrors = getErrorMessage(error);
      if (serverErrors?.validation.length) {
        Object.keys(serverErrors?.validation).forEach((field: any) => {
          setError(field.split(".")[1], {
            type: "manual",
            message: serverErrors?.validation[field][0],
          });
        });
      } else {
        setErrorMessage(error?.message);
      }
    },
  });
  const [updateProduct, { loading: updating }] = useUpdateProductMutation({
    onCompleted: () => {
      toast.success(t("common:successfully-updated"));
    },
    onError: (error) => {
      const serverErrors = getErrorMessage(error);
      if (serverErrors?.validation.length) {
        Object.keys(serverErrors?.validation).forEach((field: any) => {
          setError(field.split(".")[1], {
            type: "manual",
            message: serverErrors?.validation[field][0],
          });
        });
      } else {
        setErrorMessage(error?.message);
      }
    },
  });

  function onSubmit(values: ProductFormValues) {
    const inputValues = getProductInputValues(values, initialValues);

    if (initialValues) {
      updateProduct({
        variables: {
          input: {
            id: initialValues.id,
            shop_id: initialValues.shop_id!,
            ...inputValues,
          },
        },
      });
    } else {
      createProduct({
        variables: {
          input: {
            shop_id: shopId,
            ...inputValues,
          },
        },
      });
    }
  }
  const selectedProductType = watch("product_type");
  return (
    <>
      {errorMessage ? (
        <Alert
          message={t(`common:${errorMessage}`)}
          variant="error"
          closeable={true}
          className="mt-5"
          onClose={() => setErrorMessage(null)}
        />
      ) : null}
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="flex flex-wrap pb-8 border-b border-dashed border-border-base my-5 sm:my-8">
            <Description
              title={t("form:featured-image-title")}
              details={t("form:featured-image-help-text")}
              className="w-full px-0 sm:pe-4 md:pe-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8"
            />

            <Card className="w-full sm:w-8/12 md:w-2/3">
              <FileInput name="image" control={control} multiple={false} />
            </Card>
          </div>

          <div className="flex flex-wrap pb-8 border-b border-dashed border-border-base my-5 sm:my-8">
            <Description
              title={t("form:gallery-title")}
              details={t("form:gallery-help-text")}
              className="w-full px-0 sm:pe-4 md:pe-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8"
            />

            <Card className="w-full sm:w-8/12 md:w-2/3">
              <FileInput name="gallery" control={control} />
            </Card>
          </div>

          <div className="flex flex-wrap pb-8 border-b border-dashed border-border-base my-5 sm:my-8">
            <Description
              title={t("form:type-and-category")}
              details={t("form:type-and-category-help-text")}
              className="w-full px-0 sm:pe-4 md:pe-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8"
            />

            <Card className="w-full sm:w-8/12 md:w-2/3">
              <ProductGroupInput
                control={control}
                error={t((errors.type as any)?.message)}
              />
              <ProductCategoryInput control={control} setValue={setValue} />
              <ProductAuthorInput control={control} />
              <ProductManufacturerInput control={control} setValue={setValue} />
              <ProductTagInput control={control} setValue={setValue} />
            </Card>
          </div>

          <div className="flex flex-wrap pb-8 border-b border-dashed border-border-base my-5 sm:my-8">
            <Description
              title={t("form:item-description")}
              details={`${
                initialValues
                  ? t("form:item-description-edit")
                  : t("form:item-description-add")
              } ${t("form:product-description-help-text")}`}
              className="w-full px-0 sm:pe-4 md:pe-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8"
            />

            <Card className="w-full sm:w-8/12 md:w-2/3">
              <Input
                label={`${t("form:input-label-name")}*`}
                {...register("name")}
                error={t(errors.name?.message!)}
                variant="outline"
                className="mb-5"
              />

              <Input
                label={`${t("form:input-label-unit")}*`}
                {...register("unit")}
                error={t(errors.unit?.message!)}
                variant="outline"
                className="mb-5"
              />

              <TextArea
                label={t("form:input-label-description")}
                {...register("description")}
                error={t(errors.description?.message!)}
                variant="outline"
                className="mb-5"
              />

              <div>
                <Label>{t("form:input-label-status")}</Label>
                <Radio
                  {...register("status")}
                  label={t("form:input-label-published")}
                  id="published"
                  value="PUBLISH"
                  className="mb-2"
                />
                <Radio
                  {...register("status")}
                  id="draft"
                  label={t("form:input-label-draft")}
                  value="DRAFT"
                />
              </div>
            </Card>
          </div>
          <div className="flex flex-wrap pb-8 border-b border-dashed border-border-base my-5 sm:my-8">
            <Description
              title={t("form:form-title-product-type")}
              details={t("form:form-description-product-type")}
              className="w-full px-0 sm:pr-4 md:pr-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8"
            />

            <ProductTypeInput />
          </div>

          {/* Simple Type */}
          {selectedProductType?.value === ProductType.Simple && (
            <ProductSimpleForm initialValues={initialValues} />
          )}

          {/* Variation Type */}
          {selectedProductType?.value === ProductType.Variable && (
            <ProductVariableForm initialValues={initialValues} />
          )}

          <div className="mb-4 text-end">
            {initialValues && (
              <Button
                variant="outline"
                onClick={router.back}
                className="me-4"
                type="button"
              >
                {t("form:button-label-back")}
              </Button>
            )}
            <Button loading={updating || creating}>
              {initialValues
                ? t("form:button-label-update-product")
                : t("form:button-label-add-product")}
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}
