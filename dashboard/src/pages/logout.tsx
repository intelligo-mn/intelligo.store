import { useEffect } from "react";
import { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";
import { useLogoutMutation } from "@graphql/auth.graphql";
import Loader from "@components/ui/loader/loader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ROUTES } from "@utils/routes";
import { AUTH_CRED } from "@utils/constants";
import { GetStaticProps } from "next";
import Cookies from "js-cookie";

function SignOut() {
  const router = useRouter();
  const { t } = useTranslation();
  const client = useApolloClient();
  const [signOut] = useLogoutMutation();

  useEffect(() => {
    signOut().then(() => {
      client.resetStore().then(() => {
        Cookies.remove(AUTH_CRED);
        router.replace(ROUTES.LOGIN);
      });
    });
  }, [signOut, router, client]);

  return <Loader text={t("common:signing-out-text")} />;
}

export default SignOut;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["common"])),
  },
});
