import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useAtom } from 'jotai';
import Header from './header';
import HeaderMinimal from './header-minimal';
import MobileNavigation from './mobile-navigation';
import Footer from './footer';
import { SearchIcon } from '@/components/icons/search-icon';
import { displayMobileHeaderSearchAtom } from '@/store/display-mobile-header-search-atom';

export default function HomeLayout({
  children,
  layout,
}: React.PropsWithChildren<{ layout: string }>) {
  const { t } = useTranslation('common');
  const [, setDisplayMobileHeaderSearch] = useAtom(
    displayMobileHeaderSearchAtom
  );
  return (
    <div className="flex flex-col min-h-screen transition-colors duration-150 bg-gray-100">
      {['minimal', 'compact'].includes(layout) ? (
        <HeaderMinimal layout={layout} />
      ) : (
        <Header layout={layout} />
      )}
      <div className="min-h-screen">{children}</div>
      {['compact'].includes(layout) && <Footer />}
      <MobileNavigation>
        <motion.button
          whileTap={{ scale: 0.88 }}
          onClick={() => setDisplayMobileHeaderSearch((prev) => !prev)}
          className="flex items-center justify-center h-full p-2 focus:outline-none focus:text-accent"
        >
          <span className="sr-only">{t('text-search')}</span>
          <SearchIcon width="17.05" height="18" />
        </motion.button>
      </MobileNavigation>
    </div>
  );
}
