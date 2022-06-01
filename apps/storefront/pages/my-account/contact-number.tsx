import { getLayout } from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import ProfileContactNumber from "@components/profile/profile-contact-number";
import useUser from "@framework/auth/use-user";

export { getStaticProps } from "@framework/ssr/common";

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
