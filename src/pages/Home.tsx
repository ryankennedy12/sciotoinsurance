import { Link } from "react-router-dom";
import { Phone, ArrowRight, Star, Scale, ShieldCheck, PhoneCall, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { usePageReady } from "@/components/Layout";

import TestimonialCard from "@/components/TestimonialCard";
import heroSplit from "@/assets/hero-split.jpg";
import familyHomeService from "@/assets/family-home-service.jpg";
import businessOffice from "@/assets/business-office.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
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
            <div className="hidden lg:block lg:order-2 overflow-hidden">
              <img
                src={heroSplit}
                alt="Ohio family in front of their home"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Text Panel */}
            <div className="relative flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 sm:px-10 lg:px-16 py-16 lg:py-20 min-h-[85svh] lg:min-h-0 lg:order-1">
              {/* Mobile/Tablet background image + overlay */}
              <div className="absolute inset-0 lg:hidden">
                <img
                  src={heroSplit}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover object-[30%_center]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/95 via-burgundy-900/75 to-burgundy-800/50" />
              </div>
              {/* Main Headline */}
              {/* Content wrapper above background */}
              <div className="relative z-10 flex flex-col items-center lg:items-start justify-center w-full flex-1">
              <h1 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white lg:text-foreground leading-[1.1] mb-6">
                Ohio Families Trust Us to Protect What Matters Most
              </h1>

              {/* Subheadline */}
              <p className="font-body text-lg sm:text-xl lg:text-2xl text-white/85 lg:text-muted-foreground leading-relaxed max-w-2xl mb-8">
                We compare rates from over 30 insurance companies so you don't have to. Call our office and you'll talk to Jeff or Natalie. That's the whole team.
              </p>

              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 mb-6">
                <Link
                  to="/get-quote"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-base transition-[transform,box-shadow,background-color] duration-300 hover:bg-burgundy-800 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
                >
                  Get Your Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:6146120050"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-white text-white lg:bg-card lg:text-primary lg:border-primary font-body font-semibold text-base transition-[transform,box-shadow,background-color,color] duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary active:scale-[0.98]"
                >
                  <Phone className="w-5 h-5" />
                  Talk to a Real Person
                </a>
              </div>

              </div> {/* end z-10 wrapper */}
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
            <AnimatedSection animation="fade-up" delay={0} className="bg-card rounded-lg p-5 sm:p-space-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-[transform,box-shadow] duration-300">
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
            <AnimatedSection animation="fade-up" delay={100} className="bg-card rounded-lg p-5 sm:p-space-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-[transform,box-shadow] duration-300">
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
            <AnimatedSection animation="fade-up" delay={200} className="bg-card rounded-lg p-5 sm:p-space-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-[transform,box-shadow] duration-300 sm:col-span-2 md:col-span-1">
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
              className="inline-flex items-center gap-1 font-body font-medium text-primary hover:underline transition-[opacity] duration-300"
            >
              See Our Reviews
              <span className="text-lg">→</span>
            </Link>
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
            <p className="font-body text-muted-foreground mt-2 text-lg">
              Personal, business, or benefits — we'll find the right fit from 30+ carriers.
            </p>
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
                  <div className="relative w-full lg:w-[45%] flex-shrink-0 h-48 lg:h-auto overflow-hidden">
                    <img
                      src={familyHomeService}
                      alt="Ohio family at home"
                      loading="lazy"
                      className="w-full h-full object-cover lg:group-hover:scale-105 transition-transform duration-500"
                    />
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
                      Protect your family, your home, and your future. We shop 30+ carriers to find coverage that actually fits your life and your budget.
                    </p>
                    <ul className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6">
                      {["Auto Insurance", "Home Insurance", "Life Insurance", "Umbrella & Renters"].map((item) => (
                        <li key={item} className="flex items-center gap-2 font-body text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
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
                  <div className="relative w-full lg:w-[45%] flex-shrink-0 h-48 lg:h-auto overflow-hidden">
                    <img
                      src={businessOffice}
                      alt="Business professional in office"
                      loading="lazy"
                      className="w-full h-full object-cover lg:group-hover:scale-105 transition-transform duration-500"
                    />
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
                      Risk management built around how you actually operate. From small startups to established Ohio businesses, we've got you covered.
                    </p>
                    <ul className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6">
                      {["General Liability", "Commercial Property", "Workers' Compensation", "Cyber Liability"].map((item) => (
                        <li key={item} className="flex items-center gap-2 font-body text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
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
                  <div className="relative w-full lg:w-[45%] flex-shrink-0 h-48 lg:h-auto overflow-hidden">
                    <img
                      src={teamMeeting}
                      alt="Team meeting discussing employee benefits"
                      loading="lazy"
                      className="w-full h-full object-cover lg:group-hover:scale-105 transition-transform duration-500"
                    />
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
                      Attract and keep great people with benefits that actually compete. We'll help you build a package your team will value.
                    </p>
                    <ul className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6">
                      {["Group Health Insurance", "Dental & Vision", "Life & Disability", "401(k) & Retirement"].map((item) => (
                        <li key={item} className="flex items-center gap-2 font-body text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
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
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 py-4 rounded bg-primary text-primary-foreground font-body font-medium text-base transition-[transform,opacity,box-shadow,background-color] duration-300 hover:bg-burgundy-800 active:scale-[0.98] hover:-translate-y-0.5 hover:shadow-xl motion-reduce:hover:translate-y-0"
            >
              Get Your Free Quote
            </Link>
            
            <a
              href="tel:6146120050"
              className="inline-flex items-center gap-2 py-3 font-body font-medium text-primary hover:underline transition-[opacity] duration-300"
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
