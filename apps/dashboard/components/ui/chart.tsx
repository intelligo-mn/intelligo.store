import dynamic from "next/dynamic";

const Charts = dynamic(() => import("react-apexcharts"), { ssr: false });

const Chart = ({ ...props }) => {
  return <Charts {...props} />;
};

export default Chart;
