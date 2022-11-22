import React from "react";
import Logo from "@components/ui/logo";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ROUTES } from "@lib/routes";
import { useUI } from "@contexts/ui.context";
import Cookies from "js-cookie";
import { AUTH_TOKEN } from "@lib/constants";
import { useAtom } from "jotai";
import { authorizationAtom } from "@store/authorization-atom";
import { OTPLoginForm } from "@components/auth/otp/otp-login-form";

type Props = {
  layout?: "modal" | "page";
};

const OtpLogin: React.FC<Props> = ({ layout = "modal" }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { setModalView, openModal, closeModal } = useUI();
  const [_, authorize] = useAtom(authorizationAtom);

  const onLoginSuccess = (token: string) => {
    if (token) {
      Cookies.set(AUTH_TOKEN, token);
      authorize(true);

      if (layout === "modal") {
        closeModal();
        return;
      } else {
        return router.push(ROUTES.ACCOUNT);
      }
    }
  };

  const handleSignIn = () => {
    if (layout === "modal") {
      setModalView("LOGIN_VIEW");
      return openModal();
    } else {
      return router.push(ROUTES.LOGIN);
    }
  };

  return (
    <div className="py-6 px-5 sm:p-8 bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300">
      <div className="text-center mb-9 pt-2.5">
        <div onClick={closeModal}>
          <Logo />
        </div>
        <p className="text-sm md:text-base text-body mt-3 sm:mt-4 mb-8 sm:mb-10">
          {t("common:forgot-password-helper")}
        </p>
      </div>

      <OTPLoginForm onLoginSuccess={onLoginSuccess} />

      <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-8 sm:mt-10 mb-6 sm:mb-7">
        <hr className="w-full border-gray-300" />
        <span className="absolute -top-2.5 px-2 bg-white">
          {t("common:text-or")}
        </span>
      </div>
      <div className="text-sm sm:text-base text-body text-center">
        {t("common:text-back-to")}{" "}
        <button
          type="button"
          className="text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:outline-none"
          onClick={handleSignIn}
        >
          {t("common:text-login")}
        </button>
      </div>
    </div>
  );
};

export default OtpLogin;
