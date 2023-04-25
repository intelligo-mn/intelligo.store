import React, { FC } from "react";

type EmptyCartProps = {
  width?: number;
  height?: number;
  className?: string;
};

const EmptyCart: FC<EmptyCartProps> = ({
  width = 190.502,
  height = 209.011,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 190.502 209.011"
      className={className}
    >
      <g
        id="Group_2903"
        data-name="Group 2903"
        transform="translate(-1551.657 -392.09)"
      >
        <ellipse
          id="Ellipse_26"
          data-name="Ellipse 26"
          cx="95.251"
          cy="22.48"
          rx="95.251"
          ry="22.48"
          transform="translate(1551.657 556.141)"
          fill="#ddd"
        />
        <rect
          id="Rectangle_516"
          data-name="Rectangle 516"
          width="166.331"
          height="172.367"
          rx="18.611"
          transform="translate(1563.742 410.583)"
          fill="#bc8d55"
        />
        <rect
          id="Rectangle_517"
          data-name="Rectangle 517"
          width="166.331"
          height="50.227"
          rx="14.953"
          transform="translate(1563.742 392.09)"
          fill="#986e42"
        />
        <g id="Group_2903-2" data-name="Group 2903">
          <path
            id="Path_2724"
            data-name="Path 2724"
            d="M1571.7,393.834a16.08,16.08,0,0,0-7.946,14.066v21.636A16.08,16.08,0,0,0,1571.7,443.6c8.253-5.689,13.59-14.717,13.59-24.884S1579.949,399.523,1571.7,393.834Z"
            fill="#bc8d55"
          />
          <path
            id="Path_2725"
            data-name="Path 2725"
            d="M1722.119,443.6a16.08,16.08,0,0,0,7.946-14.066V407.9a16.08,16.08,0,0,0-7.946-14.066c-8.253,5.689-13.59,14.717-13.59,24.884S1713.866,437.913,1722.119,443.6Z"
            fill="#bc8d55"
          />
        </g>
        <g id="Group_2905" data-name="Group 2905">
          <g id="Group_2904" data-name="Group 2904">
            <path
              id="Path_2726"
              data-name="Path 2726"
              d="M1604.4,481.467a7.229,7.229,0,1,0,7.229,7.229A7.238,7.238,0,0,0,1604.4,481.467Z"
              fill="#212121"
            />
            <path
              id="Path_2727"
              data-name="Path 2727"
              d="M1684.382,481.467a7.229,7.229,0,1,0,7.231,7.229A7.24,7.24,0,0,0,1684.382,481.467Z"
              fill="#212121"
            />
          </g>
          <path
            id="Path_2728"
            data-name="Path 2728"
            d="M1618.752,548.288a357.614,357.614,0,0,0,61.226-16.174c4.1-1.484,2.334-8.09-1.817-6.59a357.615,357.615,0,0,1-61.226,16.174c-4.326.741-2.492,7.328,1.817,6.59Z"
            fill="#212121"
          />
          <path
            id="Path_2729"
            data-name="Path 2729"
            d="M1589.056,483.262h37.009c4.4,0,4.405-6.834,0-6.834h-37.009c-4.4,0-4.4,6.834,0,6.834Z"
            fill="#212121"
          />
          <path
            id="Path_2730"
            data-name="Path 2730"
            d="M1667.75,483.262h37.009c4.4,0,4.4-6.834,0-6.834H1667.75c-4.4,0-4.405,6.834,0,6.834Z"
            fill="#212121"
          />
        </g>
      </g>
    </svg>
  );
};

export default EmptyCart;
