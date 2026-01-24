import { Link } from "react-router-dom";
import { Phone, ArrowRight, Handshake, Hammer, UtensilsCrossed, ShoppingBag, Briefcase, Stethoscope, Factory, Heart, Home as HomeIcon, Star, CheckCircle, Clock, Building2 } from "lucide-react";
import { businessInsuranceProducts, businessInsuranceReasons } from "@/data/products";
import TestimonialCard from "@/components/TestimonialCard";

const BusinessInsurance = () => {
  const industries = [
    { icon: Hammer, name: "Contractors & Construction" },
    { icon: UtensilsCrossed, name: "Restaurants & Food Service" },
    { icon: ShoppingBag, name: "Retail & E-commerce" },
    { icon: Briefcase, name: "Professional Services" },
    { icon: Stethoscope, name: "Healthcare & Medical" },
    { icon: Factory, name: "Manufacturing" },
    { icon: Heart, name: "Nonprofits" },
    { icon: HomeIcon, name: "Real Estate & Property Management" },
  ];

  const testimonials = [
    {
      quote: "Jeff understood our construction risks immediately. He found coverage gaps our previous agent missed entirely.",
      name: "Mike Reynolds",
      location: "Columbus, OH",
      date: "January 2025",
      rating: 5,
      helpedWith: "Contractor Insurance"
    },
    {
      quote: "When we had a liability claim, Natalie handled everything. We didn't miss a day of business.",
      name: "Jennifer Walsh",
      location: "Dublin, OH",
      date: "November 2024",
      rating: 5,
      helpedWith: "Restaurant Claim"
    },
  ];

  return (
    <>
      {/* Hero Section - Enhanced with gradient depth */}
      <section className="relative pt-32 pb-space-2xl overflow-hidden">
        {/* Multi-layer gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy-900 via-primary to-burgundy-800" />
        
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="businessGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.5" fill="currentColor" className="text-cream" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#businessGrid)" />
          </svg>
        </div>
        
        {/* Radial glow effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-500/10 to-transparent" />
        
        <div className="relative max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <div className="max-w-[700px]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-space-md">
              <Building2 className="w-4 h-4 text-gold-500" />
              <span className="font-body text-sm text-cream">Business Insurance</span>
            </div>
            
            <h1 className="font-display font-semibold text-3xl lg:text-5xl text-cream leading-tight mb-space-md">
              Business Insurance Across the U.S.
            </h1>
            <p className="font-body text-lg text-cream/80 mb-space-lg max-w-[560px]">
              A contractor doesn't need the same coverage as a restaurant. We'll build a policy around what you actually do. We serve businesses nationwide, not just Ohio.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-space-md mb-space-lg">
              <Link
                to="/get-quote"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-cream text-primary font-body font-semibold text-sm transition-all duration-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-xl"
              >
                Get a Business Insurance Quote
              </Link>
              <a
                href="tel:6146120050"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-cream font-body font-medium text-sm transition-all duration-300 hover:bg-white/20"
              >
                <Phone className="w-4 h-4" />
                (614) 612-0050
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-space-md text-cream/70">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold-500" />
                <span className="font-body text-sm">Nationwide coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-500" />
                <span className="font-body text-sm">Free risk assessment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Grid Section - Enhanced Cards */}
      <section className="py-space-2xl bg-white">
        <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <div className="mb-space-xl">
            <div className="w-10 h-0.5 bg-primary mb-space-md" />
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-foreground mb-space-sm">
              Business Insurance Products
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-[600px]">
              From startups to established operations, we tailor coverage to your unique risks.
            </p>
          </div>

          {businessInsuranceProducts.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-space-xl last:mb-0">
              <h3 className="font-display font-semibold text-xl text-foreground mb-space-md flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold-500" />
                {category.title}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-space-md">
                {category.products.map((product, index) => {
                  const Icon = product.icon;
                  return (
                    <div
                      key={index}
                      className="touch-card relative flex items-start gap-space-md p-space-lg rounded-xl bg-white border border-border"
                    >
                      {/* Gold accent - controlled by CSS */}
                      <div className="card-accent absolute top-0 left-0 w-1 h-full bg-gold-500 rounded-l-xl opacity-0 transition-opacity duration-200" />
                      
                      <div className="card-icon w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center transition-colors duration-200">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display font-semibold text-base text-foreground mb-1">
                          {product.name}
                        </h4>
                        {product.description && (
                          <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-2">
                            {product.description}
                          </p>
                        )}
                        <Link
                          to={product.slug ? `/business-insurance/${product.slug}` : "/get-quote"}
                          className="card-link inline-flex items-center gap-1.5 font-body text-sm font-semibold text-primary transition-all duration-200"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Scioto Section - Enhanced */}
      <section className="py-space-2xl bg-cream">
        <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <div className="text-center mb-space-xl">
            <div className="w-10 h-0.5 bg-primary mx-auto mb-space-md" />
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-foreground">
              Why Choose Scioto for Business Insurance
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-space-lg">
            {businessInsuranceReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="group bg-white rounded-xl p-space-lg text-center border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-space-md rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-space-sm">
                    {reason.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Expertise Section - Enhanced */}
      <section className="py-space-2xl bg-white">
        <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <div className="text-center mb-space-xl">
            <div className="w-10 h-0.5 bg-primary mx-auto mb-space-md" />
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-foreground mb-space-sm">
              Industries We Work With
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-[600px] mx-auto">
              We work with businesses across the country. Here are some of the industries we know best.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Link
                  to="/get-quote"
                  key={index}
                  className="touch-industry-card relative bg-white rounded-xl p-space-lg text-center border border-border"
                >
                  {/* Gold accent - controlled by CSS */}
                  <div className="industry-accent absolute top-0 left-0 w-full h-1 bg-gold-500 rounded-t-xl opacity-0 transition-opacity duration-200" />
                  
                  <div className="industry-icon w-14 h-14 mx-auto mb-space-sm rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center transition-colors duration-200">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-body font-semibold text-sm text-foreground">
                    {industry.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-space-2xl bg-cream">
        <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <div className="text-center mb-space-xl">
            <div className="w-10 h-0.5 bg-primary mx-auto mb-space-md" />
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-foreground mb-space-sm">
              What Business Owners Say
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-[500px] mx-auto">
              Real feedback from businesses we've helped protect.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-space-lg max-w-[900px] mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Risk Assessment CTA Section - Enhanced */}
      <section className="py-space-2xl bg-gradient-to-br from-primary via-burgundy-800 to-burgundy-900 relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="ctaDots" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.5" fill="currentColor" className="text-cream" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ctaDots)" />
          </svg>
        </div>
        
        <div className="relative max-w-[800px] mx-auto px-space-md lg:px-space-lg text-center">
          <div className="w-16 h-16 mx-auto mb-space-md rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <Handshake className="w-8 h-8 text-gold-500" />
          </div>
          
          <h2 className="font-display font-semibold text-2xl lg:text-4xl text-cream leading-tight mb-space-md">
            Free Business Risk Assessment
          </h2>
          <p className="font-body text-lg text-cream/80 mb-space-lg max-w-[600px] mx-auto">
            Wondering if you're missing something? We'll look at your current policies and tell you where the gaps are. Takes about 20 minutes and costs nothing.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md">
            <Link
              to="/get-quote"
              className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-cream text-primary font-body font-semibold text-base transition-all duration-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-xl"
            >
              Request Your Free Assessment
            </Link>
            
            <a
              href="tel:6146120050"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-cream font-body font-medium transition-all duration-300 hover:bg-white/20"
            >
              <Phone className="w-4 h-4" />
              (614) 612-0050
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessInsurance;