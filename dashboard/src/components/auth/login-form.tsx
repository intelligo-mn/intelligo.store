import { useApolloClient } from "@apollo/client";
import Alert from "@components/ui/alert";
import Button from "@components/ui/button";
import Input from "@components/ui/input";
import Link from "@components/ui/link";
import PasswordInput from "@components/ui/password-input";
import useAuth from "@core/auth/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import { allowedRoles, hasAccess, setAuthCredentials } from "@utils/auth-utils";
import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type FormValues = {
  email: string;
  password: string;
};
const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("form:error-email-format")
    .required("form:error-email-required"),
  password: yup.string().required("form:error-password-required"),
});
const LoginForm = () => {
  const client = useApolloClient();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { login, loading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(loginFormSchema),
  });
  const router = useRouter();
  const { t } = useTranslation();

  function onSubmit({ email, password }: FormValues) {
    client.resetStore();
    login(email, password).then((data: any) => {
      if (data.login?.token) {
        if (hasAccess(allowedRoles, data.login.permissions)) {
          setAuthCredentials(data.login.token, data.login.permissions);
          router.push(ROUTES.DASHBOARD);
          return;
        }
        setErrorMessage("form:error-enough-permission");
      } else {
        setErrorMessage("form:error-credential-wrong");
      }
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          label={t("form:input-label-email")}
          {...register("email")}
          type="email"
          variant="outline"
          className="mb-4"
          error={t(errors?.email?.message!)}
        />
        <PasswordInput
          label={t("form:input-label-password")}
          forgotPassHelpText={t("form:input-forgot-password-label")}
          {...register("password")}
          error={t(errors?.password?.message!)}
          variant="outline"
          className="mb-4"
          forgotPageLink={ROUTES.FORGET_PASSWORD}
        />
        <Button className="w-full" loading={loading} disabled={loading}>
          {t("form:button-label-login")}
        </Button>

        <div className="text-heading relative mt-8 mb-6 flex flex-col items-center justify-center text-sm sm:mt-11 sm:mb-8">
          <hr className="w-full" />
          <span className="start-2/4 -ms-4 bg-light absolute -top-2.5 px-2">
            {t("common:text-or")}
          </span>
        </div>

        <div className="text-body text-center text-sm sm:text-base">
          {t("form:text-no-account")}{" "}
          <Link
            href={ROUTES.REGISTER}
            className="ms-1 text-accent hover:text-accent-hover focus:text-accent-700 font-semibold underline transition-colors duration-200 hover:no-underline focus:no-underline focus:outline-none"
          >
            {t("form:link-register-shop-owner")}
          </Link>
        </div>

        {errorMessage ? (
          <Alert
            message={t(errorMessage)}
            variant="error"
            closeable={true}
            className="mt-5"
            onClose={() => setErrorMessage(null)}
          />
        ) : null}
      </form>
    </>
  );
};

export default LoginForm;
