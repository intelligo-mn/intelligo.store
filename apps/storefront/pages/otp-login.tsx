import Container from "apps/storefront/components/ui/container";
import { getLayout } from "apps/storefront/components/layout/layout";
import Subscription from "apps/storefront/components/common/subscription";
import PageHeader from "apps/storefront/components/ui/page-header";
import { useRouter } from "next/router";
import { ROUTES } from "apps/storefront/lib/routes";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { authorizationAtom } from "apps/storefront/store/authorization-atom";
import PageLoader from "apps/storefront/components/ui/page-loader/page-loader";
import OtpLogin from "apps/storefront/components/auth/otp/otp-login";

export { getStaticProps } from "apps/storefront/framework/rest/ssr/common";

export default function OtpLoginPage() {
  const router = useRouter();
  const [isAuthorized] = useAtom(authorizationAtom);

  useEffect(() => {
    (async () => {
      if (isAuthorized) {
        return router.push(ROUTES.ACCOUNT);
      }
    })();
  }, [isAuthorized]);

  if (isAuthorized) return <PageLoader />;

  return (
    <>
      <PageHeader pageHeader="OTP Login" />
      <Container>
        <div className="py-16 lg:py-20">
          <OtpLogin layout="page" />
        </div>
        <Subscription />
      </Container>
    </>
  );
}

OtpLoginPage.getLayout = getLayout;
