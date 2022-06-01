import ContentLoader from "react-content-loader";

const ProductFlashSaleGridLoader = (props: any) => (
	<ContentLoader
		speed={2}
		width={315}
		height={542}
		viewBox="0 0 315 542"
		backgroundColor="#f9f9f9"
		foregroundColor="#ecebeb"
		className="w-full h-auto"
		{...props}
	>
		<rect x="0" y="0" rx="6" ry="6" width="315" height="315" />
		<rect x="0" y="372" rx="4" ry="4" width="260" height="6" />
		<rect x="0" y="408" rx="4" ry="4" width="90" height="10" />
		<rect x="0" y="526" rx="13" ry="13" width="315" height="16" />
		<rect x="0" y="340" rx="4" ry="4" width="170" height="8" />
		<rect x="0" y="492" rx="4" ry="4" width="35" height="8" />
		<rect x="42" y="492" rx="4" ry="4" width="80" height="8" />
		<rect x="193" y="492" rx="4" ry="4" width="35" height="8" />
		<rect x="235" y="492" rx="4" ry="4" width="80" height="8" />
	</ContentLoader>
);

export default ProductFlashSaleGridLoader;
