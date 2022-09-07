import Layout from "apps/storefront/components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ErrorInformation from "apps/storefront/components/404/error-information";

export default function ErrorPage() {
	return <ErrorInformation />;
}

ErrorPage.Layout = Layout;

export const getStaticProps = async ({ locale }: any) => {
	return {
		props: {
			...(await serverSideTranslations(locale, [
				"common",
				"forms",
				"menu",
				"footer",
			])),
		},
	};
};
