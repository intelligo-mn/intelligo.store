import Input from "@components/ui/input";
import { Controller, useForm, useFieldArray } from "react-hook-form";
import Button from "@components/ui/button";
import TextArea from "@components/ui/text-area";
import Label from "@components/ui/label";
import { DatePicker } from "@components/ui/date-picker";
import { getErrorMessage } from "@utils/form-error";
import Description from "@components/ui/description";
import Card from "@components/common/card";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import FileInput from "@components/ui/file-input";
import { yupResolver } from "@hookform/resolvers/yup";
import { authorValidationSchema } from "./author-validation-schema";
import ValidationError from "@components/ui/form-validation-error";
import { getIcon } from "@utils/get-icon";
import SelectInput from "@components/ui/select-input";
import * as socialIcons from "@components/icons/social";
import { AttachmentInput, Author, ShopSocialInput } from "@ts-types/generated";
import { useShopQuery } from "@data/shop/use-shop.query";
import { useCreateAuthorMutation } from "@data/author/use-author-create.mutation";
import { useUpdateAuthorMutation } from "@data/author/use-author-update.mutation";

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
  bio: string;
  quote: string;
  death: string;
  socials: ShopSocialInput[];
  born: string;
  languages: string;
  shop_id: string;
  is_approved: boolean;
  image: AttachmentInput;
  cover_image: AttachmentInput;
};
type IProps = {
  initialValues?: Author | null;
};
export default function CreateOrUpdateAuthorForm({ initialValues }: IProps) {
  const router = useRouter();
  const { t } = useTranslation();
  const {
    query: { shop },
  } = router;
  const { data: shopData } = useShopQuery(shop as string);
  const shopId = shopData?.shop?.id!;
  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    shouldUnregister: true,
    resolver: yupResolver(authorValidationSchema),
    ...(initialValues && {
      defaultValues: {
        ...initialValues,
        socials: initialValues?.socials
          ? initialValues?.socials.map((social: any) => ({
              icon: updatedIcons?.find((icon) => icon?.value === social?.icon),
              url: social?.url,
            }))
          : [],
        born: initialValues.born ? new Date(initialValues.born!) : "",
        death: initialValues.death ? new Date(initialValues.death!) : "",
      } as any,
    }),
  });

  const { mutate: createAuthor, isLoading: creating } =
    useCreateAuthorMutation();
  const { mutate: updateAuthor, isLoading: updating } =
    useUpdateAuthorMutation();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "socials",
  });

  const onSubmit = async (values: FormValues) => {
    const input = {
      ...values,
      socials: values?.socials
        ? values?.socials?.map((social: any) => ({
            icon: social?.icon?.value,
            url: social?.url,
          }))
        : [],
      image: {
        thumbnail: values?.image?.thumbnail,
        original: values?.image?.original,
        id: values?.image?.id,
      },
      cover_image: {
        thumbnail: values?.image?.thumbnail,
        original: values?.image?.original,
        id: values?.image?.id,
      },
    };
    try {
      if (initialValues) {
        updateAuthor({
          variables: {
            input: {
              ...input,
              id: initialValues.id!,
              shop_id: shopId,
            },
          },
        });
      } else {
        createAuthor({
          variables: {
            input: {
              ...input,
              shop_id: shopId,
            },
          },
        });
      }
    } catch (error) {
      const serverErrors = getErrorMessage(error);
      Object.keys(serverErrors?.validation).forEach((field: any) => {
        setError(field.split(".")[1], {
          type: "manual",
          message: serverErrors?.validation[field][0],
        });
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap pb-8 border-b border-dashed border-border-base my-5 sm:my-8">
        <Description
          title={t("form:input-label-image")}
          details={t("form:author-image-helper-text")}
          className="w-full px-0 sm:pe-4 md:pe-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8"
        />

        <Card className="w-full sm:w-8/12 md:w-2/3">
          <FileInput name="image" control={control} multiple={false} />
        </Card>
      </div>
      <div className="flex flex-wrap pb-8 border-b border-dashed border-border-base my-5 sm:my-8">
        <Description
          title={t("form:input-label-cover-image")}
          details={t("form:author-cover-image-helper-text")}
          className="w-full px-0 sm:pe-4 md:pe-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8"
        />

        <Card className="w-full sm:w-8/12 md:w-2/3">
          <FileInput name="cover_image" control={control} multiple={false} />
        </Card>
      </div>

      <div className="flex flex-wrap my-5 sm:my-8">
        <Description
          title={t("form:input-label-description")}
          details={`${
            initialValues
              ? t("form:item-description-edit")
              : t("form:item-description-add")
          } ${t("form:author-form-description-details")}`}
          className="w-full px-0 sm:pe-4 md:pe-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8 "
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
            label={t("form:input-label-languages")}
            {...register("languages")}
            error={t(errors.languages?.message!)}
            variant="outline"
            className="mb-5"
            placeholder={t("form:placeholder-add-languages-comma-separated")}
          />
          <TextArea
            label={t("form:input-label-bio")}
            {...register("bio")}
            variant="outline"
            className="mb-5"
          />

          <TextArea
            label={t("form:input-label-quote")}
            {...register("quote")}
            variant="outline"
            className="mb-5"
          />

          <div className="flex flex-col sm:flex-row mb-5">
            <div className="w-full sm:w-1/2 p-0 sm:pe-2 mb-5 sm:mb-0">
              <Label>{t("form:input-label-author-born")}</Label>
              <Controller
                control={control}
                name="born"
                render={({ field: { onChange, onBlur, value } }) => (
                  //@ts-ignore
                  <DatePicker
                    dateFormat="dd/MM/yyyy"
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                    selectsStart
                    startDate={new Date()}
                    className="border border-border-base"
                  />
                )}
              />
              <ValidationError message={t(errors.born?.message!)} />
            </div>
            <div className="w-full sm:w-1/2 p-0 sm:ps-2">
              <Label>{t("form:input-label-author-death")}</Label>

              <Controller
                control={control}
                name="death"
                render={({ field: { onChange, onBlur, value } }) => (
                  //@ts-ignore
                  <DatePicker
                    dateFormat="dd/MM/yyyy"
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                    selectsEnd
                    startDate={new Date()}
                    className="border border-border-base"
                  />
                )}
              />
              <ValidationError message={t(errors.death?.message!)} />
            </div>
          </div>
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
                        name={`socials.${index}.icon` as const}
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
                        {...register(`socials.${index}.icon` as const)}
                        defaultValue={item?.icon!} // make sure to set up defaultValue
                      /> */}
                    <Input
                      className="sm:col-span-2"
                      label={t("form:input-label-social-url")}
                      variant="outline"
                      {...register(`socials.${index}.url` as const)}
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
            ? t("form:button-label-update-author")
            : t("form:button-label-add-author")}
        </Button>
      </div>
    </form>
  );
}
