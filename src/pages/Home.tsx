import { Link } from "react-router-dom";
import { Phone, ArrowRight, Star, Clock, Users, Shield, Award } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import heroFamily from "@/assets/hero-family.jpg";

const Home = () => {
  // Trust row items with icons
  const trustItems = [
    { icon: Star, label: "5.0", sublabel: "Rating" },
    { icon: Clock, label: "29 Years", sublabel: "Experience" },
    { icon: Users, label: "1,200+", sublabel: "Families Protected" },
    { icon: Award, label: "A+ BBB", sublabel: "Rating" },
    { icon: Shield, label: "Independent", sublabel: "Agent" },
  ];

  return (
    <>
      {/* Hero Section - Full Viewport with Real Family Image */}
      <section className="relative min-h-screen lg:h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroFamily})` }}
        />
        
        {/* Burgundy Overlay - 20% opacity for text contrast */}
        <div className="absolute inset-0 bg-burgundy-800/20" />
        
        {/* Additional gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/40 to-transparent" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl">
            {/* Main Headline - Cormorant Garamond */}
            <h1 
              className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white leading-[1.1] mb-6 animate-slide-up"
            >
              Columbus Families Trust Us to Protect What Matters Most
            </h1>

            {/* Subheadline - Body text, larger size */}
            <p 
              className="font-body text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl mb-8 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              We shop 30+ carriers to find coverage that actually fits your life—and your budget. No call centers. No voicemail. Just Sarah, Mike, or Tom answering your call.
            </p>

            {/* Trust Row - Horizontal with icons and dividers */}
            <div 
              className="flex flex-wrap items-center gap-4 lg:gap-0 mb-8 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              {trustItems.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex items-center gap-2">
                    {item.icon === Star ? (
                      <div className="flex text-gold-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    ) : (
                      <item.icon className="w-5 h-5 text-gold-500" />
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="font-body font-semibold text-white text-sm lg:text-base">
                        {item.label}
                      </span>
                      <span className="font-body text-white/70 text-xs hidden sm:inline">
                        {item.sublabel}
                      </span>
                    </div>
                  </div>
                  {/* Vertical Divider */}
                  {index < trustItems.length - 1 && (
                    <div className="hidden lg:block w-px h-6 bg-white/30 mx-4" />
                  )}
                </div>
              ))}
            </div>

            {/* Dual CTAs - Large buttons, side by side */}
            <div 
              className="flex flex-col sm:flex-row gap-4 mb-6 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              {/* Primary CTA */}
              <Link
                to="/get-quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-base transition-all duration-300 hover:bg-burgundy-800 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              {/* Secondary CTA */}
              <a
                href="tel:6146120050"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white text-primary border-2 border-primary font-body font-semibold text-base transition-all duration-300 hover:bg-primary hover:text-white active:scale-[0.98]"
              >
                <Phone className="w-5 h-5" />
                Talk to a Real Person
              </a>
            </div>

            {/* Trust Reassurances - Small text with gold checkmarks */}
            <div 
              className="flex flex-wrap items-center gap-4 sm:gap-6 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="flex items-center gap-2 font-body text-sm text-white/80">
                <svg className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No spam, ever
              </span>
              <span className="flex items-center gap-2 font-body text-sm text-white/80">
                <svg className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Quote in under 10 minutes
              </span>
              <span className="flex items-center gap-2 font-body text-sm text-white/80">
                <svg className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                We'll call you back today
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Desktop only */}
        <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/70 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <span className="font-body text-xs uppercase tracking-wider">Explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/70 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Carrier Logos Section */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <div className="w-10 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-foreground">
              We Shop These 30+ Carriers So You Don't Have To
            </h2>
          </AnimatedSection>

          {/* Carrier Logo Grid */}
          <AnimatedSection animation="fade-up" delay={100} className="mb-8">
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
              {[
                "State Farm",
                "Progressive",
                "Nationwide",
                "Travelers",
                "Safeco",
                "Liberty Mutual",
                "Grange",
                "Westfield",
                "Cincinnati Insurance",
                "Auto-Owners",
                "Erie Insurance",
                "MetLife",
                "Guardian",
                "Allstate",
                "Farmers",
                "American Family",
              ].map((carrier, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-center h-16 lg:h-20 bg-white rounded-lg border border-gray-200/50 px-3 transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-primary/20"
                >
                  <span className="font-body text-xs lg:text-sm font-medium text-muted-foreground text-center leading-tight grayscale group-hover:grayscale-0 group-hover:text-primary transition-all duration-300">
                    {carrier}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* "...and more" text */}
          <AnimatedSection animation="fade-up" delay={200} className="text-center mb-8">
            <p className="font-body text-muted-foreground text-sm italic">
              ...and 20+ more carriers
            </p>
          </AnimatedSection>

          {/* Explanation text */}
          <AnimatedSection animation="fade-up" delay={300} className="text-center max-w-2xl mx-auto">
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              As an independent agency, we work for <span className="font-semibold text-foreground">YOU</span>, not one insurance company. We compare coverage and pricing across dozens of carriers to find your best fit.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Scioto Insurance Group Section */}
      <section className="py-16 sm:py-space-3xl bg-cream">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-space-md lg:px-space-lg">
          {/* Section Header */}
          <AnimatedSection animation="fade-up" className="text-center mb-10 sm:mb-space-xl">
            {/* Decorative Line */}
            <div className="w-10 h-0.5 bg-primary mx-auto mb-4 sm:mb-space-md" />
            
            <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-[42px] text-foreground leading-[1.2] mb-2 sm:mb-space-sm">
              Why 1,200+ Ohio Families Trust Scioto
            </h2>
            <p className="font-body text-base sm:text-lg text-muted-foreground">
              We're not a call center. We're your neighbors.
            </p>
          </AnimatedSection>

          {/* Value Proposition Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-space-md mb-10 sm:mb-space-xl">
            {/* Card 1 - Independent */}
            <AnimatedSection animation="fade-up" delay={0} className="bg-card rounded-lg p-5 sm:p-space-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              {/* Handshake Icon */}
              <div className="mb-4 sm:mb-space-md">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-primary" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 28l6-6 4 4 8-8 4 4 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 34l-6 6M34 34l6 6" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="14" cy="20" r="4" />
                  <circle cx="34" cy="20" r="4" />
                  <path d="M18 20h12" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-lg sm:text-xl text-foreground mb-2 sm:mb-space-sm">
                Independent, Not Corporate
              </h3>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                We work for you, not an insurance company. That means we shop 30+ carriers to find coverage that actually fits your situation — and your budget.
              </p>
            </AnimatedSection>

            {/* Card 2 - Experience */}
            <AnimatedSection animation="fade-up" delay={100} className="bg-card rounded-lg p-5 sm:p-space-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              {/* Shield Icon */}
              <div className="mb-4 sm:mb-space-md">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-primary" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M24 4L6 12v12c0 11 8 18 18 22 10-4 18-11 18-22V12L24 4z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 24l6 6 10-12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-lg sm:text-xl text-foreground mb-2 sm:mb-space-sm">
                29 Years of Local Expertise
              </h3>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                We've insured New Albany homes through three market cycles. We know which carriers pay claims fast, which ones fight you, and which coverage gaps hurt Ohio families most.
              </p>
            </AnimatedSection>

            {/* Card 3 - Human */}
            <AnimatedSection animation="fade-up" delay={200} className="bg-card rounded-lg p-5 sm:p-space-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 sm:col-span-2 md:col-span-1">
              {/* Phone/Person Icon */}
              <div className="mb-4 sm:mb-space-md">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-primary" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="24" cy="14" r="6" />
                  <path d="M12 36c0-6.627 5.373-12 12-12s12 5.373 12 12" strokeLinecap="round" />
                  <path d="M36 28l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M40 32h-6" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-lg sm:text-xl text-foreground mb-2 sm:mb-space-sm">
                A Human Answers the Phone
              </h3>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                When you call, you get Sarah, Mike, or Tom — not a phone tree. When you have a claim, we're in your corner. That's not a tagline, it's how we've operated since 1995.
              </p>
            </AnimatedSection>
          </div>

          {/* Bottom CTA */}
          <AnimatedSection animation="fade-up" delay={300} className="text-center">
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
          </AnimatedSection>
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
      <section className="py-12 sm:py-space-2xl bg-primary">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-space-md lg:px-space-lg">
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-space-lg lg:gap-space-md mb-12 sm:mb-space-2xl text-center">
            <AnimatedSection animation="fade-up" delay={0}>
              <p className="font-display font-semibold text-4xl sm:text-5xl lg:text-[64px] text-cream leading-none mb-1 sm:mb-space-xs">
                29
              </p>
              <p className="font-body text-xs sm:text-sm text-white/70 uppercase tracking-wider">
                Years Serving Ohio
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <p className="font-display font-semibold text-4xl sm:text-5xl lg:text-[64px] text-cream leading-none mb-1 sm:mb-space-xs">
                1,200+
              </p>
              <p className="font-body text-xs sm:text-sm text-white/70 uppercase tracking-wider">
                Families Protected
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="font-display font-semibold text-4xl sm:text-5xl lg:text-[64px] text-cream leading-none mb-1 sm:mb-space-xs">
                30+
              </p>
              <p className="font-body text-xs sm:text-sm text-white/70 uppercase tracking-wider">
                Insurance Carriers
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={300}>
              <p className="font-display font-semibold text-4xl sm:text-5xl lg:text-[64px] text-cream leading-none mb-1 sm:mb-space-xs">
                4.9★
              </p>
              <p className="font-body text-xs sm:text-sm text-white/70 uppercase tracking-wider">
                Google Rating
              </p>
            </AnimatedSection>
          </div>

          {/* Featured Testimonial */}
          <div className="relative max-w-[800px] mx-auto text-center mb-10 sm:mb-space-2xl">
            {/* Decorative Quote Mark - Hidden on mobile */}
            <div className="hidden sm:block absolute -top-8 left-1/2 -translate-x-1/2 font-display text-[120px] sm:text-[200px] leading-none text-burgundy-600/20 select-none pointer-events-none">
              "
            </div>
            
            <blockquote className="relative z-10">
              <p className="font-display italic text-lg sm:text-xl lg:text-2xl text-cream leading-relaxed mb-4 sm:mb-space-md">
                "After my basement flooded, Scioto had an adjuster at my house within 24 hours and a check in my hand within a week. My old insurance company would have taken months. I tell everyone — call Mike at Scioto."
              </p>
              <footer className="font-body font-medium text-sm text-white">
                — Jennifer M., Westerville
              </footer>
            </blockquote>
          </div>

          {/* Three Testimonial Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-space-md">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-space-md border border-white/10">
              <p className="font-body text-cream/90 text-sm leading-relaxed mb-3 sm:mb-space-sm">
                "Saved us $1,800 a year on the exact same coverage. Should have switched years ago."
              </p>
              <p className="font-body text-sm text-white/60">
                — David R., New Albany
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-space-md border border-white/10">
              <p className="font-body text-cream/90 text-sm leading-relaxed mb-3 sm:mb-space-sm">
                "They found a gap in our business policy that would have cost us $50K in a lawsuit. Worth every penny."
              </p>
              <p className="font-body text-sm text-white/60">
                — Columbus Business Owner
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-space-md border border-white/10 sm:col-span-2 md:col-span-1">
              <p className="font-body text-cream/90 text-sm leading-relaxed mb-3 sm:mb-space-sm">
                "When I call, Sarah actually knows who I am. When's the last time your insurance company did that?"
              </p>
              <p className="font-body text-sm text-white/60">
                — Michelle T., Gahanna
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-space-2xl bg-cream">
        <AnimatedSection animation="fade-up" className="max-w-[800px] mx-auto px-4 sm:px-space-md lg:px-space-lg text-center">
          <h2 className="font-display font-semibold text-xl sm:text-2xl lg:text-4xl text-foreground leading-tight mb-4 sm:mb-space-md">
            Ready to Stop Overpaying for Insurance That Underdelivers?
          </h2>
          
          <p className="font-body text-base sm:text-lg text-muted-foreground mb-6 sm:mb-space-lg max-w-[600px] mx-auto">
            Get a free, no-pressure quote in 10 minutes. We'll show you exactly what you're paying for — and what you might be missing.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-space-md mb-4 sm:mb-space-md">
            <Link
              to="/get-quote"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 py-4 rounded bg-primary text-primary-foreground font-body font-medium text-base transition-all duration-300 hover:bg-burgundy-800 active:scale-[0.98] hover:-translate-y-0.5 hover:shadow-xl motion-reduce:hover:translate-y-0"
            >
              Get Your Free Quote
            </Link>
            
            <a
              href="tel:6146120050"
              className="inline-flex items-center gap-2 py-3 font-body font-medium text-primary hover:underline transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Or call us: (614) 612-0050
            </a>
          </div>
          
          <p className="font-body text-sm text-muted-foreground/70 italic">
            No spam. No pushy sales calls. Just honest advice from people who actually live here.
          </p>
        </AnimatedSection>
      </section>
    </>
  );
};

export default Home;
