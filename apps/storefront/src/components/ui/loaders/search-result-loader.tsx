import ContentLoader from "react-content-loader";

const SearchResultLoader = (props: any) => (
	<ContentLoader
		speed={2}
		width={846}
		height={96}
		viewBox="0 0 846 96"
		backgroundColor="#f3f3f3"
		foregroundColor="#eaeaea"
		className="w-full h-auto"
		{...props}
	>
		<rect x="118" y="31" rx="3" ry="3" width="120" height="8" />
		<rect x="118" y="59" rx="3" ry="3" width="80" height="8" />
		<rect x="0" y="0" rx="6" ry="6" width="96" height="96" />
	</ContentLoader>
);

export default SearchResultLoader;
