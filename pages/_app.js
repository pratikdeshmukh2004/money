import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useRouter } from "next/router";

import AppLoyout from "@/layouts/appLayout";
import AuthLayout from "@/layouts/authLayout";
import { ToastContainer } from "react-toastify";

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const router = useRouter();

  if (router.asPath.startsWith("/auth")) {
    return (
      <AuthLayout>
        <ToastContainer/>
        <Component {...pageProps} />
      </AuthLayout>
    );
  }
  return (
    <AppLoyout>
      <ToastContainer/>
      <Component {...pageProps} />
    </AppLoyout>
  );
}
