import ContentLoader from "react-content-loader";

const ProductCardGridLoader = (props: any) => (
	<ContentLoader
		speed={2}
		width={320}
		height={440}
		viewBox="0 0 320 440"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		className="w-full h-auto"
		{...props}
	>
		<rect x="0" y="345" rx="3" ry="3" width="180" height="8" />
		<rect x="0" y="377" rx="3" ry="3" width="280" height="6" />
		<rect x="0" y="416" rx="3" ry="3" width="80" height="10" />
		<rect x="0" y="0" rx="6" ry="6" width="320" height="320" />
	</ContentLoader>
);

export default ProductCardGridLoader;
