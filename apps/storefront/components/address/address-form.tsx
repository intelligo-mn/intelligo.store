import Button from "@components/ui/button";
import Input from "@components/ui/input";
import Label from "@components/ui/label";
import { RadioBox as Radio } from "@components/ui/radiobox";
import TextArea from "@components/ui/text-area";
import { useTranslation } from "next-i18next";
import * as yup from "yup";
import { AddressType } from "@framework/utils/constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useUI } from "@contexts/ui.context";
import { useUpdateCustomerMutation } from "@framework/customer/customer.query";

type FormValues = {
  __typename?: string;
  title: string;
  type: AddressType;
  address: {
    country: string;
    city: string;
    state: string;
    zip: string;
    street_address: string;
  };
};

const addressSchema = yup.object().shape({
  type: yup
    .string()
    .oneOf([AddressType.Billing, AddressType.Shipping])
    .required("error-type-required"),
  title: yup.string().required("error-title-required"),
  address: yup.object().shape({
    country: yup.string().required("error-country-required"),
    city: yup.string().required("error-city-required"),
    state: yup.string().required("error-state-required"),
    zip: yup.string().required("error-zip-required"),
    street_address: yup.string().required("error-street-required"),
  }),
});

const AddressForm: React.FC<any> = ({ data }) => {
  const { t } = useTranslation("common");
  const { address, type, customerId } = data;
  const { mutate: updateProfile } = useUpdateCustomerMutation();
  const { closeModal } = useUI();

  function onSubmit(values: FormValues) {
    const formattedInput = {
      id: address?.id,
      customer_id: customerId,
      title: values.title,
      type: values.type,
      address: {
        ...(address?.id && { id: address.id }),
        ...values.address,
      },
    };

    updateProfile({
      id: customerId,
      address: [formattedInput],
    });

    closeModal();
  }

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(addressSchema),
    shouldUnregister: true,
    defaultValues: {
      title: address?.title ?? "",
      type: address?.type ?? type,
      ...(address?.address && address),
    },
  });

  return (
    <div className="p-5 sm:p-8 md:rounded-xl min-h-screen md:min-h-0 bg-white">
      <h1 className="text-heading font-semibold text-lg text-center mb-4 sm:mb-6">
        {address ? t("text-update-address") : t("text-add-new-address")}
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-5 h-full"
      >
        <div>
          <Label>{t("text-type")}</Label>
          <div className="space-x-4 rtl:space-x-reverse flex items-center">
            <Radio
              id="billing"
              {...register("type")}
              type="radio"
              value={AddressType.Billing}
              labelKey={t("text-billing")}
            />
            <Radio
              id="shipping"
              {...register("type")}
              type="radio"
              value={AddressType.Shipping}
              labelKey={t("text-shipping")}
            />
          </div>
        </div>

        <Input
          labelKey={t("text-title")}
          {...register("title")}
          errorKey={t(errors.title?.message!)}
          variant="outline"
          className="col-span-2"
        />

        <Input
          labelKey={t("text-country")}
          {...register("address.country")}
          errorKey={t(errors.address?.country?.message!)}
          variant="outline"
        />

        <Input
          labelKey={t("text-city")}
          {...register("address.city")}
          errorKey={t(errors.address?.city?.message!)}
          variant="outline"
        />

        <Input
          labelKey={t("text-state")}
          {...register("address.state")}
          errorKey={t(errors.address?.state?.message!)}
          variant="outline"
        />

        <Input
          labelKey={t("text-zip")}
          {...register("address.zip")}
          errorKey={t(errors.address?.zip?.message!)}
          variant="outline"
        />

        <TextArea
          labelKey={t("text-street-address")}
          {...register("address.street_address")}
          errorKey={t(errors.address?.street_address?.message!)}
          variant="outline"
          className="col-span-2"
        />

        <Button className="w-full col-span-2">
          {address ? t("text-update") : t("text-save")} {t("text-address")}
        </Button>
      </form>
    </div>
  );
};

export default AddressForm;
