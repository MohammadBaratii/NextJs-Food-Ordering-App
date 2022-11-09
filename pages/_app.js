import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "../store/store";
import Layout from "../components/Layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();

  // this is because if i use the Layout component in general, the Navbar and the Svg in index page get messed up.
  // Therefore i use Navbar directly in index page so they don't ruin anything.
  if (asPath === "/") {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
