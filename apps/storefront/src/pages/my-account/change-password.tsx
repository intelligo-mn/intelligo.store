import { getLayout } from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import ChangePassword from "@components/my-account/change-password";

export { getStaticProps } from "@framework/ssr/common";

export default function ChangePasswordPage() {
  return (
    <AccountLayout>
      <ChangePassword />
    </AccountLayout>
  );
}

ChangePasswordPage.authenticate = true;
ChangePasswordPage.getLayout = getLayout;
