import Card from "@components/common/card";
import Layout from "@components/layouts/admin";
import Search from "@components/common/search";
import TaxList from "@components/tax/tax-list";
import ErrorMessage from "@components/ui/error-message";
import LinkButton from "@components/ui/link-button";
import Loader from "@components/ui/loader/loader";
import { useTaxesQuery } from "@graphql/tax.graphql";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { adminOnly } from "@utils/auth-utils";
import { ROUTES } from "@utils/routes";
import {
  QueryTaxClassesOrderByColumn,
  SortOrder,
} from "__generated__/__types__";

export default function TaxesPage() {
  const { t } = useTranslation();
  const { data, loading, error, refetch } = useTaxesQuery({
    variables: {
      orderBy: [
        {
          column: QueryTaxClassesOrderByColumn.UpdatedAt,
          order: SortOrder.Desc,
        },
      ],
    },
    fetchPolicy: "network-only",
  });
  if (loading) return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;
  function handleSearch({ searchText }: { searchText: string }) {
    refetch({
      text: `%${searchText}%`,
    });
  }

  return (
    <>
      <Card className="flex flex-col xl:flex-row items-center mb-8">
        <div className="md:w-1/4 mb-4 xl:mb-0">
          <h1 className="text-xl font-semibold text-heading">
            {t("form:input-label-taxes")}
          </h1>
        </div>

        <div className="w-full xl:w-1/2 flex flex-col md:flex-row space-y-4 md:space-y-0 items-center ms-auto">
          <Search onSearch={handleSearch} />

          <LinkButton
            href={`${ROUTES.TAXES}/create`}
            className="h-12 md:ms-6 w-full md:w-auto"
          >
            <span>+ {t("form:button-label-add-tax")}</span>
          </LinkButton>
        </div>
      </Card>

      <TaxList taxes={data?.taxClasses} refetch={refetch} />
    </>
  );
}
TaxesPage.authenticate = {
  permissions: adminOnly,
};
TaxesPage.Layout = Layout;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["table", "common", "form"])),
  },
});
