import Charts from "@components/ui/chart";

const GraphChart = ({ widgetTitle, series, labels, colors }: any) => {
  const options = {
    options: {
      chart: {
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: colors,
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "solid",
      },
      stroke: {
        show: false,
        curve: "smooth",
      },
      legend: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: labels,
        labels: {
          show: true,
          offsetX: -25,
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
        crosshairs: {
          show: true,
          width: 1,
          tickWidth: 0,
          position: "back",
          opacity: 1,
          stroke: {
            color: "transparent",
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
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      markers: {
        size: 0,
        opacity: 1,
        colors: colors,
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
        <h3 className="text-base font-semibold text-heading">{widgetTitle}</h3>
      </div>

      <div className="w-full">
        <Charts
          options={options.options}
          series={options.series}
          width="100%"
          type="area"
        />
      </div>
    </div>
  );
};

export default GraphChart;
