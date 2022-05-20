import Alert from "@components/ui/alert";
import useReset from "@core/auth/useReset";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";
const EnterEmailView = dynamic(() => import("./enter-email-view"));
const EnterTokenView = dynamic(() => import("./enter-token-view"));
const EnterNewPasswordView = dynamic(() => import("./enter-new-password-view"));

const ForgetPassword = () => {
  const { t } = useTranslation();
  const router = useRouter();
  // const [forgetPassword, { loading }] = useForgetPasswordMutation();
  // const [verifyToken, { loading: verifying }] =
  //   useVerifyForgetPasswordTokenMutation();
  // const [resetPassword, { loading: resetting }] = useResetPasswordMutation();
  const [errorMsg, setErrorMsg] = useState<string | null | undefined>("");
  const { loading } = useReset();
  const [verifiedEmail, setVerifiedEmail] = useState("");
  const [verifiedToken, setVerifiedToken] = useState("");

  async function handleEmailSubmit({ email }: { email: string }) {
    // const response = await forgetPassword({
    //   variables: {
    //     input: {
    //       email,
    //     },
    //   },
    // });
    // if (response?.data?.forgetPassword?.success) {
    //   setVerifiedEmail(email);
    // } else {
    //   setErrorMsg(response?.data?.forgetPassword?.message);
    // }
  }
  async function handleTokenSubmit({ token }: { token: string }) {
    // const response = await verifyToken({
    //   variables: {
    //     input: {
    //       email: verifiedEmail,
    //       token,
    //     },
    //   },
    // });
    // if (response?.data?.verifyForgetPasswordToken?.success) {
    //   setVerifiedToken(token);
    // } else {
    //   setErrorMsg(response?.data?.verifyForgetPasswordToken?.message);
    // }
  }
  async function handleResetPassword({ password }: { password: string }) {
    // const response = await resetPassword({
    //   variables: {
    //     input: {
    //       email: verifiedEmail,
    //       token: verifiedToken,
    //       password,
    //     },
    //   },
    // });
    // if (response?.data?.resetPassword?.success) {
    //   await router.push("/");
    // } else {
    //   setErrorMsg(response?.data?.resetPassword?.message);
    // }
  }

  return (
    <>
      {errorMsg && (
        <Alert
          variant="error"
          message={t(`common:${errorMsg}`)}
          closeable={true}
          onClose={() => setErrorMsg("")}
        />
      )}
      {!verifiedEmail && (
        <EnterEmailView loading={loading} onSubmit={handleEmailSubmit} />
      )}
      {verifiedEmail && !verifiedToken && (
        <EnterTokenView loading={loading} onSubmit={handleTokenSubmit} />
      )}
      {verifiedEmail && verifiedToken && (
        <EnterNewPasswordView
          loading={loading}
          onSubmit={handleResetPassword}
        />
      )}
    </>
  );
};

export default ForgetPassword;
