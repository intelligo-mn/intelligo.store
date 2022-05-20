import cn from "classnames";
import { useTranslation } from "next-i18next";
import Image from "next/image";

interface Props {
  text?: string;
  className?: string;
}

const NotFound: React.FC<Props> = ({ className, text }) => {
  const { t } = useTranslation("common");
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="w-full h-full min-h-[380px] md:min-h-[450px] flex items-center justify-center relative">
        <Image
          src="/no-result.svg"
          alt={text ? t(text) : t("text-no-result-found")}
          className="w-full h-full object-contain"
          layout="fill"
        />
      </div>
      {text && (
        <h3 className="w-full text-center text-xl font-semibold text-body my-7">
          {t(text)}
        </h3>
      )}
    </div>
  );
};

export default NotFound;
