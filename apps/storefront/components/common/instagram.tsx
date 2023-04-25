import React from "react";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import { useInstagram } from "@framework/instagram/instagram.query";

interface Props {
  className?: string;
}

const Instagram: React.FC<Props> = ({ className = "" }) => {
  const {
    data: instagramFeed,
    isLoading: loading
  } = useInstagram({
    limit: 6,
  });

  const { t } = useTranslation("common");

  return (
    <div
      className={cn(
        "grid grid-cols-3 md:grid-cols-6 gap-0.5 sm:gap-1 overflow-hidden rounded-md",
        className
      )}
    >
      {!loading && instagramFeed?.map((item) => (
        <a
          className="group flex justify-center text-center relative"
          href={item?.permalink}
          key={`instagram--key${item?.id}`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={item?.media_url ?? "/assets/placeholder/instagram.svg"}
            alt={t(`${item?.caption}`) || t("text-instagram-thumbnail")}
            width={300}
            height={300}
            className="bg-gray-300 object-cover"
          />
          <div className="absolute top left bg-black w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
          <div className="absolute top left h-full w-full flex items-center justify-center">
            <FaInstagram className="text-white text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl transform opacity-0 scale-400 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100" />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Instagram;
