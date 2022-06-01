import Header from "@components/layout/header/header";
import Footer from "@components/layout/footer/footer";
import MobileNavigation from "@components/layout/mobile-navigation/mobile-navigation";
import Search from "@components/common/search";
import React from "react";

const SiteLayout: React.FC = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main
				className="relative flex-grow"
				style={{
					minHeight: "-webkit-fill-available",
					WebkitOverflowScrolling: "touch",
				}}
			>
				{children}
			</main>
			<Footer />
			<MobileNavigation />
			<Search />
		</div>
	);
};

export const getLayout = (page: React.ReactElement) => (
  <SiteLayout>{page}</SiteLayout>
)

export default SiteLayout;
