import Link from "apps/storefront/components/ui/link";
import { getLayout } from "apps/storefront/components/layout/layout";
import AccountLayout from "apps/storefront/components/my-account/account-layout";
import { ROUTES } from "apps/storefront/lib/routes";
import { useTranslation } from "next-i18next";
import useUser from "apps/storefront/framework/rest/auth/use-user";

export { getStaticProps } from "apps/storefront/framework/rest/ssr/common";

export default function AccountPage() {
  const { t } = useTranslation("common");
  const { me } = useUser();

  const currentUserIdentity = me?.name ?? me?.email;

  return (
    <AccountLayout>
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-3 xl:mb-5">
        {t("text-dashboard")}
      </h2>
      <div className="text-sm leading-7 md:text-base md:leading-loose">
        <p className="capitalize">
          {t("text-hello")}{" "}
          <span className="font-bold">{currentUserIdentity}</span> (not{" "}
          <span className="font-bold">{currentUserIdentity}</span>?{" "}
          <Link
            href={`${ROUTES.LOGOUT}`}
            className="font-bold underline cursor-pointer focus:outline-none"
          >
            {t("text-logout")}
          </Link>
          )
        </p>
        <br />
        {t("text-account-dashboard")}{" "}
        <Link
          href={ROUTES.ACCOUNT_ORDERS}
          className="text-heading underline font-semibold"
        >
          {t("text-recent-orders")}
        </Link>
        , {t("text-manage-your")}{" "}
        <Link
          href={ROUTES.ACCOUNT_ADDRESS}
          className="text-heading underline font-semibold"
        >
          {t("text-account-address")}
        </Link>{" "}
        {t("text-and")}{" "}
        <Link
          href={ROUTES.ACCOUNT_CONTACT_NUMBER}
          className="text-heading underline font-semibold"
        >
          {t("text-contact-number")}
        </Link>{" "}
        {t("text-and")}{" "}
        <Link
          href={ROUTES.ACCOUNT_CHANGE_PASSWORD}
          className="text-heading underline font-semibold"
        >
          {t("text-change-your-password")}
        </Link>
      </div>
    </AccountLayout>
  );
}

AccountPage.authenticate = true;
AccountPage.getLayout = getLayout;
