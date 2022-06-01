import Image from "next/image";
import Text from "@components/ui/text";
import cn from "classnames";
import Link from "@components/ui/link";
import { useTranslation } from "next-i18next";
const data = {
  title: "app-heading",
  subTitle: "app-sub-heading",
  appImage: "/assets/images/app.png",
  appButtons: [
    {
      id: 1,
      slug: "/#",
      altText: "button-app-store",
      appButton: "/assets/images/app-store.png",
      buttonWidth: 209,
      buttonHeight: 60,
    },
    {
      id: 2,
      slug: "/#",
      altText: "button-play-store",
      appButton: "/assets/images/play-store.png",
      buttonWidth: 209,
      buttonHeight: 60,
    },
  ],
};

interface Props {
  className?: string;
}

const DownloadApps: React.FC<Props> = ({ className }) => {
  const { appButtons, title, subTitle, appImage } = data;
  const { t } = useTranslation("common");
  return (
    <div
      className={cn(
        "flex justify-between items-end rounded-lg bg-gray-200 pt-5 md:pt-8 lg:pt-10 xl:pt-14 px-6 md:px-12 lg:px-20 2xl:px-24 3xl:px-36",
        className
      )}
    >
      <div className="flex-shrink-0 w-full sm:w-60 md:w-96 lg:w-auto lg:max-w-lg xl:max-w-xl lg:flex lg:items-center pb-5 md:pb-8 lg:pb-12 xl:pb-16">
        <div className="py-4 md:py-6 xl:py-8 text-center ltr:sm:text-left rtl:sm:text-right">
          <Text
            variant="mediumHeading"
            className="-mt-1 mb-2 md:mb-3 lg:mb-3.5 xl:mb-4"
          >
            {t(`${title}`)}
          </Text>
          <h2
            className="text-heading text-md sm:text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-normal leading-7 sm:leading-8 md:leading-snug xl:leading-relaxed 2xl:leading-snug mb-6 md:mb-8 lg:mb-9 xl:mb-12 2xl:mb-14 ltr:lg:pr-20 ltr:2xl:pr-0 rtl:lg:pl-20 rtl:2xl:pl-0"
            dangerouslySetInnerHTML={{
              __html: t(`${subTitle}`),
            }}
          />
          <div className="flex justify-center sm:justify-start space-x-2 md:space-x-3 rtl:space-x-reverse px-6 sm:px-0">
            {appButtons?.map((item) => (
              <Link
                key={item.id}
                href={item.slug}
                className="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
              >
                <Image
                  src={item.appButton}
                  alt={t(`${item.altText}`)}
                  className="w-36 lg:w-44 xl:w-auto"
                  width={item.buttonWidth}
                  height={item.buttonHeight}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden sm:flex items-end ltr:pl-4 rtl:pr-4 ltr:-mr-0.5 ltr:2xl:-mr-1.5 rtl:-ml-0.5 rtl:2xl:-ml-1.5 w-60 md:w-72 lg:w-96 xl:w-auto">
        <Image
          src={appImage}
          alt={t("text-app-thumbnail")}
          width={375}
          height={430}
        />
      </div>
    </div>
  );
};

export default DownloadApps;
