import { Link } from "react-router-dom";
import { 
  Phone, ArrowRight, Shield, Users, Clock, Star, 
  Car, Home, Heart, Umbrella, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import TestimonialCard from "@/components/TestimonialCard";
import { personalInsuranceProducts, personalInsuranceReasons } from "@/data/products";

import ohioFamilyPorch from "@/assets/ohio-family-porch.jpg";
import familyHomeService from "@/assets/family-home-service.jpg";

const lifeStages = [
  { stage: "First Car", icon: Car, coverage: "Auto Insurance", description: "Get reliable coverage from day one", link: "/personal-insurance/auto" },
  { stage: "First Place", icon: Home, coverage: "Renters Insurance", description: "Protect your belongings anywhere", link: "/get-quote" },
  { stage: "Home Sweet Home", icon: Home, coverage: "Homeowners Insurance", description: "Your biggest investment, protected", link: "/personal-insurance/home" },
  { stage: "Growing Family", icon: Heart, coverage: "Life Insurance", description: "Security for those who depend on you", link: "/personal-insurance/life" },
  { stage: "Building Wealth", icon: Umbrella, coverage: "Umbrella Coverage", description: "Extra protection as assets grow", link: "/personal-insurance/umbrella" },
];

const testimonials = [
  { quote: "They helped us bundle our auto and home insurance and saved us over $600 a year.", name: "Jennifer T.", location: "Dublin, OH", date: "November 2024", rating: 5, helpedWith: "Auto & Home Bundle" },
  { quote: "When a tree fell on our garage, they handled everything. We barely had to lift a finger.", name: "Marcus W.", location: "Westerville, OH", date: "October 2024", rating: 5, helpedWith: "Home Insurance Claim" },
  { quote: "Finally found an agent who actually explains things in plain English.", name: "Sarah K.", location: "New Albany, OH", date: "December 2024", rating: 5, helpedWith: "Personal Insurance Review" }
];

const PersonalInsurance = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Split-Screen Hero */}
      <section className="relative min-h-[90vh] lg:min-h-screen">
        <div className="grid lg:grid-cols-2 min-h-[90vh] lg:min-h-screen">
          <div className="relative z-10 flex flex-col justify-center px-6 py-16 lg:px-12 xl:px-20 bg-secondary order-2 lg:order-1">
            <AnimatedSection animation="fade-up" className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8">
                <div className="flex">{[1,2,3,4,5].map((i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}</div>
                <span className="text-sm text-muted-foreground">Trusted by 1,200+ Ohio Families</span>
              </div>
              <h1 className="heading-xl text-foreground mb-6">Protecting Ohio Families Since 1995</h1>
              <p className="body-lg text-muted-foreground mb-8">Your family deserves coverage that actually fits your life. We'll shop 30+ carriers to find the right protection at the right price.</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground"><Shield className="h-5 w-5 text-accent" /><span>30+ Carriers</span></div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground"><Clock className="h-5 w-5 text-accent" /><span>Same-Day Quotes</span></div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground"><Users className="h-5 w-5 text-accent" /><span>Real People</span></div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button asChild size="lg" className="text-base rounded-xl"><Link to="/get-quote">Get Your Free Quote<ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
                <Button asChild variant="outline" size="lg" className="text-base rounded-xl"><a href="tel:6146120050"><Phone className="mr-2 h-5 w-5" />(614) 612-0050</a></Button>
              </div>
              <p className="text-sm text-muted-foreground">✓ No spam, ever &nbsp;&nbsp; ✓ Quote in under 10 minutes</p>
            </AnimatedSection>
          </div>
          <div className="relative h-64 lg:h-auto order-1 lg:order-2">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${ohioFamilyPorch})` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        </div>
      </section>

      {/* Life Stage Timeline */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-4">Coverage for Every Life Stage</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">Your insurance needs change as life changes.</p>
          </AnimatedSection>
          <div className="flex lg:grid lg:grid-cols-5 gap-6 overflow-x-auto pb-4 lg:pb-0 snap-x">
            {lifeStages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <AnimatedSection key={stage.stage} animation="fade-up" delay={index * 100} className="flex-shrink-0 w-64 lg:w-auto snap-center">
                  <Link to={stage.link} className="group block text-center">
                    <div className="relative mx-auto mb-4">
                      <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-secondary border-4 border-card group-hover:border-primary/30 transition-all flex items-center justify-center mx-auto shadow-lg">
                        <Icon className="h-8 w-8 lg:h-10 lg:w-10 text-primary" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center">{index + 1}</div>
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">{stage.stage}</h3>
                    <p className="text-primary font-medium text-sm mb-2">{stage.coverage}</p>
                    <p className="text-sm text-muted-foreground">{stage.description}</p>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-4">Personal Insurance Coverage</h2>
          </AnimatedSection>
          {personalInsuranceProducts.map((category, ci) => (
            <AnimatedSection key={category.title} animation="fade-up" delay={ci * 100} className="mb-12 last:mb-0">
              <h3 className="heading-sm text-foreground mb-6 flex items-center gap-3"><div className="w-1.5 h-8 bg-primary rounded-full" />{category.title}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.products.map((product) => {
                  const Icon = product.icon;
                  return (
                    <Link key={product.name} to={product.slug ? `/personal-insurance/${product.slug}` : "/get-quote"} className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center mb-4"><Icon className="h-6 w-6 text-primary" /></div>
                      <h4 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{product.name}</h4>
                      {product.description && <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>}
                      <span className="inline-flex items-center text-sm font-medium text-primary">{product.slug ? "Learn More" : "Get Quote"}<ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" /></span>
                    </Link>
                  );
                })}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Why Choose + Image */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right" className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl"><img src={familyHomeService} alt="Family receiving personal service" className="w-full h-80 lg:h-[500px] object-cover" /></div>
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-xl p-6 border border-border"><div className="text-4xl font-display font-bold text-primary mb-1">$847</div><div className="text-sm text-muted-foreground">Average Annual Savings</div></div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left">
              <h2 className="heading-lg text-foreground mb-6">Why Ohio Families Choose Scioto</h2>
              <p className="body-lg text-muted-foreground mb-8">We're not a big insurance company with 1-800 numbers. We're your neighbors.</p>
              <div className="space-y-6">
                {personalInsuranceReasons.map((reason, i) => { const Icon = reason.icon; return (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center"><Icon className="h-6 w-6 text-accent" /></div>
                    <div><h3 className="font-display font-semibold text-foreground mb-1">{reason.title}</h3><p className="text-muted-foreground text-sm">{reason.description}</p></div>
                  </div>
                ); })}
              </div>
              <div className="mt-8"><Button asChild size="lg" className="rounded-xl"><Link to="/about">Meet Our Team<ArrowRight className="ml-2 h-5 w-5" /></Link></Button></div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-12"><h2 className="heading-lg text-foreground mb-4">What Our Clients Say</h2></AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">{testimonials.map((t, i) => <AnimatedSection key={i} animation="fade-up" delay={i * 100}><TestimonialCard {...t} /></AnimatedSection>)}</div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <AnimatedSection animation="fade-up" className="text-center">
            <div className="bg-gradient-to-br from-secondary via-secondary to-primary/5 rounded-3xl p-8 md:p-12 border border-border">
              <h2 className="heading-lg text-foreground mb-4">Ready to See What You Could Save?</h2>
              <p className="body-lg text-muted-foreground mb-8 max-w-xl mx-auto">Get a free, no-pressure quote in under 10 minutes.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-base rounded-xl"><Link to="/get-quote">Get Your Free Quote<ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
                <Button asChild variant="outline" size="lg" className="text-base rounded-xl"><a href="tel:6146120050"><Phone className="mr-2 h-5 w-5" />(614) 612-0050</a></Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default PersonalInsurance;
