import Link from "@components/ui/link";
import { FaChevronDown } from "@react-icons/all-files/fa/FaChevronDown";
import MegaMenu from "@components/ui/mega-menu";
import classNames from "classnames";
import ListMenu from "@components/ui/list-menu";
import { useTranslation } from "next-i18next";
import React from "react";

interface MenuProps {
	data: any;
	className?: string;
}

const HeaderMenu: React.FC<MenuProps> = ({ data, className }) => {
	const { t } = useTranslation("menu");
	return (
		<nav className={classNames(`headerMenu flex w-full relative`, className)}>
			{data?.map((item: any) => (
				<div
					className={`menuItem group cursor-pointer py-7 ${
						item.subMenu ? "relative" : ""
					}`}
					key={item.id}
				>
					<Link
						href={item.path}
						className="inline-flex items-center text-sm xl:text-base text-heading px-3 xl:px-4 py-2 font-normal relative group-hover:text-black"
					>
						{t(item.label)}
						{(item?.columns || item.subMenu) && (
							<span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
								<FaChevronDown className="transition duration-300 ease-in-out transform group-hover:-rotate-180" />
							</span>
						)}
					</Link>

					{item?.columns && Array.isArray(item.columns) && (
						<MegaMenu columns={item.columns} />
					)}

					{item?.subMenu && Array.isArray(item.subMenu) && (
						<div className="subMenu shadow-header bg-gray-200 absolute ltr:left-0 rtl:right-0 opacity-0 group-hover:opacity-100">
							<ul className="text-body text-sm py-5">
								{item.subMenu.map((menu: any, index: number) => {
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
					)}
				</div>
			))}
		</nav>
	);
};

export default HeaderMenu;
