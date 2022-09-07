import Container from "apps/storefront/components/ui/container";
import { getLayout } from "apps/storefront/components/layout/layout";
import SignUpForm from "apps/storefront/components/auth/sign-up-form";
import PageHeader from "apps/storefront/components/ui/page-header";
import Subscription from "apps/storefront/components/common/subscription";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { authorizationAtom } from "apps/storefront/store/authorization-atom";
import { useEffect } from "react";
import { ROUTES } from "apps/storefront/lib/routes";
import PageLoader from "apps/storefront/components/ui/page-loader/page-loader";

export { getStaticProps } from "apps/storefront/framework/rest/ssr/common";

export default function SignUpPage() {
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
      <PageHeader pageHeader="Register" />
      <Container>
        <div className="py-16 lg:py-20">
          <SignUpForm layout="page" />
        </div>
        <Subscription />
      </Container>
    </>
  );
}

SignUpPage.getLayout = getLayout;
