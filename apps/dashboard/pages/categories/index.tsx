import CategoryList from "@components/category/category-list";
import Card from "@components/common/card";
import Layout from "@components/layouts/admin";
import Search from "@components/common/search";
import LinkButton from "@components/ui/link-button";
import { useCategoriesQuery } from "@graphql/categories.graphql";
import { useState } from "react";
import ErrorMessage from "@components/ui/error-message";
import Loader from "@components/ui/loader/loader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { adminOnly } from "@utils/auth-utils";
import { ROUTES } from "@utils/routes";
import TypeFilter from "@components/category/type-filter";
import {
  QueryCategoriesOrderByColumn,
  SortOrder,
} from "__generated__/__types__";

export default function Categories() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");

  const { data, loading, error, refetch } = useCategoriesQuery({
    variables: {
      first: 10,
      orderBy: [
        {
          column: QueryCategoriesOrderByColumn.UpdatedAt,
          order: SortOrder.Desc,
        },
      ],
      page: 1,
      parent: null,
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
      <Card className="flex flex-col mb-8">
        <div className="w-full flex flex-col md:flex-row items-center">
          <div className="md:w-1/4 mb-4 md:mb-0">
            <h1 className="text-xl font-semibold text-heading">
              {t("form:input-label-categories")}
            </h1>
          </div>

          <div className="w-full xl:w-3/4 flex flex-col md:flex-row space-y-4 md:space-y-0 items-center ms-auto">
            <Search onSearch={handleSearch} />
            <TypeFilter refetch={refetch} className="md:ms-6" />
            <LinkButton
              href={`${ROUTES.CATEGORIES}/create`}
              className="h-12 md:ms-6 w-full md:w-auto"
            >
              <span className="block md:hidden xl:block">
                + {t("form:button-label-add-categories")}
              </span>
              <span className="hidden md:block xl:hidden">
                + {t("form:button-label-add")}
              </span>
            </LinkButton>
          </div>
        </div>
      </Card>

      <CategoryList
        categories={data?.categories}
        onPagination={handlePagination}
        refetch={refetch}
      />
    </>
  );
}
Categories.authenticate = {
  permissions: adminOnly,
};
Categories.Layout = Layout;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form", "common", "table"])),
  },
});
