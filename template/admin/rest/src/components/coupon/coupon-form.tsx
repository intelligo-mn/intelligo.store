import Input from "@components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "@components/ui/date-picker";
import Button from "@components/ui/button";
import TextArea from "@components/ui/text-area";
import Description from "@components/ui/description";
import Card from "@components/common/card";
import Label from "@components/ui/label";
import { useRouter } from "next/router";
import ValidationError from "@components/ui/form-validation-error";
import { useSettings } from "@contexts/settings.context";
import { AttachmentInput, Coupon, CouponType } from "@ts-types/generated";
import { useCreateCouponMutation } from "@data/coupon/use-coupon-create.mutation";
import { useUpdateCouponMutation } from "@data/coupon/use-coupon-update.mutation";
import { useTranslation } from "next-i18next";
import FileInput from "@components/ui/file-input";
import { yupResolver } from "@hookform/resolvers/yup";
import { couponValidationSchema } from "./coupon-validation-schema";

type FormValues = {
  code: string;
  type: CouponType;
  description: string;
  amount: number;
  image: AttachmentInput;
  active_from: string;
  expire_at: string;
};

const defaultValues = {
  image: "",
  amount: 0,
  active_from: new Date(),
  expire_at: new Date(),
};

type IProps = {
  initialValues?: Coupon | null;
};
export default function CreateOrUpdateCouponForm({ initialValues }: IProps) {
  const router = useRouter();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    control,
    watch,
    setError,

    formState: { errors },
  } = useForm<FormValues>({
    // @ts-ignore
    defaultValues: initialValues
      ? {
          ...initialValues,
          active_from: new Date(initialValues.active_from!),
          expire_at: new Date(initialValues.expire_at!),
        }
      : defaultValues,
    resolver: yupResolver(couponValidationSchema),
  });
  const { currency } = useSettings();
  const { mutate: createCoupon, isLoading: creating } =
    useCreateCouponMutation();
  const { mutate: updateCoupon, isLoading: updating } =
    useUpdateCouponMutation();

  const [active_from, expire_at] = watch(["active_from", "expire_at"]);
  const couponType = watch("type");

  const onSubmit = async (values: FormValues) => {
    const input = {
      code: values.code,
      type: CouponType.FixedCoupon,
      description: values.description,
      amount: values.amount,
      active_from: new Date(values.active_from).toISOString(),
      expire_at: new Date(values.expire_at).toISOString(),
      image: {
        thumbnail: values?.image?.thumbnail,
        original: values?.image?.original,
        id: values?.image?.id,
      },
    };
    if (initialValues) {
      updateCoupon(
        {
          variables: {
            id: initialValues.id!,
            input,
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
      createCoupon(
        {
          variables: {
            input,
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
      <div className="flex flex-wrap pb-8 border-b border-dashed border-border-base my-5 sm:my-8">
        <Description
          title={t("form:input-label-image")}
          details={t("form:coupon-image-helper-text")}
          className="w-full px-0 sm:pe-4 md:pe-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8"
        />

        <Card className="w-full sm:w-8/12 md:w-2/3">
          <FileInput name="image" control={control} multiple={false} />
        </Card>
      </div>

      <div className="flex flex-wrap my-5 sm:my-8">
        <Description
          title={t("form:input-label-description")}
          details={`${
            initialValues
              ? t("form:item-description-edit")
              : t("form:item-description-add")
          } ${t("form:coupon-form-info-help-text")}`}
          className="w-full px-0 sm:pe-4 md:pe-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8 "
        />

        <Card className="w-full sm:w-8/12 md:w-2/3">
          <Input
            label={t("form:input-label-code")}
            {...register("code")}
            error={t(errors.code?.message!)}
            variant="outline"
            className="mb-5"
          />

          <TextArea
            label={t("form:input-label-description")}
            {...register("description")}
            variant="outline"
            className="mb-5"
          />
          {couponType !== CouponType.FreeShippingCoupon && (
            <Input
              label={`${t("form:input-label-amount")}(${currency})`}
              {...register("amount")}
              type="number"
              error={t(errors.amount?.message!)}
              variant="outline"
              className="mb-5"
            />
          )}
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 p-0 sm:pe-2 mb-5 sm:mb-0">
              <Label>{t("form:coupon-active-from")}</Label>

              <Controller
                control={control}
                name="active_from"
                render={({ field: { onChange, onBlur, value } }) => (
                  //@ts-ignore
                  <DatePicker
                    dateFormat="dd/MM/yyyy"
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                    selectsStart
                    minDate={new Date()}
                    maxDate={expire_at}
                    startDate={active_from}
                    endDate={expire_at}
                    className="border border-border-base"
                  />
                )}
              />
              <ValidationError message={t(errors.active_from?.message!)} />
            </div>
            <div className="w-full sm:w-1/2 p-0 sm:ps-2">
              <Label>{t("form:coupon-expire-at")}</Label>

              <Controller
                control={control}
                name="expire_at"
                render={({ field: { onChange, onBlur, value } }) => (
                  //@ts-ignore
                  <DatePicker
                    dateFormat="dd/MM/yyyy"
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                    selectsEnd
                    startDate={active_from}
                    endDate={expire_at}
                    minDate={active_from}
                    className="border border-border-base"
                  />
                )}
              />
              <ValidationError message={t(errors.expire_at?.message!)} />
            </div>
          </div>
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

        <Button loading={updating || creating}>
          {initialValues
            ? t("form:button-label-update-coupon")
            : t("form:button-label-add-coupon")}
        </Button>
      </div>
    </form>
  );
}
