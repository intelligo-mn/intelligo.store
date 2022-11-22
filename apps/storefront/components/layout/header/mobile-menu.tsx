import { useState } from "react";
import Link from "@components/ui/link";
import Scrollbar from "@components/common/scrollbar";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import Logo from "@components/ui/logo";
import { useUI } from "@contexts/ui.context";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import { useTranslation } from "next-i18next";
import { useSettings } from "@contexts/settings.context";
import { getIcon } from "@lib/get-icon";
import socialIcons from "@components/icons/social-icon";
import { Social } from "@framework/types";
import { mobileMenu } from "@data/static/menus";

export default function MobileMenu() {
	const [activeMenus, setActiveMenus] = useState<any>([]);
  const settings = useSettings();

  const socials = settings?.contactDetails?.socials;

	const { closeSidebar } = useUI();
	const { t } = useTranslation("menu");
	const handleArrowClick = (menuName: string) => {
		let newActiveMenus = [...activeMenus];

		if (newActiveMenus.includes(menuName)) {
			let index = newActiveMenus.indexOf(menuName);
			if (index > -1) {
				newActiveMenus.splice(index, 1);
			}
		} else {
			newActiveMenus.push(menuName);
		}

		setActiveMenus(newActiveMenus);
	};

	const ListMenu = ({
		dept,
		data,
		hasSubMenu,
		menuName,
		menuIndex,
		className = "",
	}: any) =>
		data.label && (
			<li className={`mb-0.5 ${className}`}>
				<div className="flex items-center justify-between">
					<Link
						href={data.path}
						className="w-full text-[15px] menu-item relative py-3 ltr:pl-5 ltr:md:pl-7 rtl:pr-5 rtl:md:pr-7 ltr:pr-4 rtl:pl-4 transition duration-300 ease-in-out"
					>
						<span className="block w-full" onClick={closeSidebar}>
							{t(`${data.label}`)}
						</span>
					</Link>
					{hasSubMenu && (
						<div
							className="cursor-pointer w-16 md:w-20 h-8 text-lg flex-shrink-0 flex items-center justify-center"
							onClick={() => handleArrowClick(menuName)}
						>
							<IoIosArrowDown
								className={`transition duration-200 ease-in-out transform text-heading ${
									activeMenus.includes(menuName) ? "-rotate-180" : "rotate-0"
								}`}
							/>
						</div>
					)}
				</div>
				{hasSubMenu && (
					<SubMenu
						dept={dept}
						data={data.subMenu}
						toggle={activeMenus.includes(menuName)}
						menuIndex={menuIndex}
					/>
				)}
			</li>
		);

	const SubMenu = ({ dept, data, toggle, menuIndex }: any) => {
		if (!toggle) {
			return null;
		}

		dept = dept + 1;

		return (
			<ul className="pt-0.5">
				{data?.map((menu: any, index: number) => {
					const menuName: string = `sidebar-submenu-${dept}-${menuIndex}-${index}`;

					return (
						<ListMenu
							dept={dept}
							data={menu}
							hasSubMenu={menu.subMenu}
							menuName={menuName}
							key={menuName}
							menuIndex={index}
							className={dept > 1 && "ltr:pl-4 rtl:pr-4"}
						/>
					);
				})}
			</ul>
		);
	};

	return (
		<>
			<div className="flex flex-col justify-between w-full h-full">
				<div className="w-full border-b border-gray-100 flex justify-between items-center relative ltr:pl-5 ltr:md:pl-7 rtl:pr-5 rtl:md:pr-7 flex-shrink-0 py-0.5">
					<Logo />

					<button
						className="flex text-2xl items-center justify-center text-gray-500 px-4 md:px-5 py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60"
						onClick={closeSidebar}
						aria-label="close"
					>
						<IoClose className="text-black mt-1 md:mt-0.5" />
					</button>
				</div>

				<Scrollbar className="menu-scrollbar flex-grow mb-auto">
					<div className="flex flex-col py-7 px-0 lg:px-2 text-heading">
              <ul className="mobileMenu">
                {mobileMenu?.map((menu: any, index: number) => {
                  const dept: number = 1;
                  const menuName: string = `sidebar-menu-${dept}-${index}`;

                  return (
                    <ListMenu
                      dept={dept}
                      data={menu}
                      hasSubMenu={menu.subMenu}
                      menuName={menuName}
                      key={menuName}
                      menuIndex={index}
                    />
                  );
                })}
              </ul>
					</div>
				</Scrollbar>

				<div className="flex items-center justify-center bg-white border-t border-gray-100 px-7 flex-shrink-0 space-x-1 rtl:space-x-reverse">
					{socials?.map((social: Social, index: number) => (
						<a
							href={social?.url ?? "#!"}
							className={`text-heading p-5 opacity-60 ltr:first:-ml-4 rtl:first:-mr-4 transition duration-300 ease-in hover:opacity-100`}
							target="_blank"
              rel="noreferrer"
							key={index}
						>
              {getIcon({
                iconList: socialIcons,
                iconName: social?.icon
              })}
						</a>
					))}
				</div>
			</div>
		</>
	);
}
