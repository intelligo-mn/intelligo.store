import { Image } from '@/components/ui/image';
import React from 'react';
import { getIcon } from '@/lib/get-icon';
import * as socialIcons from '@/components/icons/social';
import { avatarPlaceholder, productPlaceholder } from '@/lib/placeholders';
import Link from '@/components/ui/link';

type ManufacturerProps = {
  manufacturer: any;
};

const Details: React.FC<ManufacturerProps> = ({ manufacturer }) => {
  const { name, slug, website, image, cover_image, socials } =
    manufacturer ?? {};

  return (
    <div className="w-full flex flex-col md:flex-row mb-12 xl:mb-20 border border-gray-200">
      <div className="w-full md:w-1/3 flex flex-col items-center p-5 lg:p-8 2xl:p-10 overflow-hidden">
        <div className="w-32 h-32 2xl:w-40 2xl:h-40 border-2 border-gray-300 rounded-full overflow-hidden flex shrink-0 justify-center items-center">
          <Image
            src={image?.original ?? avatarPlaceholder}
            alt={name}
            width={160}
            height={160}
          />
        </div>

        {name && (
          <h3
            className="w-full text-xl 2xl:text-2xl truncate font-bold text-heading mt-5 text-center"
            title={name}
          >
            {name}
          </h3>
        )}
        {website && (
          <Link
            href={website}
            className="text-sm text-body mt-2 transition-colors hover:text-accent"
          >
            {website}
          </Link>
        )}

        {socials && (
          <div className="flex items-center mt-5 space-x-5 rtl:space-x-reverse">
            {socials?.map((item: any, index: number) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                className={`text-body focus:outline-none transition-colors duration-300 hover:text-accent cursor-pointer`}
                rel="noreferrer"
              >
                {getIcon({
                  iconList: socialIcons,
                  iconName: item.icon,
                  className: 'w-4 h-4',
                })}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="w-full md:w-2/3 bg-gray-50 relative overflow-hidden hidden md:flex justify-center items-center">
        <Image
          src={cover_image?.original ?? productPlaceholder}
          alt="cover image"
          width={1100}
          height={370}
        />
      </div>
    </div>
  );
};

export default Details;
