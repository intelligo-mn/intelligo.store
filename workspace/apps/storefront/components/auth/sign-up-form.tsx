import Input from "@components/ui/input";
import PasswordInput from "@components/ui/password-input";
import Button from "@components/ui/button";
import { useForm } from "react-hook-form";
import Logo from "@components/ui/logo";
import { useUI } from "@contexts/ui.context";
/* @ts-ignore */
import { ImGoogle2 } from "@react-icons/all-files/im/ImGoogle2";
// import { ImFacebook2 } from "@react-icons/all-files/im/ImFacebook2";
import Link from "@components/ui/link";
import { ROUTES } from "@lib/routes";
import { useTranslation } from "next-i18next";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Alert from "@components/ui/alert";
import React, { useState } from "react";
import { useRegisterMutation } from "@framework/auth/auth.query";
import { AUTH_TOKEN } from "@lib/constants";
import { useAtom } from "jotai";
import { authorizationAtom } from "@store/authorization-atom";
import Cookies from "js-cookie";
import {useRouter} from "next/router";

interface SignUpInputType {
  email: string;
  password: string;
  name: string;
}

const registerFormSchema = yup.object().shape({
  name: yup.string().required("forms:name-required"),
  email: yup
    .string()
    .email("forms:email-error")
    .required("forms:email-required"),
  password: yup.string().required("forms:password-required"),
});

const defaultValues = {
  name: "",
  email: "",
  password: "",
};

type Props = {
  layout?: "modal" | "page";
}

const SignUpForm: React.FC<Props> = ({ layout = "modal" }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const [errorMessage, setErrorMessage] = useState("");
  const [_, authorize] = useAtom(authorizationAtom);
  const { mutate: signUp, isLoading }: any = useRegisterMutation();
  const { setModalView, openModal, closeModal } = useUI();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpInputType>({
    resolver: yupResolver(registerFormSchema),
    defaultValues,
  });

  function handleSignIn() {
    if (layout === "modal"){
      setModalView("LOGIN_VIEW");
      return openModal();
    }else {
      router.push(`${ROUTES.LOGIN}`);
    }
  }

  function onSubmit({ name, email, password }: SignUpInputType) {
    signUp(
      {
        name,
        email,
        password,
      },
      {
        onSuccess: (data: any) => {
          if (data?.token && data?.permissions?.length) {
            Cookies.set(AUTH_TOKEN, data.token);
            authorize(true);

            if (layout === "page"){
              // Redirect to the my-account page
              return router.push(ROUTES.ACCOUNT);
            }else {
              closeModal();
              return;
            }
          }
          if (!data.token) {
            setErrorMessage(t("forms:error-credential-wrong"));
          }
        },
        onError: (error: any) => {
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
    <div className="py-5 px-5 sm:px-8 bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300">
      <div className="text-center mb-6 pt-2.5">
        <div onClick={closeModal}>
          <Logo />
        </div>
        <p className="text-sm md:text-base text-body mt-2 mb-8 sm:mb-10">
          {t("common:registration-helper")}{" "}
          <Link
            href={ROUTES.TERMS}
            className="text-heading underline hover:no-underline focus:outline-none"
          >
            {t("common:text-terms")}
          </Link>{" "}
          &amp;{" "}
          <Link
            href={ROUTES.POLICY}
            className="text-heading underline hover:no-underline focus:outline-none"
          >
            {t("common:text-policy")}
          </Link>
        </p>
      </div>

      {errorMessage && <Alert message={errorMessage} className="my-3" />}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center"
        noValidate
      >
        <div className="flex flex-col space-y-4">
          <Input
            labelKey="forms:label-name-star"
            type="text"
            variant="solid"
            {...register("name")}
            errorKey={errors.name?.message}
          />
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
          <div className="relative">
            <Button
              type="submit"
              loading={isLoading}
              disabled={isLoading}
              className="h-11 md:h-12 w-full mt-2"
            >
              {t("common:text-register")}
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

      {/* Enable it for facebook social auth */}
      {/*<Button*/}
      {/*  type="submit"*/}
      {/*  loading={false}*/}
      {/*  disabled={isLoading}*/}
      {/*  className="h-11 md:h-12 w-full mt-2.5 bg-facebook hover:bg-facebookHover"*/}
      {/*>*/}
      {/*  <ImFacebook2 className="text-sm sm:text-base ltr:ml-1.5 rtl:mr-1.5" />*/}
      {/*  {t("common:text-login-with-facebook")}*/}
      {/*</Button>*/}
      <Button
        type="submit"
        loading={false}
        disabled={isLoading}
        className="h-11 md:h-12 w-full mt-2.5 bg-google hover:bg-googleHover"
      >
        <ImGoogle2 className="text-sm sm:text-base ltr:mr-1.5 rtl:ml-1.5" />
        {t("common:text-login-with-google")}
      </Button>
      <div className="text-sm sm:text-base text-body text-center mt-5 mb-1">
        {t("common:text-have-account")}{" "}
        <button
          type="button"
          className="text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:no-underline focus:outline-none"
          onClick={handleSignIn}
        >
          {t("common:text-login")}
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
