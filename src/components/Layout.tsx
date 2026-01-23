import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    // Quick fade out
    setIsVisible(false);
    
    // Fade in after a short delay
    const timeout = setTimeout(() => {
      setIsVisible(true);
      // Scroll to top on page change
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 100);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Main content with page transition */}
      <main 
        className={`flex-1 transition-opacity duration-300 motion-reduce:transition-none ${
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
