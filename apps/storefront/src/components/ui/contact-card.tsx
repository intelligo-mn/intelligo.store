import classNames from "classnames";

interface PhoneNumberProps {
  number: any;
  checked?: boolean;
}

const ContactCard: React.FC<PhoneNumberProps> = ({ checked, number }) => {
  return (
    <div
      className={classNames(
        "relative p-4 lg:p-5 xl:p-6 rounded border cursor-pointer group hover:border-accent",
        {
          "border-2 border-heading": checked,
          "bg-gray-200 border-gray-100": !checked,
        }
      )}
    >
      <p className="text-sm text-heading font-semibold capitalize">{number}</p>
    </div>
  );
};

export default ContactCard;
