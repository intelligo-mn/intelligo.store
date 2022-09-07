import { getLayout } from "apps/storefront/components/layout/layout";
import AccountLayout from "apps/storefront/components/my-account/account-layout";
import ErrorMessage from "apps/storefront/components/ui/error-message";
import Spinner from "apps/storefront/components/ui/loaders/spinner/spinner";
import AccountAddress from "apps/storefront/components/my-account/account-address";
import useUser from "apps/storefront/framework/rest/auth/use-user";
import { useTranslation } from "next-i18next";

export { getStaticProps } from "apps/storefront/framework/rest/ssr/common";

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
