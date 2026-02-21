import { Link } from "react-router-dom";
import { Phone, ArrowRight, Star, CheckCircle, ChevronRight, HardHat, UtensilsCrossed, ShoppingBag, Stethoscope, Truck, Factory, Briefcase, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import TestimonialCard from "@/components/TestimonialCard";
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
  { quote: "An agent who doesn't just sell policies but actually helps us understand our risks.", name: "David K.", location: "Dublin, OH", date: "September 2024", rating: 5, helpedWith: "Business Insurance Review" }
];

const BusinessInsurance = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const current = industries[selectedIndustry];

  return (
    <div className="min-h-screen bg-background">
      {/* Dramatic Full-Width Hero */}
      <section className="relative min-h-[85vh] lg:min-h-screen flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${columbusSkyline})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/60" />
        </div>
        <div className="relative z-10 container-wide px-6 py-20">
          <div className="max-w-3xl">
            <AnimatedSection animation="fade-up">
              <div className="flex flex-wrap gap-6 mb-8">
                {["1,200+ Businesses Protected", "29 Years Experience", "A+ BBB Rating"].map((t) => (
                  <div key={t} className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent" /><span className="text-white/80 text-sm font-medium">{t}</span></div>
                ))}
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight">Business Insurance<br /><span className="text-accent">Built for Growth</span></h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">Protect what you've built. From startups to established enterprises, we craft coverage that grows with your business.</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="text-base bg-accent hover:bg-accent/90 text-foreground"><Link to="/get-quote">Get Your Free Quote<ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
                <Button asChild variant="outline" size="lg" className="text-base border-white/30 text-white hover:bg-white/10 hover:text-white"><a href="tel:6146120050"><Phone className="mr-2 h-5 w-5" />(614) 612-0050</a></Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }} />
      </section>

      {/* Industry Selector Tabs */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">Coverage for Your Industry</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {industries.map((ind, i) => { const Icon = ind.icon; return (
                <button key={ind.name} onClick={() => setSelectedIndustry(i)} className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-[background-color,color,box-shadow] duration-200 ${selectedIndustry === i ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-secondary text-foreground hover:bg-secondary/80'}`}>
                  <Icon className="h-4 w-4" />{ind.name}
                </button>
              ); })}
            </div>
            <div className="bg-secondary rounded-2xl overflow-hidden border border-border">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto"><img src={current.image} alt={current.name} className="absolute inset-0 w-full h-full object-cover" /></div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"><current.icon className="h-6 w-6 text-primary" /></div>
                    <h3 className="heading-sm text-foreground">{current.name}</h3>
                  </div>
                  <p className="body-lg text-muted-foreground mb-6">{current.description}</p>
                  <div className="bg-card rounded-xl p-6 border border-border mb-6">
                    <div className="flex gap-2 mb-2">{[1,2,3,4,5].map((i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}</div>
                    <p className="text-foreground italic mb-2">"{current.caseStudy}"</p>
                  </div>
                  <Button asChild className="w-full sm:w-auto"><Link to="/get-quote">Get {current.name} Quote<ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-16"><h2 className="heading-lg text-foreground mb-4">BUSINESS COVERAGE OPTIONS</h2></AnimatedSection>
          {businessInsuranceProducts.map((category, ci) => (
            <AnimatedSection key={category.title} animation="fade-up" delay={ci * 100} className="mb-12 last:mb-0">
              <h3 className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-6 flex items-center gap-3"><div className="w-8 h-px bg-primary" />{category.title}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.products.map((product) => { const Icon = product.icon; return (
                  <Link key={product.name} to={product.slug ? `/business-insurance/${product.slug}` : "/get-quote"} className="group relative bg-card rounded-lg p-6 border border-border hover:border-primary transition-[border-color,box-shadow] duration-200">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center flex-shrink-0"><Icon className="h-5 w-5 text-primary" /></div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{product.name}</h4>
                        {product.description && <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>}
                      </div>
                    </div>
                  </Link>
                ); })}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Risk Assessment CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${businessOffice})` }}><div className="absolute inset-0 bg-foreground/90" /></div>
        <div className="relative z-10 container-wide px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Free Business Risk Assessment</h2>
              <p className="text-lg text-white/80 mb-8">We'll analyze your operations and identify coverage gaps—even if you don't buy from us.</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {["Coverage gap analysis", "Industry-specific review", "Claims scenario planning", "Pricing comparison"].map((item) => (
                  <div key={item} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-accent flex-shrink-0" /><span className="text-white">{item}</span></div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left">
              <div className="bg-card rounded-xl p-8 shadow-2xl">
                <h3 className="font-display font-semibold text-xl text-foreground mb-6">Request Your Assessment</h3>
                <Button asChild size="lg" className="w-full mb-4"><Link to="/contact">Schedule Free Assessment<ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
                <div className="text-center"><span className="text-muted-foreground text-sm">Or call us directly:</span><a href="tel:6146120050" className="block text-xl font-semibold text-primary hover:text-primary/80 mt-1">(614) 612-0050</a></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-16"><h2 className="heading-lg text-foreground mb-4">Why Businesses Choose Scioto</h2></AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessInsuranceReasons.map((reason, i) => { const Icon = reason.icon; return (
              <AnimatedSection key={i} animation="fade-up" delay={i * 100} className="bg-background p-8 rounded-lg border border-border hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6"><Icon className="h-7 w-7 text-accent" /></div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </AnimatedSection>
            ); })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-12"><h2 className="heading-lg text-foreground mb-4">Trusted by Ohio Businesses</h2></AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">{testimonials.map((t, i) => <AnimatedSection key={i} animation="fade-up" delay={i * 100}><TestimonialCard {...t} /></AnimatedSection>)}</div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">Protect Your Business Today</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base"><Link to="/get-quote">Get Your Free Quote<ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><a href="tel:6146120050"><Phone className="mr-2 h-5 w-5" />(614) 612-0050</a></Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default BusinessInsurance;
