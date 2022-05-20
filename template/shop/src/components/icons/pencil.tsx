import React, { FC } from 'react';

type PencilProps = {
	width?: number;
	height?: number;
	className?: string;
};

const Pencil: FC<PencilProps> = ({ width, height, className }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 7.2 7.2"
			className={className}
		>
			<path
				d="M64,69.7v1.5h1.5l4.42-4.42-1.5-1.5Zm7.08-4.08a.387.387,0,0,0,0-.56l-.94-.94a.387.387,0,0,0-.56,0l-.74.74,1.5,1.5Z"
				transform="translate(-64 -63.999)"
				fill="currentColor"
			/>
		</svg>
	);
};

export default Pencil;
