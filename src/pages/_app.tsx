import type { AppProps /*, AppContext */ } from "next/app";
import "@fontsource/open-sans";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/montserrat";
import "@fontsource/roboto"; 
import "@assets/main.css";
import "react-toastify/dist/ReactToastify.css";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@utils/apollo";
import { UIProvider } from "@contexts/ui.context";
import { SearchProvider } from "@contexts/search.context";
import { CheckoutProvider } from "@contexts/checkout.context";
import ModalContainer from "@components/common/modal/modal-container";
import SidebarContainer from "@components/common/sidebar/sidebar-container";
import ErrorMessage from "@components/ui/error-message";
import { SettingsProvider } from "@contexts/settings.context";
import PageLoader from "@components/ui/page-loader/page-loader";
import { useSettingsQuery } from "@graphql/settings.graphql";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "@contexts/quick-cart/cart.context";
import Seo from "@components/ui/seo";
import "@components/Home/main/main.css";


const Noop: React.FC = ({ children }) => <>{children}</>;

const AppSettings: React.FC = (props) => {
  const { data, loading, error } = useSettingsQuery();
  if (loading) return <PageLoader />;
  if (error) return <ErrorMessage message={error.message} />;
  return <SettingsProvider initialValue={data?.settings?.options} {...props} />;
};

export default function CustomApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  const Layout = (Component as any).Layout || Noop;
  return (
    <ApolloProvider client={apolloClient}>
      <AppSettings>
        <CartProvider>
          <UIProvider>
            <CheckoutProvider>
              <SearchProvider>
                <Layout>
                  <Seo />
                  <Component {...pageProps} />
                </Layout>
                <ToastContainer autoClose={2000} />
                <ModalContainer />
                <SidebarContainer />
              </SearchProvider>
            </CheckoutProvider>
          </UIProvider>
        </CartProvider>
      </AppSettings>
    </ApolloProvider>
  );
}
