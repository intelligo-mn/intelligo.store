type NotificationCardType = {
  src?: string;
  text?: string | React.ReactNode;
  time?: string;
};

const NotificationCard: React.FC<NotificationCardType> = ({
  src,
  text,
  time,
}) => {
  return (
    <a
      href="#"
      className="flex items-start px-4 pt-4 pb-3 bg-light border-b border-border-200 hover:bg-gray-50"
    >
      <img
        className="h-8 w-8 rounded-full object-cover me-3"
        src={src}
        alt="avatar"
      />

      <div className="flex flex-col -mt-1">
        <p className="text-body text-sm mb-1">{text}</p>
        <span className="text-sm text-muted">{time}</span>
      </div>
    </a>
  );
};

export default NotificationCard;
