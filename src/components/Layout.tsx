import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";


// Context to share page ready state with child components
import { createContext, useContext } from "react";

export const PageReadyContext = createContext(false);
export const usePageReady = () => useContext(PageReadyContext);

const Layout = () => {
  const location = useLocation();
  const [transitionStage, setTransitionStage] = useState<"hidden" | "enter" | "exit">("hidden");
  const [isPageReady, setIsPageReady] = useState(false);
  const isFirstMount = useRef(true);
  const previousPath = useRef(location.pathname);
  

  // Handle initial mount - fade in once with longer delay for resources to settle
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTransitionStage("enter");
      isFirstMount.current = false;
      // Mark page as ready after transition completes
      setTimeout(() => setIsPageReady(true), 350);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  // Handle route changes after initial mount
  useEffect(() => {
    if (isFirstMount.current || location.pathname === previousPath.current) {
      return;
    }

    // Fade out, then fade in
    setIsPageReady(false);
    setTransitionStage("exit");
    const timeout = setTimeout(() => {
      previousPath.current = location.pathname;
      setTransitionStage("enter");
      window.scrollTo({ top: 0, behavior: "instant" });
      // Mark page as ready after transition completes
      setTimeout(() => setIsPageReady(true), 350);
    }, 250);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <PageReadyContext.Provider value={isPageReady}>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main 
          className={`flex-1 transition-[opacity] duration-300 ease-out motion-reduce:transition-none ${
            transitionStage === "enter" ? "opacity-100" : "opacity-0"
          }`}
          style={{ willChange: "opacity" }}
        >
          <Outlet />
        </main>
        <Footer />
      </div>
    </PageReadyContext.Provider>
  );
};

export default Layout;
