import { CheckBox } from "@components/ui/checkbox";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "next-i18next";
import { Attribute, AttributeValue } from "@framework/types";

type Props = {
  attribute: Attribute
}

export const ColorFilter: React.FC<Props> = ({attribute}) => {
	const { t } = useTranslation("common");
	const router = useRouter();
	const { pathname, query } = router;
	const selectedColors = query?.variations ? (query.variations as string).split(",") : [];
	const [formState, setFormState] = React.useState<string[]>(selectedColors);

	React.useEffect(() => {
		setFormState(selectedColors);
	}, [query?.variations]);

	function handleItemClick(e: React.FormEvent<HTMLInputElement>): void {
		const { value } = e.currentTarget;
		let currentFormState = formState.includes(value)
			? formState.filter((i) => i !== value)
			: [...formState, value];
		// setFormState(currentFormState);
		const { variations, ...restQuery } = query;
		router.push(
			{
				pathname,
				query: {
					...restQuery,
					...(!!currentFormState.length
						? { variations: currentFormState.join(",") }
						: {}),
				},
			},
			undefined,
			{ scroll: false }
		);
	}

	return (
		<div className="block border-b border-gray-300 pb-7 mb-7">
			<h3 className="text-heading text-sm md:text-base font-semibold mb-7">
				{t("text-colors")}
			</h3>
			<div className="mt-2 flex flex-col space-y-4">
				{attribute.values?.map((item: AttributeValue) => (
					<CheckBox
						key={item.id}
						label={
							<span className="flex items-center">
								<span
									className={`w-5 h-5 rounded-full block ltr:mr-3 rtl:ml-3 mt-0.5 border border-black border-opacity-20`}
									style={{ backgroundColor: item.meta ?? item.value }}
								/>
								{item.value}
							</span>
						}
						name={item.value.toLowerCase()}
						checked={formState.includes(item.value)}
						value={item.value}
						onChange={handleItemClick}
					/>
				))}
			</div>
		</div>
	);
};
