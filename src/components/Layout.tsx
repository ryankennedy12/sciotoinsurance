import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("enter");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      // Start exit, then swap content and enter
      setTransitionStage("exit");
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("enter");
        window.scrollTo({ top: 0, behavior: "instant" });
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main 
        className={`flex-1 transition-all duration-150 ease-out motion-reduce:transition-none ${
          transitionStage === "enter" 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-1"
        }`}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
