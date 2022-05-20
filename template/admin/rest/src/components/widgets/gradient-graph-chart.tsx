import Charts from "@components/ui/chart";
import { Line } from "rc-progress";

const GradientGraphChart = ({
  series,
  topRowTitle,
  bottomRowData,
  labels,
  colors,
}: any) => {
  const options = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: colors,
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 1,
          opacityTo: 0.7,
        },
      },
      stroke: {
        show: true,
        width: 2,
        curve: "smooth",
        colors: colors,
      },
      legend: {
        show: true,
      },
      xaxis: {
        show: false,
        type: "datetime",
        categories: labels,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        show: false,
      },
      grid: {
        show: false,
      },
      markers: {
        size: 0,
        opacity: 1,
        colors: ["#18D8BC"],
        strokeColor: "#fff",
        strokeWidth: 4,
        hover: {
          size: 8,
        },
      },
    },
    series: [
      {
        name: "",
        data: series,
      },
    ],
  };

  return (
    <div className="bg-light shadow-sm rounded w-full h-full">
      <div className="p-8 flex items-start justify-between">
        <div className="flex flex-col ms-auto">
          {/* label */}
          <span className="text-xs text-body">{topRowTitle}</span>

          {/* series */}
          <span
            className="text-lg text-heading font-semibold"
            style={{ color: colors[0] }}
          >
            {bottomRowData[0].value - bottomRowData[1].value}%
          </span>
        </div>
      </div>

      <div className="w-full">
        <Charts
          options={options.options}
          series={options.series}
          width="100%"
          type="area"
        />
      </div>

      <div className="p-8 flex items-start justify-between pt-0">
        {bottomRowData &&
          bottomRowData.map((item: any, index: number) => (
            <div className="flex flex-col" key={index}>
              <span className="text-xs text-body">{item.label}</span>
              <span className="text-lg text-heading font-semibold mt-1 mb-2">
                {item.valueText}
              </span>

              <Line
                percent={item.value}
                strokeWidth={4}
                strokeColor={item.color}
                trailWidth={4}
                trailColor="#F2F2F2"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default GradientGraphChart;
