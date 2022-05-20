import { useTranslation } from 'next-i18next';
import { Image } from '@/components/ui/image';
import Link from '@/components/ui/link';
import SectionBlock from '@/components/ui/section-block';
import { siteSettings } from '@/settings/site';
import AppStoreImg from '@/assets/app-store-btn.png';
import PlayStoreImg from '@/assets/play-store-btn.png';
import PatternImg from '@/assets/pattern.png';

const CallToAction = () => {
  const { t } = useTranslation('common');

  return (
    <SectionBlock className="last:pb-0">
      <div className="flex w-full relative px-6 md:px-10 py-12 xl:px-32 xl:py-32 bg-gray-100 overflow-hidden rounded-xl">
        <Image src={PatternImg} layout="fill" alt="background pattern" />
        <div className="flex justify-center lg:justify-between w-full z-0">
          <div className="flex flex-col items-center lg:items-start max-w-[500px]">
            <span className="text-lg sm:text-xl font-semibold lg:font-bold uppercase mb-4">
              {t('text-cta-header')}
            </span>
            <span
              className="text-2xl sm:text-4xl sm:!leading-[3rem] text-center lg:text-left rtl:lg:text-right"
              dangerouslySetInnerHTML={{ __html: t('text-cta-description') }}
            />

            <div className="flex items-center mt-8 lg:mt-14 space-x-6 rtl:space-x-reverse">
              <Link
                href={siteSettings.cta.app_store_link}
                className="w-32 md:w-48"
              >
                <Image
                  src={AppStoreImg}
                  width={338}
                  height={100}
                  layout="responsive"
                  alt="app store button"
                />
              </Link>
              <Link
                href={siteSettings.cta.app_store_link}
                className="w-32 md:w-48"
              >
                <Image
                  src={PlayStoreImg}
                  width={334}
                  height={100}
                  layout="responsive"
                  alt="play store button"
                />
              </Link>
            </div>
          </div>

          <div className="hidden lg:block absolute bottom-0 right-10 rtl:left-10 xl:right-28 rtl:xl:left-28 2xl:right-64 rtl:2xl:left-64 lg:w-[360px] xl:w-[400px] 3xl:w-[480px]">
            <Image
              src={siteSettings.cta.mockup_img_src}
              width={400}
              height={386}
              layout="responsive"
              alt="mockup"
            />
          </div>
        </div>
      </div>
    </SectionBlock>
  );
};

export default CallToAction;
