import { Link } from "react-router-dom";
import { Phone, ArrowRight, CheckCircle, Shield, HardHat, Building2, Truck, Scale, Lock, Car, Briefcase, UtensilsCrossed, ShoppingBag, Stethoscope, Factory, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedSection } from "@/components/ui/animated-section";
import { businessInsuranceProducts } from "@/data/products";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

import businessInsuranceHero from "@/assets/business-insurance-hero.jpg";
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


const stats = [
  { value: "300+", label: "Businesses Protected", description: "Ohio companies trust us with their coverage." },
  { value: "30+", label: "Carrier Partners", description: "We shop the market so you don't have to." },
  { value: "Same Day", label: "Response Time", description: "Real people. No phone trees. Right here in Columbus." },
];

const AssessmentForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ businessName: "", name: "", email: "", phone: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setLoading(true);
    const nameParts = form.name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";
    const { error } = await supabase.from("leads").insert({
      first_name: firstName,
      last_name: lastName,
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      coverage_type: "business" as const,
      business_type: form.businessName.trim() || null,
      request_type: "quote" as const,
      additional_info: "Free Business Risk Assessment request",
    });
    setLoading(false);
    if (error) {
      toast({ title: "Something went wrong", description: "Please try again or call us directly.", variant: "destructive" });
    } else {
      setSubmitted(true);
      toast({ title: "Assessment Requested!", description: "We'll be in touch within 1 business day." });
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-4">
        <CheckCircle className="h-10 w-10 text-primary mx-auto mb-3" />
        <p className="font-display font-semibold text-lg text-foreground">We're on it!</p>
        <p className="text-muted-foreground text-sm mt-1">Expect a call within 1 business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Input placeholder="Business Name" value={form.businessName} onChange={(e) => setForm({ ...form, businessName: e.target.value })} />
      <Input placeholder="Your Name *" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <Input type="email" placeholder="Email *" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <Input type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading ? "Sending…" : "Request Free Assessment"}
      </Button>
    </form>
  );
};

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
          src={businessInsuranceHero}
          alt="Business owners in front of their shop"
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
                Business Insurance
              </h1>
              <div className="w-16 h-0.5 bg-accent mb-6" />
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Risk management and insurance solutions tailored to your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg">
                  <Link to="/get-quote">Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href="tel:6146120050">
                    <Phone className="h-5 w-5" />
                    Give Us a Call
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 2: Coverage Grid (Icon Cards on Cream) */}
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




      {/* Section 3: Featured Testimonial (Single Quote) */}
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
              Get a free quote today. We'll show you exactly what you're paying for—and what you might be missing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/get-quote">Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <a
                href="tel:6146120050"
                className="inline-flex items-center gap-2 py-3 font-body font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                Or call us: (614) 612-0050
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default BusinessInsurance;
