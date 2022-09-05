import { getLayout } from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import ErrorMessage from "@components/ui/error-message";
import Spinner from "@components/ui/loaders/spinner/spinner";
import AccountAddress from "@components/my-account/account-address";
import useUser from "@framework/auth/use-user";
import { useTranslation } from "next-i18next";

export { getStaticProps } from "@framework/ssr/common";

export default function AccountDetailsPage() {
  const { me, loading, error } = useUser();
  const { t } = useTranslation();

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <AccountLayout>
      {loading ? (
        <Spinner showText={false} />
      ) : (
        <AccountAddress
          addresses={me.address}
          userId={me.id}
          label={t("text-account-address")}
        />
      )}
    </AccountLayout>
  );
}

AccountDetailsPage.authenticate = true;
AccountDetailsPage.getLayout = getLayout;
