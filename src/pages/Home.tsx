import { Link } from "react-router-dom";
import { Phone, ArrowRight, Star, Scale, ShieldCheck, PhoneCall, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { usePageReady } from "@/components/Layout";


import heroFamily from "@/assets/hero-family.jpg";
import personalCoverage from "@/assets/personal-coverage-new.jpg";
import businessCoverage from "@/assets/business-coverage-new.jpg";
import benefitsCoverage from "@/assets/benefits-coverage-new.jpg";
import { useEffect } from "react";

const Home = () => {
  const isPageReady = usePageReady();


  return (
    <>
      {/* Hero Section - Split Layout */}
      <section className="relative bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative lg:grid lg:grid-cols-2 lg:min-h-[85vh]">
            
            {/* Image Panel - desktop only (split layout) */}
            <div className="hidden lg:flex lg:order-2 items-center justify-center py-24 px-10">
              <div className="relative w-full rounded-2xl overflow-hidden border border-gold-500/30 shadow-[0_8px_40px_-12px_rgba(139,41,66,0.25)]">
                <img

                  alt="Happy family with their dog"
                  className="w-full h-auto rounded-2xl object-cover object-center" src={heroFamily} />
                
              </div>
            </div>

            {/* Mobile/Tablet: Card Stack layout */}
            <div className="lg:hidden">
              {/* Headline on top */}
              <div className="px-6 sm:px-10 pt-28 sm:pt-32 pb-6 text-center">
                <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground leading-[1.1] mb-6 text-balance">
                  Secure Your Peace of Mind
                </h1>
                <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
              </div>

              {/* Photo Card in the middle */}
              <div className="mx-5 sm:mx-8">
                <div className="rounded-2xl overflow-hidden border-2 border-gold-500/40 shadow-lg">
                  <img
                    src={heroFamily}
                    alt="Happy family with their dog"
                    className="w-full aspect-[16/10] sm:aspect-[16/9] object-cover object-[30%_center]" />
                  
                </div>
              </div>

              {/* Subtext + CTAs on bottom */}
              <div className="px-6 sm:px-10 pt-8 pb-12 sm:pb-16 text-center">
                <p className="font-body text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                  At Scioto Insurance Group, we embrace a family approach through tailoring coverage to your unique story.
                </p>

                <div className="flex flex-col sm:flex-row sm:justify-center gap-4 mb-6">
                  <Button asChild size="lg" className="w-full sm:w-auto text-base">
                    <Link to="/get-quote">
                      Get Your Free Quote
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <a href="tel:6146120050">
                      <Phone className="w-5 h-5" />
                      Give Us a Call
                    </a>
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) =>
                    <Star key={i} className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                    )}
                  </div>
                  <span className="text-xs font-body">Independent Agency · Est. 1995</span>
                </div>
              </div>
            </div>

            {/* Desktop Text Panel */}
            <div className="hidden lg:flex flex-col justify-center items-start text-left px-16 pt-40 pb-20 lg:order-1">
              <h1 className="font-semibold text-foreground leading-[1.1] mb-6 font-sans text-5xl">
                Secure Your Peace of Mind
              </h1>

              <p className="font-body text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
                At Scioto Insurance Group, we embrace a family approach through tailoring coverage to your unique story.
              </p>

              {/* Dual CTAs */}
              <div className="flex flex-row gap-4 mb-6">
                <Button asChild size="lg" className="text-base">
                  <Link to="/get-quote">
                    Get Your Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href="tel:6146120050">
                    <Phone className="w-5 h-5" />
                    Give Us a Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Scioto Insurance Group Section */}
      <section className="relative py-16 sm:py-space-3xl bg-secondary overflow-hidden">
        {/* Subtle radial glow background */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, hsl(345 55% 34% / 0.04), transparent 60%)' }} />
        
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-space-md lg:px-space-lg">
          {/* Section Header */}
          <AnimatedSection animation="fade-up" className="text-center mb-10 sm:mb-space-xl">
            <div className="w-12 h-1 bg-primary mx-auto mb-4 sm:mb-space-md rounded-full" />
            
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-[52px] text-foreground leading-[1.1] mb-4 sm:mb-space-sm">
              Why Work With Scioto Insurance Group?
            </h2>
            <p className="font-body text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed font-medium">
              We are a local, family-owned insurance agency that brings 32+ years of industry experience as trusted advisors. From businesses to families, we are dedicated to providing personalized solutions to help secure your peace of mind.
            </p>
          </AnimatedSection>

          {/* Value Proposition Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-space-md mb-10 sm:mb-space-xl items-stretch">
            {/* Card 1 - Independent */}
            <AnimatedSection animation="fade-up" delay={0} className="relative bg-card rounded-lg border-t-[3px] border-t-primary/60 p-7 sm:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-[transform,box-shadow] duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-burgundy-100 to-primary/10 flex items-center justify-center border border-primary/20 mb-5">
                <Scale className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-semibold text-xl sm:text-2xl text-foreground tracking-tight mb-2 sm:mb-space-sm">
                We Are Independent!
              </h3>
              <ul className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed space-y-1.5">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />We represent multiple insurance companies.</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />We are licensed insurance advisors.</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />We are by your side every step of the way.</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />We offer a wide variety of insurance solutions.</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />We are there for you in your time of need.</li>
              </ul>
              <Link to="/about" className="inline-flex items-center gap-1.5 text-primary text-sm font-medium mt-5 hover:gap-2.5 transition-[gap] duration-200">
                Learn more <span>→</span>
              </Link>
            </AnimatedSection>

            {/* Card 2 - Family Owned (Featured Center) */}
            <AnimatedSection animation="fade-up" delay={100} className="relative bg-card rounded-lg border-t-[3px] border-t-primary/60 p-7 sm:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-[transform,box-shadow] duration-300 lg:scale-[1.03] lg:shadow-md lg:z-10">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-burgundy-100 to-primary/10 flex items-center justify-center border border-primary/20 mb-5">
                <ShieldCheck className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-semibold text-xl sm:text-2xl text-foreground tracking-tight mb-2 sm:mb-space-sm">
                Family Owned Agency
              </h3>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                As a family-owned agency, we treat you like one of our own by deeply understanding your unique story to provide the precise protection you deserve. You can count on us to be there with the same care and dedication we would show our own family, ensuring you never feel like just a policy number.
              </p>
              <Link to="/about" className="inline-flex items-center gap-1.5 text-primary text-sm font-medium mt-5 hover:gap-2.5 transition-[gap] duration-200">
                Learn more <span>→</span>
              </Link>
            </AnimatedSection>

            {/* Card 3 - Human */}
            <AnimatedSection animation="fade-up" delay={200} className="relative bg-card rounded-lg border-t-[3px] border-t-primary/60 p-7 sm:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-[transform,box-shadow] duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-burgundy-100 to-primary/10 flex items-center justify-center border border-primary/20 mb-5">
                <PhoneCall className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-semibold text-xl sm:text-2xl text-foreground tracking-tight mb-2 sm:mb-space-sm">
                Client-First Approach
              </h3>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                We embrace a client first approach, where our commitment is providing you with the peace of mind that comes from knowing your coverage is tailored specifically to you. When you choose us, you are choosing a partner who is dedicated to your success and security, every step of the way.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-1.5 text-primary text-sm font-medium mt-5 hover:gap-2.5 transition-[gap] duration-200">
                Learn more <span>→</span>
              </Link>
            </AnimatedSection>
          </div>

          {/* Bottom CTA with Social Proof */}
          <AnimatedSection animation="fade-up" delay={300} className="text-center">
            <p className="font-body text-muted-foreground mb-4">
              Become part of the Scioto Insurance Group family today.
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) =>
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  )}
                </div>
                <span className="text-sm font-medium text-foreground">5.0 on Google</span>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-primary text-primary font-body font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                
                Learn More
                <span>→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Overview Section — Option A: Split Photo/Text Cards */}
      <section className="py-space-2xl bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-space-md lg:px-space-lg">

          {/* Section Header */}
          <AnimatedSection animation="fade-up" className="mb-10 sm:mb-12">
            <div className="w-10 h-0.5 bg-primary mb-4" />
            <h2 className="font-display font-semibold text-3xl lg:text-[42px] text-foreground leading-[1.2]">
              Coverage for Every Chapter
            </h2>
          </AnimatedSection>

          {/* Split Cards Stack */}
          <div className="flex flex-col gap-6">

            {/* Card 1 — Personal Insurance */}
            <AnimatedSection animation="fade-up" delay={50}>
              <Link to="/personal-insurance" className="group block">
                {/* Desktop: side-by-side | Mobile: stacked */}
                <div className="flex flex-col lg:flex-row lg:h-[360px] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-[transform,box-shadow] duration-300 relative">
                  {/* Burgundy accent bar — top of card */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary z-10" />

                  {/* Left: Photo Panel */}
                  <div className="relative w-full lg:w-[45%] flex-shrink-0 aspect-[16/10] lg:aspect-auto lg:h-auto overflow-hidden">
                    <img
                      src={personalCoverage}
                      alt="Family enjoying time together"
                      loading="lazy"
                      className="w-full h-full object-cover lg:group-hover:scale-105 transition-transform duration-500" />
                    
                    {/* Right-edge fade into text panel (desktop only) */}
                    <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-white" />
                  </div>

                  {/* Right: Text Panel */}
                  <div className="flex-1 bg-white flex flex-col justify-center px-8 py-8 lg:px-12 lg:py-10">
                    <p className="font-body text-xs font-semibold tracking-widest text-accent uppercase mb-3">
                      Personal Coverage
                    </p>
                    <h3 className="font-display font-semibold text-2xl lg:text-[28px] text-foreground mb-3 leading-[1.2]">
                      Personal Insurance
                    </h3>
                    <p className="font-body text-muted-foreground text-base leading-relaxed mb-5">
                      We work with our select carriers to tailor coverage specific to your insurance needs.
                    </p>
                    <ul className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6">
                      {["Auto Insurance", "Home Insurance", "Life Insurance", "Umbrella & many more\u2026"].map((item) =>
                      <li key={item} className="flex items-center gap-2 font-body text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          {item}
                        </li>
                      )}
                    </ul>
                    <span className="inline-flex items-center gap-2 font-body font-semibold text-primary text-sm">
                      Explore Personal Coverage
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Card 2 — Business Insurance */}
            <AnimatedSection animation="fade-up" delay={150}>
              <Link to="/business-insurance" className="group block">
                <div className="flex flex-col lg:flex-row lg:h-[360px] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-[transform,box-shadow] duration-300 relative">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary z-10" />

                  {/* Left: Photo Panel */}
                  <div className="relative w-full lg:w-[45%] flex-shrink-0 aspect-[16/10] lg:aspect-auto lg:h-auto overflow-hidden">
                    <img
                      src={businessCoverage}
                      alt="Business professionals at work"
                      loading="lazy"
                      className="w-full h-full object-cover lg:group-hover:scale-105 transition-transform duration-500" />
                    
                    <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-white" />
                  </div>

                  {/* Right: Text Panel */}
                  <div className="flex-1 bg-white flex flex-col justify-center px-8 py-8 lg:px-12 lg:py-10">
                    <p className="font-body text-xs font-semibold tracking-widest text-accent uppercase mb-3">
                      Business Coverage
                    </p>
                    <h3 className="font-display font-semibold text-2xl lg:text-[28px] text-foreground mb-3 leading-[1.2]">
                      Business Insurance
                    </h3>
                    <p className="font-body text-muted-foreground text-base leading-relaxed mb-5">
                      Risk management and insurance solutions tailored to your business.
                    </p>
                    <ul className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6">
                      {["General Liability", "Commercial Property", "Business Owners Coverage", "Cyber Liability"].map((item) =>
                      <li key={item} className="flex items-center gap-2 font-body text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          {item}
                        </li>
                      )}
                    </ul>
                    <span className="inline-flex items-center gap-2 font-body font-semibold text-primary text-sm">
                      Explore Business Coverage
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Card 3 — Employee Benefits */}
            <AnimatedSection animation="fade-up" delay={250}>
              <Link to="/employee-benefits" className="group block">
                <div className="flex flex-col lg:flex-row lg:h-[360px] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-[transform,box-shadow] duration-300 relative">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary z-10" />

                  {/* Left: Photo Panel */}
                  <div className="relative w-full lg:w-[45%] flex-shrink-0 aspect-[16/10] lg:aspect-auto lg:h-auto overflow-hidden">
                    <img
                      src={benefitsCoverage}
                      alt="Couple reviewing benefits options"
                      loading="lazy"
                      className="w-full h-full object-cover lg:group-hover:scale-105 transition-transform duration-500" />
                    
                    <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-white" />
                  </div>

                  {/* Right: Text Panel */}
                  <div className="flex-1 bg-white flex flex-col justify-center px-8 py-8 lg:px-12 lg:py-10">
                    <p className="font-body text-xs font-semibold tracking-widest text-accent uppercase mb-3">
                      Employee Benefits
                    </p>
                    <h3 className="font-display font-semibold text-2xl lg:text-[28px] text-foreground mb-3 leading-[1.2]">
                      Employee Benefits
                    </h3>
                    <p className="font-body text-muted-foreground text-base leading-relaxed mb-5">
                      With benefit costs climbing and employee expectations higher than ever, we can help bridge the gap by tailoring a benefits package that makes sense for everyone involved.
                    </p>
                    <ul className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6">
                      {["Group Health Benefits", "Group Vision", "Group Dental", "Disability and more\u2026"].map((item) =>
                      <li key={item} className="flex items-center gap-2 font-body text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          {item}
                        </li>
                      )}
                    </ul>
                    <span className="inline-flex items-center gap-2 font-body font-semibold text-primary text-sm">
                      Explore Benefits
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 sm:py-28 bg-primary relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, hsl(345 55% 40% / 0.4), transparent 60%)' }} />
        
        <AnimatedSection animation="fade-up" className="relative max-w-[800px] mx-auto px-4 sm:px-space-md lg:px-space-lg text-center">
          {/* Gold accent bar */}
          <div className="w-12 h-1 bg-accent mx-auto mb-6 rounded-full" />
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] mb-4 sm:mb-space-md">
            Interested in a Free Risk Assessment?
          </h2>

          <p className="font-body text-lg sm:text-xl text-white/80 mb-8 sm:mb-10 max-w-[600px] mx-auto leading-relaxed">
            We'll review your current coverage to identify any gaps and explore more comprehensive options that fit your needs. Get a free quote today and see if we can offer a better solution.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-space-md mb-6">
            <Link
              to="/get-quote"
              className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 rounded-lg bg-white text-primary font-body font-semibold text-base transition-[transform,opacity,box-shadow] duration-300 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] motion-reduce:hover:translate-y-0">
              
              Get Your Free Quote
            </Link>
            
            <a
              href="tel:6146120050"
              className="inline-flex items-center gap-2 py-3 font-body font-medium text-white/90 hover:text-white transition-colors duration-200">
              
              <Phone className="w-4 h-4" />
              Or call us: (614) 612-0050
            </a>
          </div>
        </AnimatedSection>
      </section>
    </>);

};

export default Home;