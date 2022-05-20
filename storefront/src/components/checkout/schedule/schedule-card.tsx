import classNames from "classnames";

interface ScheduleProps {
  schedule: any;
  checked: boolean;
}
const ScheduleCard: React.FC<ScheduleProps> = ({ checked, schedule }) => (
  <div
    className={classNames(
      "relative p-4 rounded border cursor-pointer group hover:border-accent",
      {
        "border-accent shadow-sm": checked,
        "bg-gray-100 border-transparent": !checked,
      }
    )}
  >
    <span className="text-sm text-heading font-semibold block mb-2">
      {schedule.title}
    </span>
    <span className="text-sm text-heading block">{schedule.description}</span>
  </div>
);

export default ScheduleCard;
