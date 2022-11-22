import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiOutlineSelector } from "@react-icons/all-files/hi/HiOutlineSelector";
import { siteSettings } from "@settings/site.settings";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function LanguageSwitcher() {
	const { site_header } = siteSettings;
	const { t } = useTranslation("common");
	const options = site_header.languageMenu;
	const router = useRouter();
	const { asPath, locale } = router;
	const currentSelectedItem = locale
		? options.find((o) => o.value === locale)!
		: options[2];
	const [selectedItem, setSelectedItem] = useState(currentSelectedItem);

	function handleItemClick(values: any) {
		setSelectedItem(values);
		router.push(asPath, undefined, {
			locale: values.value,
		});
	}

	return (
		<Listbox value={selectedItem} onChange={handleItemClick}>
			{({ open }) => (
				<div className="relative ltr:ml-2 rtl:mr-2 ltr:lg:ml-0 rtl:lg:mr-0 z-10 w-[140px] sm:w-[150px] lg:w-[130px] xl:w-[150px]">
					<Listbox.Button className="border border-gray-300  text-heading text-[13px] xl:text-sm font-semibold  relative w-full py-2 ltr:pl-3 rtl:pr-3 ltr:pr-7 rtl:pl-7 ltr:text-left rtl:text-right bg-white rounded-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 cursor-pointer">
						<span className="flex truncate items-center">
							<span className="ltr:mr-1.5 rtl:ml-1.5">{selectedItem.icon}</span>{" "}
							{t(selectedItem.name)}
						</span>
						<span className="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center ltr:pr-1.5 rtl:pl-1.5 pointer-events-none">
							<HiOutlineSelector
								className="w-5 h-5 text-gray-400"
								aria-hidden="true"
							/>
						</span>
					</Listbox.Button>
					<Transition
						show={open}
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Listbox.Options
							static
							className="absolute w-full py-1 mt-1 overflow-auto bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none text-sm"
						>
							{options?.map((option) => (
								<Listbox.Option
									key={option.id}
									className={({ active }) =>
										`${active ? "text-amber-900 bg-gray-100" : "text-gray-900"}
												cursor-pointer select-none relative py-2 px-3`
									}
									value={option}
								>
									{({ selected, active }) => (
										<span className="flex items-center">
											{option.icon}
											<span
												className={`${
													selected ? "font-medium" : "font-normal"
												} block truncate ltr:ml-1.5 rtl:mr-1.5`}
											>
												{t(option.name)}
											</span>
											{selected ? (
												<span
													className={`${active && "text-amber-600"}
                                 absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3`}
												/>
											) : null}
										</span>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			)}
		</Listbox>
	);
}
