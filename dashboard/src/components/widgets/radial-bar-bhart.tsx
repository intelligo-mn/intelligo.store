import Chart from "@components/ui/chart";

const RadialBarChart = ({
  widgetTitle,
  series,
  colors,
  label,
  helperText,
}: any) => {
  const options = {
    options: {
      colors: colors,
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "20%",
            background: "transparent",
          },

          track: {
            show: true,
            background: "#F2F3FC",
            strokeWidth: "100%",
            opacity: 1,
            margin: 15,
            dropShadow: {
              enabled: false,
              top: 0,
              left: 0,
              blur: 3,
              opacity: 0.5,
            },
          },

          dataLabels: {
            show: false,
          },
        },
      },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 0.8,
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: label,
    },
    series: series,
  };

  return (
    <div className="bg-light shadow-sm rounded w-full h-full">
      <div className="p-8 flex items-start justify-between">
        <h3 className="text-base font-semibold text-heading">{widgetTitle}</h3>
      </div>

      <div className="w-full">
        <Chart
          options={options.options}
          series={options.series}
          type="radialBar"
          width="100%"
        />

        <div className="w-full flex px-3 pt-4 pb-8">
          {label?.map((_: any, index: number) => (
            <div className="px-2 flex items-start justify-start" key={index}>
              <span
                className="w-4 h-4 rounded-full me-3 flex flex-shrink-0"
                style={{ backgroundColor: colors[index] }}
              />
              <div className="flex flex-col">
                <span className="text-xs text-body mb-1">
                  {helperText[index]}
                </span>
                <span className="text-xl font-semibold text-heading">
                  {label[index]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RadialBarChart;
