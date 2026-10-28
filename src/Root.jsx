import { Outlet, useLocation } from "react-router";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import Loading from "./Components/Loading";
import ThemeToggler from "./Components/ThemeToggler";

const Root = () => {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setShowLoader(true);
    let timer;
    timer = setTimeout(() => setShowLoader(false), 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (showLoader) {
    return (
      <div className="h-screen flex items-center">
        <div className="hidden">
          <ThemeToggler />
        </div>
        <Loading />
      </div>
    );
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
