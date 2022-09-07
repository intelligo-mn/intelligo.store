import classNames from "classnames";

interface ScheduleProps {
  schedule: any;
  checked: boolean;
}
const ScheduleCard: React.FC<ScheduleProps> = ({ checked, schedule }) => (
  <div
    className={classNames(
      "relative p-4 lg:p-5 xl:p-6 rounded border cursor-pointer group hover:border-accent",
      {
        "border-2 border-heading": checked,
        "bg-gray-200 border-gray-100": !checked,
      }
    )}
  >
    <span className="text-base text-heading font-semibold block mb-2">
      {schedule.title}
    </span>
    <span className="text-sm text-body leading-6">{schedule.description}</span>
  </div>
);

export default ScheduleCard;
