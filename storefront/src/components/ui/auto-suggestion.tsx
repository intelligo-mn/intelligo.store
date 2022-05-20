import { useRouter } from 'next/router';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import Scrollbar from '@/components/ui/scrollbar';
import Link from '@/components/ui/link';
import { Image } from '@/components/ui/image';
import { productPlaceholder } from '@/lib/placeholders';
import { ROUTES } from '@/lib/routes';
import { Transition } from '@headlessui/react';
import Spinner from '@/components/ui/loaders/spinner/spinner';

type Props = {
  className?: string;
  suggestions: any;
  visible: boolean;
  notFound: boolean;
  showLoaders: boolean;
  seeMore: boolean;
  seeMoreLink: (e: any) => void;
};

const AutoSuggestion: React.FC<Props> = ({
  className,
  suggestions,
  visible,
  notFound,
  showLoaders,
  seeMore,
  seeMoreLink,
}) => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <Transition
      show={visible}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={cn(
          'w-full absolute top-11 lg:top-16 mt-2 lg:mt-1 left-0',
          className
        )}
      >
        <div className="w-full h-full py-2 shadow-downfall-lg bg-white rounded-lg">
          <Scrollbar className="w-full h-full">
            {notFound && (
              <h3 className="w-full h-full py-10 flex items-center justify-center font-semibold text-gray-400">
                {t('text-no-products')}
              </h3>
            )}

            {showLoaders && (
              <div className="w-full h-full py-14 flex items-center justify-center">
                <Spinner simple={true} className="w-9 h-9" />
              </div>
            )}

            {!notFound && !showLoaders && (
              <div className="max-h-52">
                {suggestions?.map((item: any) => (
                  <div
                    onClick={() =>
                      handleClick(`${ROUTES.PRODUCT}/${item?.slug}`)
                    }
                    key={item?.slug}
                    className="flex items-center w-full px-5 py-2 border-b border-border-100 last:border-b-0 cursor-pointer transition-colors hover:bg-gray-100"
                  >
                    <div className="w-8 h-8 relative rounded overflow-hidden">
                      <Image
                        className="w-full h-full"
                        src={item?.image?.original ?? productPlaceholder}
                        alt={item?.name ?? ''}
                        layout="responsive"
                        width={100}
                        height={100}
                      />
                    </div>

                    <span className="text-sm font-semibold text-heading ltr:ml-3 rtl:mr-3">
                      {item?.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </Scrollbar>
          {seeMore && (
            <div className="text-center w-full py-3">
              <button
                onClick={seeMoreLink}
                className="text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
              >
                {t('text-see-more')}
              </button>
            </div>
          )}
        </div>
      </div>
    </Transition>
  );
};

export default AutoSuggestion;
