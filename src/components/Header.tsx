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
                className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" strokeWidth={2} />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="flex items-center justify-center w-11 h-11 -mr-2"
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
          "fixed inset-0 z-[100] lg:hidden transition-[opacity] duration-500",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-primary transition-transform duration-500 ease-out origin-right",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        />

        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-5 right-4 w-12 h-12 flex items-center justify-center z-20 bg-white/10 rounded-full active:bg-white/20 transition-colors"
          aria-label="Close menu"
          type="button"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav
          className={cn(
            "relative z-10 h-full flex flex-col pt-20 pb-8 px-6 overflow-y-auto transition-[transform,opacity] duration-500 delay-200",
            isMobileMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-8"
          )}
        >
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3 font-display text-2xl font-semibold text-white/90 hover:text-white transition-colors"
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 font-display text-2xl font-semibold text-white/90 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile CTA Buttons */}
          <div className="mt-auto pt-8 space-y-3">
            <Link
              to="/get-quote"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full py-4 px-8 bg-white text-primary font-body font-medium rounded text-center text-base transition-transform active:scale-[0.98]"
            >
              Get a Quote
            </Link>
            <a
              href="tel:6146120050"
              className="flex items-center justify-center gap-2 w-full py-4 px-8 border-2 border-white/50 text-white font-body font-medium rounded text-center text-base transition-all hover:bg-white/10"
            >
              <Phone className="w-5 h-5" />
              (614) 612-0050
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
