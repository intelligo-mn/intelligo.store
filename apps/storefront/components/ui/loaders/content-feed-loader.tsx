import React from "react";
interface Props {
	limit?: number;
	contentLoader?: any;
}

const ContentFeedLoader = ({ limit = 3, contentLoader }: Props) => {
	return (
		<>
			{Array.from({ length: limit }).map((_, idx) => (
				<React.Fragment key={idx}>{contentLoader}</React.Fragment>
			))}
		</>
	);
};
export default ContentFeedLoader;
