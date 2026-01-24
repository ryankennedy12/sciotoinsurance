import { Link } from "react-router-dom";
import { Phone, ArrowRight, Star, Clock, Users, Shield } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import CarrierLogoGrid from "@/components/CarrierLogoGrid";
import TestimonialCard from "@/components/TestimonialCard";
import heroFamily from "@/assets/hero-family.jpg";

const Home = () => {
  // Trust row items with icons
  const trustItems = [
    { icon: Star, label: "5.0", sublabel: "Rating" },
    { icon: Clock, label: "29 Years", sublabel: "Experience" },
    { icon: Users, label: "Father-Daughter", sublabel: "Team" },
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
              Ohio Families Trust Us to Protect What Matters Most
            </h1>

            {/* Subheadline - Body text, larger size */}
            <p 
              className="font-body text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl mb-8 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              We compare rates from over 30 insurance companies so you don't have to. Call our office and you'll talk to Jeff or Natalie. That's the whole team.
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

      {/* Carrier Logo Grid */}
      <CarrierLogoGrid />

      {/* Why Scioto Insurance Group Section */}
      <section className="py-16 sm:py-space-3xl bg-cream">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-space-md lg:px-space-lg">
          {/* Section Header */}
          <AnimatedSection animation="fade-up" className="text-center mb-10 sm:mb-space-xl">
            {/* Decorative Line */}
            <div className="w-10 h-0.5 bg-primary mx-auto mb-4 sm:mb-space-md" />
            
            <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-[42px] text-foreground leading-[1.2] mb-2 sm:mb-space-sm">
              Why Ohio Families Work With Us
            </h2>
            <p className="font-body text-base sm:text-lg text-muted-foreground">
              29 years of experience. A father-daughter team that picks up the phone.
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
                We don't work for one insurance company. We shop over 30 carriers to find what fits your situation and your budget. If a better deal exists, we'll find it.
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
                29 Years in the Industry
              </h3>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                Jeff spent 29 years at Nationwide before starting this agency. He knows which carriers pay claims quickly, which ones fight you, and where coverage gaps hurt most.
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
                Call our office. You'll get Jeff or Natalie. That's the whole team. No phone tree, no call center. When you have a claim, we handle it personally.
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
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-space-md lg:px-space-lg">
          
          {/* Section Header */}
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <div className="w-10 h-0.5 bg-primary mx-auto mb-space-md" />
            <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-[36px] text-foreground mb-3">
              What Our Clients Say
            </h2>
            <p className="font-body text-muted-foreground max-w-[500px] mx-auto">
              Real feedback from Ohio families and businesses we've helped.
            </p>
          </AnimatedSection>

          {/* Featured Testimonial */}
          <AnimatedSection animation="fade-up" delay={100} className="max-w-[800px] mx-auto mb-12">
            <div className="relative bg-primary rounded-2xl p-8 sm:p-12 text-center">
              {/* Decorative Quote Mark */}
              <div className="absolute top-4 left-8 font-display text-[80px] sm:text-[120px] leading-none text-white/10 select-none pointer-events-none">
                "
              </div>
              
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                ))}
              </div>
              
              <blockquote className="relative z-10">
                <p className="font-display italic text-xl sm:text-2xl lg:text-[28px] text-cream leading-relaxed mb-6">
                  After my basement flooded, Jeff had an adjuster at my house within 24 hours and a check in my hand within a week. My old insurance company would have taken months.
                </p>
                <footer>
                  <p className="font-body font-semibold text-white mb-1">
                    Jennifer Morrison
                  </p>
                  <p className="font-body text-sm text-white/70">
                    Westerville, OH • March 2024
                  </p>
                  <p className="font-body text-xs text-white/50 mt-2">
                    Helped with: Home Insurance Claim
                  </p>
                </footer>
              </blockquote>
            </div>
          </AnimatedSection>

          {/* Three Testimonial Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedSection animation="fade-up" delay={150}>
              <TestimonialCard
                quote="Saved us $1,800 a year on the exact same coverage. Should have switched years ago."
                name="David Reynolds"
                location="New Albany, OH"
                date="January 2024"
                helpedWith="Auto & Home Bundle"
                rating={5}
                variant="light"
              />
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <TestimonialCard
                quote="They found a gap in our business policy that would have cost us $50K in a lawsuit. Worth every penny."
                name="Marcus Chen"
                location="Columbus, OH"
                date="February 2024"
                helpedWith="Commercial Liability"
                rating={5}
                variant="light"
              />
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={250} className="sm:col-span-2 lg:col-span-1">
              <TestimonialCard
                quote="When I call, they actually know who I am. When's the last time your insurance company did that?"
                name="Michelle Torres"
                location="Gahanna, OH"
                date="December 2023"
                helpedWith="Personal Insurance"
                rating={5}
                variant="light"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-space-2xl bg-cream">
        <AnimatedSection animation="fade-up" className="max-w-[800px] mx-auto px-4 sm:px-space-md lg:px-space-lg text-center">
          <h2 className="font-display font-semibold text-xl sm:text-2xl lg:text-4xl text-foreground leading-tight mb-4 sm:mb-space-md">
            Let's See if We Can Do Better
          </h2>
          
          <p className="font-body text-base sm:text-lg text-muted-foreground mb-6 sm:mb-space-lg max-w-[600px] mx-auto">
            Get a free quote in about 10 minutes. We'll look at what you're paying now and show you if there's a better option.
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
            We won't spam you or pass your info around. Promise.
          </p>
        </AnimatedSection>
      </section>
    </>
  );
};

export default Home;
