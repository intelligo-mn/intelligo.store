import type { FC } from "react";
import { useSettings } from "@contexts/settings.context";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import socialIcons from "../icons/social-icon";
import { Social } from "@framework/types";
import { getIcon } from "@lib/get-icon";

const WidgetSocial: FC = () => {
  const { t } = useTranslation();
  const settings = useSettings();

  const socials = settings?.contactDetails?.socials;

  return (
    <div>
      <h4 className="text-heading text-sm md:text-base xl:text-lg font-semibold mb-5 2xl:mb-6 3xl:mb-7">
        {t(`footer:widget-title-social`)}
      </h4>
      <ul className="text-xs md:text-[13px] lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
        {socials?.map((social: Social, index: number) => (
          <li key={`widget-list--key${index}`} className="flex items-baseline">
            {social.icon && (
              <span className="ltr:mr-3 rtl:ml-3 relative top-0.5 lg:top-1 text-sm lg:text-base">
                {getIcon({
                  iconList: socialIcons,
                  iconName: social?.icon,
                })}
              </span>
            )}
            <Link href={social.url ? social.url : "#!"}>
              <a className="transition-colors duration-200 hover:text-black">
                {social?.label ? social?.label : social?.url}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSocial;
