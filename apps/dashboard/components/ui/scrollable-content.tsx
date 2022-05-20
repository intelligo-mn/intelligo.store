import React, { useLayoutEffect } from "react";
import cn from "classnames";

type Props = {
  selector: string;
  children: React.ReactNode;
  className?: string;
};

export const ScrollContent: React.FC<Props> = ({
  selector,
  children,
  className,
}) => {
  const scrollDiv = selector;

  console.log(document!.querySelector(selector)!.scrollWidth);
  console.log(document!.querySelector(selector)!.clientWidth);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const isLeftShowAble =
        document!.querySelector(selector)!.scrollWidth <
        document!.querySelector(selector)!.clientWidth
          ? true
          : false;
      const isRightShowAble =
        document!.querySelector(selector)!.scrollWidth >
        document!.querySelector(selector)!.clientWidth
          ? true
          : false;

      if (isRightShowAble) {
        document!.querySelector(".rightArrow")!.classList.add("block");
        document!.querySelector(".rightArrow")!.classList.remove("hidden");
        console.log("isRightShowAble = true");
      } else {
        document!.querySelector(".rightArrow")!.classList.add("hidden");
        document!.querySelector(".rightArrow")!.classList.remove("block");
      }

      if (isLeftShowAble) {
        document!.querySelector(".leftArrow")!.classList.add("block");
        document!.querySelector(".leftArrow")!.classList.remove("hidden");
        console.log("isLeftShowAble = true");
      } else {
        document!.querySelector(".leftArrow")!.classList.add("hidden");
        document!.querySelector(".leftArrow")!.classList.remove("block");
      }
    };

    if (document.querySelector(scrollDiv))
      document!
        .querySelector(scrollDiv)!
        .addEventListener("scroll", handleScroll);
  });

  return (
    <div className={cn("relative", className)}>
      <div
        className="hidden min-h-full leftArrow vertical-scroll-arrow left absolute start-0 top-0 w-4 h-4 bg-red-500"
        onClick={() => {
          document!.querySelector(scrollDiv)!.scrollLeft -= 20;
          console.log("clicked prev");
        }}
      >
        {/* <img src={PrevIcon} /> */}
        prev
      </div>
      {children}
      <div
        className="block min-h-full rightArrow vertical-scroll-arrow right absolute end-0 top-0 w-4 h-4 bg-red-500"
        onClick={() => {
          document!.querySelector(scrollDiv)!.scrollLeft += 20;
          console.log("clicked next");
        }}
      >
        {/* <img src={NextIcon} /> */}
        next
      </div>
    </div>
  );
};

export default ScrollContent;
