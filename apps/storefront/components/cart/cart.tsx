import Scrollbar from "@components/common/scrollbar";
import { useCart } from "@store/quick-cart/cart.context";
import { motion } from "framer-motion";
import { fadeInOut } from "@utils/motion/fade-in-out";
import { useUI } from "@contexts/ui.context";
import usePrice from "@lib/use-price";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import CartItem from "./cart-item";
import EmptyCart from "./empty-cart";
import Link from "@components/ui/link";
import { ROUTES } from "@lib/routes";
import cn from "classnames";
import { useTranslation } from "next-i18next";

export default function Cart() {
	const { t } = useTranslation("common");
	const { closeCart } = useUI();
	const { items, total, isEmpty } = useCart();
	const { price: cartTotal } = usePrice({
		amount: total,
	});

	return (
		<div className="flex flex-col w-full h-full justify-between">
			<div className="w-full flex justify-between items-center relative ltr:pl-5 rtl:pr-5 ltr:md:pl-7 rtl:md:pr-7 py-0.5 border-b border-gray-100">
				<h2 className="font-bold text-xl md:text-2xl m-0 text-heading">
					{t("text-shopping-cart")}
				</h2>
				<button
					className="flex text-2xl items-center justify-center text-gray-500 px-4 md:px-6 py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60"
					onClick={closeCart}
					aria-label="close"
				>
					<IoClose className="text-black mt-1 md:mt-0.5" />
				</button>
			</div>
			{!isEmpty ? (
				<Scrollbar className="cart-scrollbar w-full flex-grow">
					<div className="w-full px-5 md:px-7">
						{items?.map((item) => (
							<CartItem item={item} key={item.id} />
						))}
					</div>
				</Scrollbar>
			) : (
				<motion.div
					layout
					initial="from"
					animate="to"
					exit="from"
					variants={fadeInOut(0.25)}
					className="px-5 md:px-7 pt-8 pb-5 flex justify-center flex-col items-center"
				>
					<EmptyCart />
					<h3 className="text-lg text-heading font-bold pt-8">
						{t("text-empty-cart")}
					</h3>
				</motion.div>
			)}

			<div
				className="flex flex-col px-5 md:px-7 pt-2 pb-5 md:pb-7"
				onClick={closeCart}
			>
				<Link
					href={isEmpty === false ? ROUTES.CHECKOUT : "/"}
					className={cn(
						"w-full px-5 py-3 md:py-4 flex items-center justify-center bg-heading rounded-md text-sm sm:text-base text-white focus:outline-none transition duration-300 hover:bg-gray-600",
						{
							"cursor-not-allowed bg-gray-400 hover:bg-gray-400": isEmpty,
						}
					)}
				>
					<span className="w-full ltr:pr-5 rtl:pl-5 -mt-0.5 py-0.5">
						{t("text-proceed-to-checkout")}
					</span>
					<span className="ltr:ml-auto rtl:mr-auto flex-shrink-0 -mt-0.5 py-0.5 rtl:flex">
						<span className="ltr:border-l rtl:border-r border-white ltr:pr-5 rtl:pl-5 py-0.5" />
						{cartTotal}
					</span>
				</Link>
			</div>
		</div>
	);
}
