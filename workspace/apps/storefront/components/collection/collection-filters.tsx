import React from "react";
import { useTranslation } from "next-i18next";
import ActiveLink from "@components/ui/active-link";
import { ROUTES } from "@lib/routes";
import { useTagsQuery } from "@framework/tags/tags.query";
import { useUI } from "@contexts/ui.context";
import {useRouter} from "next/router";
import classNames from "classnames";

export const CollectionFilters: React.FC = () => {
  const { t } = useTranslation("common");
  const { closeFilter } = useUI();
  const { data, isLoading: loading } = useTagsQuery({});
  const { query: { tags } } = useRouter();

  if (loading) return null;

  const items = data?.pages?.[0]?.data;

  return (
    <div className="pt-1">
      <div className="block border-b border-gray-300 pb-3 xl:pb-5 mb-7">
        <div className="flex items-center justify-between mb-2.5">
          <h2 className="font-semibold text-heading text-base md:text-xl lg:text-2xl">
            {t("text-collection-list")}
          </h2>
        </div>
      </div>
      <div className="block pb-7">
        <ul className="mt-2 flex flex-col space-y-5">
          {items?.map((item: any) => (
            <li
              key={item.id}
              className="text-sm lg:text-[15px] cursor-pointer"
              onClick={closeFilter}
            >
              <ActiveLink href={`${ROUTES.COLLECTIONS}/${item.slug}`}>
                <a className={classNames(
                  "block transition duration-300 ease-in-out text-heading hover:font-semibold py-0.5",
                  tags === item?.slug && "font-semibold"
                )}>
                  {item.name}
                </a>
              </ActiveLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
