import Button from "@components/ui/button";
import PasswordInput from "@components/ui/password-input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "next-i18next";

interface Props {
  onSubmit: (values: { password: string }) => void;
  loading: boolean;
}

const newPasswordSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
});

const EnterNewPasswordView = ({ onSubmit, loading }: Props) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ password: string }>({
    resolver: yupResolver(newPasswordSchema)
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center"
      noValidate
    >
      <PasswordInput
        labelKey="forms:label-password-star"
        errorKey={errors.password?.message}
        {...register("password")}
      />
      <Button type="submit" className="h-11 md:h-12 w-full mt-2" loading={loading} disabled={loading}>
        {t("common:text-reset-password")}
      </Button>
    </form>
  );
};

export default EnterNewPasswordView;
