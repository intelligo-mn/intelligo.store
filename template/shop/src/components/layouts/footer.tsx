import { useTranslation } from 'next-i18next';
import { siteSettings } from '@/settings/site';
import Link from '@/components/ui/link';
import Logo from '@/components/ui/logo';
import SubscriptionWidget from '@/components/settings/subscribe-to-newsletter';

const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <div className="flex w-full flex-col border-gray-800 bg-white px-5 md:px-10 lg:border-b-8 lg:px-[50px] xl:px-16">
      {/* Top */}
      <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 pt-16 md:grid-cols-3 lg:pt-24 lg:pb-16 xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 2xl:grid-cols-5">
        <div className="flex flex-col">
          <div className="mb-[2px] flex h-16 items-start">
            <Logo />
          </div>

          <address className="mb-7 text-sm not-italic text-heading">
            {t(siteSettings.footer.address)}
          </address>
          <span className="mb-1 text-sm text-heading">
            {t(siteSettings.footer.email)}
          </span>
          <span className="text-sm text-heading">
            {t(siteSettings.footer.phone)}
          </span>
        </div>

        {siteSettings.footer.menus.map((menu, idx) => (
          <div className="flex flex-col" key={`${menu.title}-${idx}`}>
            <h3 className="mt-3 mb-4 font-semibold text-heading lg:mb-7">
              {t(menu.title)}
            </h3>

            <ul className="space-y-3">
              {menu.links.map((link, index) => (
                <li key={`${link.href}-${index}`}>
                  <Link
                    href={link.href}
                    className="text-sm text-heading transition-colors hover:text-orange-500"
                  >
                    {t(link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-full md:col-span-2 lg:col-auto">
          <SubscriptionWidget
            title="text-subscribe-now"
            description="text-subscribe-details"
          />
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 flex w-full flex-col items-center border-t border-gray-200 pt-8 pb-12 lg:mt-0 lg:flex-row lg:justify-between lg:border-t-0">
        <span className="order-2 text-sm text-heading lg:order-1">
          &copy; {t('text-copyright')} {new Date().getFullYear()}{' '}
          <Link
            className="font-bold text-heading transition-colors hover:text-accent"
            href={siteSettings.footer.copyright.href}
          >
            {siteSettings.footer.copyright.name}.
          </Link>{' '}
          {t('text-rights-reserved')}
        </span>

        {siteSettings.footer.payment_methods && (
          <div className="order-1 mb-5 flex items-center space-x-5 rtl:space-x-reverse lg:order-2 lg:mb-0">
            {siteSettings.footer.payment_methods.map((method, idx) => (
              <Link
                className="relative flex h-5 w-auto items-center overflow-hidden"
                key={`${method.url}-${idx}`}
                href={method.url}
              >
                {/* eslint-disable */}
                <img src={method.img} className="max-h-full max-w-full" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
