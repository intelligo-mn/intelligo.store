import cn from 'classnames';
import { Image } from '@/components/ui/image';

type AvatarProps = {
  className?: string;
  src: string;
  title: string;
  [key: string]: unknown;
};

const Avatar: React.FC<AvatarProps> = ({ src, className, title, ...rest }) => {
  return (
    <div
      className={cn(
        'relative cursor-pointer overflow-hidden rounded-full border border-border-100',
        className
      )}
      {...rest}
    >
      <Image alt={title} src={src} layout="fill" priority={true} />
    </div>
  );
};

export default Avatar;
