import { FC } from "react";
import { IoLocationSharp } from "@react-icons/all-files/io5/IoLocationSharp";
import { IoMail } from "@react-icons/all-files/io5/IoMail";
import { IoCallSharp } from "@react-icons/all-files/io5/IoCallSharp";
import { useTranslation } from "next-i18next";
import { useSettings } from "@contexts/settings.context";
import isEmpty from "lodash/isEmpty";
import { formatAddress } from "@lib/format-address";
import GoogleStaticMap from "@components/common/google-static-map";

interface Props {
  image?: HTMLImageElement;
}

const ContactInfoBlock: FC<Props> = () => {
  const settings = useSettings();

  const { t } = useTranslation("common");
  return (
    <div className="mb-6 lg:border lg:rounded-md border-gray-300 lg:p-7">
      <h4 className="text-2xl md:text-lg font-bold text-heading pb-7 md:pb-10 lg:pb-6 -mt-1">
        {t("text-find-us-here")}
      </h4>

      {/* Address */}
      <div className="flex pb-7">
        <div className="flex flex-shrink-0 justify-center items-center p-1.5 border rounded-md border-gray-300 w-10 h-10">
          <IoLocationSharp />
        </div>
        <div className="flex flex-col ltr:pl-3 ltr:2xl:pl-4 rtl:pr-3 rtl:2xl:pr-4 text-sm md:text-base">
          <h5 className="text-sm font-bold text-heading">
            {t("text-address")}
          </h5>
          {!isEmpty(settings?.contactDetails.location)
            ? formatAddress(settings?.contactDetails.location)
            : t("text-no-address")}
        </div>
      </div>

      {/* Email */}
      <div className="flex pb-7">
        <div className="flex flex-shrink-0 justify-center items-center p-1.5 border rounded-md border-gray-300 w-10 h-10">
          <IoMail />
        </div>
        <div className="flex flex-col ltr:pl-3 ltr:2xl:pl-4 rtl:pr-3 rtl:2xl:pr-4 text-sm md:text-base">
          <h5 className="text-sm font-bold text-heading">{t("text-email")}</h5>
          {settings?.contactDetails.email
            ? settings?.contactDetails.email
            : t("text-no-email")}
        </div>
      </div>

      {/* Phone */}
      <div className="flex pb-7">
        <div className="flex flex-shrink-0 justify-center items-center p-1.5 border rounded-md border-gray-300 w-10 h-10">
          <IoCallSharp />
        </div>
        <div className="flex flex-col ltr:pl-3 ltr:2xl:pl-4 rtl:pr-3 rtl:2xl:pr-4 text-sm md:text-base">
          <h5 className="text-sm font-bold text-heading">{t("text-phone")}</h5>
          {settings?.contactDetails.contact ? (
            settings?.contactDetails.contact
          ) : (
            <p className="text-red-500">{t("text-no-phone")}</p>
          )}
        </div>
      </div>

      {/* Google Map */}
      {!isEmpty(settings?.contactDetails?.location) && (
        <GoogleStaticMap
          lat={settings?.contactDetails?.location?.lat}
          lng={settings?.contactDetails?.location?.lng}
        />
      )}
    </div>
  );
};

export default ContactInfoBlock;
