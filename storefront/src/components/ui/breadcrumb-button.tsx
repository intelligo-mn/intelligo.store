import cn from 'classnames';
import { Image } from '@/components/ui/image';
import { productPlaceholder } from '@/lib/placeholders';

interface BreadcrumbButtonProps {
  text: string;
  image?: any;
  onClick: () => void;
}

const BreadcrumbButton: React.FC<BreadcrumbButtonProps> = ({
  text,
  image,
  onClick,
}) => (
  <button
    className={cn(
      'relative h-14 rounded-lg bg-light px-7 text-base font-semibold text-heading shadow-downfall-xs transition-shadow hover:shadow-downfall-sm',
      {
        'ltr:pr-[5.5rem] rtl:pl-[5.5rem]': image,
      }
    )}
    onClick={onClick}
  >
    <span className="whitespace-nowrap">{text}</span>
    {image && (
      <span className="absolute bottom-0 h-full overflow-hidden rounded-lg w-14 ltr:right-0 ltr:rounded-l-none rtl:left-0 rtl:rounded-r-none">
        <Image
          className="w-full h-full"
          src={image ?? productPlaceholder}
          alt={text ?? ''}
          layout="responsive"
          width={60}
          height={60}
        />
      </span>
    )}
  </button>
);

export default BreadcrumbButton;
