import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream">
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg lg:gap-space-md">
          
          {/* Column 1 - Brand */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-space-md">
              <span className="font-display text-2xl font-bold tracking-[0.1em] text-white">
                SCIOTO
              </span>
              <div className="flex items-center gap-2 mt-1">
                <svg className="w-6 h-3" viewBox="0 0 24 12" fill="none">
                  <path
                    d="M0 6C4 2 8 2 12 6C16 10 20 10 24 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-gold-500"
                  />
                </svg>
                <span className="font-body text-[10px] font-medium tracking-[0.15em] text-cream/70 uppercase">
                  Insurance Group
                </span>
              </div>
            </div>
            
            <p className="font-body text-sm text-cream/70 mb-space-md leading-relaxed">
              Family-owned. Independent.<br />
              Here when it matters.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-space-sm">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg text-white mb-space-md">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-space-xs">
              <Link to="/" className="font-body text-sm text-cream/70 hover:text-white transition-colors duration-300">
                Home
              </Link>
              <Link to="/about" className="font-body text-sm text-cream/70 hover:text-white transition-colors duration-300">
                About Us
              </Link>
              <Link to="/get-quote" className="font-body text-sm text-cream/70 hover:text-white transition-colors duration-300">
                Get a Quote
              </Link>
              <a href="#" className="font-body text-sm text-cream/70 hover:text-white transition-colors duration-300">
                Report a Claim
              </a>
              <a href="#" className="font-body text-sm text-cream/70 hover:text-white transition-colors duration-300">
                Pay Your Bill
              </a>
              <Link to="/contact" className="font-body text-sm text-cream/70 hover:text-white transition-colors duration-300">
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3 - Coverage */}
          <div>
            <h4 className="font-display font-semibold text-lg text-white mb-space-md">
              Coverage
            </h4>
            <nav className="flex flex-col gap-space-xs">
              <Link to="/personal-insurance" className="font-body text-sm text-cream/70 hover:text-white transition-colors duration-300">
                Personal Insurance
              </Link>
              <Link to="/business-insurance" className="font-body text-sm text-cream/70 hover:text-white transition-colors duration-300">
                Business Insurance
              </Link>
              <Link to="/employee-benefits" className="font-body text-sm text-cream/70 hover:text-white transition-colors duration-300">
                Employee Benefits
              </Link>
              <Link to="/services" className="font-body text-sm text-cream/70 hover:text-white transition-colors duration-300">
                All Coverages
              </Link>
            </nav>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg text-white mb-space-md">
              Contact
            </h4>
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <p className="font-body text-sm text-cream/70">
                  102 W Main St. #491<br />
                  New Albany, OH 43054
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a href="tel:6146120050" className="font-body text-sm text-cream/70 hover:text-white transition-colors duration-300">
                  (614) 612-0050
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a href="mailto:info@sciotoinsurancegroup.com" className="font-body text-sm text-cream/70 hover:text-white transition-colors duration-300 break-all">
                  info@sciotoinsurancegroup.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <p className="font-body text-sm text-cream/70">
                  Mon-Fri 9am-5pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg py-space-md">
          <div className="flex flex-col md:flex-row justify-between items-center gap-space-sm text-center md:text-left">
            <p className="font-body text-xs text-cream/50">
              © {new Date().getFullYear()} Scioto Insurance Group. All rights reserved.
            </p>
            <div className="flex gap-space-md">
              <a href="#" className="font-body text-xs text-cream/50 hover:text-cream transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="text-cream/30">|</span>
              <a href="#" className="font-body text-xs text-cream/50 hover:text-cream transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
