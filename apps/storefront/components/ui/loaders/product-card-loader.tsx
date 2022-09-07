import ContentLoader from "react-content-loader";

const ProductCardLoader = (props: any) => (
	<ContentLoader
		speed={2}
		width={334}
		height={545}
		viewBox="0 0 334 545"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		className="w-full h-auto"
		{...props}
	>
		<rect x="15" y="453" rx="3" ry="3" width="180" height="8" />
		<rect x="15" y="482" rx="3" ry="3" width="280" height="6" />
		<rect x="15" y="515" rx="3" ry="3" width="80" height="8" />
		<rect x="0" y="0" rx="6" ry="6" width="334" height="430" />
	</ContentLoader>
);

export default ProductCardLoader;
