import Logo from '@/components/ui/logo';
import cn from 'classnames';
import StaticMenu from './menu/static-menu';
import { useAtom } from 'jotai';
import { displayHeaderSearchAtom } from '@/store/display-header-search-atom';
import { displayMobileHeaderSearchAtom } from '@/store/display-mobile-header-search-atom';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { authorizationAtom } from '@/store/authorization-atom';
import { useIsHomePage } from '@/lib/use-is-homepage';
import { useEffect } from 'react';
import GroupsDropdownMenu from './menu/groups-menu';
const Search = dynamic(() => import('@/components/ui/search/search'));
const AuthorizedMenu = dynamic(() => import('./menu/authorized-menu'), {
  ssr: false,
});
const JoinButton = dynamic(() => import('./menu/join-button'), { ssr: false });

const Header = ({ layout }: { layout: string }) => {
  const { t } = useTranslation('common');
  const [displayHeaderSearch, setDisplayHeaderSearch] = useAtom(
    displayHeaderSearchAtom
  );
  const [displayMobileHeaderSearch] = useAtom(displayMobileHeaderSearchAtom);
  const [isAuthorize] = useAtom(authorizationAtom);
  const isHomePage = useIsHomePage();
  useEffect(() => {
    if (!isHomePage) {
      setDisplayHeaderSearch(false);
    }
  }, [isHomePage, setDisplayHeaderSearch]);
  const isFlattenHeader =
    !displayHeaderSearch && isHomePage && layout !== 'modern';
  return (
    <header
      className={cn('site-header-with-search h-14 md:h-16 lg:h-22', {
        'lg:!h-auto': isFlattenHeader,
      })}
    >
      <div
        className={cn(
          'fixed flex justify-between items-center w-full h-14 md:h-16 lg:h-22 px-4 lg:px-8 py-5 z-50 bg-light border-b border-border-200 shadow-sm transition-transform duration-300 transform-gpu',
          {
            'lg:absolute lg:bg-transparent lg:shadow-none lg:border-0':
              isFlattenHeader,
          }
        )}
      >
        <div className="flex items-center w-full lg:w-auto">
          <Logo className="mx-auto lg:mx-0" />

          <div className="hidden ltr:ml-10 rtl:mr-10 ltr:mr-auto rtl:ml-auto xl:block">
            <GroupsDropdownMenu />
          </div>
        </div>
        {isHomePage ? (
          <>
            {(displayHeaderSearch || layout === 'modern') && (
              <div className="hidden w-full px-10 mx-auto overflow-hidden lg:block xl:w-11/12 2xl:w-10/12">
                <Search label={t('text-search-label')} variant="minimal" />
              </div>
            )}

            {displayMobileHeaderSearch && (
              <div className="block lg:hidden w-full absolute top-0 ltr:left-0 rtl:right-0 h-full bg-light pt-1.5 md:pt-2 px-5">
                <Search label={t('text-search-label')} variant="minimal" />
              </div>
            )}
          </>
        ) : null}
        <ul className="items-center shrink-0 hidden lg:flex space-x-10 rtl:space-x-reverse">
          <StaticMenu />
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <a
              href={`${process.env.NEXT_PUBLIC_ADMIN_URL}/register`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center shrink-0 px-3 py-0 text-sm font-semibold leading-none transition duration-300 ease-in-out border border-transparent rounded outline-none h-9 bg-accent text-light hover:bg-accent-hover focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700"
            >
              {t('text-become-seller')}
            </a>
            <li>{isAuthorize ? <AuthorizedMenu /> : <JoinButton />}</li>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
