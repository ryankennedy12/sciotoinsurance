import { Link } from "react-router-dom";
import { Phone, ArrowRight, Star, Clock, Users, Shield, Scale, ShieldCheck, PhoneCall } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { usePageReady } from "@/components/Layout";

import TestimonialCard from "@/components/TestimonialCard";
import heroFamily from "@/assets/hero-family.jpg";
import familyHomeService from "@/assets/family-home-service.jpg";
import businessOffice from "@/assets/business-office.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
import { useEffect, useState } from "react";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const isPageReady = usePageReady();

  useEffect(() => {
    const handleScroll = () => {
      // Only track scroll for the hero section (first viewport height)
      if (window.scrollY < window.innerHeight) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Trust row items with icons
  const trustItems = [
    { icon: Star, label: "5.0", sublabel: "Rating" },
    { icon: Clock, label: "29 Years", sublabel: "Experience" },
    { icon: Users, label: "Father-Daughter", sublabel: "Team" },
    { icon: Shield, label: "Independent", sublabel: "Agent" },
  ];

  return (
    <>
      {/* Hero Section - Full Viewport with Real Family Image + Parallax */}
      <section className="relative min-h-screen lg:h-screen flex items-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 will-change-transform"
          style={{ 
            backgroundImage: `url(${heroFamily})`,
            transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
          }}
        />
        
        {/* Burgundy Overlay - 20% opacity for text contrast */}
        <div className="absolute inset-0 bg-burgundy-800/20" />
        
        {/* Additional gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/40 to-transparent" />

        {/* Content Container with Fade-out on Scroll */}
        <div 
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-24 lg:pb-16 will-change-transform"
          style={{ 
            opacity: Math.max(0, 1 - scrollY / 400),
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        >
          <div className="max-w-3xl">
            {/* Main Headline - Cormorant Garamond */}
            <h1 
              className={`font-display font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white leading-[1.1] mb-6 transition-all duration-500 ease-out motion-reduce:transition-none ${
                isPageReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Ohio Families Trust Us to Protect What Matters Most
            </h1>

            {/* Subheadline - Body text, larger size */}
            <p 
              className={`font-body text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl mb-8 transition-all duration-500 ease-out motion-reduce:transition-none ${
                isPageReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isPageReady ? "75ms" : "0ms" }}
            >
              We compare rates from over 30 insurance companies so you don't have to. Call our office and you'll talk to Jeff or Natalie. That's the whole team.
            </p>

            {/* Trust Row - Horizontal with icons and dividers */}
            <div 
              className={`flex flex-wrap items-center gap-4 lg:gap-0 mb-8 transition-all duration-500 ease-out motion-reduce:transition-none ${
                isPageReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isPageReady ? "150ms" : "0ms" }}
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
              className={`flex flex-col sm:flex-row gap-4 mb-6 transition-all duration-500 ease-out motion-reduce:transition-none ${
                isPageReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isPageReady ? "225ms" : "0ms" }}
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
              className={`flex flex-wrap items-center gap-4 sm:gap-6 transition-all duration-500 ease-out motion-reduce:transition-none ${
                isPageReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isPageReady ? "300ms" : "0ms" }}
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

      </section>


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
                <Scale className="w-10 h-10 sm:w-12 sm:h-12 text-primary" strokeWidth={1.5} />
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
                <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-primary" strokeWidth={1.5} />
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
                <PhoneCall className="w-10 h-10 sm:w-12 sm:h-12 text-primary" strokeWidth={1.5} />
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
              
              {/* Panel 1 - Personal Insurance with prominent image */}
              <Link
                to="/personal-insurance"
                className="col-span-5 group relative z-20"
              >
                <div className="relative rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 min-h-[380px] flex flex-col overflow-hidden">
                  {/* Hidden img for preload scanner — forces early download */}
                  <img src={familyHomeService} alt="" aria-hidden="true" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none" />
                  {/* Full Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${familyHomeService})` }}
                  />
                  {/* Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />
                  
                  <div className="relative z-10 p-space-lg lg:p-space-xl flex flex-col justify-end h-full">
                    <h3 className="font-display font-semibold text-2xl lg:text-3xl text-white mb-space-sm">
                      Personal Insurance
                    </h3>
                    <p className="font-body text-cream/90 text-lg mb-space-md">
                      Protect your family, your home, and your future.
                    </p>
                    <p className="font-body text-sm text-cream/70 tracking-wide mb-space-md">
                      Auto • Home • Life • Umbrella • Renters
                    </p>
                    <span className="inline-flex items-center gap-2 font-body font-medium text-white group-hover:gap-3 transition-all duration-300">
                      Explore Personal Coverage
                      <span className="text-lg">→</span>
                    </span>
                  </div>
                </div>
              </Link>

              {/* Panel 2 - Business Insurance with prominent image */}
              <Link
                to="/business-insurance"
                className="col-span-4 group relative z-10 lg:mt-16"
              >
                <div className="relative rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 min-h-[340px] flex flex-col overflow-hidden">
                  {/* Hidden img for preload scanner — forces early download */}
                  <img src={businessOffice} alt="" aria-hidden="true" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none" />
                  {/* Full Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${businessOffice})` }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
                  
                  <div className="relative z-10 p-space-lg flex flex-col justify-end h-full">
                    <h3 className="font-display font-semibold text-2xl text-white mb-space-sm">
                      Business Insurance
                    </h3>
                    <p className="font-body text-white/90 text-lg mb-space-md">
                      Risk management built around how you actually operate.
                    </p>
                    <p className="font-body text-sm text-white/70 tracking-wide mb-space-md">
                      Liability • Property • Workers' Comp • Commercial Auto
                    </p>
                    <span className="inline-flex items-center gap-2 font-body font-medium text-white group-hover:gap-3 transition-all duration-300">
                      Explore Business Coverage
                      <span className="text-lg">→</span>
                    </span>
                  </div>
                </div>
              </Link>

              {/* Panel 3 - Employee Benefits with prominent image */}
              <Link
                to="/employee-benefits"
                className="col-span-3 group relative z-0 lg:mt-32"
              >
                <div className="relative rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 min-h-[300px] flex flex-col overflow-hidden">
                  {/* Hidden img for preload scanner — forces early download */}
                  <img src={teamMeeting} alt="" aria-hidden="true" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none" />
                  {/* Full Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${teamMeeting})` }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30" />
                  
                  <div className="relative z-10 p-space-lg flex flex-col justify-end h-full">
                    <h3 className="font-display font-semibold text-xl text-white mb-space-sm">
                      Employee Benefits
                    </h3>
                    <p className="font-body text-white/90 mb-space-md">
                      Attract and keep great people with benefits that compete.
                    </p>
                    <p className="font-body text-xs text-white/70 tracking-wide leading-relaxed mb-space-sm">
                      Group Health • Dental & Vision • Life & Disability • 401(k)
                    </p>
                    <span className="inline-flex items-center gap-2 font-body font-medium text-sm text-white group-hover:gap-3 transition-all duration-300">
                      Explore Benefits
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Mobile Layout - Stacked with photos */}
            <div className="lg:hidden flex flex-col gap-space-md">
              {/* Mobile Panel 1 */}
              <Link to="/personal-insurance" className="group">
                <div className="relative rounded-lg shadow-lg overflow-hidden min-h-[200px] flex flex-col justify-end">
                  <img src={familyHomeService} alt="" aria-hidden="true" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none" />
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${familyHomeService})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30" />
                  <div className="relative z-10 p-space-lg">
                    <h3 className="font-display font-semibold text-2xl text-white mb-space-xs">
                      Personal Insurance
                    </h3>
                    <p className="font-body text-cream/90 mb-space-sm">
                      Protect your family, your home, and your future.
                    </p>
                    <p className="font-body text-xs text-cream/70 tracking-wide mb-space-md">
                      Auto • Home • Life • Umbrella • Renters
                    </p>
                    <span className="inline-flex items-center gap-2 font-body font-medium text-white">
                      Explore Coverage →
                    </span>
                  </div>
                </div>
              </Link>

              {/* Mobile Panel 2 */}
              <Link to="/business-insurance" className="group">
                <div className="relative rounded-lg shadow-lg overflow-hidden min-h-[200px] flex flex-col justify-end">
                  <img src={businessOffice} alt="" aria-hidden="true" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none" />
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${businessOffice})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
                  <div className="relative z-10 p-space-lg">
                    <h3 className="font-display font-semibold text-2xl text-white mb-space-xs">
                      Business Insurance
                    </h3>
                    <p className="font-body text-white/90 mb-space-sm">
                      Risk management built around how you actually operate.
                    </p>
                    <p className="font-body text-xs text-white/70 tracking-wide mb-space-md">
                      Liability • Property • Workers' Comp • Commercial Auto
                    </p>
                    <span className="inline-flex items-center gap-2 font-body font-medium text-white">
                      Explore Coverage →
                    </span>
                  </div>
                </div>
              </Link>

              {/* Mobile Panel 3 */}
              <Link to="/employee-benefits" className="group">
                <div className="relative rounded-lg shadow-lg overflow-hidden min-h-[200px] flex flex-col justify-end">
                  <img src={teamMeeting} alt="" aria-hidden="true" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none" />
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${teamMeeting})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30" />
                  <div className="relative z-10 p-space-lg">
                    <h3 className="font-display font-semibold text-2xl text-white mb-space-xs">
                      Employee Benefits
                    </h3>
                    <p className="font-body text-white/90 mb-space-sm">
                      Attract and keep great people with benefits that compete.
                    </p>
                    <p className="font-body text-xs text-white/70 tracking-wide mb-space-md">
                      Group Health • Dental & Vision • Life & Disability • 401(k)
                    </p>
                    <span className="inline-flex items-center gap-2 font-body font-medium text-white">
                      Explore Benefits →
                    </span>
                  </div>
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
