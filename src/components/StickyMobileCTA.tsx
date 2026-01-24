import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

interface StickyMobileCTAProps {
  footerRef?: React.RefObject<HTMLElement>;
}

const StickyMobileCTA = ({ footerRef }: StickyMobileCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const location = useLocation();

  // Pages where we show the sticky CTA
  const showOnPaths = ["/", "/personal-insurance", "/business-insurance", "/employee-benefits"];
  const shouldShowOnPath = showOnPaths.some(path => location.pathname === path || location.pathname.startsWith("/personal-insurance/") || location.pathname.startsWith("/business-insurance/"));

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      const scrolled = window.scrollY > 500;
      setIsVisible(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!footerRef?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [footerRef]);

  // Don't show on non-applicable pages, before scrolling, or when footer is visible
  if (!shouldShowOnPath || !isVisible || isFooterVisible) {
    return null;
  }

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-primary shadow-[0_-4px_20px_rgba(0,0,0,0.15)] animate-slide-up">
      <div className="flex items-center gap-3 p-3 safe-area-inset-bottom">
        {/* Primary CTA - Get Quote */}
        <Link
          to="/get-quote"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-primary font-body font-semibold text-sm transition-all duration-200 active:scale-[0.98]"
        >
          Get Free Quote
          <ArrowRight className="w-4 h-4" />
        </Link>
        
        {/* Secondary CTA - Call */}
        <a
          href="tel:6146120050"
          className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 text-white transition-all duration-200 active:scale-[0.95]"
          aria-label="Call us"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
