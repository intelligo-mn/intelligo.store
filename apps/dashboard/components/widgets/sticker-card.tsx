import React from "react";
import { IosArrowDown } from "@components/icons/ios-arrow-down";
import { IosArrowUp } from "@components/icons/ios-arrow-up";
import { useTranslation } from "next-i18next";

const StickerCard = ({
  titleTransKey,
  subtitleTransKey,
  icon,
  iconBgStyle,
  price,
  indicator,
  indicatorText,
  note,
  link,
  linkText,
}: any) => {
  const { t } = useTranslation("widgets");
  return (
    <div className="flex flex-col w-full h-full p-7 rounded bg-light">
      <div className="w-full flex justify-between mb-auto pb-8">
        <div className="w-full flex flex-col">
          <span className="text-base text-heading font-semibold mb-1">
            {t(titleTransKey)}
          </span>
          <span className="text-xs text-body font-semibold">
            {t(subtitleTransKey)}
          </span>
        </div>

        <div
          className="w-12 h-12 rounded-full bg-gray-200 flex flex-shrink-0 items-center justify-center ms-3"
          style={iconBgStyle}
        >
          {icon}
        </div>
      </div>

      <span className="text-xl font-semibold text-heading mb-2">{price}</span>
      {indicator === "up" && (
        <span
          className="text-sm text-body font-semibold mb-12 inline-block"
          style={{ color: "#03D3B5" }}
        >
          <IosArrowUp width="9px" height="11px" className="inline-block" />{" "}
          {indicatorText}
          <span className="text-sm font-normal text-body"> {note}</span>
        </span>
      )}
      {indicator === "down" && (
        <span
          className="text-sm text-body font-semibold mb-12 inline-block"
          style={{ color: "#FC6687" }}
        >
          <IosArrowDown width="9px" height="11px" className="inline-block" />{" "}
          {indicatorText}
          <span className="text-sm font-normal text-body"> {note}</span>
        </span>
      )}
      {link && (
        <a
          className="text-xs text-purple-700 no-underline font-semibold"
          href={link}
          target="_blank"
        >
          {linkText}
        </a>
      )}
    </div>
  );
};

export default StickerCard;
