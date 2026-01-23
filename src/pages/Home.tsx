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

      {/* Services Overview Section */}
      <section className="py-space-2xl bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          {/* Section Header */}
          <div className="mb-space-xl">
            <h2 className="font-display font-semibold text-3xl lg:text-[38px] text-foreground">
              Coverage for Every Chapter
            </h2>
          </div>

          {/* Asymmetric Service Panels */}
          <div className="relative">
            {/* Desktop Layout with Stagger */}
            <div className="hidden lg:grid lg:grid-cols-12 lg:gap-6 lg:items-start">
              
              {/* Panel 1 - Personal Insurance (Larger, starts higher) */}
              <Link
                to="/personal-insurance"
                className="col-span-5 group relative z-20"
              >
                <div className="relative bg-gradient-to-br from-primary to-burgundy-800 rounded-lg p-space-lg lg:p-space-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 min-h-[380px] flex flex-col justify-between">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                  
                  <div className="relative z-10">
                    <h3 className="font-display font-semibold text-2xl lg:text-3xl text-white mb-space-sm">
                      Personal Insurance
                    </h3>
                    <p className="font-body text-cream/90 text-lg mb-space-md">
                      Protect your family, your home, and your future.
                    </p>
                    <p className="font-body text-sm text-cream/70 tracking-wide">
                      Auto • Home • Life • Umbrella • Renters
                    </p>
                  </div>
                  
                  <div className="relative z-10 mt-space-lg">
                    <span className="inline-flex items-center gap-2 font-body font-medium text-white group-hover:gap-3 transition-all duration-300">
                      Explore Personal Coverage
                      <span className="text-lg">→</span>
                    </span>
                  </div>
                </div>
              </Link>

              {/* Panel 2 - Business Insurance (Middle, offset down) */}
              <Link
                to="/business-insurance"
                className="col-span-4 group relative z-10 lg:mt-16"
              >
                <div className="relative bg-cream rounded-lg p-space-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 min-h-[340px] flex flex-col justify-between border border-gray-200/50">
                  {/* Subtle Pattern */}
                  <div className="absolute inset-0 opacity-[0.03] rounded-lg" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B2942' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }} />
                  
                  <div className="relative z-10">
                    <h3 className="font-display font-semibold text-2xl text-foreground mb-space-sm">
                      Business Insurance
                    </h3>
                    <p className="font-body text-muted-foreground text-lg mb-space-md">
                      Risk management built around how you actually operate.
                    </p>
                    <p className="font-body text-sm text-muted-foreground/70 tracking-wide">
                      Liability • Property • Workers' Comp • Commercial Auto
                    </p>
                  </div>
                  
                  <div className="relative z-10 mt-space-lg">
                    <span className="inline-flex items-center gap-2 font-body font-medium text-primary group-hover:gap-3 transition-all duration-300">
                      Explore Business Coverage
                      <span className="text-lg">→</span>
                    </span>
                  </div>
                </div>
              </Link>

              {/* Panel 3 - Employee Benefits (Right, offset more) */}
              <Link
                to="/employee-benefits"
                className="col-span-3 group relative z-0 lg:mt-32"
              >
                <div className="relative bg-white rounded-lg p-space-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 min-h-[300px] flex flex-col justify-between border-l-4 border-primary">
                  <div className="relative z-10">
                    <h3 className="font-display font-semibold text-xl text-foreground mb-space-sm">
                      Employee Benefits
                    </h3>
                    <p className="font-body text-muted-foreground mb-space-md">
                      Attract and keep great people with benefits that compete.
                    </p>
                    <p className="font-body text-xs text-muted-foreground/70 tracking-wide leading-relaxed">
                      Group Health • Dental & Vision • Life & Disability • 401(k)
                    </p>
                  </div>
                  
                  <div className="relative z-10 mt-space-md">
                    <span className="inline-flex items-center gap-2 font-body font-medium text-sm text-primary group-hover:gap-3 transition-all duration-300">
                      Explore Benefits
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Mobile Layout - Stacked */}
            <div className="lg:hidden flex flex-col gap-space-md">
              {/* Mobile Panel 1 */}
              <Link to="/personal-insurance" className="group">
                <div className="relative bg-gradient-to-br from-primary to-burgundy-800 rounded-lg p-space-lg shadow-lg">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <h3 className="font-display font-semibold text-2xl text-white mb-space-xs relative z-10">
                    Personal Insurance
                  </h3>
                  <p className="font-body text-cream/90 mb-space-sm relative z-10">
                    Protect your family, your home, and your future.
                  </p>
                  <p className="font-body text-xs text-cream/70 tracking-wide mb-space-md relative z-10">
                    Auto • Home • Life • Umbrella • Renters
                  </p>
                  <span className="inline-flex items-center gap-2 font-body font-medium text-white relative z-10">
                    Explore Coverage →
                  </span>
                </div>
              </Link>

              {/* Mobile Panel 2 */}
              <Link to="/business-insurance" className="group">
                <div className="relative bg-cream rounded-lg p-space-lg shadow-md border border-gray-200/50">
                  <h3 className="font-display font-semibold text-2xl text-foreground mb-space-xs">
                    Business Insurance
                  </h3>
                  <p className="font-body text-muted-foreground mb-space-sm">
                    Risk management built around how you actually operate.
                  </p>
                  <p className="font-body text-xs text-muted-foreground/70 tracking-wide mb-space-md">
                    Liability • Property • Workers' Comp • Commercial Auto
                  </p>
                  <span className="inline-flex items-center gap-2 font-body font-medium text-primary">
                    Explore Coverage →
                  </span>
                </div>
              </Link>

              {/* Mobile Panel 3 */}
              <Link to="/employee-benefits" className="group">
                <div className="relative bg-white rounded-lg p-space-lg shadow-md border-l-4 border-primary">
                  <h3 className="font-display font-semibold text-2xl text-foreground mb-space-xs">
                    Employee Benefits
                  </h3>
                  <p className="font-body text-muted-foreground mb-space-sm">
                    Attract and keep great people with benefits that compete.
                  </p>
                  <p className="font-body text-xs text-muted-foreground/70 tracking-wide mb-space-md">
                    Group Health • Dental & Vision • Life & Disability • 401(k)
                  </p>
                  <span className="inline-flex items-center gap-2 font-body font-medium text-primary">
                    Explore Benefits →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Social Proof Section */}
      <section className="py-space-2xl bg-primary">
        <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-lg lg:gap-space-md mb-space-2xl text-center">
            <div>
              <p className="font-display font-semibold text-5xl lg:text-[64px] text-cream leading-none mb-space-xs">
                29
              </p>
              <p className="font-body text-sm text-white/70 uppercase tracking-wider">
                Years Serving Ohio
              </p>
            </div>
            <div>
              <p className="font-display font-semibold text-5xl lg:text-[64px] text-cream leading-none mb-space-xs">
                1,200+
              </p>
              <p className="font-body text-sm text-white/70 uppercase tracking-wider">
                Families Protected
              </p>
            </div>
            <div>
              <p className="font-display font-semibold text-5xl lg:text-[64px] text-cream leading-none mb-space-xs">
                30+
              </p>
              <p className="font-body text-sm text-white/70 uppercase tracking-wider">
                Insurance Carriers
              </p>
            </div>
            <div>
              <p className="font-display font-semibold text-5xl lg:text-[64px] text-cream leading-none mb-space-xs">
                4.9★
              </p>
              <p className="font-body text-sm text-white/70 uppercase tracking-wider">
                Google Rating
              </p>
            </div>
          </div>

          {/* Featured Testimonial */}
          <div className="relative max-w-[800px] mx-auto text-center mb-space-2xl">
            {/* Decorative Quote Mark */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-display text-[200px] leading-none text-burgundy-600/20 select-none pointer-events-none">
              "
            </div>
            
            <blockquote className="relative z-10">
              <p className="font-display italic text-xl lg:text-2xl text-cream leading-relaxed mb-space-md">
                "After my basement flooded, Scioto had an adjuster at my house within 24 hours and a check in my hand within a week. My old insurance company would have taken months. I tell everyone — call Mike at Scioto."
              </p>
              <footer className="font-body font-medium text-sm text-white">
                — Jennifer M., Westerville
              </footer>
            </blockquote>
          </div>

          {/* Three Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-space-md">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-space-md border border-white/10">
              <p className="font-body text-cream/90 text-sm leading-relaxed mb-space-sm">
                "Saved us $1,800 a year on the exact same coverage. Should have switched years ago."
              </p>
              <p className="font-body text-sm text-white/60">
                — David R., New Albany
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-space-md border border-white/10">
              <p className="font-body text-cream/90 text-sm leading-relaxed mb-space-sm">
                "They found a gap in our business policy that would have cost us $50K in a lawsuit. Worth every penny."
              </p>
              <p className="font-body text-sm text-white/60">
                — Columbus Business Owner
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-space-md border border-white/10">
              <p className="font-body text-cream/90 text-sm leading-relaxed mb-space-sm">
                "When I call, Sarah actually knows who I am. When's the last time your insurance company did that?"
              </p>
              <p className="font-body text-sm text-white/60">
                — Michelle T., Gahanna
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
