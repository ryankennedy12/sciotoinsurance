import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import HeroVisual from "@/components/HeroVisual";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-cream overflow-hidden">
        {/* Background subtle texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-burgundy-100/30" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-space-md lg:px-space-lg pt-24 lg:pt-32 pb-16">
          <div className="grid lg:grid-cols-[55%_45%] gap-space-xl lg:gap-space-lg items-center min-h-[calc(100vh-10rem)]">
            {/* Left Content */}
            <div className="order-2 lg:order-1 z-10">
              {/* Eyebrow */}
              <p className="font-body font-medium text-xs uppercase tracking-[0.1em] text-muted-foreground mb-space-md animate-fade-in">
                New Albany's Trusted Insurance Partner Since 1995
              </p>

              {/* Main Headline */}
              <h1 
                className="font-display font-semibold text-4xl sm:text-5xl lg:text-[56px] text-primary leading-[1.15] mb-space-md animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                Insurance That Actually Understands Your Life
              </h1>

              {/* Subheadline */}
              <p 
                className="font-body text-lg lg:text-xl text-muted-foreground leading-[1.6] max-w-[540px] mb-space-lg animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                You're not a policy number. You're a family protecting what matters, a business owner managing real risks, a person who deserves an advisor who picks up the phone.
              </p>

              {/* CTA Buttons */}
              <div 
                className="flex flex-wrap gap-space-sm mb-space-lg animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                <Link
                  to="/get-quote"
                  className="inline-flex items-center justify-center px-8 py-4 rounded bg-primary text-primary-foreground font-body font-medium text-sm transition-all duration-300 hover:bg-burgundy-800 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Get Your Free Quote
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded border-2 border-primary text-primary font-body font-medium text-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  <Phone className="w-4 h-4" />
                  Talk to an Advisor
                </Link>
              </div>

              {/* Trust Indicator */}
              <div 
                className="flex items-center gap-2 animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-body text-sm text-muted-foreground">
                  Rated 5.0 by New Albany families and businesses
                </span>
              </div>
            </div>

            {/* Right Visual */}
            <div className="order-1 lg:order-2 relative h-[300px] sm:h-[400px] lg:h-[600px]">
              <HeroVisual scrollY={scrollY} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
          aria-label="Scroll to content"
        >
          <span className="font-body text-xs uppercase tracking-wider">Explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
          </div>
        </button>
      </section>

      {/* Why Scioto Insurance Group Section */}
      <section className="py-space-3xl bg-cream">
        <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          {/* Section Header */}
          <div className="text-center mb-space-xl">
            {/* Decorative Line */}
            <div className="w-10 h-0.5 bg-primary mx-auto mb-space-md" />
            
            <h2 className="font-display font-semibold text-3xl lg:text-[42px] text-foreground leading-[1.2] mb-space-sm">
              Why 1,200+ Ohio Families Trust Scioto
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              We're not a call center. We're your neighbors.
            </p>
          </div>

          {/* Value Proposition Cards */}
          <div className="grid md:grid-cols-3 gap-space-md mb-space-xl">
            {/* Card 1 - Independent */}
            <div className="bg-white rounded-lg p-space-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              {/* Handshake Icon */}
              <div className="mb-space-md">
                <svg className="w-12 h-12 text-primary" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 28l6-6 4 4 8-8 4 4 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 34l-6 6M34 34l6 6" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="14" cy="20" r="4" />
                  <circle cx="34" cy="20" r="4" />
                  <path d="M18 20h12" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-space-sm">
                Independent, Not Corporate
              </h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                We work for you, not an insurance company. That means we shop 30+ carriers to find coverage that actually fits your situation — and your budget.
              </p>
            </div>

            {/* Card 2 - Experience */}
            <div className="bg-white rounded-lg p-space-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              {/* Shield Icon */}
              <div className="mb-space-md">
                <svg className="w-12 h-12 text-primary" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M24 4L6 12v12c0 11 8 18 18 22 10-4 18-11 18-22V12L24 4z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 24l6 6 10-12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-space-sm">
                29 Years of Local Expertise
              </h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                We've insured New Albany homes through three market cycles. We know which carriers pay claims fast, which ones fight you, and which coverage gaps hurt Ohio families most.
              </p>
            </div>

            {/* Card 3 - Human */}
            <div className="bg-white rounded-lg p-space-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              {/* Phone/Person Icon */}
              <div className="mb-space-md">
                <svg className="w-12 h-12 text-primary" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="24" cy="14" r="6" />
                  <path d="M12 36c0-6.627 5.373-12 12-12s12 5.373 12 12" strokeLinecap="round" />
                  <path d="M36 28l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M40 32h-6" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-space-sm">
                A Human Answers the Phone
              </h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                When you call, you get Sarah, Mike, or Tom — not a phone tree. When you have a claim, we're in your corner. That's not a tagline, it's how we've operated since 1995.
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="font-body text-muted-foreground mb-space-sm">
              Join the families and businesses who stopped worrying about insurance.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1 font-body font-medium text-primary hover:underline transition-all duration-300"
            >
              See Our Reviews
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
