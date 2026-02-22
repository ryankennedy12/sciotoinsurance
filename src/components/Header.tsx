import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Personal Insurance", href: "/personal-insurance" },
  { label: "Business Insurance", href: "/business-insurance" },
  { label: "Employee Benefits", href: "/employee-benefits" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrolled = window.scrollY > 20;
        if (scrolled !== isScrolled) setIsScrolled(scrolled);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300",
          isScrolled ? "bg-white shadow-sm" : "bg-cream"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-space-md lg:px-space-lg">
          <div className="flex items-center justify-between h-18 sm:h-20 lg:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img
                src={logo}
                alt="Scioto Insurance Group"
                className="h-14 sm:h-16 lg:h-20 w-auto transition-transform duration-300 lg:group-hover:scale-105 mix-blend-multiply"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => {
                const isActive = location.pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      "relative font-body text-sm font-medium transition-colors duration-300 py-2 group",
                      isActive ? "text-primary" : "text-charcoal hover:text-primary"
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-out",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop: Get a Quote Button */}
            <Link
              to="/get-quote"
              className={cn(
                "hidden lg:inline-flex items-center justify-center px-6 py-3 rounded text-sm font-body font-medium transition-[transform,box-shadow,background-color] duration-300",
                "bg-primary text-primary-foreground hover:bg-burgundy-800 hover:-translate-y-0.5 hover:shadow-lg"
              )}
            >
              Get a Quote
            </Link>

            {/* Mobile: Click-to-call + Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="tel:6146120050"
                className="flex items-center gap-1.5 rounded-full px-3 py-1.5 border border-primary text-primary text-xs font-body font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                aria-label="Call us"
              >
                <Phone className="w-3.5 h-3.5" strokeWidth={2} />
                (614) 612-0050
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="flex items-center justify-center w-11 h-11"
                aria-label="Open menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className="block h-0.5 w-full bg-charcoal transition-transform" />
                  <span className="block h-0.5 w-full bg-charcoal transition-transform" />
                  <span className="block h-0.5 w-full bg-charcoal transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[100] lg:hidden",
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={cn(
            "absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300",
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Slide-in Panel */}
        <div
          className={cn(
            "absolute top-0 right-0 bottom-0 w-[85%] max-w-[360px] bg-white border-l-2 border-l-gold-500 rounded-l-2xl shadow-2xl flex flex-col transition-transform duration-400 ease-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-5 right-4 w-10 h-10 flex items-center justify-center text-charcoal hover:text-primary transition-colors"
            aria-label="Close menu"
            type="button"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Brand Header */}
          <div className="px-6 pt-6 pb-4">
            <img
              src={logo}
              alt="Scioto Insurance Group"
              className="h-12 w-auto mix-blend-multiply"
            />
            <div className="mt-4 h-px bg-gold-500/40" />
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-6">
            {[{ label: "Home", href: "/" }, ...navLinks].map((link, index) => {
              const isActive = link.href === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block py-4 font-display text-lg text-charcoal transition-all duration-300",
                    isActive
                      ? "text-primary border-l-[3px] border-l-gold-500 pl-3 font-semibold"
                      : "hover:text-primary hover:pl-1"
                  )}
                  style={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? "translateY(0)" : "translateY(8px)",
                    transition: `opacity 300ms ease-out ${index * 50}ms, transform 300ms ease-out ${index * 50}ms`,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTAs */}
          <div className="px-6 pb-4 space-y-3">
            <div className="h-px bg-border mb-2" />
            <Link
              to="/get-quote"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full py-3.5 bg-primary text-primary-foreground font-body font-semibold rounded-lg text-center text-base transition-colors hover:bg-burgundy-800 active:scale-[0.98]"
            >
              Get a Quote
            </Link>
            <a
              href="tel:6146120050"
              className="flex items-center justify-center gap-2 w-full py-3.5 border border-primary text-primary font-body font-medium rounded-lg text-center text-base transition-colors hover:bg-primary/5"
            >
              <Phone className="w-4 h-4" />
              (614) 612-0050
            </a>
          </div>

          {/* Trust Footer */}
          <div className="px-6 pb-6 text-center">
            <div className="flex items-center justify-center gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-gold-500 fill-gold-500" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xs text-muted-foreground ml-1.5 font-body">5.0 on Google</span>
            </div>
            <p className="text-xs text-muted-foreground font-body">Est. 1995 · New Albany, Ohio</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
