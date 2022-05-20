import { Attribute, AttributeValue } from "@common/generated-types";
import Card from "@components/common/card";
import Alert from "@components/ui/alert";
import Button from "@components/ui/button";
import Description from "@components/ui/description";
import Input from "@components/ui/input";
import useAttribute from "@core/attribute/useAttribute";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

type FormValues = {
  name?: string | null;
  values: any;
};

type IProps = {
  initialValues?: Attribute | null;
};
export default function CreateOrUpdateAttributeForm({ initialValues }: IProps) {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {
    query: { shop },
  } = router;
  const { t } = useTranslation();
  // TODO: Organization id г оноож өгөх
  const shopId = "12"!;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: initialValues ? initialValues : { name: "", values: [] },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "values",
  });
  const { loading, addAttribute, editAttribute } = useAttribute();

  const onSubmit = (values: FormValues) => {
    if (!initialValues) {
      addAttribute({
        name: values.name!,
        organizationID: shopId,
        values: values.values,
      });
    } else {
      editAttribute({
        id: initialValues.id!,
        name: values.name!,
        organizationID: initialValues?.organizationID,
        values: values.values.map(({ id, value, meta }: any) => ({
          id: Number(id),
          value,
          meta,
        })),
      });
    }
  };
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border-border-base my-5 flex flex-wrap border-b border-dashed pb-8 sm:my-8">
          <Description
            title={t("common:attribute")}
            details={`${
              initialValues
                ? t("form:item-description-update")
                : t("form:item-description-add")
            } ${t("form:form-description-attribute-name")}`}
            className="sm:pe-4 md:pe-5 w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3"
          />

          <Card className="w-full sm:w-8/12 md:w-2/3">
            <Input
              label={t("form:input-label-name")}
              {...register("name", { required: "Name is required" })}
              error={t(errors.name?.message!)}
              variant="outline"
              className="mb-5"
            />
          </Card>
        </div>

        <div className="my-5 flex flex-wrap sm:my-8">
          <Description
            title={t("common:attribute-values")}
            details={`${
              initialValues
                ? t("form:item-description-update")
                : t("form:item-description-add")
            } ${t("form:form-description-attribute-value")}`}
            className="sm:pe-4 md:pe-5 w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3"
          />

          <Card className="w-full sm:w-8/12 md:w-2/3">
            <div>
              {
                // TODO: ts error засах
                //@ts-ignore
                fields.map((item: AttributeValue, index: number) => (
                  <div
                    className="border-border-200 border-b border-dashed py-5 last:border-0 md:py-8"
                    key={item.id}
                  >
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-5">
                      <Input
                        className="sm:col-span-2"
                        label={t("form:input-label-value")}
                        variant="outline"
                        {...register(`values.${index}.value` as const)}
                        defaultValue={item.value!} // make sure to set up defaultValue
                      />
                      <Input
                        className="sm:col-span-2"
                        label={t("form:input-label-meta")}
                        variant="outline"
                        {...register(`values.${index}.meta` as const)}
                        defaultValue={item.meta!} // make sure to set up defaultValue
                      />
                      <button
                        onClick={() => remove(index)}
                        type="button"
                        className="text-sm text-red-500 transition-colors duration-200 hover:text-red-700 focus:outline-none sm:col-span-1 sm:mt-4"
                      >
                        {t("form:button-label-remove")}
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>

            <Button
              type="button"
              onClick={() => append({ value: "", meta: "" })}
              className="w-full sm:w-auto"
            >
              {t("form:button-label-add-value")}
            </Button>
          </Card>
        </div>

        <div className="text-end mb-4">
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

          <Button loading={loading}>
            {initialValues
              ? t("form:item-description-update")
              : t("form:item-description-add")}{" "}
            {t("common:attribute")}
          </Button>
        </div>
      </form>
    </>
  );
}
