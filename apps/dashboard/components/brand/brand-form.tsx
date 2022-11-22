import Input from "@components/ui/input";
import { useFieldArray, useForm } from "react-hook-form";
import Button from "@components/ui/button";
import Description from "@components/ui/description";
import Card from "@components/common/card";
import { useRouter } from "next/router";
import { getIcon } from "@utils/get-icon";
import Label from "@components/ui/label";
import * as typeIcons from "@components/icons/type";
import {
  Attachment,
  Type,
  TypeSettingsInput
} from "@ts-types/generated";
import { useCreateTypeMutation } from "@data/type/use-type-create.mutation";
import { useUpdateTypeMutation } from "@data/type/use-type-update.mutation";
import { typeIconList } from "./brand-icons";
import { useTranslation } from "next-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { typeValidationSchema } from "./brand-validation-schema";
import SelectInput from "@components/ui/select-input";
import Alert from "@components/ui/alert";
import FileInput from "@components/ui/file-input";
import ValidationError from "@components/ui/form-validation-error";

export const updatedIcons = typeIconList.map((item: any) => {
  item.label = (
    <div className="flex space-s-5 items-center">
      <span className="flex w-5 h-5 items-center justify-center">
        {getIcon({
          iconList: typeIcons,
          iconName: item.value,
          className: "max-h-full max-w-full",
        })}
      </span>
      <span>{item.label}</span>
    </div>
  );
  return item;
});

const keyBasedImages = [
  {
    id: 1,
    value: 'grid-layout',
    label: 'Grid Layout',
  },

  {
    id: 2,
    value: 'slider-layout',
    label: 'Slider Layout'
  }
];

export const updateImages = keyBasedImages.map((item: any) => {
  item.label = (
    <div className="flex space-s-5 items-center">
      <span>{item.label}</span>
    </div>
  );
  return item;
});

type FormValues = {
  name?: string | null;
  icon?: any;
  settings: TypeSettingsInput;
  images: [{
    key: {},
    image: [Attachment]
  }]
};

type IProps = {
  initialValues?: Type | null;
};
export default function CreateOrUpdateTypeForm({ initialValues }: IProps) {
  const router = useRouter();
  const { t } = useTranslation();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    shouldUnregister: true,
    // @ts-ignore
    resolver: yupResolver(typeValidationSchema),
    // @ts-ignore
    defaultValues: {
      ...initialValues,
      settings: {
        ...initialValues?.settings,
      },
      icon: initialValues?.icon
        ? typeIconList.find(
          (singleIcon) => singleIcon.value === initialValues?.icon!
        )
        : "",
      images: initialValues?.images?.map((item: any) => {
        return {
          key: keyBasedImages.find(key => item?.key === key.value),
          image: item?.image?.map((singleImage: Attachment) => ({
            id: singleImage?.id,
            original: singleImage?.original,
            thumbnail: singleImage?.thumbnail
          }))
        }
      })
    },
  });

  const { fields, append: brandImageAppend, remove } = useFieldArray({
    control,
    name: "images",
  });

  const { mutate: createType, isLoading: creating } = useCreateTypeMutation();
  const { mutate: updateType, isLoading: updating } = useUpdateTypeMutation();

  const onSubmit = async (values: FormValues) => {
    const input = {
      name: values.name!,
      icon: values.icon?.value,
      settings: {
        isHome: values?.settings?.isHome,
        productCard: values?.settings?.productCard,
        layoutType: values?.settings?.layoutType,
      },
      images: values.images?.map((item: any) => {
        return {
          key: item?.key?.value,
          image: item?.image?.map((singleImage: Attachment) => ({
            id: singleImage?.id,
            original: singleImage?.original,
            thumbnail: singleImage?.thumbnail
          }))
        }
      })
    };

    if (!initialValues) {
      createType({
        variables: {
          input,
        },
      });
    } else {
      updateType({
        variables: {
          id: initialValues.id!,
          input,
        },
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap my-5 sm:my-8">
        <Description
          title={t("form:item-description")}
          details={`${
            initialValues
              ? t("form:item-description-update")
              : t("form:item-description-add")
          } ${t("form:type-description-help-text")}`}
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
            <Label>{t("form:input-label-select-icon")}</Label>
            <SelectInput
              name="icon"
              control={control}
              options={updatedIcons}
              isClearable={true}
            />
          </div>
        </Card>
      </div>

      <div className="flex flex-wrap my-5 sm:my-8">
        <Description
          title={t("form:text-brand-images")}
          details={t("form:brand-image-help-text")}
          className="w-full px-0 sm:pr-4 md:pr-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8"
        />

        <Card className="w-full sm:w-8/12 md:w-2/3">
          <div>
            {fields.map((item: any & { id: string }, index: number) => (
              <div
                className="border-b border-dashed border-border-200 last:border-0 py-5 md:py-8 first:pt-0"
                key={item.id}
              >
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-5">
                  <div className="grid grid-cols-1 gap-5 sm:col-span-4">
                    <Label className="whitespace-nowrap">
                      {t("form:input-label-select-layout")}
                    </Label>
                    <SelectInput
                      name={`images.${index}.key` as const}
                      control={control}
                      options={updateImages}
                      isClearable={false}
                    />
                    <ValidationError message={t(errors.images?.[index]?.key?.message)}/>

                    <div>
                      <FileInput name={`images.${index}.image` as const} control={control} multiple={true}/>
                      <ValidationError message={t(errors.images?.[index]?.image?.message)}/>
                    </div>
                  </div>

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
            ))}
          </div>
          <Button
            type="button"
            onClick={() => brandImageAppend({ key: { ...keyBasedImages[0] }, image: [] })}
            className="w-full sm:w-auto"
          >
            {t("form:button-label-add-brand-layout")}
          </Button>

          {errors?.images?.message ? (
            <Alert
              message={t(errors?.images?.message)}
              variant="error"
              className="mt-5"
            />
          ) : null}
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
            ? t("form:button-label-update-group")
            : t("form:button-label-add-group")}
        </Button>
      </div>
    </form>
  );
}