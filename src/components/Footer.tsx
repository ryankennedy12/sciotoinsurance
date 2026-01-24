import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="bg-burgundy-100 text-charcoal">
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-space-md lg:px-space-lg py-space-xl">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-space-md">
          
          {/* Column 1 - Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            {/* Logo */}
            <Link to="/" className="block mb-space-md">
              <img 
                src={logo} 
                alt="Scioto Insurance Group" 
                className="h-20 sm:h-24 w-auto"
              />
            </Link>
            
            <p className="font-body text-sm text-charcoal/70 mb-space-md leading-relaxed">
              Father-daughter team. Independent.<br />
              Here when it matters.
            </p>
            
            {/* Social Icons - 44px tap targets */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 text-primary"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-base sm:text-lg text-charcoal mb-4 sm:mb-space-md">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="font-body text-sm text-charcoal/70 hover:text-primary transition-colors duration-300 py-1">
                Home
              </Link>
              <Link to="/about" className="font-body text-sm text-charcoal/70 hover:text-primary transition-colors duration-300 py-1">
                About Us
              </Link>
              <Link to="/get-quote" className="font-body text-sm text-charcoal/70 hover:text-primary transition-colors duration-300 py-1">
                Get a Quote
              </Link>
              <Link to="/services" className="font-body text-sm text-charcoal/70 hover:text-primary transition-colors duration-300 py-1">
                Report a Claim
              </Link>
              <Link to="/services" className="font-body text-sm text-charcoal/70 hover:text-primary transition-colors duration-300 py-1">
                Pay Your Bill
              </Link>
              <Link to="/contact" className="font-body text-sm text-charcoal/70 hover:text-primary transition-colors duration-300 py-1">
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3 - Coverage */}
          <div>
            <h4 className="font-display font-semibold text-base sm:text-lg text-charcoal mb-4 sm:mb-space-md">
              Coverage
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/personal-insurance" className="font-body text-sm text-charcoal/70 hover:text-primary transition-colors duration-300 py-1">
                Personal Insurance
              </Link>
              <Link to="/business-insurance" className="font-body text-sm text-charcoal/70 hover:text-primary transition-colors duration-300 py-1">
                Business Insurance
              </Link>
              <Link to="/employee-benefits" className="font-body text-sm text-charcoal/70 hover:text-primary transition-colors duration-300 py-1">
                Employee Benefits
              </Link>
              <Link to="/services" className="font-body text-sm text-charcoal/70 hover:text-primary transition-colors duration-300 py-1">
                All Coverages
              </Link>
            </nav>
          </div>

          {/* Column 4 - Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-display font-semibold text-base sm:text-lg text-charcoal mb-4 sm:mb-space-md">
              Contact
            </h4>
            <div className="flex flex-col gap-3 sm:gap-space-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <p className="font-body text-sm text-charcoal/70">
                  102 W Main St. #491<br />
                  New Albany, OH 43054
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a href="tel:6146120050" className="font-body text-sm text-charcoal/70 hover:text-primary transition-colors duration-300">
                  (614) 612-0050
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a href="mailto:info@sciotoinsurancegroup.com" className="font-body text-sm text-charcoal/70 hover:text-primary transition-colors duration-300 break-all">
                  info@sciotoinsurancegroup.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <p className="font-body text-sm text-charcoal/70">
                  Mon-Fri 9am-5pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal/10 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-space-md lg:px-space-lg py-4 sm:py-space-md">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-space-sm text-center sm:text-left">
            <p className="font-body text-xs text-charcoal/50">
              © {new Date().getFullYear()} Scioto Insurance Group. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-space-md">
              <a href="#" className="font-body text-xs text-charcoal/50 hover:text-primary transition-colors duration-300 py-1">
                Privacy Policy
              </a>
              <span className="text-charcoal/20">|</span>
              <a href="#" className="font-body text-xs text-charcoal/50 hover:text-primary transition-colors duration-300 py-1">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;