import cn from "classnames";
import styles from "./page-loader.module.css";
import { useTranslation } from "next-i18next";

const PageLoader = () => {
  const { t } = useTranslation("common");
  return (
    <div
      className={cn(
        "w-full h-screen flex flex-col items-center justify-center"
      )}
    >
      <div className="flex relative">
        <div className={styles.page_loader}></div>
        <h3 className="text-sm font-semibold text-body italic absolute top-1/2 -mt-2 w-full text-center">
          {t("text-loading")}
        </h3>
      </div>
    </div>
  );
};

export default PageLoader;
