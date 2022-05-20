import { Image } from '@/components/ui/image';
import BackButton from '@/components/ui/back-button';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import Truncate from '@/components/ui/truncate';
import { useRouter } from 'next/router';
import { ROUTES } from '@/lib/routes';
import { avatarPlaceholder } from '@/lib/placeholders';
import { useAtom } from 'jotai';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { useIsRTL } from '@/lib/locals';

type Props = {
  author: any;
};
const AuthorDetails: React.FC<Props> = ({ author }) => {
  const { isRTL } = useIsRTL();
  const { t } = useTranslation('common');
  const {
    name,
    image, //could only had image we need to think it also
    quote,
    bio,
    slug,
    born,
    death,
    languages,
  } = author ?? {};
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };

  return (
    <article className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-10 lg:space-x-14 rtl:space-x-reverse pb-8 lg:pb-20">
      <div className="md:w-1/2">
        <div className="product-gallery h-full rounded bg-gray-100 p-6 md:p-10 xl:p-14">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src={image?.original ?? avatarPlaceholder}
              // src={author?.image?.original ?? image?.original}
              alt={name}
              width={450}
              height={450}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start md:w-1/2">
        <div className="w-full">
          {name && (
            <h1 className="text-2xl lg:text-4xl font-bold text-heading mb-5 uppercase">
              {name}
            </h1>
          )}

          {quote && (
            <blockquote className="text-sm text-body italic">
              {quote}
            </blockquote>
          )}

          {bio && (
            <p className="text-sm text-body mt-8">
              <Truncate
                character={260}
                btnClassName="!mt-4 !text-heading transition-colors hover:!text-accent"
              >
                {bio}
              </Truncate>
            </p>
          )}

          <ul className="mt-8 space-y-4">
            {born && (
              <li className="text-sm text-body flex items-center">
                <span className="font-bold text-sm lg:text-base text-heading ltr:pr-2 rtl:pl-2 order-1">
                  {t('text-born')}:
                </span>
                <span className="order-2">
                  {dayjs(born).format('MMMM D, YYYY')}
                </span>
              </li>
            )}

            {death && (
              <li className="text-sm text-body flex items-center">
                <span className="font-bold text-sm lg:text-base text-heading ltr:pr-2 rtl:pl-2 order-1">
                  {t('text-died')}:
                </span>
                <span className="order-2">
                  {dayjs(death).format('MMMM D, YYYY')}
                </span>
              </li>
            )}

            {languages && (
              <li className="text-sm text-body flex items-center">
                <span className="font-bold text-sm lg:text-base text-heading ltr:pr-2 rtl:pl-2 order-1">
                  {t('text-languages')}:
                </span>
                <span className="order-2">{languages}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default AuthorDetails;
