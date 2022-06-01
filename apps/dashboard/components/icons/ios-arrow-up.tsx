import React from 'react';
export const IosArrowUp = ({
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
        d='M166.5,115.723a.454.454,0,0,1-.639,0l-2.115-2.108v8.034a.452.452,0,0,1-.9,0v-8.034l-2.115,2.112a.457.457,0,0,1-.639,0,.45.45,0,0,1,0-.636l2.883-2.862a.507.507,0,0,1,.142-.094.431.431,0,0,1,.174-.035.453.453,0,0,1,.316.129l2.883,2.862A.442.442,0,0,1,166.5,115.723Z'
        transform='translate(-159.962 -112.1)'
        fill={color}
      />
    </svg>
  );
};
