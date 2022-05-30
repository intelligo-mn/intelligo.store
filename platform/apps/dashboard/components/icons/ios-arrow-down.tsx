import React from 'react';
export const IosArrowDown = ({
  color = 'currentColor',
  width = '7px',
  height = '10px',
  ...props
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 7 10'
      {...props}
    >
      <path
        d='M166.5,118.477a.454.454,0,0,0-.639,0l-2.115,2.108v-8.034a.452.452,0,0,0-.9,0v8.034l-2.115-2.112a.457.457,0,0,0-.639,0,.45.45,0,0,0,0,.636l2.883,2.862a.507.507,0,0,0,.142.094.431.431,0,0,0,.174.035.453.453,0,0,0,.316-.129l2.883-2.862A.442.442,0,0,0,166.5,118.477Z'
        transform='translate(-159.962 -112.1)'
        fill={color}
      />
    </svg>
  );
};
