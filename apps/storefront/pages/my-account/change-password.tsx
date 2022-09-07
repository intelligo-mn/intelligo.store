import { getLayout } from "apps/storefront/components/layout/layout";
import AccountLayout from "apps/storefront/components/my-account/account-layout";
import ChangePassword from "apps/storefront/components/my-account/change-password";

export { getStaticProps } from "apps/storefront/framework/rest/ssr/common";

export default function ChangePasswordPage() {
  return (
    <AccountLayout>
      <ChangePassword />
    </AccountLayout>
  );
}

ChangePasswordPage.authenticate = true;
ChangePasswordPage.getLayout = getLayout;
