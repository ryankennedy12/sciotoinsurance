import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Car, Home, Heart, Umbrella, Droplets, Sparkles, Shield, HardHat, Lock, Scale, Building2, Truck, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

// Mega Menu Data - Personal Insurance
const personalInsuranceCategories = [
  {
    title: "Most Popular",
    items: [
      { title: "Auto Insurance", href: "/personal-insurance/auto", icon: Car },
      { title: "Home Insurance", href: "/personal-insurance/home", icon: Home },
      { title: "Life Insurance", href: "/personal-insurance/life", icon: Heart },
      { title: "Umbrella Insurance", href: "/personal-insurance/umbrella", icon: Umbrella },
    ],
  },
  {
    title: "Property & Specialty",
    items: [
      { title: "Flood Insurance", href: "/personal-insurance/flood", icon: Droplets },
      { title: "High Net Worth", href: "/personal-insurance/high-net-worth", icon: Sparkles },
      { title: "Renters Insurance", href: "/personal-insurance/renters", icon: Home },
      { title: "Condo Insurance", href: "/personal-insurance/condo", icon: Building2 },
    ],
  },
];

// Mega Menu Data - Business Insurance
const businessInsuranceCategories = [
  {
    title: "Most Popular",
    items: [
      { title: "General Liability", href: "/business-insurance/general-liability", icon: Shield },
      { title: "Workers' Compensation", href: "/business-insurance/workers-comp", icon: HardHat },
      { title: "Commercial Property", href: "/business-insurance/commercial-property", icon: Building2 },
      { title: "Commercial Auto", href: "/business-insurance/commercial-auto", icon: Truck },
    ],
  },
  {
    title: "Professional & Cyber",
    items: [
      { title: "Professional Liability (E&O)", href: "/business-insurance/professional-liability", icon: Scale },
      { title: "Cyber Liability", href: "/business-insurance/cyber-liability", icon: Lock },
      { title: "Directors & Officers", href: "/business-insurance/directors-officers", icon: Shield },
      { title: "Business Owners Policy", href: "/business-insurance/bop", icon: Shield },
    ],
  },
];

// Mobile menu items (flattened for accordion)
const personalInsuranceItems = [
  { title: "Auto Insurance", href: "/personal-insurance/auto" },
  { title: "Home Insurance", href: "/personal-insurance/home" },
  { title: "Life Insurance", href: "/personal-insurance/life" },
  { title: "Umbrella Insurance", href: "/personal-insurance/umbrella" },
  { title: "Flood Insurance", href: "/personal-insurance/flood" },
  { title: "High Net Worth", href: "/personal-insurance/high-net-worth" },
];

const businessInsuranceItems = [
  { title: "General Liability", href: "/business-insurance/general-liability" },
  { title: "Workers' Compensation", href: "/business-insurance/workers-comp" },
  { title: "Commercial Property", href: "/business-insurance/commercial-property" },
  { title: "Commercial Auto", href: "/business-insurance/commercial-auto" },
  { title: "Professional Liability", href: "/business-insurance/professional-liability" },
  { title: "Cyber Liability", href: "/business-insurance/cyber-liability" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileDropdown(null);
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

  const toggleMobileDropdown = (dropdown: string) => {
    setMobileDropdown(mobileDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/98 backdrop-blur-sm shadow-sm"
            : "bg-cream/80 backdrop-blur-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-space-md lg:px-space-lg">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img 
                src={logo} 
                alt="Scioto Insurance Group" 
                className="h-12 sm:h-14 lg:h-16 w-auto transition-transform duration-300 group-hover:scale-105 mix-blend-multiply"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-space-lg">
              <NavLink href="/about" isScrolled={isScrolled}>
                About
              </NavLink>

              {/* Personal Insurance Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter("personal")}
                onMouseLeave={handleDropdownLeave}
              >
                <NavLink href="/personal-insurance" isScrolled={isScrolled} hasDropdown>
                  Personal Insurance
                </NavLink>
                <MegaMenu
                  categories={personalInsuranceCategories}
                  viewAllHref="/personal-insurance"
                  viewAllText="View All Personal Insurance"
                  isOpen={activeDropdown === "personal"}
                />
              </div>

              {/* Business Insurance Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter("business")}
                onMouseLeave={handleDropdownLeave}
              >
                <NavLink href="/business-insurance" isScrolled={isScrolled} hasDropdown>
                  Business Insurance
                </NavLink>
                <MegaMenu
                  categories={businessInsuranceCategories}
                  viewAllHref="/business-insurance"
                  viewAllText="View All Business Insurance"
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

            {/* Desktop: Get a Quote Button */}
            <Link
              to="/get-quote"
              className={cn(
                "hidden lg:inline-flex items-center justify-center px-6 py-3 rounded text-sm font-body font-medium transition-all duration-300",
                "bg-primary text-primary-foreground hover:bg-burgundy-800 hover:-translate-y-0.5 hover:shadow-lg"
              )}
            >
              Get a Quote
            </Link>

            {/* Mobile: Click-to-call + Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* Click-to-call button */}
              <a
                href="tel:6146120050"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-primary text-primary-foreground hover:bg-burgundy-800 transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>
              
              {/* Mobile Menu Button - 44px tap target */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="flex items-center justify-center w-11 h-11 -mr-2"
                aria-label="Open menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className="block h-0.5 w-full bg-charcoal transition-all" />
                  <span className="block h-0.5 w-full bg-charcoal transition-all" />
                  <span className="block h-0.5 w-full bg-charcoal transition-all" />
                </div>
              </button>
            </div>
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

        {/* Close Button - 44px tap target */}
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

        {/* Mobile Navigation Links - Scrollable */}
        <nav
          className={cn(
            "relative z-10 h-full flex flex-col pt-20 pb-8 px-6 overflow-y-auto transition-all duration-500 delay-200",
            isMobileMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-8"
          )}
        >
          <div className="flex flex-col gap-2">
            <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </MobileNavLink>
            
            {/* Personal Insurance with accordion */}
            <div>
              <button
                onClick={() => toggleMobileDropdown("personal")}
                className="w-full flex items-center justify-between py-3 font-display text-2xl font-semibold text-white/90 hover:text-white transition-colors"
              >
                Personal Insurance
                <svg
                  className={cn(
                    "w-5 h-5 transition-transform duration-300",
                    mobileDropdown === "personal" && "rotate-180"
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={cn(
                "overflow-hidden transition-all duration-300",
                mobileDropdown === "personal" ? "max-h-96" : "max-h-0"
              )}>
                <Link
                  to="/personal-insurance"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 pl-4 font-body text-lg text-white/70 hover:text-white transition-colors"
                >
                  All Personal Insurance
                </Link>
                {personalInsuranceItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 pl-4 font-body text-lg text-white/70 hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Business Insurance with accordion */}
            <div>
              <button
                onClick={() => toggleMobileDropdown("business")}
                className="w-full flex items-center justify-between py-3 font-display text-2xl font-semibold text-white/90 hover:text-white transition-colors"
              >
                Business Insurance
                <svg
                  className={cn(
                    "w-5 h-5 transition-transform duration-300",
                    mobileDropdown === "business" && "rotate-180"
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={cn(
                "overflow-hidden transition-all duration-300",
                mobileDropdown === "business" ? "max-h-96" : "max-h-0"
              )}>
                <Link
                  to="/business-insurance"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 pl-4 font-body text-lg text-white/70 hover:text-white transition-colors"
                >
                  All Business Insurance
                </Link>
                {businessInsuranceItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 pl-4 font-body text-lg text-white/70 hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <MobileNavLink to="/employee-benefits" onClick={() => setIsMobileMenuOpen(false)}>
              Employee Benefits
            </MobileNavLink>
            <MobileNavLink to="/services" onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </MobileNavLink>
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

// Desktop Nav Link Component
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
  hasDropdown?: boolean;
}

const NavLink = ({ href, children, hasDropdown }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname.startsWith(href);

  return (
    <Link
      to={href}
      className={cn(
        "relative font-body text-sm font-medium transition-colors duration-300 py-2 group flex items-center gap-1",
        isActive ? "text-primary" : "text-charcoal hover:text-primary"
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

// Mega Menu Component
interface MegaMenuCategory {
  title: string;
  items: {
    title: string;
    href: string;
    icon: React.ElementType;
  }[];
}

interface MegaMenuProps {
  categories: MegaMenuCategory[];
  viewAllHref: string;
  viewAllText: string;
  isOpen: boolean;
}

const MegaMenu = ({ categories, viewAllHref, viewAllText, isOpen }: MegaMenuProps) => {
  return (
    <div
      className={cn(
        "absolute top-full left-1/2 -translate-x-1/2 transition-all duration-300",
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      )}
    >
      {/* Invisible bridge to prevent hover gap */}
      <div className="h-2" />
      <div className="bg-white rounded-lg shadow-xl border border-border overflow-hidden min-w-[520px]">
        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-0 p-4">
          {categories.map((category) => (
            <div key={category.title} className="p-2">
              <h3 className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-3">
                {category.title}
              </h3>
              <ul className="space-y-1">
                {category.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-body text-charcoal hover:bg-secondary hover:text-primary transition-colors duration-200 group"
                      >
                        <span className="flex-shrink-0 w-8 h-8 rounded-md bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <Icon className="w-4 h-4 text-accent" />
                        </span>
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer - View All Link */}
        <div className="bg-secondary/50 px-6 py-3 border-t border-border">
          <Link
            to={viewAllHref}
            className="flex items-center justify-between text-sm font-body font-medium text-primary hover:text-burgundy-800 transition-colors group"
          >
            <span>{viewAllText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

// Mobile Nav Link Component - 44px min tap target
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
        "block py-3 font-display text-2xl font-semibold transition-all duration-300",
        isActive ? "text-white" : "text-white/90 hover:text-white"
      )}
    >
      {children}
    </Link>
  );
};

export default Header;
