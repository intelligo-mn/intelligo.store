import CartCheckBagIcon from "@components/icons/cart-check-bag";
import { formatString } from "@utils/format-string";
import usePrice from "@utils/use-price";
import { useUI } from "@contexts/ui.context";
import { useCart } from "@contexts/quick-cart/cart.context";
import { useTranslation } from "next-i18next";

const CartCounterButton = () => {
  const { t } = useTranslation();
  const { totalUniqueItems, total } = useCart();
  const { openCartSidebar } = useUI();
  const { price: totalPrice } = usePrice({
    amount: total,
  });
  // function handleCartSidebar() {
  //   setDisplayCart({ display: true, view: 'cart' });
  // }
  return (
    <button
      className="product-cart flex flex-col items-center justify-center p-3 pt-3.5 fixed top-1/2 -mt-12 end-0 z-40 shadow-900 rounded rounded-te-none rounded-be-none bg-accent text-light text-sm font-semibold transition-colors duration-200 focus:outline-none hover:bg-accent-hover"
      onClick={openCartSidebar}
    >
      <span className="flex pb-0.5">
        <CartCheckBagIcon className="flex-shrink-0" width={14} height={16} />
        <span className="flex ms-2">
          {formatString(totalUniqueItems, t("common:text-item"))}
        </span>
      </span>
      <span className="bg-light rounded w-full py-2 px-2 text-accent mt-3">
        {totalPrice}
      </span>
    </button>
  );
};

export default CartCounterButton;
