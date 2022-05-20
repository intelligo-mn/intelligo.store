import { useTranslation } from "next-i18next";

const CashPayment = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <span className="text-sm text-body block">{t("text-cash-message")}</span>
    </>
  );
};
export default CashPayment;
