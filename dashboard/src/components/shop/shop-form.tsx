import Button from "@components/ui/button";
import Input from "@components/ui/input";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useCreateShopMutation,
  useUpdateShopMutation,
} from "@graphql/shops.graphql";
import Description from "@components/ui/description";
import Card from "@components/common/card";
import FileInput from "@components/ui/file-input";
import TextArea from "@components/ui/text-area";
import { useRouter } from "next/router";
import { shopValidationSchema } from "./shop-validation-schema";
import { getFormattedImage } from "@utils/get-formatted-image";
import { toast } from "react-toastify";
import { adminOnly, getAuthCredentials, hasAccess } from "@utils/auth-utils";
import GooglePlacesAutocomplete from "@components/ui/form/google-places-autocomplete";
import Label from "@components/ui/label";
import { getIcon } from "@utils/get-icon";
import SelectInput from "@components/ui/select-input";
import * as socialIcons from "@components/icons/social";
import omit from "lodash/omit";
import {
  BalanceInput,
  ShopSettings,
  ShopSocialInput,
  UserAddressInput,
} from "__generated__/__types__";

const socialIcon = [
  {
    value: "FacebookIcon",
    label: "Facebook",
  },
  {
    value: "InstagramIcon",
    label: "Instagram",
  },
  {
    value: "TwitterIcon",
    label: "Twitter",
  },
  {
    value: "YouTubeIcon",
    label: "Youtube",
  },
];

export const updatedIcons = socialIcon.map((item: any) => {
  item.label = (
    <div className="flex space-s-4 items-center text-body">
      <span className="flex w-4 h-4 items-center justify-center">
        {getIcon({
          iconList: socialIcons,
          iconName: item.value,
          className: "w-4 h-4",
        })}
      </span>
      <span>{item.label}</span>
    </div>
  );
  return item;
});

type FormValues = {
  name: string;
  description: string;
  cover_image: any;
  logo: any;
  balance: BalanceInput;
  settings: ShopSettings;
  address: UserAddressInput;
};

const ShopForm = ({ initialValues }: { initialValues?: any }) => {
  const router = useRouter();
  const [createShop, { loading: creating }] = useCreateShopMutation({
    onCompleted: () => {
      const { permissions } = getAuthCredentials();
      if (hasAccess(adminOnly, permissions)) {
        return router.push(ROUTES.ADMIN_MY_SHOPS);
      }
      router.push(ROUTES.DASHBOARD);
    },
  });
  const [updateShop, { loading: updating }] = useUpdateShopMutation({
    onCompleted: () => {
      toast.success(t("common:successfully-updated"));
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    control,
  } = useForm<FormValues>({
    shouldUnregister: true,
    ...(initialValues
      ? {
          defaultValues: {
            ...initialValues,
            logo: getFormattedImage(initialValues.logo),
            cover_image: getFormattedImage(initialValues.cover_image),
            settings: {
              ...initialValues?.settings,
              socials: initialValues?.settings?.socials
                ? initialValues?.settings?.socials.map((social: any) => ({
                    icon: updatedIcons?.find(
                      (icon) => icon?.value === social?.icon
                    ),
                    url: social?.url,
                  }))
                : [],
            },
          },
        }
      : {}),
    resolver: yupResolver(shopValidationSchema),
  });

  const { t } = useTranslation();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "settings.socials",
  });

  function onSubmit(values: FormValues) {
    const settings = {
      ...values?.settings,
      location: { ...omit(values?.settings?.location, "__typename") },
      socials: values?.settings?.socials
        ? values?.settings?.socials?.map((social: any) => ({
            icon: social?.icon?.value,
            url: social?.url,
          }))
        : [],
    };
    if (initialValues) {
      // const { __typename, ...restAddress } = values.address;
      // const { __typename: newTypename, ...location } =
      //   values?.settings?.location;

      updateShop({
        variables: {
          input: {
            id: initialValues.id,
            ...values,
            address: { ...omit(values.address, "__typename") },
            settings,
            balance: {
              id: initialValues.balance?.id,
              ...values.balance,
            },
          },
        },
      });
    } else {
      createShop({
        variables: {
          input: {
            ...values,
            settings,
            balance: {
              ...values.balance,
            },
          },
        },
      });
    }
  }

  const coverImageInformation = (
    <span>
      {t("form:shop-cover-image-help-text")} <br />
      {t("form:cover-image-dimension-help-text")} &nbsp;
      <span className="font-bold">1170 x 435{t("common:text-px")}</span>
    </span>
  );

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex flex-wrap pb-8 border-b border-dashed border-border-base my-5 sm:my-8">
          <Description
            title={t("form:input-label-logo")}
            details={t("form:shop-logo-help-text")}
            className="w-full px-0 sm:pe-4 md:pe-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8"
          />

          <Card className="w-full sm:w-8/12 md:w-2/3">
            <FileInput name="logo" control={control} multiple={false} />
          </Card>
        </div>

        <div className="flex flex-wrap pb-8 border-b border-dashed border-border-base my-5 sm:my-8">
          <Description
            title={t("form:shop-cover-image-title")}
            details={coverImageInformation}
            className="w-full px-0 sm:pe-4 md:pe-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8"
          />

          <Card className="w-full sm:w-8/12 md:w-2/3">
            <FileInput name="cover_image" control={control} multiple={false} />
          </Card>
        </div>
        <div className="flex flex-wrap pb-8 border-b border-dashed border-border-base my-5 sm:my-8">
          <Description
            title={t("form:shop-basic-info")}
            details={t("form:shop-basic-info-help-text")}
            className="w-full px-0 sm:pe-4 md:pe-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8"
          />
          <Card className="w-full sm:w-8/12 md:w-2/3">
            <Input
              label={t("form:input-label-name")}
              {...register("name")}
              variant="outline"
              className="mb-5"
              error={t(errors.name?.message!)}
            />
            <TextArea
              label={t("form:input-label-description")}
              {...register("description")}
              variant="outline"
              error={t(errors.description?.message!)}
            />
          </Card>
        </div>
        <div className="flex flex-wrap pb-8 border-b border-dashed border-gray-300 my-5 sm:my-8">
          <Description
            title={t("form:shop-payment-info")}
            details={t("form:payment-info-helper-text")}
            className="w-full px-0 sm:pe-4 md:pe-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8"
          />

          <Card className="w-full sm:w-8/12 md:w-2/3">
            <Input
              label={t("form:input-label-account-holder-name")}
              {...register("balance.payment_info.name")}
              variant="outline"
              className="mb-5"
              error={t(errors.balance?.payment_info?.name?.message!)}
            />
            <Input
              label={t("form:input-label-account-holder-email")}
              {...register("balance.payment_info.email")}
              variant="outline"
              className="mb-5"
              error={t(errors.balance?.payment_info?.email?.message!)}
            />
            <Input
              label={t("form:input-label-bank-name")}
              {...register("balance.payment_info.bank")}
              variant="outline"
              className="mb-5"
              error={t(errors.balance?.payment_info?.bank?.message!)}
            />
            <Input
              label={t("form:input-label-account-number")}
              {...register("balance.payment_info.account")}
              variant="outline"
              error={t(errors.balance?.payment_info?.account?.message!)}
            />
          </Card>
        </div>
        <div className="flex flex-wrap pb-8 border-b border-dashed border-gray-300 my-5 sm:my-8">
          <Description
            title={t("form:shop-address")}
            details={t("form:shop-address-helper-text")}
            className="w-full px-0 sm:pe-4 md:pe-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8"
          />

          <Card className="w-full sm:w-8/12 md:w-2/3">
            <Input
              label={t("form:input-label-country")}
              {...register("address.country")}
              variant="outline"
              className="mb-5"
              error={t(errors.address?.country?.message!)}
            />
            <Input
              label={t("form:input-label-city")}
              {...register("address.city")}
              variant="outline"
              className="mb-5"
              error={t(errors.address?.city?.message!)}
            />
            <Input
              label={t("form:input-label-state")}
              {...register("address.state")}
              variant="outline"
              className="mb-5"
              error={t(errors.address?.state?.message!)}
            />
            <Input
              label={t("form:input-label-zip")}
              {...register("address.zip")}
              variant="outline"
              className="mb-5"
              error={t(errors.address?.zip?.message!)}
            />
            <TextArea
              label={t("form:input-label-street-address")}
              {...register("address.street_address")}
              variant="outline"
              error={t(errors.address?.street_address?.message!)}
            />
          </Card>
        </div>
        <div className="flex flex-wrap pb-8 border-b border-dashed border-gray-300 my-5 sm:my-8">
          <Description
            title={t("form:shop-settings")}
            details={t("form:shop-settings-helper-text")}
            className="w-full px-0 sm:pe-4 md:pe-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8"
          />

          <Card className="w-full sm:w-8/12 md:w-2/3">
            <div className="mb-5">
              <Label>{t("form:input-label-autocomplete")}</Label>
              <Controller
                control={control}
                name="settings.location"
                render={({ field: { onChange } }) => (
                  <GooglePlacesAutocomplete
                    onChange={onChange}
                    data={getValues("settings.location")!}
                  />
                )}
              />
            </div>
            <Input
              label={t("form:input-label-contact")}
              {...register("settings.contact")}
              variant="outline"
              className="mb-5"
              error={t(errors.settings?.contact?.message!)}
            />
            <Input
              label={t("form:input-label-website")}
              {...register("settings.website")}
              variant="outline"
              className="mb-5"
              error={t(errors.settings?.website?.message!)}
            />

            {/* Social and Icon picker */}
            <div>
              {fields.map(
                (item: ShopSocialInput & { id: string }, index: number) => (
                  <div
                    className="border-b border-dashed border-border-200 first:border-t last:border-b-0 first:mt-5 md:first:mt-10 py-5 md:py-8"
                    key={item.id}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-5">
                      <div className="sm:col-span-2">
                        <Label>{t("form:input-label-select-platform")}</Label>
                        <SelectInput
                          name={`settings.socials.${index}.icon` as const}
                          control={control}
                          options={updatedIcons}
                          isClearable={true}
                          defaultValue={item?.icon!}
                        />
                      </div>
                      {/* <Input
                        className="sm:col-span-2"
                        label={t("form:input-label-icon")}
                        variant="outline"
                        {...register(`settings.socials.${index}.icon` as const)}
                        defaultValue={item?.icon!} // make sure to set up defaultValue
                      /> */}
                      <Input
                        className="sm:col-span-2"
                        label={t("form:input-label-social-url")}
                        variant="outline"
                        {...register(`settings.socials.${index}.url` as const)}
                        defaultValue={item.url!} // make sure to set up defaultValue
                      />
                      <button
                        onClick={() => {
                          remove(index);
                        }}
                        type="button"
                        className="text-sm text-red-500 hover:text-red-700 transition-colors duration-200 focus:outline-none sm:mt-4 sm:col-span-1"
                      >
                        {t("form:button-label-remove")}
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>

            <Button
              type="button"
              onClick={() => append({ icon: "", url: "" })}
              className="w-full sm:w-auto"
            >
              {t("form:button-label-add-social")}
            </Button>
          </Card>
        </div>
        <div className="mb-5 text-end">
          <Button
            loading={creating || updating}
            disabled={creating || updating}
          >
            {initialValues
              ? t("form:button-label-update")
              : t("form:button-label-save")}
          </Button>
        </div>
      </form>
    </>
  );
};

export default ShopForm;
