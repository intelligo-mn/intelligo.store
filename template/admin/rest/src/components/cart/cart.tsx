import { useRouter } from "next/router";
import { motion, AnimateSharedLayout } from "framer-motion";
import CartCheckBagIcon from "@components/icons/cart-check-bag";
import EmptyCartIcon from "@components/icons/empty-cart";
import { CloseIcon } from "@components/icons/close-icon";
import CartItem from "@components/cart/item";
import { fadeInOut } from "@utils/motion/fade-in-out";
import { formatString } from "@utils/format-string";
import { useTranslation } from "next-i18next";
import { useUI } from "@contexts/ui.context";
import { ROUTES } from "@utils/routes";
import usePrice from "@utils/use-price";
import { useCart } from "@contexts/quick-cart/cart.context";
// import { drawerAtom } from '@store/drawer-atom';

const Cart = () => {
  const { t } = useTranslation("common");
  const { items, totalUniqueItems, total } = useCart();
  const { closeCartSidebar } = useUI();

  // const [_, closeSidebar] = useAtom(drawerAtom);
  const router = useRouter();
  function handleCheckout() {
    // const regularCheckout = items.find((item) => item.is_digital === false);
    // if (regularCheckout) {
    router.push(ROUTES.CHECKOUT);
    // } else {
    // router.push(ROUTES.CHECKOUT_DIGITAL);
    // }

    // closeSidebar({ display: false, view: '' });
  }

  const { price: totalPrice } = usePrice({
    amount: total,
  });
  return (
    <section className="flex flex-col h-full relative bg-white">
      <header className="fixed max-w-md w-full h-16 top-0 z-10 bg-light px-6 flex items-center justify-between border-b border-border-200 border-opacity-75">
        <div className="flex text-accent font-semibold">
          <CartCheckBagIcon className="flex-shrink-0" width={24} height={22} />
          <span className="flex ms-2">
            {formatString(totalUniqueItems, t("text-item"))}
          </span>
        </div>
        <button
          onClick={closeCartSidebar}
          className="w-7 h-7 ms-3 -me-2 flex items-center justify-center rounded-full text-muted bg-gray-100 transition-all duration-200 focus:outline-none hover:bg-accent focus:bg-accent hover:text-light focus:text-light"
        >
          <span className="sr-only">{t("text-close")}</span>
          <CloseIcon className="w-3 h-3" />
        </button>
      </header>
      {/* End of cart header */}

      <AnimateSharedLayout>
        <motion.div layout className="flex-grow pb-20">
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
                {t("text-no-products")}
              </h4>
            </motion.div>
          )}
        </motion.div>
      </AnimateSharedLayout>
      {/* End of cart items */}

      <footer className="fixed bottom-0 w-full max-w-md py-5 px-6 z-10 bg-light">
        <button
          className="flex justify-between w-full h-12 md:h-14 p-1 text-sm font-bold bg-accent rounded-full shadow-700 transition-colors focus:outline-none hover:bg-accent-hover focus:bg-accent-hover"
          onClick={handleCheckout}
        >
          <span className="flex flex-1 items-center h-full px-5 text-light">
            {t("text-checkout")}
          </span>
          <span className="flex items-center flex-shrink-0 h-full bg-light text-accent rounded-full px-5">
            {totalPrice}
          </span>
        </button>
      </footer>
      {/* End of footer */}
    </section>
  );
};

export default Cart;
