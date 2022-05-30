import RCPagination, { PaginationProps } from "rc-pagination";
import { ArrowNext } from "apps/dashboard/src/components/icons/arrow-next";
import { ArrowPrev } from "apps/dashboard/src/components/icons/arrow-prev";
import "rc-pagination/assets/index.css";

const Pagination: React.FC<PaginationProps> = (props) => {
  return (
    <RCPagination
      nextIcon={<ArrowNext />}
      prevIcon={<ArrowPrev />}
      {...props}
    />
  );
};

export default Pagination;
