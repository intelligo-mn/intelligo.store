import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { NavbarIcon } from '@/components/icons/navbar-icon';
import { HomeIcon } from '@/components/icons/home-icon';
import { ShoppingBagIcon } from '@/components/icons/shopping-bag-icon';
import { UserIcon } from '@/components/icons/user-icon';
import { useTranslation } from 'next-i18next';
import { useCart } from '@/store/quick-cart/cart.context';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { useAtom } from 'jotai';
import { drawerAtom } from '@/store/drawer-atom';
import { authorizationAtom } from '@/store/authorization-atom';
import { useIsRTL } from '@/lib/locals';

export default function MobileNavigation({
  children,
}: React.PropsWithChildren<{}>) {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { openModal } = useModalAction();
  const [isAuthorize] = useAtom(authorizationAtom);
  const [_, setDrawerView] = useAtom(drawerAtom);
  const { isRTL } = useIsRTL();

  // const hasFilter = `[manufacturer], ${ROUTES?.SEARCH}`.includes(
  //   router.pathname.split('/').pop()!
  // );

  const { totalUniqueItems } = useCart();

  function handleSidebar(view: string) {
    setDrawerView({ display: true, view });
  }

  function handleJoin() {
    return openModal('LOGIN_VIEW');
  }

  return (
    <div className="visible h-12 lg:hidden md:h-14">
      <nav className="h-12 md:h-14 w-full py-1.5 px-2 flex justify-between fixed ltr:left-0 rtl:right-0 bottom-0 z-10 bg-light shadow-400">
        <motion.button
          whileTap={{ scale: 0.88 }}
          onClick={() => handleSidebar('MAIN_MENU_VIEW')}
          className="flex items-center justify-center h-full p-2 focus:outline-none focus:text-accent"
        >
          <span className="sr-only">{t('text-burger-menu')}</span>
          <NavbarIcon className={`${isRTL && 'transform rotate-180'}`} />
        </motion.button>

        {children}

        <motion.button
          whileTap={{ scale: 0.88 }}
          onClick={() => router.push('/')}
          className="flex items-center justify-center h-full p-2 focus:outline-none focus:text-accent"
        >
          <span className="sr-only">{t('text-home')}</span>
          <HomeIcon />
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.88 }}
          onClick={() => handleSidebar('cart')}
          className="relative flex items-center justify-center h-full p-2 product-cart focus:outline-none focus:text-accent"
        >
          <span className="sr-only">{t('text-cart')}</span>
          <ShoppingBagIcon />
          {totalUniqueItems > 0 && (
            <span className="bg-accent py-1 px-1.5 text-10px leading-none font-semibold text-light rounded-full absolute top-0 ltr:right-0 rtl:left-0 mt-0.5 ltr:-mr-0.5 rtl:-ml-0.5">
              {totalUniqueItems}
            </span>
          )}
        </motion.button>

        {isAuthorize ? (
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={() => handleSidebar('AUTH_MENU_VIEW')}
            className="flex items-center justify-center h-full p-2 focus:outline-none focus:text-accent"
          >
            <span className="sr-only">{t('text-user')}</span>
            <UserIcon />
          </motion.button>
        ) : (
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={handleJoin}
            className="flex items-center justify-center h-full p-2 focus:outline-none focus:text-accent"
          >
            <span className="sr-only">{t('text-user')}</span>
            <UserIcon />
          </motion.button>
        )}
      </nav>
    </div>
  );
}
