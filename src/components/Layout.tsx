import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StickyMobileCTA from "./StickyMobileCTA";

const Layout = () => {
  const location = useLocation();
  const [transitionStage, setTransitionStage] = useState<"hidden" | "enter" | "exit">("hidden");
  const isFirstMount = useRef(true);
  const previousPath = useRef(location.pathname);
  const footerRef = useRef<HTMLElement>(null);

  // Handle initial mount - fade in once
  useEffect(() => {
    // Small delay to ensure DOM is ready, then fade in
    const timeout = setTimeout(() => {
      setTransitionStage("enter");
      isFirstMount.current = false;
    }, 50);
    return () => clearTimeout(timeout);
  }, []);

  // Handle route changes after initial mount
  useEffect(() => {
    // Skip if first mount or same path
    if (isFirstMount.current || location.pathname === previousPath.current) {
      return;
    }

    // Fade out, then fade in
    setTransitionStage("exit");
    const timeout = setTimeout(() => {
      previousPath.current = location.pathname;
      setTransitionStage("enter");
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 200);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main 
        className={`flex-1 transition-opacity duration-200 ease-out motion-reduce:transition-none ${
          transitionStage === "enter" ? "opacity-100" : "opacity-0"
        }`}
      >
        <Outlet />
      </main>
      <Footer ref={footerRef} />
      <StickyMobileCTA footerRef={footerRef} />
    </div>
  );
};

export default Layout;
