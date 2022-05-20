import Card from "@components/common/card";
import Layout from "@components/layouts/admin";
import Search from "@components/common/search";
import LinkButton from "@components/ui/link-button";
import { useState } from "react";
import ErrorMessage from "@components/ui/error-message";
import Loader from "@components/ui/loader/loader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import TagList from "@components/tag/tag-list";
import { useTagsQuery } from "@graphql/tags.graphql";
import { adminOnly } from "@utils/auth-utils";
import { QueryTagsOrderByColumn, SortOrder } from "__generated__/__types__";

export default function Tags() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");

  const { data, loading, error, refetch } = useTagsQuery({
    variables: {
      first: 10,
      orderBy: [
        {
          column: QueryTagsOrderByColumn.UpdatedAt,
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
  function handlePagination(current: any) {
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
            {t("common:sidebar-nav-item-tags")}
          </h1>
        </div>

        <div className="w-full xl:w-1/2 flex flex-col md:flex-row space-y-4 md:space-y-0 items-center ms-auto">
          <Search onSearch={handleSearch} />

          <LinkButton
            href="/tags/create"
            className="h-12 md:ms-6 w-full md:w-auto"
          >
            <span className="block md:hidden xl:block">
              + {t("form:button-label-add-tag")}
            </span>
            <span className="hidden md:block xl:hidden">
              + {t("form:button-label-add")}
            </span>
          </LinkButton>
        </div>
      </Card>

      <TagList
        tags={data?.tags}
        onPagination={handlePagination}
        refetch={refetch}
      />
    </>
  );
}
Tags.authenticate = {
  permissions: adminOnly,
};
Tags.Layout = Layout;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form", "common", "table"])),
  },
});
