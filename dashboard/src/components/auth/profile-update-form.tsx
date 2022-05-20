import Input from "@components/ui/input";
import { useForm } from "react-hook-form";
import Button from "@components/ui/button";
import Description from "@components/ui/description";
import Card from "@components/common/card";
import { getErrorMessage } from "@utils/form-error";
import TextArea from "@components/ui/text-area";
import pick from "lodash/pick";
import FileInput from "@components/ui/file-input";
import { useTranslation } from "next-i18next";
import { toast } from "react-toastify";
import useCustomer from "@core/user/useCustomer";

type FormValues = {
  name: string;
  profile: {
    id: string;
    bio: string;
    contact: string;
    avatar: {
      thumbnail: string;
      original: string;
      id: string;
    };
  };
};

export default function ProfileUpdate({ me }: any) {
  const { t } = useTranslation();
  const { updateCustomer, loading } = useCustomer();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      ...(me &&
        pick(me, ["name", "profile.bio", "profile.contact", "profile.avatar"])),
    },
  });

  async function onSubmit(values: FormValues) {
    const { name, profile } = values;
    try {
      await updateCustomer({
        id: me?.id,
        name,
        profile: {
          id: me?.profile?.id,
          bio: profile?.bio,
          contact: profile?.contact,
          avatar: {
            thumbnail: profile?.avatar?.thumbnail,
            original: profile?.avatar?.original,
            id: profile?.avatar?.id,
          },
        },
      }).then((res: any) => {
        toast.success(t("common:update-success"));
      });
    } catch (error) {
      getErrorMessage(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="border-border-base my-5 flex flex-wrap border-b border-dashed pb-8 sm:my-8">
        <Description
          title={t("form:input-label-avatar")}
          details={t("form:avatar-help-text")}
          className="sm:pe-4 md:pe-5 w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3"
        />

        <Card className="w-full sm:w-8/12 md:w-2/3">
          <FileInput name="profile.avatar" control={control} multiple={false} />
        </Card>
      </div>

      <div className="border-border-base my-5 flex flex-wrap border-b border-dashed pb-8 sm:my-8">
        <Description
          title={t("form:form-title-information")}
          details={t("form:profile-info-help-text")}
          className="sm:pe-4 md:pe-5 w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3"
        />

        <Card className="mb-5 w-full sm:w-8/12 md:w-2/3">
          <Input
            label={t("form:input-label-name")}
            {...register("name")}
            error={t(errors.name?.message!)}
            variant="outline"
            className="mb-5"
          />
          <TextArea
            label={t("form:input-label-bio")}
            {...register("profile.bio")}
            error={t(errors.profile?.bio?.message!)}
            variant="outline"
            className="mb-6"
          />
          <Input
            label={t("form:input-label-contact")}
            {...register("profile.contact")}
            error={t(errors.profile?.contact?.message!)}
            variant="outline"
            className="mb-5"
          />
        </Card>

        <div className="text-end w-full">
          <Button loading={loading} disabled={loading}>
            {t("form:button-label-save")}
          </Button>
        </div>
      </div>
    </form>
  );
}
