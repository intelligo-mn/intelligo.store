import ContentLoader from "react-content-loader";

const ProductFlashSaleLoader = (props: any) => (
	<ContentLoader
		speed={2}
		width={515}
		height={318}
		viewBox="0 0 515 318"
		backgroundColor="#f9f9f9"
		foregroundColor="#ecebeb"
		className="w-full h-auto"
		{...props}
	>
		<rect x="0" y="0" rx="6" ry="6" width="208" height="208" />
		<rect x="236" y="98" rx="4" ry="4" width="260" height="6" />
		<rect x="236" y="135" rx="4" ry="4" width="90" height="10" />
		<rect x="0" y="302" rx="13" ry="13" width="515" height="16" />
		<rect x="236" y="66" rx="4" ry="4" width="170" height="8" />
		<rect x="0" y="267" rx="4" ry="4" width="35" height="8" />
		<rect x="45" y="267" rx="4" ry="4" width="80" height="8" />
		<rect x="388" y="267" rx="4" ry="4" width="35" height="8" />
		<rect x="433" y="267" rx="4" ry="4" width="80" height="8" />
	</ContentLoader>
);

export default ProductFlashSaleLoader;
