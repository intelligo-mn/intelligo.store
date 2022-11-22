import React, { useRef, useEffect } from "react";
import cn from "classnames";
import SearchResultLoader from "@components/ui/loaders/search-result-loader";
import { Image } from "@components/ui/image";
import { useUI } from "@contexts/ui.context";
import SearchBox from "@components/common/search-box";
import { useProductsInfiniteQuery } from "@framework/products/products.query";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import Scrollbar from "@components/common/scrollbar";
import SearchProduct from "@components/common/search-product";
import { useTranslation } from "next-i18next";
import noResult from "@assets/not-found.svg";
import { ROUTES } from "@lib/routes";
import { useRouter } from "next/router";
import Button from "@components/ui/button";

export default function Search() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { displaySearch, closeSearch } = useUI();
  const [searchText, setSearchText] = React.useState("");
  const { data, isLoading: loading } = useProductsInfiniteQuery({
    text: searchText,
    limit: 4
  });

  function handleSearch(e: React.SyntheticEvent) {
    e.preventDefault();
  }
  function handleAutoSearch(e: React.FormEvent<HTMLInputElement>) {
    setSearchText(e.currentTarget.value);
  }

  function clear() {
    if (searchText) {
      setSearchText("");
    } else {
      setSearchText("");
      closeSearch();
    }
  }

  function handleOnLoadMore(){
    // Clear Search
    setSearchText("");
    closeSearch();

    // Redirect to search page
    router.push(`${ROUTES.SEARCH}?q=${searchText}`)
  }

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      if (displaySearch) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [displaySearch]);

  return (
    <div ref={ref}>
      <div
        className={cn("overlay", {
          open: displaySearch,
        })}
        role="button"
        onClick={closeSearch}
      />
      <div
        className={cn(
          "drawer-search relative hidden top-0 z-30 opacity-0 invisible transition duration-300 ease-in-out left-1/2 px-4 w-full md:w-[730px] lg:w-[930px]",
          {
            open: displaySearch,
          }
        )}
      >
        <div className="w-full flex flex-col justify-center">
          <div className="flex-shrink-0 mt-3.5 lg:mt-4 w-full">
            <div className="flex flex-col mx-auto mb-1.5 w-full ">
              <SearchBox
                onSubmit={handleSearch}
                onChange={handleAutoSearch}
                name="search"
                value={searchText}
                onClear={clear}
                ref={(input) => input && input.focus()}
              />
            </div>
            {searchText && (
              <div className="bg-white flex flex-col rounded-md overflow-hidden h-full max-h-64vh">
                <Scrollbar className="os-host-flexbox">
                  <div className="h-full">
                    {loading ? (
                      Array.from({ length: 4 }).map((_, idx) => (
                        <div
                          className="p-4 md:p-5 border-b order-gray-150 last:border-b-0"
                          key={idx}
                        >
                          <SearchResultLoader uniqueKey={`top-search-${idx}`} />
                        </div>
                      ))
                    ) : data?.pages[0]?.data.length ? (
                      <>
                        {data?.pages[0]?.data.map((item, index) => (
                          <div
                            className="p-4 md:p-5 border-b border-gray-150 relative last:border-b-0"
                            onClick={closeSearch}
                            key={item?.id}
                          >
                            <SearchProduct item={item} key={index} />
                          </div>
                        ))}
                        {data?.pages?.[0]?.paginatorInfo?.total > 4 && (
                          <div className="w-full overflow-hidden border-t border-gray-150">
                            {/*<Link*/}
                            {/*  href={`${ROUTES.SEARCH}?q=${searchText}`}*/}
                            {/*  className="w-full block text-sm md:text-base text-center px-4 py-3 lg:py-3.5 bg-gray-200 text-heading text-opacity-80 transition hover:text-opacity-100"*/}
                            {/*>*/}
                            {/*  {t("text-load-more-products")}*/}
                            {/*</Link>*/}
                            <Button
                              variant="custom"
                              onClick={handleOnLoadMore}
                              className="w-full block text-sm md:text-base text-center px-4 py-3 lg:py-3.5 bg-gray-200 text-heading text-opacity-80 transition hover:text-opacity-100"
                            >
                              {t("text-load-more-products")}
                            </Button>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="w-full h-full px-5 md:px-10 mb-4 md:pb-6 pt-8 md:pt-12 flex items-center justify-center">
                        <div className=" flex items-center justify-center max-w-[520px]">
                          <Image
                            src={noResult}
                            alt={t("text-no-result-found")}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </Scrollbar>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
