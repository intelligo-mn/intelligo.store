import ContentLoader from "react-content-loader";

const ProductCardListSmallLoader = (props: any) => (
	<ContentLoader
		speed={2}
		width={423}
		height={176}
		viewBox="0 0 423 176"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		className="w-full h-auto"
		{...props}
	>
		<rect x="194" y="50" rx="3" ry="3" width="140" height="8" />
		<rect x="194" y="82" rx="3" ry="3" width="200" height="6" />
		<rect x="194" y="119" rx="3" ry="3" width="80" height="10" />
		<rect x="0" y="0" rx="6" ry="6" width="176" height="176" />
	</ContentLoader>
);

export default ProductCardListSmallLoader;
