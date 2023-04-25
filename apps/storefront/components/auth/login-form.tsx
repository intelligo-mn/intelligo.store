import { useForm } from "react-hook-form";
// @ts-ignore
import { ImGoogle2 } from "@react-icons/all-files/im/ImGoogle2";
// import { ImFacebook2 } from "@react-icons/all-files/im/ImFacebook2";
import { useTranslation } from "next-i18next";
import * as yup from "yup";
import Input from "@components/ui/input";
import PasswordInput from "@components/ui/password-input";
import Button from "@components/ui/button";
import { useLoginMutation } from "@framework/auth/auth.query";
import { useUI } from "@contexts/ui.context";
import Logo from "@components/ui/logo";
import { yupResolver } from "@hookform/resolvers/yup";
import Alert from "@components/ui/alert";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { signIn } from "next-auth/client";
import { useAtom } from "jotai";
import { authorizationAtom } from "@store/authorization-atom";
import { AUTH_TOKEN } from "@lib/constants";
import { useRouter } from "next/router";
import { ROUTES } from "@lib/routes";
import { MobileIcon } from "@components/icons/mobile-icon";

interface LoginInputType {
  email: string;
  password: string;
  remember_me: boolean;
}

const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("forms:email-error")
    .required("forms:email-required"),
  password: yup.string().required("forms:password-required"),
});

const defaultValues = {
  email: "",
  password: "",
};

type Props = {
  layout?: "modal" | "page";
};

const LoginForm: React.FC<Props> = ({ layout = "modal" }) => {
  const router = useRouter();
  const { setModalView, openModal, closeModal } = useUI();
  const { t } = useTranslation();
  const [errorMessage, setErrorMessage] = useState("");
  const [_, authorize] = useAtom(authorizationAtom);
  const { mutate: login, isLoading: loading } = useLoginMutation();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<LoginInputType>({
    resolver: yupResolver(loginFormSchema),
    defaultValues,
  });

  function onSubmit({ email, password, remember_me }: LoginInputType) {
    login(
      {
        email,
        password,
      },
      {
        onSuccess: (data) => {
          if (data?.token && data?.permissions?.length) {
            Cookies.set(AUTH_TOKEN, data.token, {
              expires: remember_me ? 365 : undefined,
            });
            authorize(true);

            if (layout === "page") {
              // Redirect to the my-account page
              return router.push(ROUTES.ACCOUNT);
            } else {
              closeModal();
              return;
            }
          }
          if (!data.token) {
            setErrorMessage(t("forms:error-credential-wrong"));
          }
        },
        onError: (error: any) => {
          console.log(error.message);
        },
      }
    );
  }

  function handleSignUp() {
    if (layout === "modal") {
      setModalView("SIGN_UP_VIEW");
      return openModal();
    } else {
      router.push(`${ROUTES.SIGN_UP}`);
    }
  }

  function handleForgetPassword() {
    if (layout === "modal") {
      setModalView("FORGET_PASSWORD");
      return openModal();
    } else {
      router.push(`${ROUTES.FORGET_PASSWORD}`);
    }
  }

  function handleOtpLogin() {
    if (layout === "modal") {
      setModalView("OTP_LOGIN_VIEW");
      return openModal();
    } else {
      router.push(`${ROUTES.OTP_LOGIN}`);
    }
  }

  return (
    <div className="overflow-hidden bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300 py-5 px-5 sm:px-8">
      <div className="text-center mb-6 pt-2.5">
        <div onClick={closeModal}>
          <Logo />
        </div>
        <p className="text-sm md:text-base text-body mt-2 mb-8 sm:mb-10">
          {t("common:login-helper")}
        </p>
      </div>

      {errorMessage && (
        <Alert message={errorMessage} variant={"error"} className="my-3" />
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center"
        noValidate
      >
        <div className="flex flex-col space-y-3.5">
          <Input
            labelKey="forms:label-email-star"
            type="email"
            variant="solid"
            {...register("email")}
            errorKey={errors.email?.message}
          />
          <PasswordInput
            labelKey="forms:label-password-star"
            errorKey={errors.password?.message}
            {...register("password")}
          />
          <div className="flex items-center justify-center">
            <div className="flex items-center flex-shrink-0">
              <label className="switch relative inline-block w-10 cursor-pointer">
                <input
                  id="remember"
                  type="checkbox"
                  className="opacity-0 w-0 h-0"
                  {...register("remember_me")}
                />
                <span className="bg-gray-500 absolute inset-0 transition-all duration-300 ease-in slider round" />
              </label>
              <label
                htmlFor="remember"
                className="flex-shrink-0 text-sm text-heading ltr:pl-3 rtl:pr-3 cursor-pointer"
              >
                {t("forms:label-remember-me")}
              </label>
            </div>
            <div className="flex ltr:ml-auto rtl:mr-auto">
              <button
                type="button"
                onClick={handleForgetPassword}
                className="ltr:text-right rtl:text-left text-sm text-heading ltr:pl-3 rtl:pr-3 underline hover:no-underline focus:no-underline focus:outline-none"
              >
                {t("common:text-forgot-password")}
              </button>
            </div>
          </div>
          <div className="relative">
            <Button
              type="submit"
              loading={loading}
              disabled={loading}
              className="h-11 md:h-12 w-full mt-1.5"
            >
              {t("common:text-login")}
            </Button>
          </div>
        </div>
      </form>
      <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-6 mb-3.5">
        <hr className="w-full border-gray-300" />
        <span className="absolute -top-2.5 px-2 bg-white">
          {t("common:text-or")}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-2">
        <Button
          loading={false}
          disabled={false}
          className="h-11 md:h-12 w-full mt-2.5 bg-google hover:bg-googleHover"
          onClick={() => signIn("google")}
        >
          <ImGoogle2 className="text-sm sm:text-base ltr:mr-1.5 rtl:ml-1.5" />
          {t("common:text-login-with-google")}
        </Button>

        <Button
          className="h-11 md:h-12 w-full mt-1.5"
          disabled={loading}
          onClick={handleOtpLogin}
        >
          <MobileIcon className="h-5 ltr:mr-2 rtl:ml-2 text-light" />
          {t('text-login-mobile')}
        </Button>
      </div>

      <div className="text-sm sm:text-base text-body text-center mt-5 mb-1">
        {t("common:text-no-account")}{" "}
        <button
          type="button"
          className="text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:no-underline focus:outline-none"
          onClick={handleSignUp}
        >
          {t("common:text-register")}
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
