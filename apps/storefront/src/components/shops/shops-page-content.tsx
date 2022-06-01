import { useState, Fragment } from "react";
import VendorCard from "@components/common/vendor-card";
import Alert from "@components/ui/alert";
import { BsGridFill } from "@react-icons/all-files/bs/BsGridFill";
import { BsList } from "@react-icons/all-files/bs/BsList";
import { useShopsQuery } from "@framework/shops/shops.query";
import Button from "@components/ui/button";
import { useTranslation } from "next-i18next";

const ShopsPageContent: React.FC = () => {
  const [gridView, setGridView] = useState(Boolean(false));
  const { t } = useTranslation();
  const {
    data,
    isLoading: loading,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
    hasNextPage,
    error,
  } = useShopsQuery({
    is_active: 1,
  });

  const listViewHandel = () => {
    setGridView(false);
  };

  const gridViewHandel = () => {
    setGridView(true);
  };

  if (error) return <Alert message={error?.message} />;

  return (
    <div className="border-t border-gray-300 pt-10 lg:pt-12 xl:pt-14 pb-14 lg:pb-16 xl:pb-20 px-4 md:px-8">
      <div className="w-full xl:max-w-[1170px] mx-auto">
        <div className="flex items-center justify-between mb-6 xl:mb-8">
          <h2 className="font-bold text-heading text-lg md:text-xl lg:text-2xl xl:text-3xl">
            {t('text-shops-title')}
          </h2>
          <div className="flex-shrink-0 flex items-center space-x-1.5 ltr:ml-2 rtl:mr-2">
            <button
              aria-label="list"
              className={`text-2xl relative top-[1px] transition-all ${
                gridView === false ? "text-heading" : "text-body"
              }`}
              onClick={listViewHandel}
            >
              <BsList className="" />
            </button>
            <button
              aria-label="grid"
              className={`text-lg transition-all ${
                gridView === true ? "text-heading" : "text-body"
              }`}
              onClick={gridViewHandel}
            >
              <BsGridFill />
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 xl:gap-6">
          {!loading &&
            data?.pages?.map((page, idx) => {
              return (
                <Fragment key={idx}>
                  {page.data.map((shop) => (
                    <VendorCard
                      key={shop.id}
                      shop={shop}
                      variant={gridView === true ? "grid" : "list"}
                    />
                  ))}
                </Fragment>
              );
            })}
        </div>
        {hasNextPage && (
          <div className="text-center pt-8 xl:pt-14">
            <Button
              loading={loadingMore}
              disabled={loadingMore}
              onClick={() => fetchNextPage()}
              variant="slim"
            >
              {t("button-load-more")}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopsPageContent;
