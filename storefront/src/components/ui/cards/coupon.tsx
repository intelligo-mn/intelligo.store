import { useRef, useState, useEffect } from 'react';
import { Image } from '@/components/ui/image';
import cn from 'classnames';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useTranslation } from 'next-i18next';
import { couponPlaceholder } from '@/lib/placeholders';

type CouponCardProps = {
  coupon?: any;
  className?: string;
};

const CouponCard: React.FC<CouponCardProps> = ({ coupon, className }) => {
  const { t } = useTranslation('common');
  const { code, image, is_valid } = coupon;
  const [copyText, setCopyText] = useState({
    value: code,
    copied: false,
  });

  useEffect(() => {
    let timeout: any;
    if (copyText.copied) {
      timeout = setTimeout(() => {
        setCopyText((prev) => ({
          ...prev,
          copied: false,
        }));
      }, 3500);
    }
    return () => clearTimeout(timeout);
  }, [copyText.copied]);

  return (
    <div className={cn('coupon-card', className)}>
      <div className="flex rounded overflow-hidden bg-gray-200 relative">
        <Image
          src={image?.thumbnail ?? couponPlaceholder}
          alt={code}
          width="572"
          height="429"
        />
      </div>
      <div className="w-11/12 grid grid-flow-col auto-cols-fr items-center py-4 px-5 mx-auto rounded-bl rounded-be shadow-sm bg-light">
        {is_valid ? (
          <>
            <span className="text-heading font-semibold uppercase focus:outline-none">
              {copyText.value}
            </span>

            {!copyText.copied && (
              <CopyToClipboard
                text={copyText.value}
                onCopy={() =>
                  setCopyText((prev) => ({
                    ...prev,
                    copied: true,
                  }))
                }
              >
                <button className="ltr:text-right rtl:text-left text-accent text-sm font-semibold transition-colors duration-200 focus:outline-none hover:text-accent-hover focus:text-accent-hover">
                  <span>{t('text-copy')}</span>
                </button>
              </CopyToClipboard>
            )}

            {copyText.copied && (
              <div className="ltr:text-right rtl:text-left text-accent text-sm font-semibold">
                {t('text-copied')}
              </div>
            )}
          </>
        ) : (
          <span className="text-sm text-center block text-red-500">
            {t('text-expired')}
          </span>
        )}
      </div>
    </div>
  );
};

export default CouponCard;
