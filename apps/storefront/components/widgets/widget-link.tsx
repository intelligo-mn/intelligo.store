import type { FC } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

interface Props {
  className?: string;
  data: {
    widgetTitle?: string;
    lists: {
      id: string;
      path?: string;
      title: string;
      icon?: any;
    }[];
  };
}

const WidgetLink: FC<Props> = ({ className, data }) => {
  const { widgetTitle, lists } = data;
  const { t } = useTranslation("footer");
  return (
    <div className={`${className}`}>
      <h4 className="text-heading text-sm md:text-base xl:text-lg font-semibold mb-5 2xl:mb-6 3xl:mb-7">
        {t(`${widgetTitle}`)}
      </h4>
      <ul className="text-xs md:text-[13px] lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
        {lists.map((list) => (
          <li
            key={`widget-list--key${list.id}`}
            className="flex items-baseline"
          >
            {list.icon && (
              <span className="ltr:mr-3 rtl:ml-3 relative top-0.5 lg:top-1 text-sm lg:text-base">
                {list.icon}
              </span>
            )}
            <Link href={list.path ? list.path : "#!"}>
              <a className="transition-colors duration-200 hover:text-black">
                {t(`${list.title}`)}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetLink;
