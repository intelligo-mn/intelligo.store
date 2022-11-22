import React, { useState } from "react";
import Logo from "@components/ui/logo";
import Alert from "@components/ui/alert";
import { useUI } from "@contexts/ui.context";
import { useForgetPasswordMutation } from "@framework/auth/auth.query";
import { useVerifyForgetPasswordTokenMutation } from "@framework/auth/auth.query";
import { useResetPasswordMutation } from "@framework/auth/auth.query";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import {useRouter} from "next/router";
import {ROUTES} from "@lib/routes";

const EnterEmailView = dynamic(() => import("./enter-email-view"));
const EnterTokenView = dynamic(() => import("./enter-token-view"));
const EnterNewPasswordView = dynamic(() => import("./enter-new-password-view"));

type Props = {
  layout?: "modal" | "page"
}

const ForgotPassword: React.FC<Props> = ({ layout = "modal" }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const { setModalView, openModal, closeModal } = useUI();
  const { mutate: forgetPassword, isLoading } = useForgetPasswordMutation();
  const { mutate: verifyToken, isLoading: verifying } = useVerifyForgetPasswordTokenMutation();
  const { mutate: resetPassword, isLoading: resetting } = useResetPasswordMutation();

  const [errorMsg, setErrorMsg] = useState<string | null | undefined>("");
  const [verifiedEmail, setVerifiedEmail] = useState("");
  const [verifiedToken, setVerifiedToken] = useState("");

  function handleEmailSubmit({ email }: { email: string }) {
    forgetPassword(
      {
        email,
      },
      {
        onSuccess: (data) => {
          if (data.success) {
            setVerifiedEmail(email);
          } else {
            setErrorMsg(data?.message);
          }
        },
      }
    );
  }

  function handleTokenSubmit({ token }: { token: string }) {
    verifyToken(
      {
        email: verifiedEmail,
        token,
      },
      {
        onSuccess: (data) => {
          if (data.success) {
            setVerifiedToken(token);
          } else {
            setErrorMsg(data?.message);
          }
        },
      }
    );
  }

  function handleResetPassword({ password }: { password: string }) {
    resetPassword(
      {
        email: verifiedEmail,
        token: verifiedToken,
        password,
      },
      {
        onSuccess: (data) => {
          if (data.success) {
            if (layout === "page"){
              router.push(ROUTES.LOGIN)
            }else {
              setModalView("LOGIN_VIEW");
            }
          } else {
            setErrorMsg(data?.message);
          }
        },
      }
    );
  }

  function handleSignIn() {
    if (layout === "modal"){
      setModalView("LOGIN_VIEW");
      return openModal();
    }else {
      router.push(`${ROUTES.LOGIN}`);
    }
  }

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
      {errorMsg && (
        <Alert
          variant="error"
          message={t(errorMsg)}
          className="mb-6"
          closeable={true}
          onClose={() => setErrorMsg("")}
        />
      )}
      {!verifiedEmail && (
        <EnterEmailView loading={isLoading} onSubmit={handleEmailSubmit} />
      )}
      {verifiedEmail && !verifiedToken && (
        <EnterTokenView loading={verifying} onSubmit={handleTokenSubmit} />
      )}
      {verifiedEmail && verifiedToken && (
        <EnterNewPasswordView
          loading={resetting}
          onSubmit={handleResetPassword}
        />
      )}
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

export default ForgotPassword;
