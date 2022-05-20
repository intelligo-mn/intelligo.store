import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "@components/ui/link";

const AccessDeniedPage = () => {
  const { t } = useTranslation("common");

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full h-80 sm:h-96 3xl:h-[580px] relative">
        <Image
          alt={t("text-access-denied")}
          src="/access-denied.svg"
          layout="fill"
        />
      </div>

      <h3 className="mt-5 sm:mt-10 text-sub-heading text-xl md:text-2xl 3xl:text-3xl font-bold text-center">
        {t("text-access-denied")}
      </h3>
      <p className="text-sm 3xl:text-xl text-body mt-2 text-center">
        {t("text-access-denied-message")}

        <Link
          href="/"
          className="ps-1 text-accent transition-colors hover:text-accent-hover"
        >
          {t("text-return-home")}
        </Link>
      </p>
    </div>
  );
};

export default AccessDeniedPage;
