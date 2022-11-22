import Link from "@components/ui/link";
import SearchIcon from "@components/icons/search-icon";
import UserIcon from "@components/icons/user-icon";
import MenuIcon from "@components/icons/menu-icon";
import HomeIcon from "@components/icons/home-icon";
import { useUI } from "@contexts/ui.context";
import { useRouter } from "next/router";
import { ROUTES } from "@lib/routes";
import dynamic from "next/dynamic";
import { Drawer } from "@components/common/drawer/drawer";
import { getDirection } from "@utils/get-direction";
import { useAtom } from "jotai";
import { authorizationAtom } from "@store/authorization-atom";
const CartButton = dynamic(() => import("@components/cart/cart-button"), {
	ssr: false,
});
const AuthMenu = dynamic(() => import("@components/layout/header/auth-menu"), {
	ssr: false,
});
const MobileMenu = dynamic(
	() => import("@components/layout/header/mobile-menu")
);

const BottomNavigation: React.FC = () => {
	const {
		openSidebar,
		closeSidebar,
		displaySidebar,
		setDrawerView,
		openSearch,
		openModal,
		setModalView,
	} = useUI();

  const [ isAuthorize ] = useAtom(authorizationAtom);

	function handleLogin() {
		setModalView("LOGIN_VIEW");
		return openModal();
	}
	function handleMobileMenu() {
		setDrawerView("MOBILE_MENU");
		return openSidebar();
	}

	const { locale } = useRouter();
	const dir = getDirection(locale);
	const contentWrapperCSS = dir === "ltr" ? { left: 0 } : { right: 0 };

	return (
		<>
			<div className="md:hidden fixed z-10 bottom-0 flex items-center justify-between shadow-bottomNavigation text-gray-700 body-font bg-white w-full h-14 sm:h-16 px-4">
				<button
					aria-label="Menu"
					className="menuBtn flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none"
					onClick={handleMobileMenu}
				>
					<MenuIcon />
				</button>
				<button
					className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
					onClick={openSearch}
					aria-label="search-button"
				>
					<SearchIcon />
				</button>
				<Link href="/" className="flex-shrink-0">
					<HomeIcon />
				</Link>
				<CartButton />
				<AuthMenu
					isAuthorized={isAuthorize}
					href={ROUTES.ACCOUNT}
					className="flex-shrink-0"
					btnProps={{
						className: "flex-shrink-0 focus:outline-none",
						children: <UserIcon />,
						onClick: handleLogin,
					}}
				>
					<UserIcon />
				</AuthMenu>
			</div>
			<Drawer
				placement={dir === "rtl" ? "right" : "left"}
				open={displaySidebar}
				onClose={closeSidebar}
				handler={false}
				showMask={true}
				level={null}
				contentWrapperStyle={contentWrapperCSS}
			>
				<MobileMenu />
			</Drawer>
		</>
	);
};

export default BottomNavigation;
