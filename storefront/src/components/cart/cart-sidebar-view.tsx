import { useRouter } from 'next/router';
import { motion, AnimateSharedLayout } from 'framer-motion';
import CartCheckBagIcon from '@/components/icons/cart-check-bag';
import EmptyCartIcon from '@/components/icons/empty-cart';
import { CloseIcon } from '@/components/icons/close-icon';
import CartItem from '@/components/cart/cart-item';
import { fadeInOut } from '@/lib/motion/fade-in-out';
import { ROUTES } from '@/lib/routes';
import usePrice from '@/lib/use-price';
import { useCart } from '@/store/quick-cart/cart.context';
import { formatString } from '@/lib/format-string';
import { useTranslation } from 'next-i18next';
import { useAtom } from 'jotai';
import { drawerAtom } from '@/store/drawer-atom';

const CartSidebarView = () => {
  const { t } = useTranslation('common');
  const { items, totalUniqueItems, total } = useCart();
  const [_, closeSidebar] = useAtom(drawerAtom);
  const router = useRouter();
  function handleCheckout() {
    const isRegularCheckout = items.find((item) => !Boolean(item.is_digital));
    if (isRegularCheckout) {
      router.push(ROUTES.CHECKOUT);
    } else {
      router.push(ROUTES.CHECKOUT_DIGITAL);
    }

    closeSidebar({ display: false, view: '' });
  }

  const { price: totalPrice } = usePrice({
    amount: total,
  });
  return (
    <section className="flex flex-col h-full relative">
      <header className="fixed max-w-md w-full top-0 z-10 bg-light py-4 px-6 flex items-center justify-between border-b border-border-200 border-opacity-75">
        <div className="flex text-accent font-semibold">
          <CartCheckBagIcon className="shrink-0" width={24} height={22} />
          <span className="flex ltr:ml-2 rtl:mr-2">
            {formatString(totalUniqueItems, t('text-item'))}
          </span>
        </div>
        <button
          onClick={() => closeSidebar({ display: false, view: '' })}
          className="w-7 h-7 ltr:ml-3 rtl:mr-3 ltr:-mr-2 rtl:-ml-2 flex items-center justify-center rounded-full text-muted bg-gray-100 transition-all duration-200 focus:outline-none hover:bg-accent focus:bg-accent hover:text-light focus:text-light"
        >
          <span className="sr-only">{t('text-close')}</span>
          <CloseIcon className="w-3 h-3" />
        </button>
      </header>
      {/* End of cart header */}

      <AnimateSharedLayout>
        <motion.div layout className="flex-grow pt-16 pb-20">
          {items.length > 0 ? (
            items?.map((item) => <CartItem item={item} key={item.id} />)
          ) : (
            <motion.div
              layout
              initial="from"
              animate="to"
              exit="from"
              variants={fadeInOut(0.25)}
              className="h-full flex flex-col items-center justify-center"
            >
              <EmptyCartIcon width={140} height={176} />
              <h4 className="mt-6 text-base font-semibold">
                {t('text-no-products')}
              </h4>
            </motion.div>
          )}
        </motion.div>
      </AnimateSharedLayout>
      {/* End of cart items */}

      {/* <footer className="sticky ltr:left-0 rtl:right-0 bottom-0 w-full py-5 px-6 z-10 bg-light"> */}
      <footer className="fixed bottom-0 w-full max-w-md py-5 px-6 z-10 bg-light">
        <button
          className="flex justify-between w-full h-12 md:h-14 p-1 text-sm font-bold bg-accent rounded-full shadow-700 transition-colors focus:outline-none hover:bg-accent-hover focus:bg-accent-hover"
          onClick={handleCheckout}
        >
          <span className="flex flex-1 items-center h-full px-5 text-light">
            {t('text-checkout')}
          </span>
          <span className="flex items-center shrink-0 h-full bg-light text-accent rounded-full px-5">
            {totalPrice}
          </span>
        </button>
      </footer>
      {/* End of footer */}
    </section>
  );
};

export default CartSidebarView;
