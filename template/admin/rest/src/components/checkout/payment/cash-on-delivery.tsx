import { useTranslation } from "next-i18next";

const CashOnDelivery = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <span className="text-sm text-body block">{t("text-cod-message")}</span>
    </>
  );
};
export default CashOnDelivery;
