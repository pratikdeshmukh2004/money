import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/auth/login");
  }, []);
  return <>Name </>;
};
export default Home;
