import React from 'react';
export const ArrowDown = ({
  color = 'currentColor',
  width = '12px',
  height = '12px',
  ...props
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 11.996 12'
      {...props}
    >
      <path
        data-name='Path 2462'
        d='M18.276,12.1,12.7,6.524a.424.424,0,0,0-.6,0L6.524,12.1a.424.424,0,0,0,0,.6.424.424,0,0,0,.6,0l4.854-4.854V17.977a.423.423,0,1,0,.847,0V7.846L17.677,12.7a.424.424,0,0,0,.6,0A.434.434,0,0,0,18.276,12.1Z'
        transform='translate(18.396 18.4) rotate(180)'
        fill={color}
      />
    </svg>
  );
};
