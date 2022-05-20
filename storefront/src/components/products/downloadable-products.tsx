import ErrorMessage from '@/components/ui/error-message';
import {
  useGenerateDownloadableUrl,
  useDownloadableProducts,
} from '@/framework/order';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import dayjs from 'dayjs';
import Link from '@/components/ui/link';
import { ROUTES } from '@/lib/routes';
import Button from '@/components/ui/button';
import { productPlaceholder } from '@/lib/placeholders';
import { isEmpty } from 'lodash';
import NotFound from '@/components/ui/not-found';

const DownloadableProducts: React.FC = () => {
  const { t } = useTranslation('common');
  const { downloads, error, loadMore, isLoading, hasMore } =
    useDownloadableProducts({
      limit: 10,
    });

  const { generateDownloadableUrl } = useGenerateDownloadableUrl();

  if (error) return <ErrorMessage message={error.message} />;
  const isVariableProduct = (product: any) =>
    !isEmpty(product.file.fileable.product);
  return (
    <>
      {!downloads.length && (
        <NotFound
          text="text-no-download"
          className="w-full mx-auto md:w-7/12"
        />
      )}
      {downloads.map((item) => (
        <div
          key={item.purchase_key}
          className="flex w-full py-5 space-x-4 border-b border-gray-200 rtl:space-x-reverse sm:space-x-5 first:pt-0 last:pb-0 last:border-0"
        >
          <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 shrink-0">
            <Image
              src={
                isVariableProduct(item)
                  ? item?.file?.fileable?.product?.image?.original!
                  : item?.file?.fileable?.image?.original! ?? productPlaceholder
              }
              alt="text"
              layout="fill"
            />
          </div>

          <div className="flex flex-col items-start w-full sm:flex-row sm:justify-between sm:space-x-4 rtl:sm:space-x-reverse">
            <div className="flex flex-col w-full space-y-1 sm:items-start">
              <Link
                href={`${ROUTES.PRODUCT}/${
                  isVariableProduct(item)
                    ? item?.file?.fileable?.product?.slug
                    : item?.file?.fileable?.slug
                }`}
                className="text-base font-semibold transition-colors text-heading hover:text-accent"
              >
                {!isVariableProduct(item) && item?.file?.fileable?.name}
                {isVariableProduct(item) && (
                  <>
                    {item?.file?.fileable?.product?.name}
                    <span className="inline-block text-sm ltr:clear-left rtl:clear-right ltr:ml-1 rtl:mr-1">
                      ({item?.file?.fileable?.title})
                    </span>
                  </>
                )}
              </Link>

              <p className="space-y-1 sm:space-x-1 rtl:sm:space-x-reverse sm:space-y-0">
                <span className="block text-sm font-semibold sm:inline-block sm:w-auto text-body-dark">
                  {t('text-key')}: {item?.purchase_key}
                </span>
                <span className="hidden text-sm sm:inline-block text-body">
                  |
                </span>
                <span className="block text-sm sm:inline-block text-body">
                  {t('text-purchased-on')}{' '}
                  {dayjs(item?.created_at).format('DD.MM.YYYY')}
                </span>
              </p>
            </div>

            <button
              className="mt-2 text-sm font-semibold transition-colors sm:mt-0 text-accent hover:text-accent-hover"
              onClick={() => generateDownloadableUrl(item?.digital_file_id)}
            >
              {t('text-download')}
            </button>
          </div>
        </div>
      ))}

      {hasMore && (
        <div className="flex justify-center w-full mt-8">
          <Button loading={isLoading} onClick={loadMore}>
            {t('text-load-more')}
          </Button>
        </div>
      )}
    </>
  );
};

export default DownloadableProducts;
