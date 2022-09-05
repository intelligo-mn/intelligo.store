import CollectionCard from "@components/common/collection-card";
import { CollectionBanner } from "@framework/types";


interface Props {
	className?: string;
  	data: CollectionBanner[];
	variant?: "default" | "modern"
}

const CollectionBlock: React.FC<Props> = ({
	className = "mb-12 md:mb-14 xl:mb-16 pb-0.5 lg:pt-1 xl:pt-0",
  	data,
	variant = "default",
}) => {
	const isEven = (value: number) => {
		return value % 2;
	};
	return (
		<div
			className={`${className} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-7`}
		>
			{data?.slice(0, 3)?.map((item: any, index: any) => (
				<CollectionCard
					key={item.id}
					collection={item}
					variant={variant}
					contactClassName={
						isEven(index + 1) == 0 && variant !== "modern"
							? "sm:pb-4 md:pb-5 lg:pb-4 2xl:pb-5 3xl:pb-6 pt-3.5 sm:pt-0.5 lg:pt-1 px-4 sm:px-0"
							: "pt-3.5 lg:pt-4 xl:pt-5 3xl:pt-7 px-4 sm:px-0"
					}
				/>
			))}
		</div>
	);
};

export default CollectionBlock;
