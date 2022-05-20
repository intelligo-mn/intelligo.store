import Logo from '@/components/ui/logo';
import cn from 'classnames';
import StaticMenu from './menu/static-menu';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { displayHeaderSearchAtom } from '@/store/display-header-search-atom';
import { displayMobileHeaderSearchAtom } from '@/store/display-mobile-header-search-atom';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { authorizationAtom } from '@/store/authorization-atom';
import { useIsHomePage } from '@/lib/use-is-homepage';
import { useEffect } from 'react';
import SearchWithSuggestion from '@/components/ui/search/search-with-suggestion';
import Link from '@/components/ui/link';
import GroupsDropdownMenu from './menu/groups-menu';

const CartCounterIconButton = dynamic(
  () => import('@/components/cart/cart-counter-icon-button'),
  { ssr: false }
);
const AuthorizedMenu = dynamic(() => import('./menu/authorized-menu'), {
  ssr: false,
});
const JoinButton = dynamic(() => import('./menu/join-button'), { ssr: false });

const HeaderMinimal = ({ layout }: { layout: string }) => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [_, setDisplayHeaderSearch] = useAtom(displayHeaderSearchAtom);
  const [displayMobileHeaderSearch] = useAtom(displayMobileHeaderSearchAtom);
  const [isAuthorize] = useAtom(authorizationAtom);
  const isHomePage = useIsHomePage();

  useEffect(() => {
    if (!isHomePage) {
      setDisplayHeaderSearch(false);
    }
  }, [isHomePage, setDisplayHeaderSearch]);

  return (
    <header className={cn('site-header-with-search h-14 md:h-16 lg:h-22')}>
      <div
        className={cn(
          'flex justify-between items-center w-full h-14 md:h-16 lg:h-22 px-4 ltr:lg:pl-12 rtl:lg:pr-12 ltr:lg:pr-8 rtl:lg:pl-8  py-5 z-50 fixed bg-light border-b border-border-200 shadow-sm transition-transform duration-300',
          {
            'px-5 lg:!px-12 xl:px-16': layout === 'compact',
          }
        )}
      >
        <div className="flex items-center w-full lg:w-auto">
          <Logo className="mx-auto lg:mx-0" />

          <ul className="items-center hidden ltr:ml-10 rtl:mr-10 ltr:mr-auto rtl:ml-auto lg:flex shrink-0 space-x-7 2xl:space-x-10 rtl:space-x-reverse">
            <StaticMenu />
            <li className="hidden lg:inline-block xl:hidden">
              <Link
                href={`${router.asPath}/search`}
                className="flex items-center font-normal no-underline transition duration-200 text-heading hover:text-accent focus:text-accent"
              >
                {t('text-search')}
              </Link>
            </li>
          </ul>
        </div>

        {isHomePage ? (
          <>
            {displayMobileHeaderSearch && (
              <div className="block lg:hidden w-full absolute top-0 ltr:left-0 rtl:right-0 h-full bg-light pt-1.5 md:pt-2 px-5">
                <SearchWithSuggestion
                  label={t('text-search-label')}
                  variant="minimal"
                  seeMore={true}
                />
              </div>
            )}

            {layout === 'compact' && (
              <div className="hidden w-full px-8 mx-auto xl:flex xl:w-6/12 xl:rtl:w-4/12 2xl:rtl:w-5/12 xl:px-10">
                <SearchWithSuggestion
                  label={t('text-search-label')}
                  variant="minimal"
                  seeMore={true}
                />
              </div>
            )}
          </>
        ) : null}

        <div className="items-center hidden lg:flex shrink-0 space-x-9 rtl:space-x-reverse">
          <GroupsDropdownMenu variant="minimal" />
          <CartCounterIconButton />
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Link
              href={`${process.env.NEXT_PUBLIC_ADMIN_URL}/register`}
              variant="button"
              target="_blank"
            >
              {t('text-become-seller')}
            </Link>
            {isAuthorize ? <AuthorizedMenu minimal={true} /> : <JoinButton />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMinimal;
