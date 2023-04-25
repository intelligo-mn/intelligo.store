import React from "react";

type Props = {
  text: string;
};

const NotFoundItem: React.FC<Props> = ({ text }) => (
  <div className="shadow-lg rounded border border-gray-300 p-5 mb-12 md:mb-14 xl:mb-16">
    {text}
  </div>
);

export default NotFoundItem;
