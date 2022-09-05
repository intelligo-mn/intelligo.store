import Input from "@components/ui/input";
import { useForm } from "react-hook-form";
import Button from "@components/ui/button";
import Description from "@components/ui/description";
import Card from "@components/common/card";
import { useRouter } from "next/router";
import { Tax } from "@ts-types/generated";
import { useCreateTaxClassMutation } from "@data/tax/use-tax-create.mutation";
import { useUpdateTaxClassMutation } from "@data/tax/use-tax-update.mutation";
import { useTranslation } from "next-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { taxValidationSchema } from "./tax-validation-schema";

const defaultValues = {
  name: "",
  rate: 0,
  country: "",
  state: "",
  zip: "",
  city: "",
};

type IProps = {
  initialValues?: Tax | null;
};
export default function CreateOrUpdateTaxForm({ initialValues }: IProps) {
  const router = useRouter();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Tax>({
    shouldUnregister: true,
    resolver: yupResolver(taxValidationSchema),
    defaultValues: initialValues ?? defaultValues,
  });
  const { mutate: createTaxClass, isLoading: creating } =
    useCreateTaxClassMutation();
  const { mutate: updateTaxClass, isLoading: updating } =
    useUpdateTaxClassMutation();
  const onSubmit = async (values: Tax) => {
    if (initialValues) {
      updateTaxClass({
        variables: {
          id: initialValues.id!,
          input: {
            ...values,
          },
        },
      });
    } else {
      createTaxClass({
        variables: {
          input: {
            ...values,
          },
        },
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap my-5 sm:my-8">
        <Description
          title={t("form:form-title-information")}
          details={`${
            initialValues
              ? t("form:item-description-update")
              : t("form:item-description-add")
          } ${t("form:tax-form-info-help-text")}`}
          className="w-full px-0 sm:pe-4 md:pe-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8 "
        />

        <Card className="w-full sm:w-8/12 md:w-2/3">
          <Input
            label={t("form:input-label-name")}
            {...register("name", { required: "Name is required" })}
            error={t(errors.name?.message!)}
            variant="outline"
            className="mb-5"
          />
          <Input
            label={t("form:input-label-rate")}
            {...register("rate")}
            type="number"
            error={t(errors.rate?.message!)}
            variant="outline"
            className="mb-5"
          />
          <Input
            label={t("form:input-label-country")}
            {...register("country")}
            error={t(errors.country?.message!)}
            variant="outline"
            className="mb-5"
          />
          <Input
            label={t("form:input-label-city")}
            {...register("city")}
            error={t(errors.city?.message!)}
            variant="outline"
            className="mb-5"
          />
          <Input
            label={t("form:input-label-state")}
            {...register("state")}
            error={t(errors.state?.message!)}
            variant="outline"
            className="mb-5"
          />
          <Input
            label={t("form:input-label-zip")}
            {...register("zip")}
            error={t(errors.zip?.message!)}
            variant="outline"
            className="mb-5"
          />
        </Card>
      </div>

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

        <Button loading={creating || updating}>
          {initialValues
            ? t("form:button-label-update")
            : t("form:button-label-add")}{" "}
          {t("form:button-label-tax")}
        </Button>
      </div>
    </form>
  );
}
