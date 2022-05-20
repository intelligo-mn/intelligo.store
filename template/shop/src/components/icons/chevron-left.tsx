import React, { FC } from 'react';

type ChevronLeftProps = {
	width?: number;
	height?: number;
	strokeWidth?: number;
	className?: string;
};

const ChevronLeft: FC<ChevronLeftProps> = ({
	width,
	height,
	strokeWidth = 2,
	className,
}) => {
	return (
		<svg
			width={width}
			height={height}
			className={className}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
				d="M15 19l-7-7 7-7"
			/>
		</svg>
	);
};

export default ChevronLeft;
