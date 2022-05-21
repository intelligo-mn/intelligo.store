import Input from "@components/ui/input";
import { useForm } from "react-hook-form";
import Button from "@components/ui/button";
import Description from "@components/ui/description";
import Card from "@components/common/card";
import { useRouter } from "next/router";
import ColorPicker from "@components/ui/color-picker/color-picker";
import { useCreateOrderStatusMutation } from "@data/order-status/product-create.mutation";
import { useUpdateOrderStatusMutation } from "@data/order-status/product-update.mutation";
import { useTranslation } from "next-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderStatusValidationSchema } from "./order-status-validation-schema";
import DisplayColorCode from "@components/ui/color-picker/display-color-code";

type FormValues = {
  name: string;
  color: string;
  serial: number;
};
const defaultValues = {
  name: "",
  serial: 1,
  color: "#d87b64",
};
export default function CreateOrUpdateOrderStatusForm({ initialValues }: any) {
  const router = useRouter();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    shouldUnregister: true,
    resolver: yupResolver(orderStatusValidationSchema),
    defaultValues: initialValues ?? defaultValues,
  });
  const { mutate: createOrderStatus, isLoading: creating } =
    useCreateOrderStatusMutation();
  const { mutate: updateOrderStatus, isLoading: updating } =
    useUpdateOrderStatusMutation();

  const onSubmit = async (values: FormValues) => {
    if (initialValues) {
      updateOrderStatus(
        {
          variables: {
            id: initialValues.id,
            input: {
              id: initialValues.id,
              name: values.name,
              color: values.color,
              serial: values.serial,
            },
          },
        },
        {
          onError: (error: any) => {
            Object.keys(error?.response?.data).forEach((field: any) => {
              setError(field, {
                type: "manual",
                message: error?.response?.data[field][0],
              });
            });
          },
        }
      );
    } else {
      createOrderStatus(
        {
          variables: {
            input: {
              name: values.name,
              color: values.color,
              serial: values.serial,
            },
          },
        },
        {
          onError: (error: any) => {
            Object.keys(error?.response?.data).forEach((field: any) => {
              setError(field, {
                type: "manual",
                message: error?.response?.data[field][0],
              });
            });
          },
        }
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap my-5 sm:my-8">
        <Description
          title={t("form:input-label-description")}
          details={`${
            initialValues
              ? t("form:button-label-update")
              : t("form:button-label-add")
          } ${t("form:order-status-description-helper-text")}`}
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

          <Input
            label={t("form:input-label-serial")}
            note={t("form:input-label-serial-help-text")}
            {...register("serial")}
            type="number"
            error={t(errors.serial?.message!)}
            variant="outline"
          />
          <ColorPicker
            label={t("form:input-label-color")}
            {...register("color")}
            error={t(errors.color?.message!)}
            className="mt-5"
          >
            <DisplayColorCode control={control} />
          </ColorPicker>
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
          {t("form:button-label-order-status")}
        </Button>
      </div>
    </form>
  );
}
