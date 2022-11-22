import { useRouter } from "next/router";
import { IoLogOutOutline } from "@react-icons/all-files/io5/IoLogOutOutline";
import { ROUTES } from "@lib/routes";
import { useTranslation } from "next-i18next";
import Link from "@components/ui/link";
type Option = {
  name: string;
  slug: string;
  icon?: JSX.Element;
};
export default function AccountNav({ options }: { options: Option[] }) {
  const { pathname } = useRouter();
  const newPathname = pathname.split("/").slice(2, 3);
  const mainPath = `/${newPathname[0]}`;
  const { t } = useTranslation("common");

  return (
    <nav className="flex flex-col">
      {options?.map((item) => {
        const menuPathname = item.slug.split("/").slice(2, 3);
        const menuPath = `/${menuPathname[0]}`;

        return (
          <Link
            key={item.slug}
            href={item.slug}
            className={
              mainPath === menuPath
                ? "bg-gray-100 font-semibold flex items-center cursor-pointer text-sm lg:text-base text-heading py-3.5 px-4 lg:px-5 rounded mb-2 "
                : "flex items-center cursor-pointer text-sm lg:text-base text-heading font-normal py-3.5 px-4 lg:px-5 rounded mb-2"
            }
          >
            {item.icon}
            <span className="ltr:pl-2 rtl:pr-2">{t(`${item.name}`)}</span>
          </Link>
        );
      })}
      <Link
        href={`${ROUTES.LOGOUT}`}
        className="flex items-center cursor-pointer text-sm lg:text-base text-heading font-normal py-3.5 px-4 lg:px-5 focus:outline-none"
      >
        <IoLogOutOutline className="w-5 h-5" />
        <span className="ltr:pl-2 rtl:pr-2">{t("text-logout")}</span>
      </Link>
    </nav>
  );
}
