import Button from "@components/ui/button";
import Input from "@components/ui/input";
import Label from "@components/ui/label";
import Radio from "@components/ui/radio/radio";
import TextArea from "@components/ui/text-area";
import { useTranslation } from "next-i18next";
import * as yup from "yup";
import { useModalState } from "@components/ui/modal/modal.context";
import { Form } from "@components/ui/form/form";
import { AddressType } from "@ts-types/generated";

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

const AddressForm: React.FC<any> = ({ onSubmit }) => {
  const { t } = useTranslation("common");
  const {
    data: { address, type },
  } = useModalState();
  return (
    <div className="p-5 sm:p-8 bg-light md:rounded-xl min-h-screen md:min-h-0">
      <h1 className="text-heading font-semibold text-lg text-center mb-4 sm:mb-6">
        {address ? t("text-update") : t("text-add-new")} {t("text-address")}
      </h1>
      <Form<FormValues>
        onSubmit={onSubmit}
        className="grid grid-cols-2 gap-5 h-full"
        validationSchema={addressSchema}
        options={{
          shouldUnregister: true,
          defaultValues: {
            title: address?.title ?? "",
            type: address?.type ?? type,
            ...(address?.address && address),
          },
        }}
      >
        {({ register, formState: { errors } }) => (
          <>
            <div>
              <Label>{t("text-type")}</Label>
              <div className="space-s-4 flex items-center">
                <Radio
                  id="billing"
                  {...register("type")}
                  type="radio"
                  value={AddressType.Billing}
                  label={t("text-billing")}
                />
                <Radio
                  id="shipping"
                  {...register("type")}
                  type="radio"
                  value={AddressType.Shipping}
                  label={t("text-shipping")}
                />
              </div>
            </div>

            <Input
              label={t("text-title")}
              {...register("title")}
              error={t(errors.title?.message!)}
              variant="outline"
              className="col-span-2"
            />

            <Input
              label={t("text-country")}
              {...register("address.country")}
              error={t(errors.address?.country?.message!)}
              variant="outline"
            />

            <Input
              label={t("text-city")}
              {...register("address.city")}
              error={t(errors.address?.city?.message!)}
              variant="outline"
            />

            <Input
              label={t("text-state")}
              {...register("address.state")}
              error={t(errors.address?.state?.message!)}
              variant="outline"
            />

            <Input
              label={t("text-zip")}
              {...register("address.zip")}
              error={t(errors.address?.zip?.message!)}
              variant="outline"
            />

            <TextArea
              label={t("text-street-address")}
              {...register("address.street_address")}
              error={t(errors.address?.street_address?.message!)}
              variant="outline"
              className="col-span-2"
            />

            <Button className="w-full col-span-2">
              {address ? t("text-update") : t("text-save")} {t("text-address")}
            </Button>
          </>
        )}
      </Form>
    </div>
  );
};

export default AddressForm;
