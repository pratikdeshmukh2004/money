import classNames from "@/constants/custom";
import DataContext from "@/contexts/DataContext";
import Head from "next/head";
import SideBar from "@/components/SideBar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const AppLoyout = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    } else {
      router.push("/auth/login");
    }
  }, []);

  if (!user) return;
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
        <SideBar user={user} />
        <div
          className={classNames(
            router.asPath !== "/auth/login" &&
              "ml-[230px] bg-flashwhite min-h-screen"
          )}
        >
          {children}
        </div>
      </div>
    </DataContext.Provider>
  );
};

export default AppLoyout;
