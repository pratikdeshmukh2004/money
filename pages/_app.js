import "@/styles/globals.css";
import { useEffect, useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
import SideBar from "@/components/SideBar";
import { useRouter } from "next/router";
import classNames from "@/constants/custom";
import DataContext from "@/contexts/DataContext";

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    } else {
      router.push("/auth/login");
    }
  });

  return (
    <DataContext.Provider value={{ user }}>
      <div className="relative">
        <Head>
          <meta property="og:title" content="Money" />
          <meta
            property="og:description"
            content="Sign up today to unlock powerful tools that help you plan your budget, track your expenses, and achieve your financial milestones."
          />
          <title>Money</title>
        </Head>
        {router.asPath !== "/auth/login" && <SideBar user={user} />}
        <div
          className={classNames(
            router.asPath !== "/auth/login" &&
              "ml-[230px] bg-flashwhite min-h-screen"
          )}
        >
          <Component {...pageProps} />
        </div>
      </div>
    </DataContext.Provider>
  );
}
