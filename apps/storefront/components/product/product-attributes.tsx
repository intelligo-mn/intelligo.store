import cn from "classnames";
interface Props {
	className?: string;
	title: string;
	attributes: {
		id: number;
		value: string;
		meta: string;
	}[];
	active: string;
	onClick: any;
}

export const ProductAttributes: React.FC<Props> = ({
	className = "mb-4",
	title,
	attributes,
	active,
	onClick,
}) => {
	return (
		<div className={className}>
			<h3 className="text-base md:text-lg text-heading font-semibold mb-2.5 capitalize">
				{title}
			</h3>
			<ul className="colors flex flex-wrap ltr:-mr-3 rtl:-ml-3">
				{attributes?.map(({ id, value, meta }) => (
					<li
						key={`${value}-${id}`}
						className={cn(
							"cursor-pointer rounded border border-gray-100 min-w-[36px] md:min-w-[44px] min-h-[36px] md:min-h-[44px] p-1 mb-2 md:mb-3 ltr:mr-2 rtl:ml-2 ltr:md:mr-3 rtl:md:ml-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black",
							{
								"border-black": value === active,
								"px-3 md:px-3.5": title === "size",
							}
						)}
						onClick={() => onClick({ [title]: value })}
					>
						{title === "color" || title === 'colors' ? (
							<span
								className="h-full w-full rounded block"
								style={{ backgroundColor: meta ?? value }}
							/>
						) : (
							value
						)}
					</li>
				))}
			</ul>
		</div>
	);
};
