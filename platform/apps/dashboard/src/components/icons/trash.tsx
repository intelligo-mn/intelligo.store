import React from "react";

const Trash = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.4 22.169"
      fill="currentColor"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      >
        <path
          data-name="Rectangle 2"
          d="M8.238.7h2.923a2 2 0 012 2v.769h0-6.923 0V2.7a2 2 0 012-2z"
        />
        <path data-name="Line 1" d="M.7 3.469h18" />
        <path
          data-name="Path 77"
          d="M14.649 21.469h-9.9a1.385 1.385 0 01-1.38-1.279L2.085 3.469h15.231L16.029 20.19a1.385 1.385 0 01-1.38 1.279z"
        />
        <path data-name="Line 2" d="M7.623 6.238V18.7" />
        <path data-name="Line 3" d="M11.777 6.238V18.7" />
      </g>
    </svg>
  );
};

export default Trash;
