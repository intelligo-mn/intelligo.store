import Input from "@components/ui/input";
import {
  Control,
  FieldErrors,
  useForm,
  useFormState,
  useWatch,
} from "react-hook-form";
import Button from "@components/ui/button";
import TextArea from "@components/ui/text-area";
import Label from "@components/ui/label";
import {
  useCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} from "@graphql/categories.graphql";
import { useTypesQuery } from "@graphql/type.graphql";
import Card from "@components/common/card";
import Description from "@components/ui/description";
import * as categoriesIcon from "@components/icons/category";
import { getIcon } from "@utils/get-icon";
import { useRouter } from "next/router";
import { ROUTES } from "@utils/routes";
import { getErrorMessage } from "@utils/form-error";
import ValidationError from "@components/ui/form-validation-error";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { categoryIcons } from "./category-icons";
import { useTranslation } from "next-i18next";
import FileInput from "@components/ui/file-input";
import SelectInput from "@components/ui/select-input";
import { yupResolver } from "@hookform/resolvers/yup";
import { categoryValidationSchema } from "./category-validation-schema";
import { getFormattedImage } from "@utils/get-formatted-image";
import {
  Category,
  QueryCategoriesHasTypeColumn,
  SqlOperator,
} from "__generated__/__types__";

function SelectTypes({
  control,
  errors,
}: {
  control: Control<FormValues>;
  errors: FieldErrors;
}) {
  const { t } = useTranslation();
  const { data: types, loading } = useTypesQuery({
    fetchPolicy: "network-only",
  });
  return (
    <div className="mb-5">
      <Label>{t("form:input-label-types")}</Label>
      <SelectInput
        name="type"
        control={control}
        getOptionLabel={(option: any) => option.name}
        getOptionValue={(option: any) => option.slug}
        options={types?.types!}
        isLoading={loading}
      />
      <ValidationError message={t(errors.type?.message)} />
    </div>
  );
}
function SelectCategories({
  control,
  setValue,
}: {
  control: Control<FormValues>;
  setValue: any;
}) {
  const { t } = useTranslation();
  const type = useWatch({
    control,
    name: "type",
  });
  const { dirtyFields } = useFormState({
    control,
  });
  useEffect(() => {
    if (type?.slug && dirtyFields?.type) {
      setValue("parent", []);
    }
  }, [type?.slug]);
  const { data: categories, loading } = useCategoriesQuery({
    fetchPolicy: "network-only",
    variables: {
      ...(type && {
        hasType: {
          column: QueryCategoriesHasTypeColumn.Slug,
          operator: SqlOperator.Eq,
          value: type?.slug,
        },
      }),
    },
  });
  return (
    <div>
      <Label>{t("form:input-label-parent-category")}</Label>
      <SelectInput
        name="parent"
        control={control}
        getOptionLabel={(option: any) => option.name}
        getOptionValue={(option: any) => option.id}
        options={categories?.categories?.data!}
        isClearable={true}
        isLoading={loading}
      />
    </div>
  );
}

export const updatedIcons = categoryIcons.map((item: any) => {
  item.label = (
    <div className="flex space-s-5 items-center">
      <span className="flex w-5 h-5 items-center justify-center">
        {getIcon({
          iconList: categoriesIcon,
          iconName: item.value,
          className: "max-h-full max-w-full",
        })}
      </span>
      <span>{item.label}</span>
    </div>
  );
  return item;
});

type FormValues = {
  name: string;
  details: string;
  parent: any;
  image: any;
  icon: any;
  type: any;
};

const defaultValues = {
  image: [],
  name: "",
  details: "",
  parent: "",
  icon: "",
  type: "",
};

type IProps = {
  initialValues?: Category | null;
};
export default function CreateOrUpdateCategoriesForm({
  initialValues,
}: IProps) {
  const router = useRouter();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    //@ts-ignore
    defaultValues: initialValues
      ? {
          ...initialValues,
          icon: initialValues?.icon
            ? categoryIcons.find(
                (singleIcon) => singleIcon.value === initialValues?.icon!
              )
            : "",
        }
      : defaultValues,

    resolver: yupResolver(categoryValidationSchema),
  });

  const [createCategory, { loading: creating }] = useCreateCategoryMutation();
  const [updateCategory, { loading: updating }] = useUpdateCategoryMutation();

  const onSubmit = async (values: FormValues) => {
    const input = {
      name: values.name,
      details: values.details,
      image: getFormattedImage(values?.image),
      icon: values.icon?.value ?? "",
      parent: values.parent?.id,
      type: {
        connect: values.type?.id,
      },
    };
    try {
      if (initialValues) {
        const { data } = await updateCategory({
          variables: {
            input: {
              ...input,
              id: initialValues?.id!,
            },
          },
        });

        if (data) {
          toast.success(t("common:successfully-updated"));
        }
      } else {
        await createCategory({
          variables: {
            input,
          },
        });
        router.push(ROUTES.CATEGORIES);
      }
    } catch (err) {
      getErrorMessage(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap pb-8 border-b border-dashed border-border-base my-5 sm:my-8">
        <Description
          title={t("form:input-label-image")}
          details={t("form:category-image-helper-text")}
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
          } ${t("form:category-description-helper-text")}`}
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

          <TextArea
            label={t("form:input-label-details")}
            {...register("details")}
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
          <SelectTypes control={control} errors={errors} />
          <SelectCategories control={control} setValue={setValue} />
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
            ? t("form:button-label-update-category")
            : t("form:button-label-add-category")}
        </Button>
      </div>
    </form>
  );
}
