import ProductFlashSaleGridLoader from "./product-flash-sale-grid-loader";

interface Props {
	limit?: number;
}

const ProductFlashSaleGridFeedLoader = ({ limit = 3 }: Props) => {
	return (
		<>
			{Array.from({ length: limit }).map((_, idx) => (
				<ProductFlashSaleGridLoader key={idx} uniqueKey={idx} />
			))}
		</>
	);
};

export default ProductFlashSaleGridFeedLoader;
