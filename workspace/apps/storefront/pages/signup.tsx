import Container from "@components/ui/container";
import { getLayout } from "@components/layout/layout";
import SignUpForm from "@components/auth/sign-up-form";
import PageHeader from "@components/ui/page-header";
import Subscription from "@components/common/subscription";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { authorizationAtom } from "@store/authorization-atom";
import { useEffect } from "react";
import { ROUTES } from "@lib/routes";
import PageLoader from "@components/ui/page-loader/page-loader";

export { getStaticProps } from "@framework/ssr/common";

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
