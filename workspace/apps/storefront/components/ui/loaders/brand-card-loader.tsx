import ContentLoader from "react-content-loader";

const BrandCardLoader = (props: any) => (
	<ContentLoader
		speed={2}
		width={423}
		height={423}
		viewBox="0 0 423 423"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		className="w-full h-auto"
		{...props}
	>
		<rect x="0" y="0" rx="6" ry="6" width="423" height="423" />
	</ContentLoader>
);

export default BrandCardLoader;
