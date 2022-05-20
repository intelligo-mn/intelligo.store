import Card from "@components/common/card";
import Button from "@components/ui/button";
import Description from "@components/ui/description";
import PasswordInput from "@components/ui/password-input";
import useReset from "@core/auth/useReset";
import { yupResolver } from "@hookform/resolvers/yup";
import { getErrorMessage } from "@utils/form-error";
import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface FormValues {
  oldPassword: string;
  newPassword: string;
  passwordConfirmation: string;
}

const changeSchema = yup.object().shape({
  oldPassword: yup.string().required("form:error-old-password-required"),
  newPassword: yup.string().required("form:error-password-required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("newPassword")], "form:error-match-passwords")
    .required("form:error-confirm-password"),
});

const ChangePasswordForm = () => {
  const { t } = useTranslation();
  const { changePassword, loading } = useReset();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(changeSchema) });
  async function onSubmit({ newPassword, oldPassword }: FormValues) {
    try {
      const data: any = await changePassword(newPassword, oldPassword);
      if (!data?.changePassword?.success) {
        setError("oldPassword", {
          type: "manual",
          message: data?.changePassword?.message ?? "",
        });
      }
    } catch (error) {
      getErrorMessage(error);
    }
  }
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="my-5 flex flex-wrap sm:my-8">
        <Description
          title={t("form:input-label-password")}
          details={t("form:password-help-text")}
          className="sm:pe-4 md:pe-5 w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3"
        />

        <Card className="mb-5 w-full sm:w-8/12 md:w-2/3">
          <PasswordInput
            label={t("form:input-label-old-password")}
            {...register("oldPassword")}
            variant="outline"
            error={t(errors.oldPassword?.message!)}
            className="mb-5"
          />
          <PasswordInput
            label={t("form:input-label-new-password")}
            {...register("newPassword")}
            variant="outline"
            error={t(errors.newPassword?.message!)}
            className="mb-5"
          />
          <PasswordInput
            label={t("form:input-label-confirm-password")}
            {...register("passwordConfirmation")}
            variant="outline"
            error={t(errors.passwordConfirmation?.message!)}
          />
        </Card>

        <div className="text-end w-full">
          <Button loading={loading} disabled={loading}>
            {t("form:button-label-change-password")}
          </Button>
        </div>
      </div>
    </form>
  );
};
export default ChangePasswordForm;
