import { useState } from "react";
import Alert from "@components/ui/alert";
import { useForgetPasswordMutation } from "@data/user/use-forget-password.mutation";
import { useVerifyForgetPasswordTokenMutation } from "@data/user/use-verify-forget-password-token.mutation";
import { useResetPasswordMutation } from "@data/user/use-reset-password.mutation";
import dynamic from "next/dynamic";
import Router from "next/router";
import { useTranslation } from "next-i18next";
const EnterEmailView = dynamic(() => import("./enter-email-view"));
const EnterTokenView = dynamic(() => import("./enter-token-view"));
const EnterNewPasswordView = dynamic(() => import("./enter-new-password-view"));

const ForgotPassword = () => {
  const { t } = useTranslation();
  const { mutate: forgetPassword, isLoading } = useForgetPasswordMutation();
  const { mutate: verifyToken, isLoading: verifying } =
    useVerifyForgetPasswordTokenMutation();
  const { mutate: resetPassword, isLoading: resetting } =
    useResetPasswordMutation();
  const [errorMsg, setErrorMsg] = useState<string | null | undefined>("");
  const [verifiedEmail, setVerifiedEmail] = useState("");
  const [verifiedToken, setVerifiedToken] = useState("");

  function handleEmailSubmit({ email }: { email: string }) {
    forgetPassword(
      {
        variables: {
          input: {
            email,
          },
        },
      },
      {
        onSuccess: ({ data }) => {
          if (data?.success) {
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
        variables: {
          input: {
            email: verifiedEmail,
            token,
          },
        },
      },
      {
        onSuccess: ({ data }) => {
          if (data?.success) {
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
        variables: {
          input: {
            email: verifiedEmail,
            token: verifiedToken,
            password,
          },
        },
      },
      {
        onSuccess: ({ data }) => {
          if (data?.success) {
            Router.push("/");
          } else {
            setErrorMsg(data?.message);
          }
        },
      }
    );
  }

  return (
    <>
      {errorMsg && (
        <Alert
          variant="error"
          message={t(`common:${errorMsg}`)}
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
    </>
  );
};

export default ForgotPassword;
