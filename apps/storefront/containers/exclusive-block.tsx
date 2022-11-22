import Image from "next/image";
import Link from "@components/ui/link";
import { useTranslation } from "next-i18next";
import { exclusiveBlock as data } from "@data/static/exclusive-block";

interface Props {
  className?: string;
}

const ExclusiveBlock: React.FC<Props> = ({
  className = "mb-12 md:mb-14 xl:mb-16",
}) => {
  const { t } = useTranslation("common");
  return (
    <div className={`rounded-md overflow-hidden lg:block ${className}`}>
      <div className="flex justify-between">
        {data?.exclusiveData?.slice(0, 2).map((item: any) => (
          <div
            className={`group w-2/4 flex justify-between items-end relative transition duration-200 ease-in ${
              item.id === 2
                ? "flex-row-reverse bg-linenSecondary"
                : "bg-gray-150"
            }`}
            key={`exclusive--key${item.id}`}
          >
            <div className="exclusiveImage relative z-10 flex transform transition duration-200 ease-in group-hover:scale-105">
              <Image
                src={item.image}
                alt={item.buttonText}
                width={600}
                height={600}
              />
            </div>
            <Link
              href={item.slug}
              className={`absolute z-10 bottom-3 sm:bottom-5 xl:bottom-7 inline-block bg-white shadow-product rounded-md text-heading lowercase text-sm xl:text-xl 2xl:text-xl sm:uppercase px-3 sm:px-5 xl:px-6 2xl:px-8 py-2.5 sm:py-4 xl:py-5 2xl:py-7  transform transition duration-300 ease-in-out hover:bg-heading hover:text-white ${
                item.id === 2
                  ? "ltr:left-3 ltr:sm:left-5 ltr:xl:left-7 rtl:right-3 rtl:sm:right-5 rtl:xl:right-7"
                  : "ltr:right-3 ltr:sm:right-5 ltr:xl:right-7 rtl:left-3 rtl:sm:left-5 rtl:xl:left-7"
              }`}
            >
              {t(`${item.buttonText}`)}
            </Link>
            {data.exclusiveName && (
              <div
                className={`z-0 absolute top-10 xl:top-12 2xl:top-16 3xl:top-24 uppercase text-black opacity-10 text-xl xl:text-2xl 3xl:text-3xl tracking-widest leading-5 ${
                  item.id === 2 ? "ltr:left-5 ltr:xl:left-7 rtl:right-5 rtl:xl:right-7" : "ltr:right-5 ltr:xl:right-7 rtl:left-5 rtl:xl:left-7"
                }`}
              >
                {item.id !== 2
                  ? t(`${data.exclusiveName}`)
                  : t("text-exclusive")}
              </div>
            )}

            {data.year && (
              <div
                className={`exclusiveYear absolute top-16 xl:top-20 2xl:top-24 3xl:top-32 ltr:left-0 rtl:right-0 z-10 text-black font-bold leading-none tracking-widest ${
                  item.id === 2 ? "ltr:text-left rtl:text-right pl-4 ltr:left-0 rtl:right-0" : "ltr:text-right rtl:text-left ltr:right-0 rtl:left-0"
                }`}
              >
                {item.id !== 2
                  ? data.year.toString().slice(0, 2)
                  : data.year.toString().slice(2, 4)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveBlock;
