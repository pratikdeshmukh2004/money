import "@/styles/globals.css";
import { useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
import Dashboard from "@/components/Dashboard";
import { useRouter } from "next/router";
config.autoAddCss = false;
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className="relative">
      <Head>
        <meta property="og:title" content="Money" />
        <meta
          property="og:description"
          content="Sign up today to unlock powerful tools that help you plan your budget, track your expenses, and achieve your financial milestones."
        />
        <title>Money</title>
      </Head>
      {router.asPath !== "/auth/login" && <Dashboard />}
      <div className="ml-[230px] bg-flashwhite min-h-screen">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
