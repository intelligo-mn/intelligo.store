import Card from "@components/common/card";
import ShopLayout from "@components/layouts/shop";
import { adminOwnerAndStaffOnly } from "@utils/auth-utils";
import Search from "@components/common/search";
import LinkButton from "@components/ui/link-button";
import { useAuthorsQuery } from "@graphql/authors.graphql";
import { useState } from "react";
import { LIMIT } from "@utils/constants";
import ErrorMessage from "@components/ui/error-message";
import Loader from "@components/ui/loader/loader";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ROUTES } from "@utils/routes";
import { QueryAuthorsOrderByColumn, SortOrder } from "__generated__/__types__";
import AuthorList from "@components/author/author-list";

export default function Authors() {
  const { t } = useTranslation();
  const {
    query: { shop },
  } = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, error, refetch } = useAuthorsQuery({
    variables: {
      first: LIMIT,
      orderBy: [
        {
          column: QueryAuthorsOrderByColumn.CreatedAt,
          order: SortOrder.Desc,
        },
      ],
      page: 1,
    },
    fetchPolicy: "network-only",
  });
  if (loading) return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;

  function handleSearch({ searchText }: { searchText: string }) {
    setSearchTerm(searchText);
    refetch({
      text: `%${searchText}%`,
      page: 1,
    });
  }
  function handlePagination(current: number) {
    refetch({
      text: `%${searchTerm}%`,
      page: current,
    });
  }
  return (
    <>
      <Card className="flex flex-col xl:flex-row items-center mb-8">
        <div className="md:w-1/4 mb-4 xl:mb-0">
          <h1 className="text-xl font-semibold text-heading">
            {t("common:text-authors")}
          </h1>
        </div>

        <div className="w-full xl:w-1/2 flex flex-col md:flex-row space-y-4 md:space-y-0 items-center ms-auto">
          <Search onSearch={handleSearch} />

          <LinkButton
            href={`/${shop}/${ROUTES.AUTHORS}/create`}
            className="h-12 md:ms-6 w-full md:w-auto"
          >
            <span>+ {t("form:button-label-add-author")}</span>
          </LinkButton>
        </div>
      </Card>

      <AuthorList
        authors={data?.authors}
        onPagination={handlePagination}
        refetch={refetch}
      />
    </>
  );
}
Authors.authenticate = {
  permissions: adminOwnerAndStaffOnly,
};
Authors.Layout = ShopLayout;

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["table", "common", "form"])),
  },
});
