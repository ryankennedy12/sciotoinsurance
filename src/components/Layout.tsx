import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isFirstRender = useRef(true);

  // Initial mount - fade in smoothly after fonts/styles load
  useEffect(() => {
    // Small delay to ensure styles are applied
    const initTimeout = setTimeout(() => {
      setIsReady(true);
      // Trigger fade in after ready state is set
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }, 50);

    return () => clearTimeout(initTimeout);
  }, []);

  // Handle route changes (not first render)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    // Quick fade out then fade in
    setIsVisible(false);
    
    const timeout = setTimeout(() => {
      setIsVisible(true);
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 150);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  // Don't render anything until ready to prevent flash
  if (!isReady) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <div className="flex-1" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Main content with page transition */}
      <main 
        className={`flex-1 transition-opacity duration-300 ease-out motion-reduce:transition-none ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
