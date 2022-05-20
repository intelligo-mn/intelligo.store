import { CartOutlinedIcon } from '@/components/icons/cart-outlined';
import { drawerAtom } from '@/store/drawer-atom';
import { useCart } from '@/store/quick-cart/cart.context';
import { useAtom } from 'jotai';

const CartCounterIconButton = () => {
  const { totalUniqueItems } = useCart();
  const [_, setDisplayCart] = useAtom(drawerAtom);
  function handleCartSidebar() {
    setDisplayCart({ display: true, view: 'cart' });
  }
  return (
    <button
      className="hidden product-cart lg:flex relative"
      onClick={handleCartSidebar}
    >
      <CartOutlinedIcon className="w-5 h-5" />
      {totalUniqueItems > 0 && (
        <span className="min-w-[20px] h-5 flex items-center justify-center rounded-full bg-accent text-light text-[10px] absolute ltr:-right-1/2 rtl:-left-1/2 -top-1/2">
          {totalUniqueItems}
        </span>
      )}
    </button>
  );
};

export default CartCounterIconButton;
