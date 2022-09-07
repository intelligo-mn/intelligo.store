import { getLayout } from "apps/storefront/components/layout/layout";
import AccountLayout from "apps/storefront/components/my-account/account-layout";
import ProfileContactNumber from "apps/storefront/components/profile/profile-contact-number";
import useUser from "apps/storefront/framework/rest/auth/use-user";

export { getStaticProps } from "apps/storefront/framework/rest/ssr/common";

export default function ChangeContactNumber() {
  const { me } = useUser();

  return (
    <AccountLayout>
      <ProfileContactNumber userId={me?.id!} profileId={me?.profile?.id!} contact={me?.profile?.contact!}/>
    </AccountLayout>
  );
}

ChangeContactNumber.authenticate = true;
ChangeContactNumber.getLayout = getLayout;
