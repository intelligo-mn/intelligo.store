import cn from "classnames";
import Image from "next/image";

type AvatarProps = {
  className?: string;
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  className,
  alt = "Avatar",
  onClick,
  ...rest
}) => {
  return (
    <div
      className={cn(
        "relative cursor-pointer w-10 h-10 overflow-hidden rounded-full border border-border-100",
        className
      )}
      {...rest}
    >
      <Image alt={alt} src={src} layout="fill" priority={true} />
    </div>
  );
};

export default Avatar;
