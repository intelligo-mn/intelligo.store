import Cart from "apps/storefront/components/cart/cart";
import { useUI } from "apps/storefront/contexts/ui.context";
import { Drawer } from "apps/storefront/components/common/drawer/drawer";
import { useRouter } from "next/router";
import { getDirection } from "apps/storefront/utils/get-direction";

const ManagedDrawer = () => {
	const { displayCart, closeCart } = useUI();
	const { locale } = useRouter();
	const dir = getDirection(locale);
	const contentWrapperCSS = dir === "ltr" ? { right: 0 } : { left: 0 };
	return (
		<Drawer
			open={displayCart}
			placement={dir === "rtl" ? "left" : "right"}
			onClose={closeCart}
			handler={false}
			showMask={true}
			level={null}
			contentWrapperStyle={contentWrapperCSS}
		>
			<Cart />
		</Drawer>
	);
};

export default ManagedDrawer;
