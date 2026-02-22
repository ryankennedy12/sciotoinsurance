import { Link } from "react-router-dom";
import { Phone, ArrowRight, Star, CheckCircle, ChevronRight, HardHat, UtensilsCrossed, ShoppingBag, Stethoscope, Truck, Factory, Briefcase, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { businessInsuranceProducts, businessInsuranceReasons } from "@/data/products";
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
  { name: "Contractors", icon: HardHat, image: constructionSite, description: "General liability, tools coverage, workers' comp.", caseStudy: "We helped Smith Roofing reduce their Workers' Comp by 18%." },
  { name: "Restaurants", icon: UtensilsCrossed, image: restaurantInterior, description: "Liquor liability, food spoilage, property protection.", caseStudy: "After a kitchen fire, we helped Mario's Pizza get their claim paid in 11 days." },
  { name: "Retail", icon: ShoppingBag, image: retailStore, description: "Inventory protection, customer liability, theft coverage.", caseStudy: "A local boutique saved $3,200/year after we found gaps in their policy." },
  { name: "Healthcare", icon: Stethoscope, image: healthcareClinic, description: "Malpractice, HIPAA compliance, specialized coverage.", caseStudy: "We've insured 40+ Ohio medical practices with zero coverage disputes." },
  { name: "Transportation", icon: Truck, image: transportationFleet, description: "Fleet coverage, cargo insurance, driver protection.", caseStudy: "A trucking company reduced their premium 22% by restructuring coverage." },
  { name: "Manufacturing", icon: Factory, image: manufacturingFacility, description: "Equipment breakdown, product liability, workplace safety.", caseStudy: "We helped a machine shop navigate an OSHA audit with full documentation." },
  { name: "Professional", icon: Briefcase, image: professionalServices, description: "E&O coverage, cyber liability, professional indemnity.", caseStudy: "An accounting firm avoided a $500K lawsuit thanks to proper E&O coverage." },
  { name: "Trades", icon: Wrench, image: constructionSite, description: "Tools, vehicles, liability for HVAC, plumbing, electrical.", caseStudy: "A plumbing company saved $4,100/year after we bundled their policies." },
];

const testimonials = [
  { quote: "They understood our industry from day one. No explaining what general contractors actually do.", name: "Robert M.", location: "Columbus, OH", date: "November 2024", rating: 5, helpedWith: "Contractor Insurance" },
  { quote: "When we had a break-in, they were at our store the next morning.", name: "Lisa P.", location: "Worthington, OH", date: "October 2024", rating: 5, helpedWith: "Commercial Property Claim" },
  { quote: "An agent who doesn't just sell policies but actually helps us understand our risks.", name: "David K.", location: "Dublin, OH", date: "September 2024", rating: 5, helpedWith: "Business Insurance Review" },
];

const BusinessInsurance = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const current = industries[selectedIndustry];

  // Flatten all products with a running index
  const allProducts = businessInsuranceProducts.flatMap((cat) => cat.products);

  return (
    <div className="min-h-screen bg-background">
      {/* Section 1: Structured Split Hero */}
      <section className="min-h-[70vh] lg:min-h-[85vh]">
        <div className="grid lg:grid-cols-[3fr_2fr] min-h-[70vh] lg:min-h-[85vh]">
          {/* Left: Charcoal text panel */}
          <div className="bg-foreground flex items-center">
            <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-24 lg:py-32 max-w-2xl">
              <AnimatedSection animation="fade-up">
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-6 block">
                  Business Insurance
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight leading-[1.1]">
                  Protect What<br />You've Built
                </h1>
                <div className="w-16 h-0.5 bg-accent mb-6" />
                <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-lg">
                  From startups to established enterprises, we craft coverage that grows with your business—shopping 30+ carriers to find the right fit.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-foreground">
                    <Link to="/get-quote">Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                    <a href="tel:6146120050"><Phone className="mr-2 h-5 w-5" />(614) 612-0050</a>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/15">
                  {["300+ Businesses", "29 Years Experience", "A+ BBB Rating"].map((badge) => (
                    <div key={badge} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-white/60 text-sm">{badge}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
          {/* Right: Raw photo */}
          <div className="hidden lg:block relative">
            <img src={columbusSkyline} alt="Columbus Ohio skyline" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
        {/* Mobile photo strip */}
        <div className="lg:hidden aspect-[16/10] relative">
          <img src={columbusSkyline} alt="Columbus Ohio skyline" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </section>

      {/* Section 2: Industry Selector (Sidebar Layout) */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3 block">Industries We Serve</span>
            <h2 className="heading-lg text-foreground">Coverage for Your Industry</h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            {/* Mobile: horizontal scroll chips */}
            <div className="flex lg:hidden overflow-x-auto gap-2 pb-4 mb-6 scrollbar-hide snap-x snap-mandatory">
              {industries.map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <button
                    key={ind.name}
                    onClick={() => setSelectedIndustry(i)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm whitespace-nowrap snap-start transition-colors ${
                      selectedIndustry === i
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {ind.name}
                  </button>
                );
              })}
            </div>

            {/* Desktop: sidebar + content panel */}
            <div className="grid lg:grid-cols-[240px_1fr] gap-0 rounded-xl border border-border overflow-hidden bg-card">
              {/* Sidebar */}
              <div className="hidden lg:flex flex-col border-r border-border">
                {industries.map((ind, i) => {
                  const Icon = ind.icon;
                  return (
                    <button
                      key={ind.name}
                      onClick={() => setSelectedIndustry(i)}
                      className={`flex items-center gap-3 px-5 py-4 text-left text-sm font-medium transition-colors border-l-[3px] ${
                        selectedIndustry === i
                          ? "border-l-primary bg-primary/5 text-primary"
                          : "border-l-transparent text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                      }`}
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      {ind.name}
                    </button>
                  );
                })}
              </div>

              {/* Content panel */}
              <div className="grid md:grid-cols-2">
                <div className="relative h-56 md:h-auto">
                  <img src={current.image} alt={current.name} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <current.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-xl text-foreground">{current.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{current.description}</p>
                  <div className="bg-secondary/50 rounded-lg p-5 mb-6">
                    <div className="flex gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="h-3.5 w-3.5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-foreground text-sm italic">"{current.caseStudy}"</p>
                  </div>
                  <Button asChild className="w-full sm:w-auto">
                    <Link to="/get-quote">
                      Get {current.name} Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3: Coverage Products (Numbered Category List) */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3 block">What We Cover</span>
            <h2 className="heading-lg text-foreground">Business Coverage Options</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            {businessInsuranceProducts.map((category, ci) => {
              const startNum = ci === 0 ? 1 : businessInsuranceProducts[0].products.length + 1;
              return (
                <AnimatedSection key={category.title} animation="fade-up" delay={ci * 100}>
                  <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-6 flex items-center gap-3">
                    <div className="w-8 h-px bg-primary" />
                    {category.title}
                  </h3>
                  <div className="space-y-1">
                    {category.products.map((product, pi) => {
                      const num = startNum + pi;
                      const Icon = product.icon;
                      return (
                        <Link
                          key={product.name}
                          to={product.slug ? `/business-insurance/${product.slug}` : "/get-quote"}
                          className="group flex items-center gap-4 p-4 rounded-lg hover:bg-background transition-colors"
                        >
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-bold text-primary">{num}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                              {product.name}
                            </h4>
                            {product.description && (
                              <p className="text-sm text-muted-foreground mt-0.5">{product.description}</p>
                            )}
                          </div>
                          <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                        </Link>
                      );
                    })}
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Risk Assessment CTA (Charcoal Block) */}
      <section className="py-20 bg-foreground">
        <div className="container-wide px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">Free Assessment</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Free Business<br />Risk Assessment
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                We'll analyze your operations and identify coverage gaps—even if you don't buy from us.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Coverage gap analysis", "Industry-specific review", "Claims scenario planning", "Pricing comparison"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left">
              <div className="bg-background rounded-xl p-8 shadow-2xl">
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

      {/* Section 5: Why Choose (Compact Stat Strip) */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="heading-lg text-foreground">Why Businesses Choose Scioto</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8">
              {businessInsuranceReasons.map((reason, i) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={i}
                    className={`text-center px-4 ${
                      i < businessInsuranceReasons.length - 1 ? "lg:border-r lg:border-border" : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-sm text-foreground mb-1">{reason.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 6: Testimonials (Horizontal Scroll) */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-10">
            <h2 className="heading-lg text-foreground">Trusted by Ohio Businesses</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="flex lg:grid lg:grid-cols-3 gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 lg:pb-0">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="min-w-[300px] lg:min-w-0 snap-start bg-background rounded-xl p-6 border-t-[3px] border-t-primary"
                >
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground italic mb-4 leading-relaxed">"{t.quote}"</p>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location} · {t.date}</p>
                    <p className="text-xs text-primary mt-1">Helped with: {t.helpedWith}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 7: CTA Banner */}
      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
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
