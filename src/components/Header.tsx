import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const personalInsuranceItems = [
  { title: "Auto Insurance", href: "/personal-insurance/auto" },
  { title: "Home Insurance", href: "/personal-insurance/home" },
  { title: "Renters Insurance", href: "/personal-insurance/renters" },
  { title: "Umbrella Insurance", href: "/personal-insurance/umbrella" },
  { title: "Life Insurance", href: "/personal-insurance/life" },
  { title: "Pet Insurance", href: "/personal-insurance/pet" },
  { title: "Specialty Coverage", href: "/personal-insurance/specialty" },
];

const businessInsuranceItems = [
  { title: "General Liability", href: "/business-insurance/general-liability" },
  { title: "Commercial Property", href: "/business-insurance/commercial-property" },
  { title: "Workers' Compensation", href: "/business-insurance/workers-comp" },
  { title: "Professional Liability", href: "/business-insurance/professional-liability" },
  { title: "Commercial Auto", href: "/business-insurance/commercial-auto" },
  { title: "Business Owner's Policy (BOP)", href: "/business-insurance/bop" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleDropdownEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/98 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-space-md lg:px-space-lg">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link to="/" className="flex flex-col items-start group">
              <div className="relative">
                <span
                  className={cn(
                    "font-display font-bold text-2xl lg:text-3xl tracking-[0.1em] transition-colors duration-300",
                    isScrolled ? "text-primary" : "text-white"
                  )}
                >
                  SCIOTO
                </span>
                {/* Decorative wave line */}
                <svg
                  className={cn(
                    "absolute -bottom-1 left-0 w-full h-1 transition-colors duration-300",
                    isScrolled ? "text-gold-500" : "text-gold-500"
                  )}
                  viewBox="0 0 100 4"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 2 Q 25 0, 50 2 T 100 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>
              <span
                className={cn(
                  "font-body font-medium text-[10px] lg:text-xs tracking-[0.15em] mt-1 transition-colors duration-300",
                  isScrolled ? "text-muted-foreground" : "text-white/80"
                )}
              >
                INSURANCE GROUP
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-space-lg">
              <NavLink href="/about" isScrolled={isScrolled}>
                About
              </NavLink>

              {/* Personal Insurance Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter("personal")}
                onMouseLeave={handleDropdownLeave}
              >
                <NavLink href="/personal-insurance" isScrolled={isScrolled} hasDropdown>
                  Personal Insurance
                </NavLink>
                <DropdownMenu
                  items={personalInsuranceItems}
                  isOpen={activeDropdown === "personal"}
                />
              </div>

              {/* Business Insurance Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter("business")}
                onMouseLeave={handleDropdownLeave}
              >
                <NavLink href="/business-insurance" isScrolled={isScrolled} hasDropdown>
                  Business Insurance
                </NavLink>
                <DropdownMenu
                  items={businessInsuranceItems}
                  isOpen={activeDropdown === "business"}
                />
              </div>

              <NavLink href="/employee-benefits" isScrolled={isScrolled}>
                Employee Benefits
              </NavLink>

              <NavLink href="/services" isScrolled={isScrolled}>
                Services
              </NavLink>
            </nav>

            {/* Get a Quote Button (Desktop) */}
            <Link
              to="/get-quote"
              className={cn(
                "hidden lg:inline-flex items-center justify-center px-6 py-3 rounded text-sm font-body font-medium transition-all duration-300",
                "bg-primary text-primary-foreground hover:bg-burgundy-800 hover:-translate-y-0.5 hover:shadow-lg"
              )}
            >
              Get a Quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 -mr-2"
              aria-label="Open menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={cn(
                    "block h-0.5 w-full transition-colors duration-300",
                    isScrolled ? "bg-charcoal" : "bg-white"
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-full transition-colors duration-300",
                    isScrolled ? "bg-charcoal" : "bg-white"
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-full transition-colors duration-300",
                    isScrolled ? "bg-charcoal" : "bg-white"
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[100] lg:hidden transition-all duration-500",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Background */}
        <div
          className={cn(
            "absolute inset-0 bg-primary transition-transform duration-500 ease-out origin-right",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        />

        {/* Close Button */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 p-2 z-10"
          aria-label="Close menu"
        >
          <div className="w-6 h-6 relative">
            <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white rotate-45" />
            <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white -rotate-45" />
          </div>
        </button>

        {/* Mobile Navigation Links */}
        <nav
          className={cn(
            "relative z-10 h-full flex flex-col items-center justify-center gap-8 transition-all duration-500 delay-200",
            isMobileMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-8"
          )}
        >
          <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </MobileNavLink>
          <MobileNavLink to="/personal-insurance" onClick={() => setIsMobileMenuOpen(false)}>
            Personal Insurance
          </MobileNavLink>
          <MobileNavLink to="/business-insurance" onClick={() => setIsMobileMenuOpen(false)}>
            Business Insurance
          </MobileNavLink>
          <MobileNavLink to="/employee-benefits" onClick={() => setIsMobileMenuOpen(false)}>
            Employee Benefits
          </MobileNavLink>
          <MobileNavLink to="/services" onClick={() => setIsMobileMenuOpen(false)}>
            Services
          </MobileNavLink>
          <MobileNavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </MobileNavLink>

          {/* Mobile Quote Button */}
          <Link
            to="/get-quote"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-8 py-4 bg-white text-primary font-body font-medium rounded transition-transform hover:scale-105"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </>
  );
};

// Desktop Nav Link Component
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
  hasDropdown?: boolean;
}

const NavLink = ({ href, children, isScrolled, hasDropdown }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname.startsWith(href);

  return (
    <Link
      to={href}
      className={cn(
        "relative font-body text-sm font-medium transition-colors duration-300 py-2 group flex items-center gap-1",
        isScrolled
          ? isActive
            ? "text-primary"
            : "text-charcoal hover:text-primary"
          : isActive
          ? "text-white"
          : "text-white/90 hover:text-white"
      )}
    >
      {children}
      {hasDropdown && (
        <svg
          className="w-3 h-3 transition-transform group-hover:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      )}
      {/* Animated underline */}
      <span
        className={cn(
          "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-out",
          isActive ? "w-full" : "w-0 group-hover:w-full"
        )}
      />
    </Link>
  );
};

// Dropdown Menu Component
interface DropdownMenuProps {
  items: { title: string; href: string }[];
  isOpen: boolean;
}

const DropdownMenu = ({ items, isOpen }: DropdownMenuProps) => {
  return (
    <div
      className={cn(
        "absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300",
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      )}
    >
      <div className="bg-white rounded shadow-xl border border-border min-w-[240px] py-2 overflow-hidden">
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="block px-5 py-3 font-body text-sm text-charcoal hover:bg-burgundy-100 hover:text-primary transition-colors duration-200"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

// Mobile Nav Link Component
interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink = ({ to, children, onClick }: MobileNavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "font-display text-3xl font-semibold transition-all duration-300",
        isActive ? "text-white" : "text-white/70 hover:text-white"
      )}
    >
      {children}
    </Link>
  );
};

export default Header;
