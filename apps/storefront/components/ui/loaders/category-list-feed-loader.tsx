import CategoryListCardLoader from "./category-list-card-loader";

interface Props {
	limit?: number;
}

const CategoryListFeedLoader = ({ limit = 7 }: Props) => {
	return (
		<>
			{Array.from({ length: limit }).map((_, idx) => (
				<CategoryListCardLoader key={idx} uniqueKey={`category-${idx}`} />
			))}
		</>
	);
};

export default CategoryListFeedLoader;
