import ProductListCardLoader from "./product-list-card-loader";

interface Props {
	limit?: number;
}

const ProductListFeedLoader = ({ limit = 4 }: Props) => {
	return (
		<>
			{Array.from({ length: limit }).map((_, idx) => (
				<ProductListCardLoader key={idx} uniqueKey={`product-top-${idx}`} />
			))}
		</>
	);
};

export default ProductListFeedLoader;
