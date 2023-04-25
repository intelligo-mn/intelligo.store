import ContentLoader from "react-content-loader";

const CategoryListCardLoader = (props: any) => (
	<ContentLoader
		speed={2}
		width={389}
		height={88}
		viewBox="0 0 389 88"
		backgroundColor="#f9f9f9"
		foregroundColor="#ecebeb"
		className="rounded-md bg-gray-200 w-full"
		{...props}
	>
		<circle cx="43" cy="45" r="30" />
		<rect x="88" y="40" rx="3" ry="3" width="96" height="8" />
		<rect x="350" y="34" rx="3" ry="3" width="20" height="20" />
	</ContentLoader>
);

export default CategoryListCardLoader;
