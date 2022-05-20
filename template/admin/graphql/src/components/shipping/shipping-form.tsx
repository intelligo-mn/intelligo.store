import Input from "@components/ui/input";
import { useForm } from "react-hook-form";
import Button from "@components/ui/button";
import {
  useCreateShippingClassMutation,
  useUpdateShippingClassMutation,
} from "@graphql/shipping.graphql";
import Card from "@components/common/card";
import Description from "@components/ui/description";
import Radio from "@components/ui/radio/radio";
import Label from "@components/ui/label";
import { getErrorMessage } from "@utils/form-error";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { ROUTES } from "@utils/routes";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { shippingValidationSchema } from "./shipping-validation-schema";
import { Shipping, ShippingInput, ShippingType } from "__generated__/__types__";
const defaultValues = {
  name: "",
  amount: 0,
  is_global: true,
  type: ShippingType.Fixed,
};

type IProps = {
  initialValues?: Shipping | null;
};

export default function CreateOrUpdateShippingForm({ initialValues }: IProps) {
  const router = useRouter();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm<Shipping>({
    shouldUnregister: true,
    resolver: yupResolver(shippingValidationSchema),
    defaultValues: initialValues ?? defaultValues,
  });
  const [createShippingClass, { loading: creating }] =
    useCreateShippingClassMutation();
  const [updateShipping, { loading: updating }] =
    useUpdateShippingClassMutation();
  const onSubmit = async (values: ShippingInput) => {
    try {
      if (initialValues) {
        const { data } = await updateShipping({
          variables: {
            input: {
              ...values,
              id: initialValues.id!,
            },
          },
        });

        if (data) {
          toast.success(t("common:successfully-updated"));
        }
      } else {
        await createShippingClass({
          variables: {
            input: {
              ...values,
            },
          },
        });
        router.push(ROUTES.SHIPPINGS);
      }
    } catch (error) {
      getErrorMessage(error);
    }
  };

  const type = watch("type");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap my-5 sm:my-8">
        <Description
          title={t("form:item-description")}
          details={`${
            initialValues
              ? t("form:item-description-update")
              : t("form:item-description-add")
          } ${t("form:shipping-form-info-help-text")}`}
          className="w-full px-0 sm:pe-4 md:pe-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8"
        />
        <Card className="w-full sm:w-8/12 md:w-2/3">
          <Input
            label={t("form:input-label-name")}
            {...register("name")}
            error={t(errors.name?.message!)}
            variant="outline"
            className="mb-5"
          />

          <div className="mb-5">
            <Label>{t("form:input-label-type")}</Label>
            <Radio
              label={t("form:input-label-free")}
              {...register("type")}
              id="FREE"
              value={ShippingType.Free}
              className="mb-2"
            />
            <Radio
              label={t("form:input-label-fixed")}
              {...register("type")}
              id="FIXED"
              value={ShippingType.Fixed}
              className="mb-2"
            />
            <Radio
              label={t("form:input-label-percentage")}
              {...register("type")}
              id="PERCENTAGE"
              value={ShippingType.Percentage}
            />
          </div>
          {type !== ShippingType.Free && (
            <Input
              label={t("form:input-label-amount")}
              {...register("amount")}
              type="number"
              error={t(errors.amount?.message!)}
              variant="outline"
              className="mb-5"
            />
          )}
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

        <Button loading={creating || updating} disabled={creating || updating}>
          {initialValues
            ? t("form:button-label-update")
            : t("form:button-label-add")}{" "}
          {t("form:button-label-shipping")}
        </Button>
      </div>
    </form>
  );
}
