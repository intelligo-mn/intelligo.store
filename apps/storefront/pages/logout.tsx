import { useEffect } from "react";
import { signOut as socialLoginSignOut } from "next-auth/client";
import Cookies from "js-cookie";
import { AUTH_TOKEN } from "apps/storefront/lib/constants";
import { useLogoutMutation } from "apps/storefront/framework/rest/auth/auth.query";
import { useAtom } from "jotai";
import { authorizationAtom } from "apps/storefront/store/authorization-atom";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import PageLoader from "apps/storefront/components/ui/page-loader/page-loader";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { clearCheckoutAtom } from "apps/storefront/store/checkout";

const Logout = () => {
  const { mutate } = useLogoutMutation();
  const { pathname, ...router } = useRouter();
  const [, authorize] = useAtom(authorizationAtom);
  const [, resetCheckout] = useAtom(clearCheckoutAtom);

  useEffect(() => {
    (async () => {
      resetCheckout();
      await socialLoginSignOut({ redirect: false });
      mutate(undefined, {
        onSuccess: () => {
          Cookies.remove(AUTH_TOKEN);
          authorize(false);
          router.push("/");
        },
      });
    })();
  }, []);

  return <PageLoader />;
};

export default Logout;

export const getStaticProps: GetStaticProps = ({ locale }) => {
  return {
    props: {
      ...serverSideTranslations(locale!, ["common"]),
    },
  };
};
