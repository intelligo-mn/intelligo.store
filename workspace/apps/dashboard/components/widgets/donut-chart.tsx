import Chart from "@components/ui/chart";

const DonutChart = ({ series, icon, labels, prefix, colors }: any) => {
  const options = {
    options: {
      colors: colors,
      dataLabels: {
        enabled: false,
      },
      labels: labels,
      legend: {
        show: false,
      },
      stroke: {
        show: false,
      },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 0.8,
          },
        },
      },
      plotOptions: {
        pie: {
          donut: {},
          expandOnClick: false,
        },
      },
    },
    series: series,
  };

  const numberWithCommas = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="bg-light shadow-sm rounded w-full h-full">
      <div className="p-8 flex items-start justify-between">
        <div className="w-full flex items-center justify-start">
          <span className="w-14 h-14 me-4 flex">{icon[0]}</span>

          <div className="flex flex-col">
            <span
              className="text-lg text-heading font-semibold"
              style={{ color: colors[0] }}
            >
              {prefix}
              {numberWithCommas(series[0])}
            </span>
            <span className="text-xs text-body mt-1">{labels[0]}</span>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Chart
          options={options.options}
          series={options.series}
          width="100%"
          type="donut"
        />
      </div>

      <div className="p-8 flex items-start justify-between">
        <div className="w-full flex flex-row-reverse items-center justify-start ">
          <span className="w-14 h-14 ms-4 flex">{icon[1]}</span>

          <div className="flex flex-col items-end">
            <span
              className="text-lg text-heading font-semibold"
              style={{ color: colors[1] }}
            >
              {prefix}
              {numberWithCommas(series[1])}
            </span>
            <span className="text-xs text-body mt-1">{labels[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
