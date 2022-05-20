import cn from 'classnames';
import { avatarPlaceholder } from '@/lib/placeholders';
import { Image } from '@/components/ui/image';
import Link from '@/components/ui/link';
import { ROUTES } from '@/lib/routes';

interface AuthorItemProps {
  item: any;
}

const AuthorCard: React.FC<AuthorItemProps> = ({ item }) => (
  <Link
    href={`${ROUTES.AUTHORS}/${item?.slug}`}
    className={cn(
      'text-center bg-light flex flex-col items-center relative cursor-pointer group'
    )}
  >
    <span
      className={cn(
        'flex items-center justify-center rounded-full overflow-hidden w-44 h-44 relative mb-6 bg-gray-100 border-4 border-white shadow-350'
      )}
    >
      <Image
        src={item?.image?.original! ?? avatarPlaceholder}
        alt={item?.name!}
        layout="fill"
        objectFit="contain"
      />
    </span>
    <span className="font-semibold text-heading text-center block transition-colors group-hover:text-orange-500">
      {item.name}
    </span>
  </Link>
);

export default AuthorCard;
