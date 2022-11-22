import PasswordInput from "@components/ui/password-input";
import Button from "@components/ui/button";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { fadeInTop } from "@utils/motion/fade-in-top";
import { useChangePasswordMutation } from "@framework/auth/auth.query";
import { useTranslation } from "next-i18next";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

type FormValues = {
  oldPassword: string;
  newPassword: string;
  passwordConfirmation: string;
};

const defaultValues = {
  oldPassword: "",
  newPassword: "",
  passwordConfirmation: "",
};

const changePasswordSchema = yup.object().shape({
  oldPassword: yup.string().required("Old Password is required"),
  newPassword: yup.string().required("New password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Mismatched passwords")
    .required("Please confirm your password"),
});

const ChangePassword: React.FC = () => {
  const { t } = useTranslation();
  const {
    mutate: changePassword,
    isLoading: loading,
  } = useChangePasswordMutation();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(changePasswordSchema),
    defaultValues,
  });

  function onSubmit({ newPassword, oldPassword }: FormValues) {
    changePassword(
      {
        oldPassword: oldPassword,
        newPassword: newPassword,
      },
      {
        onSuccess: (data) => {
          if (!data.success) {
            setError("oldPassword", {
              type: "manual",
              message: data.message,
            });
            return;
          }
          reset();
          toast.success(t("password-update-success"));
        },
        onError: (error) => {
          const {
            response: { data },
          }: any = error ?? {};
          Object.keys(data).forEach((field: any) => {
            setError(field, {
              type: "manual",
              message: data[field][0],
            });
          });
        },
      }
    );
  }

  return (
    <>
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
        {t("common:text-change-password")}
      </h2>
      <motion.div
        layout
        initial="from"
        animate="to"
        exit="from"
        //@ts-ignore
        variants={fadeInTop(0.35)}
        className={`w-full flex  h-full lg:w-8/12 flex-col`}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full mx-auto flex flex-col justify-center "
        >
          <div className="flex flex-col space-y-3">
            <PasswordInput
              labelKey="forms:label-old-password-star"
              errorKey={errors.oldPassword?.message}
              {...register("oldPassword")}
              className="mb-4"
            />
            <PasswordInput
              labelKey="forms:label-new-password-star"
              errorKey={errors.newPassword?.message}
              {...register("newPassword")}
              className="mb-4"
            />

            <PasswordInput
              labelKey="forms:label-confirm-password-star"
              errorKey={errors.passwordConfirmation?.message}
              {...register("passwordConfirmation")}
              className="mb-4"
            />

            <div className="relative">
              <Button
                type="submit"
                loading={loading}
                disabled={loading}
                className="h-13 mt-3"
              >
                {t("common:text-change-password")}
              </Button>
            </div>
          </div>
        </form>
      </motion.div>
    </>
  );
};

export default ChangePassword;
