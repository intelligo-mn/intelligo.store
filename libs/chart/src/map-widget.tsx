import { Line } from "rc-progress";

const MapWidget = ({ data, totalText }: any) => {
  const numberWithCommas = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const numberToPercent = (num: number, total: number) => {
    return (num * 100) / total;
  };

  return (
    <div className="bg-light shadow-sm rounded w-full h-full">
      <div className="flex w-full my-auto mx-0 py-12 px-9">
        <div className="w-5/12 flex flex-col items-center justify-center py-12 pe-8">
          <span className="text-xs text-body mb-1 whitespace-nowrap">
            {totalText}
          </span>

          <span className="text-xl text-heading font-semibold">
            {numberWithCommas(
              data.reduce((a: any, { value }: any) => a + value, 0)
            )}
          </span>
        </div>

        <div className="w-7/12 flex flex-col">
          {data.map((item: any, index: number) => (
            <div
              className="w-full flex flex-col mb-4 pe-12 last:mb-0"
              key={index}
            >
              <div className="w-full flex items-baseline mb-3">
                <span className="text-sm text-heading font-semibold">
                  {item.name}
                </span>
                <span className="text-xs font-semibold  text-heading ms-2">
                  ({numberWithCommas(item.value)})
                </span>
              </div>
              <Line
                percent={numberToPercent(
                  item.value,
                  data.reduce((a: any, { value }: any) => a + value, 0)
                )}
                strokeWidth={2}
                strokeColor={item.color}
                trailWidth={2}
                trailColor="#F2F2F2"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex border border-border-100">
        <div className="w-full flex flex-wrap  flex-shrink-0 py-5 px-5 md:px-4 justify-around">
          {data.map((item: any, index: number) => (
            <div
              className="w-1/2 md:w-1/4 flex flex-col justify-between py-4 px-4 md:px-3"
              key={index}
            >
              <span className="text-xs text-body mb-1 whitespace-nowrap truncate">
                <span
                  className="w-2 h-2 inline-block rounded-full me-1"
                  style={{ backgroundColor: item.color }}
                />
                {item.name}
              </span>
              <span className="text-xl text-heading font-semibold">
                {numberWithCommas(item.value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapWidget;
