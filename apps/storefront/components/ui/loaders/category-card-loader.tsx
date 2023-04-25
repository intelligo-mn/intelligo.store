import ContentLoader from "react-content-loader";

const CategoryCardLoader = (props: any) => (
	<ContentLoader
		speed={2}
		width={573}
		height={264}
		viewBox="0 0 573 264"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		className="w-full h-auto"
		{...props}
	>
		<rect x="27" y="38" rx="3" ry="3" width="110" height="10" />
		<rect x="28" y="70" rx="6" ry="6" width="164" height="164" />
		<rect x="202" y="70" rx="6" ry="6" width="164" height="164" />
		<rect x="376" y="70" rx="6" ry="6" width="164" height="164" />
		<rect x="0" y="0" rx="0" ry="0" width="573" height="2" />
		<rect x="0" y="262" rx="0" ry="0" width="573" height="2" />
		<rect x="0" y="0" rx="0" ry="0" width="2" height="264" />
		<rect x="571" y="0" rx="0" ry="0" width="2" height="264" />
	</ContentLoader>
);

export default CategoryCardLoader;
