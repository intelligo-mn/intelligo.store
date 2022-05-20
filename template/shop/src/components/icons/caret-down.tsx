import React from 'react';
export const CaretDown = ({ ...props }) => {
	return (
		<svg width="10" height="6" viewBox="0 0 10 6" {...props}>
			<path
				d="M128,192l5,5,5-5Z"
				transform="translate(-128 -192)"
				fill="currentColor"
			/>
		</svg>
	);
};
