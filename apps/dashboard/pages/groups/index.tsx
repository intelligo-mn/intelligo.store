import Card from "@components/common/card";
import Layout from "@components/layouts/admin";
import Search from "@components/common/search";
import TypeList from "@components/group/group-list";
import ErrorMessage from "@components/ui/error-message";
import LinkButton from "@components/ui/link-button";
import Loader from "@components/ui/loader/loader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTypesQuery } from "@graphql/type.graphql";
import { adminOnly } from "@utils/auth-utils";
import { ROUTES } from "@utils/routes";
import SortFormGql from "@components/common/sort-form-gql";
import { QueryTypesOrderByColumn, SortOrder } from "__generated__/__types__";
export default function GroupsPage() {
  const { t } = useTranslation();

  const { data, loading, error, refetch } = useTypesQuery({
    variables: {
      orderBy: [
        {
          column: QueryTypesOrderByColumn.UpdatedAt,
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
            {t("common:sidebar-nav-item-groups")}
          </h1>
        </div>

        <div className="w-full xl:w-1/2 flex flex-col md:flex-row space-y-4 md:space-y-0 items-center ms-auto">
          <Search onSearch={handleSearch} />

          <LinkButton
            href={`${ROUTES.GROUPS}/create`}
            className="h-12 md:ms-6 w-full md:w-auto"
          >
            <span className="block md:hidden xl:block">
              + {t("form:button-label-add-group")}
            </span>
            <span className="hidden md:block xl:hidden">
              + {t("form:button-label-add")}
            </span>
          </LinkButton>
        </div>
      </Card>
      <TypeList types={data?.types} refetch={refetch} />
    </>
  );
}
GroupsPage.authenticate = {
  permissions: adminOnly,
};
GroupsPage.Layout = Layout;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["table", "common", "form"])),
  },
});
