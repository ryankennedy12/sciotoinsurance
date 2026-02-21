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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white shadow-md"
            : "bg-cream border-b border-border/40"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-space-md lg:px-space-lg">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-300",
              isScrolled ? "h-16 lg:h-[72px]" : "h-16 sm:h-18 lg:h-[88px]"
            )}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0 group">
              <img
                src={logo}
                alt="Scioto Insurance Group"
                className={cn(
                  "w-auto transition-all duration-300 mix-blend-multiply",
                  isScrolled ? "h-12 sm:h-14 lg:h-16" : "h-14 sm:h-16 lg:h-[72px]"
                )}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
              {navLinks.map((link) => {
                const isActive = location.pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      "font-body text-[13px] uppercase tracking-[0.08em] font-medium transition-colors duration-200 py-2",
                      isActive
                        ? "text-primary font-semibold"
                        : "text-charcoal/80 hover:text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop: Phone + Get a Quote */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:6146120050"
                className="flex items-center gap-2 group"
              >
                <Phone className="w-4 h-4 text-gold-500 transition-colors group-hover:text-primary" />
                <span className="font-body text-sm font-medium text-charcoal/80 group-hover:text-primary transition-colors">
                  (614) 612-0050
                </span>
              </a>
              <Link
                to="/get-quote"
                className="inline-flex items-center justify-center px-7 py-2.5 rounded-full text-sm font-body font-semibold tracking-wide bg-primary text-primary-foreground hover:bg-burgundy-800 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile: Click-to-call + Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="tel:6146120050"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-burgundy-800 transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="flex items-center justify-center w-12 h-12 rounded-lg hover:bg-charcoal/5 transition-colors -mr-2"
                aria-label="Open menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className="block h-[2.5px] w-full bg-charcoal rounded-full" />
                  <span className="block h-[2.5px] w-full bg-charcoal rounded-full" />
                  <span className="block h-[2.5px] w-full bg-charcoal rounded-full" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[100] lg:hidden transition-opacity duration-500",
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
          className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center z-20 bg-white/10 rounded-full active:bg-white/20 transition-colors"
          aria-label="Close menu"
          type="button"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav
          className={cn(
            "relative z-10 h-full flex flex-col pt-6 pb-8 px-6 overflow-y-auto transition-all duration-500 delay-200",
            isMobileMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-8"
          )}
        >
          {/* Logo in mobile menu */}
          <div className="mb-8">
            <img
              src={logo}
              alt="Scioto Insurance Group"
              className="h-14 w-auto brightness-0 invert"
            />
          </div>

          <div className="flex flex-col">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-4 font-display text-2xl font-semibold text-white/90 hover:text-white transition-colors border-b border-white/10"
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-4 font-display text-2xl font-semibold text-white/90 hover:text-white transition-colors border-b border-white/10"
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
              className="block w-full py-4 px-8 bg-white text-primary font-body font-semibold rounded-full text-center text-base transition-transform active:scale-[0.98]"
            >
              Get a Quote
            </Link>
            <a
              href="tel:6146120050"
              className="flex items-center justify-center gap-2 w-full py-4 px-8 border-2 border-white/50 text-white font-body font-medium rounded-full text-center text-base transition-all hover:bg-white/10"
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
