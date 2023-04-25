import Chart from "@components/ui/chart";
import cn from "classnames";
import { ArrowUp } from "@components/icons/arrow-up";
import { ArrowDown } from "@components/icons/arrow-down";

const BarChart = ({
  widgetTitle,
  series,
  colors,
  prefix,
  totalValue,
  text,
  position,
  percentage,
  categories,
}: any) => {
  const options = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "65%",
          endingShape: "flat",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
        width: 2,
      },
      grid: {
        borderColor: "#F7F7F7",
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      colors: colors,
      xaxis: {
        labels: {
          show: true,
          style: {
            colors: "#161F6A",
            fontSize: "14px",
            fontFamily: "'Lato', sans-serif",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        categories: categories,
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          style: {
            color: "#161F6A",
            fontSize: "14px",
            fontFamily: "'Lato', sans-serif",
          },
        },
      },
    },
    series: [
      {
        name: "Sale",
        data: series,
      },
    ],
  };

  return (
    <div className="bg-light shadow-sm rounded w-full h-full">
      <div className="p-8 flex items-center justify-between">
        <h3 className="text-sm text-heading">{widgetTitle}</h3>

        <div className="flex flex-col">
          <span className="text-lg text-green-500 font-semibold">
            {prefix}
            {totalValue}
          </span>

          <div className="flex items-center">
            {position === "up" && (
              <span className="text-green-500">
                <ArrowUp />
              </span>
            )}
            {position === "down" && (
              <span className="text-red-400">
                <ArrowDown />
              </span>
            )}
            <span className="text-sm text-heading ms-1">
              <span
                className={cn(
                  position === "down" ? "text-red-400" : "text-green-500"
                )}
              >
                {percentage}
              </span>
              &nbsp;
              {text}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap w-full" style={{ display: "block" }}>
        <Chart
          options={options.options}
          series={options.series}
          height="350"
          width="100%"
          type="bar"
        />
      </div>
    </div>
  );
};

export default BarChart;
