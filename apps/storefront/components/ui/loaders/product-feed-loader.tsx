import ProductCardLoader from "@components/ui/loaders/product-card-loader";

interface Props {
	limit?: number;
	uniqueKey?: string;
}

const ProductFeedLoader = ({ limit = 5, uniqueKey = "product" }: Props) => {
	return (
		<>
			{Array.from({ length: limit }).map((_, idx) => (
				<ProductCardLoader key={idx} uniqueKey={`${uniqueKey}-${idx}`} />
			))}
		</>
	);
};

export default ProductFeedLoader;
