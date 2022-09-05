import Chart from "@components/ui/chart";

const LineChart = ({
  widgetTitle,
  series,
  color,
  categories,
  seriesName = "",
}: any) => {
  const options = {
    options: {
      chart: {
        type: "line",
        dropShadow: {
          enabled: true,
          color: color,
          top: 18,
          left: 0,
          blur: 3.5,
          opacity: 0.15,
        },
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: 7,
        curve: "smooth",
      },
      xaxis: {
        categories: categories,
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
          show: true,
          width: 5,
          tickWidth: 0,
          position: "back",
          opacity: 1,
          stroke: {
            color: "#b6b6b6",
            width: 0,
            dashArray: 0,
          },
          fill: {
            type: "solid",
            color: "#F2F3FC",
          },
        },
        tooltip: {
          enabled: false,
        },
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
      grid: {
        borderColor: "#F7F7F7",
      },
      colors: color,
      markers: {
        size: 0,
        opacity: 1,
        colors: color,
        strokeColor: "#fff",
        strokeWidth: 4,
        hover: {
          size: 8,
        },
      },
    },
    series: [
      {
        name: seriesName,
        data: series,
      },
    ],
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
          height="350"
          width="97%"
        />
      </div>
    </div>
  );
};

export default LineChart;
