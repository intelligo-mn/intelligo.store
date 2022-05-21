import type { AppProps } from "next/app";
import "@fontsource/open-sans";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "react-toastify/dist/ReactToastify.css";
import "@assets/main.css";
import { UIProvider } from "@contexts/ui.context";
import { SettingsProvider } from "@contexts/settings.context";
import ErrorMessage from "@components/ui/error-message";
import PageLoader from "@components/ui/page-loader/page-loader";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { useRef } from "react";
import { useSettingsQuery } from "@data/settings/use-settings.query";
import { ReactQueryDevtools } from "react-query/devtools";
import { appWithTranslation } from "next-i18next";
import { ModalProvider } from "@components/ui/modal/modal.context";
import DefaultSeo from "@components/ui/default-seo";
import PrivateRoute from "@utils/private-route";
import ManagedModal from "@components/ui/modal/managed-modal";
import { CartProvider } from "@contexts/quick-cart/cart.context";

const Noop: React.FC = ({ children }) => <>{children}</>;

const AppSettings: React.FC = (props) => {
  const { data, isLoading: loading, error } = useSettingsQuery();
  if (loading) return <PageLoader />;
  if (error) return <ErrorMessage message={error.message} />;
  return <SettingsProvider initialValue={data?.options} {...props} />;
};

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const queryClientRef = useRef<any>(null);
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  const Layout = (Component as any).Layout || Noop;
  const authProps = (Component as any).authenticate;

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <AppSettings>
          <UIProvider>
            <ModalProvider>
              <>
                <CartProvider>
                  <DefaultSeo />
                  {authProps ? (
                    <PrivateRoute authProps={authProps}>
                      <Layout {...pageProps}>
                        <Component {...pageProps} />
                      </Layout>
                    </PrivateRoute>
                  ) : (
                    <Layout {...pageProps}>
                      <Component {...pageProps} />
                    </Layout>
                  )}
                  <ToastContainer autoClose={2000} theme="colored" />
                  <ManagedModal />
                </CartProvider>
              </>
            </ModalProvider>
          </UIProvider>
        </AppSettings>
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  );
};

export default appWithTranslation(CustomApp);
