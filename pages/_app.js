import "@/styles/globals.css";
import { useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.title = "Money";
  }, []);
  return <Component {...pageProps} />;
}
