import { Link } from "react-router-dom";
import { Phone, ArrowRight, Star, CheckCircle, Shield, HardHat, Building2, Truck, Scale, Lock, Car, Briefcase, UtensilsCrossed, ShoppingBag, Stethoscope, Factory, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { businessInsuranceProducts } from "@/data/products";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

import columbusSkyline from "@/assets/columbus-skyline.jpg";
import industryContractors from "@/assets/industry-contractors.jpg";
import industryRestaurants from "@/assets/industry-restaurants.jpg";
import industryRetail from "@/assets/industry-retail.jpg";
import industryHealthcare from "@/assets/industry-healthcare.jpg";
import industryTransportation from "@/assets/industry-transportation.jpg";
import industryManufacturing from "@/assets/industry-manufacturing.jpg";
import industryProfessional from "@/assets/industry-professional.jpg";
import industryTrades from "@/assets/industry-trades.jpg";

const industries = [
  { name: "Contractors", icon: HardHat, image: industryContractors, description: "General liability, tools coverage, workers' comp.", backDescription: "General liability, tools & equipment, workers' comp — built for the jobsite.", tagline: "Coverage that works as hard as you do" },
  { name: "Restaurants", icon: UtensilsCrossed, image: industryRestaurants, description: "Liquor liability, food spoilage, property protection.", backDescription: "Liquor liability, food spoilage, kitchen fires — we know the risks.", tagline: "From front-of-house to back-of-house" },
  { name: "Retail", icon: ShoppingBag, image: industryRetail, description: "Inventory protection, customer liability, theft coverage.", backDescription: "Inventory protection, customer liability, theft — keep your doors open.", tagline: "Protect your storefront and your margins" },
  { name: "Healthcare", icon: Stethoscope, image: industryHealthcare, description: "Malpractice, HIPAA compliance, specialized coverage.", backDescription: "Malpractice, HIPAA compliance, specialized professional coverage.", tagline: "Compliance-ready coverage for your practice" },
  { name: "Transportation", icon: Truck, image: industryTransportation, description: "Fleet coverage, cargo insurance, driver protection.", backDescription: "Fleet coverage, cargo insurance, driver protection for every mile.", tagline: "Keep your fleet on the road" },
  { name: "Manufacturing", icon: Factory, image: industryManufacturing, description: "Equipment breakdown, product liability, workplace safety.", backDescription: "Equipment breakdown, product liability, workplace safety programs.", tagline: "Engineered coverage for your operation" },
  { name: "Professional", icon: Briefcase, image: industryProfessional, description: "E&O coverage, cyber liability, professional indemnity.", backDescription: "E&O, cyber liability, professional indemnity for knowledge workers.", tagline: "Protect your reputation and your clients" },
  { name: "Trades", icon: Wrench, image: industryTrades, description: "Tools, vehicles, liability for HVAC, plumbing, electrical.", backDescription: "Tools, vehicles, and liability for HVAC, plumbing, and electrical pros.", tagline: "Built for the trades, priced for your budget" },
];

const ROTATIONS = [-2.5, 1.5, -1, 3, -2, 1, -3, 2];

const PolaroidCard = ({
  industry,
  index,
  isFlipped,
  onFlip,
  isMobile,
}: {
  industry: typeof industries[0];
  index: number;
  isFlipped: boolean;
  onFlip: () => void;
  isMobile: boolean;
}) => {
  const Icon = industry.icon;
  const rotation = isMobile ? 0 : ROTATIONS[index % ROTATIONS.length];

  return (
    <div
      className="group/polaroid"
      style={{ perspective: "1000px" }}
    >
      {/* Accessible hidden content for screen readers */}
      <div className="sr-only">
        <h3>{industry.name}</h3>
        <p>{industry.description}</p>
        <p>{industry.backDescription}</p>
        <p>{industry.tagline}</p>
      </div>

      <button
        onClick={onFlip}
        aria-label={`${isFlipped ? "Flip back" : "Flip to see"} ${industry.name} case study`}
        className="w-full focus-ring rounded-sm"
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        <div
          className="polaroid-inner relative w-full transition-all duration-500 ease-in-out"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotate(${isFlipped ? 0 : rotation}deg) ${isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"}`,
            aspectRatio: "3 / 4",
          }}
        >
          {/* ===== FRONT ===== */}
          <div
            className="absolute inset-0 bg-white p-2 rounded-sm shadow-md transition-shadow duration-300 group-hover/polaroid:shadow-xl"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {/* Photo */}
            <div className="relative w-full h-[70%] overflow-hidden rounded-[1px]">
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Vignette */}
              <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 40px 10px rgba(0,0,0,0.15)" }} />
            </div>
            {/* Caption strip */}
            <div className="flex flex-col items-center justify-center h-[30%] px-2">
              <span className="font-display italic text-base sm:text-lg text-foreground leading-tight">{industry.name}</span>
            </div>
          </div>

          {/* ===== BACK ===== */}
          <div
            className="absolute inset-0 bg-primary rounded-sm shadow-xl p-5 flex flex-col items-center justify-center text-center"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <p className="font-display italic text-sm sm:text-base text-primary-foreground/90 leading-relaxed mb-4">
              {industry.backDescription}
            </p>
            <div className="w-10 h-0.5 bg-accent mb-3" />
            <span className="text-sm font-semibold text-accent">{industry.tagline}</span>
            <div className="mt-4">
              <Link
                to="/get-quote"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-foreground/80 bg-primary-foreground/10 px-3 py-1.5 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                Get Quote <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

const testimonials = [
  { quote: "They understood our industry from day one. No explaining what general contractors actually do.", name: "Robert M.", location: "Columbus, OH", date: "November 2024", rating: 5, helpedWith: "Contractor Insurance" },
  { quote: "When we had a break-in, they were at our store the next morning.", name: "Lisa P.", location: "Worthington, OH", date: "October 2024", rating: 5, helpedWith: "Commercial Property Claim" },
  { quote: "An agent who doesn't just sell policies but actually helps us understand our risks.", name: "David K.", location: "Dublin, OH", date: "September 2024", rating: 5, helpedWith: "Business Insurance Review" },
];

const stats = [
  { value: "300+", label: "Businesses Protected", description: "Ohio companies trust us with their coverage." },
  { value: "30+", label: "Carrier Partners", description: "We shop the market so you don't have to." },
  { value: "Same Day", label: "Response Time", description: "Real people. No phone trees. Right here in Columbus." },
];

const BusinessInsurance = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const allProducts = businessInsuranceProducts.flatMap((cat) => cat.products);

  return (
    <div className="min-h-screen bg-background">
      {/* Section 1: Half-Reveal Photo Hero */}
      <section className="relative min-h-[70vh] lg:min-h-[85vh] overflow-hidden">
        {/* Background photo */}
        <img
          src={columbusSkyline}
          alt="Columbus Ohio skyline"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Desktop: partial cream fade */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-[60%]" style={{ background: 'linear-gradient(to right, hsl(30 20% 98% / 0.98) 0%, hsl(30 20% 98% / 0.96) 55%, hsl(30 20% 98% / 0.8) 80%, hsl(30 20% 98% / 0) 100%)' }} />
        {/* Tablet: stronger overlay since text spans more of the width */}
        <div className="hidden sm:block lg:hidden absolute inset-y-0 left-0 w-[75%]" style={{ background: 'linear-gradient(to right, hsl(30 20% 98% / 0.98) 0%, hsl(30 20% 98% / 0.97) 60%, hsl(30 20% 98% / 0.85) 85%, hsl(30 20% 98% / 0) 100%)' }} />
        {/* Mobile: full overlay */}
        <div className="absolute inset-0 sm:hidden" style={{ background: 'linear-gradient(to bottom, hsl(30 20% 98% / 0) 0%, hsl(30 20% 98% / 0.3) 15%, hsl(30 20% 98% / 0.85) 40%, hsl(30 20% 98% / 0.98) 55%, hsl(30 20% 98% / 1) 100%)' }} />

        {/* Content */}
        <div className="relative z-10 container-wide h-full min-h-[70vh] lg:min-h-[85vh] flex items-center">
          <div className="px-6 sm:px-8 lg:px-0 py-24 lg:py-32 max-w-xl lg:max-w-2xl">
            <AnimatedSection animation="fade-up">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-6 block">
                Business Insurance
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
                Protect What<br />You've Built
              </h1>
              <div className="w-16 h-0.5 bg-accent mb-6" />
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                From startups to established enterprises, we craft coverage that grows with your business—shopping 30+ carriers to find the right fit.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Button asChild size="lg">
                  <Link to="/get-quote">Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <a
                  href="tel:6146120050"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors py-3 px-1"
                >
                  <Phone className="h-4 w-4" />
                  (614) 612-0050
                </a>
              </div>
              <div className="flex flex-wrap gap-6 pt-8 border-t border-border">
                {["300+ Businesses", "29 Years Experience", "A+ BBB Rating"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-muted-foreground text-sm">{badge}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 2: Polaroid Cards — Industries We Serve */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3 block">Industries We Serve</span>
            <h2 className="heading-lg text-foreground">Coverage Built for<br className="hidden sm:inline" /> Your Industry</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">Tap a card to see what we cover.</p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {industries.map((industry, i) => (
                <PolaroidCard
                  key={industry.name}
                  industry={industry}
                  index={i}
                  isFlipped={flippedCard === i}
                onFlip={() => setFlippedCard(flippedCard === i ? null : i)}
                  isMobile={isMobile}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3: Coverage Grid (Icon Cards on Cream) */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3 block">What We Cover</span>
            <h2 className="heading-lg text-foreground">Business Coverage Options</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {allProducts.map((product, i) => {
              const Icon = product.icon;
              return (
                <AnimatedSection key={product.name} animation="fade-up" delay={i * 50}>
                  <Link
                    to={product.slug ? `/business-insurance/${product.slug}` : "/get-quote"}
                    className="group block bg-card rounded-xl border border-border p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg h-full"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    {product.description && (
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                    )}
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                      Learn More <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Risk Assessment CTA (Burgundy Banner) */}
      <section className="section-padding bg-primary relative overflow-hidden">
        {/* Radial glow */}
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at 30% 50%, hsl(345 55% 50%), transparent 60%)' }} />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-up">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">Free Assessment</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
                Free Business<br />Risk Assessment
              </h2>
              <p className="text-primary-foreground/60 mb-8 leading-relaxed">
                We'll analyze your operations and identify coverage gaps—even if you don't buy from us.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Coverage gap analysis", "Industry-specific review", "Claims scenario planning", "Pricing comparison"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-primary-foreground/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={150}>
              <div className="bg-card rounded-xl p-8 shadow-2xl">
                <h3 className="font-display font-semibold text-xl text-foreground mb-2">Request Your Assessment</h3>
                <p className="text-muted-foreground text-sm mb-6">No obligation. We'll review your current coverage and show you where you stand.</p>
                <Button asChild size="lg" className="w-full mb-4">
                  <Link to="/contact">Schedule Free Assessment <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <div className="text-center">
                  <span className="text-muted-foreground text-sm">Or call us directly:</span>
                  <a href="tel:6146120050" className="block text-lg font-semibold text-primary hover:text-primary/80 mt-1">(614) 612-0050</a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 5: Why Choose Scioto (Three Stat Blocks) */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="heading-lg text-foreground">Why Businesses Choose Scioto</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="grid sm:grid-cols-3 gap-8 lg:gap-0">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`text-center px-6 lg:px-10 ${
                    i < stats.length - 1 ? "sm:border-r sm:border-border" : ""
                  }`}
                >
                  <div className="text-4xl sm:text-5xl font-display font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                Learn More About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 6: Featured Testimonial (Single Quote) */}
      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <AnimatedSection animation="fade-up">
            <div className="bg-card rounded-xl p-8 sm:p-10 border-l-4 border-l-primary border border-border">
              <div className="flex gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="font-display italic text-xl sm:text-2xl text-foreground leading-relaxed mb-6">
                "{testimonials[0].quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display font-semibold text-sm text-primary">
                  {testimonials[0].name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">{testimonials[0].name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonials[0].location} · {testimonials[0].date}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Helped with: <span className="text-primary font-medium">{testimonials[0].helpedWith}</span>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 7: Two Paths CTA */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3 block">Next Steps</span>
            <h2 className="heading-lg text-foreground">Two Ways to Get Started</h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Path A: Direct */}
              <div className="bg-card rounded-xl border border-border p-8 sm:p-10 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">I Know What I Need</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Skip the small talk. Tell us about your business and we'll have a custom quote ready within 24 hours.
                </p>
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link to="/get-quote">Get My Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <p className="text-xs text-muted-foreground mt-4">Average response: 4 hours</p>
              </div>

              {/* Path B: Consultative */}
              <div className="bg-primary rounded-xl p-8 sm:p-10 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <h3 className="text-2xl font-display font-bold text-primary-foreground mb-4">I'm Not Sure Yet</h3>
                <p className="text-primary-foreground/70 leading-relaxed mb-6">
                  No problem. We'll walk you through a free risk assessment and show you exactly where you're covered — and where you're exposed.
                </p>
                <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Link to="/contact">Schedule Free Assessment <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <div className="mt-4 flex flex-col gap-1">
                  <a href="tel:6146120050" className="text-sm text-primary-foreground/60 hover:text-primary-foreground/80 transition-colors">
                    or call: <span className="font-semibold">(614) 612-0050</span>
                  </a>
                  <p className="text-xs text-primary-foreground/50">100% free. No obligation.</p>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              Not ready? That's okay too. Bookmark us — we'll be here.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default BusinessInsurance;
