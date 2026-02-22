import { Link } from "react-router-dom";
import { Phone, ArrowRight, Star, CheckCircle, Shield, HardHat, Building2, Truck, Scale, Lock, Car, Briefcase, UtensilsCrossed, ShoppingBag, Stethoscope, Factory, Wrench, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { businessInsuranceProducts } from "@/data/products";
import { useState } from "react";

import columbusSkyline from "@/assets/columbus-skyline.jpg";
import constructionSite from "@/assets/construction-site.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import retailStore from "@/assets/retail-store.jpg";
import healthcareClinic from "@/assets/healthcare-clinic.jpg";
import businessOffice from "@/assets/business-office.jpg";
import transportationFleet from "@/assets/transportation-fleet.jpg";
import manufacturingFacility from "@/assets/manufacturing-facility.jpg";
import professionalServices from "@/assets/professional-services.jpg";

const industries = [
  { name: "Contractors", icon: HardHat, image: constructionSite, location: "Hilliard", pinX: 28, pinY: 48, description: "General liability, tools coverage, workers' comp.", caseStudy: "We helped Smith Roofing reduce their Workers' Comp by 18%.", savings: "$4,800/yr saved" },
  { name: "Restaurants", icon: UtensilsCrossed, image: restaurantInterior, location: "Short North", pinX: 52, pinY: 42, description: "Liquor liability, food spoilage, property protection.", caseStudy: "After a kitchen fire, we helped Mario's Pizza get their claim paid in 11 days.", savings: "Claim paid in 11 days" },
  { name: "Retail", icon: ShoppingBag, image: retailStore, location: "Easton", pinX: 68, pinY: 35, description: "Inventory protection, customer liability, theft coverage.", caseStudy: "A local boutique saved $3,200/year after we found gaps in their policy.", savings: "$3,200/yr saved" },
  { name: "Healthcare", icon: Stethoscope, image: healthcareClinic, location: "Dublin", pinX: 32, pinY: 28, description: "Malpractice, HIPAA compliance, specialized coverage.", caseStudy: "We've insured 40+ Ohio medical practices with zero coverage disputes.", savings: "40+ practices" },
  { name: "Transportation", icon: Truck, image: transportationFleet, location: "Grove City", pinX: 38, pinY: 72, description: "Fleet coverage, cargo insurance, driver protection.", caseStudy: "A trucking company reduced their premium 22% by restructuring coverage.", savings: "22% premium cut" },
  { name: "Manufacturing", icon: Factory, image: manufacturingFacility, location: "Obetz", pinX: 56, pinY: 68, description: "Equipment breakdown, product liability, workplace safety.", caseStudy: "We helped a machine shop navigate an OSHA audit with full documentation.", savings: "Full OSHA compliance" },
  { name: "Professional", icon: Briefcase, image: professionalServices, location: "Downtown", pinX: 50, pinY: 50, description: "E&O coverage, cyber liability, professional indemnity.", caseStudy: "An accounting firm avoided a $500K lawsuit thanks to proper E&O coverage.", savings: "$500K loss prevented" },
  { name: "Trades", icon: Wrench, image: constructionSite, location: "Westerville", pinX: 58, pinY: 22, description: "Tools, vehicles, liability for HVAC, plumbing, electrical.", caseStudy: "A plumbing company saved $4,100/year after we bundled their policies.", savings: "$4,100/yr saved" },
];

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
  const [selectedIndustry, setSelectedIndustry] = useState<number | null>(null);
  const selected = selectedIndustry !== null ? industries[selectedIndustry] : null;

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

      {/* Section 2: Interactive Central Ohio Map */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3 block">Industries We Serve</span>
            <h2 className="heading-lg text-foreground">Protecting Businesses<br className="hidden sm:inline" /> Across Central Ohio</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">Click a pin to see how we've helped businesses in your area.</p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <div className="grid lg:grid-cols-5 gap-6 items-start">
              {/* Map area */}
              <div className="lg:col-span-3 relative">
                <div className="relative w-full aspect-[4/3] bg-secondary/30 rounded-2xl border border-border overflow-hidden">
                  {/* Stylized map background */}
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
                    {/* Abstract road grid representing Central Ohio */}
                    <rect width="100" height="100" fill="hsl(340 33% 96%)" />
                    {/* Major highways */}
                    <line x1="50" y1="0" x2="50" y2="100" stroke="hsl(0 0% 90%)" strokeWidth="0.8" />
                    <line x1="0" y1="50" x2="100" y2="50" stroke="hsl(0 0% 90%)" strokeWidth="0.8" />
                    <line x1="20" y1="0" x2="80" y2="100" stroke="hsl(0 0% 90%)" strokeWidth="0.5" />
                    <line x1="80" y1="0" x2="20" y2="100" stroke="hsl(0 0% 90%)" strokeWidth="0.5" />
                    {/* I-270 outer belt */}
                    <circle cx="50" cy="48" r="25" fill="none" stroke="hsl(0 0% 85%)" strokeWidth="0.6" strokeDasharray="2 1" />
                    {/* Downtown marker */}
                    <circle cx="50" cy="48" r="4" fill="hsl(345 55% 34% / 0.08)" stroke="hsl(345 55% 34% / 0.15)" strokeWidth="0.3" />
                    {/* "Columbus" label */}
                    <text x="50" y="57" textAnchor="middle" fontSize="3" fill="hsl(0 0% 55%)" fontFamily="Inter, sans-serif" fontWeight="600">COLUMBUS</text>
                  </svg>

                  {/* Industry pins */}
                  {industries.map((ind, i) => {
                    const Icon = ind.icon;
                    const isSelected = selectedIndustry === i;
                    return (
                      <button
                        key={ind.name}
                        onClick={() => setSelectedIndustry(isSelected ? null : i)}
                        className={`absolute z-10 group/pin transition-all duration-300 -translate-x-1/2 -translate-y-1/2 focus-ring rounded-full ${isSelected ? 'scale-125 z-20' : 'hover:scale-110'}`}
                        style={{ left: `${ind.pinX}%`, top: `${ind.pinY}%` }}
                        aria-label={`${ind.name} in ${ind.location}`}
                      >
                        {/* Pulse ring for selected */}
                        {isSelected && (
                          <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                        )}
                        <div className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${isSelected ? 'bg-primary' : 'bg-card border border-border group-hover/pin:bg-primary group-hover/pin:border-primary'}`}>
                          <Icon className={`h-4 w-4 sm:h-5 sm:w-5 transition-colors duration-300 ${isSelected ? 'text-primary-foreground' : 'text-primary group-hover/pin:text-primary-foreground'}`} />
                        </div>
                        {/* Label tooltip */}
                        <div className={`absolute left-1/2 -translate-x-1/2 -bottom-7 whitespace-nowrap text-[10px] sm:text-xs font-semibold transition-opacity duration-200 ${isSelected ? 'opacity-100 text-primary' : 'opacity-0 group-hover/pin:opacity-100 text-muted-foreground'}`}>
                          {ind.location}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Detail panel */}
              <div className="lg:col-span-2">
                {selected ? (
                  <div className="bg-card rounded-xl border border-border overflow-hidden shadow-lg animate-fade-in">
                    <div className="relative h-44 overflow-hidden">
                      <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                      <button
                        onClick={() => setSelectedIndustry(null)}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
                        aria-label="Close"
                      >
                        <X className="h-4 w-4 text-foreground" />
                      </button>
                      <div className="absolute bottom-4 left-5">
                        <div className="flex items-center gap-2">
                          <selected.icon className="h-5 w-5 text-accent" />
                          <h3 className="font-display font-bold text-xl text-primary-foreground">{selected.name}</h3>
                        </div>
                        <div className="flex items-center gap-1.5 mt-1">
                          <MapPin className="h-3 w-3 text-accent" />
                          <span className="text-primary-foreground/80 text-xs">{selected.location}, OH</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{selected.description}</p>
                      <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                        <div className="flex gap-1 mb-2">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} className="h-3 w-3 fill-accent text-accent" />
                          ))}
                        </div>
                        <p className="text-foreground text-sm italic leading-relaxed">"{selected.caseStudy}"</p>
                      </div>
                      <div className="flex items-center gap-2 mb-5 px-3 py-2 bg-primary/5 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm font-semibold text-primary">{selected.savings}</span>
                      </div>
                      <Button asChild className="w-full">
                        <Link to="/get-quote">
                          Get {selected.name} Quote <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-card rounded-xl border border-border p-8 text-center h-full flex flex-col items-center justify-center min-h-[320px]">
                    <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">Select an Industry</h3>
                    <p className="text-sm text-muted-foreground max-w-xs">Click any pin on the map to see how we've helped businesses in that industry across Central Ohio.</p>
                    {/* Mobile: show list of industries as tappable pills */}
                    <div className="flex flex-wrap gap-2 mt-6 justify-center lg:hidden">
                      {industries.map((ind, i) => (
                        <button
                          key={ind.name}
                          onClick={() => setSelectedIndustry(i)}
                          className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary text-foreground text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <ind.icon className="h-3.5 w-3.5" />
                          {ind.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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

      {/* Section 7: Bottom CTA Banner */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at 50% 50%, hsl(345 55% 50%), transparent 60%)' }} />
        <div className="container-narrow text-center relative z-10">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Protect Your Business Today
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
              Get a free quote in 10 minutes. We'll show you exactly what you're paying for—and what you might be missing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/get-quote">Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <a href="tel:6146120050"><Phone className="mr-2 h-5 w-5" />(614) 612-0050</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default BusinessInsurance;
