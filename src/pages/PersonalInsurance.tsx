import { Link } from "react-router-dom";
import { Phone, ArrowRight, Star, CheckCircle, Clock, Home, Shield } from "lucide-react";
import { personalInsuranceProducts, personalInsuranceReasons } from "@/data/products";
import TestimonialCard from "@/components/TestimonialCard";

const PersonalInsurance = () => {
  const testimonials = [
    {
      quote: "Jeff found us better coverage for $400 less per year. The whole process took maybe 30 minutes of our time.",
      name: "Sarah Mitchell",
      location: "Powell, OH",
      date: "December 2024",
      rating: 5,
      helpedWith: "Home + Auto Bundle"
    },
    {
      quote: "After our basement flooded, Natalie walked us through every step of the claim. We couldn't have done it without her.",
      name: "Robert Chen",
      location: "Westerville, OH",
      date: "October 2024",
      rating: 5,
      helpedWith: "Flood Claim"
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
              <pattern id="personalGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.5" fill="currentColor" className="text-cream" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#personalGrid)" />
          </svg>
        </div>
        
        {/* Radial glow effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-500/10 to-transparent" />
        
        <div className="relative max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <div className="max-w-[700px]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-space-md">
              <Home className="w-4 h-4 text-gold-500" />
              <span className="font-body text-sm text-cream">Personal Insurance</span>
            </div>
            
            <h1 className="font-display font-semibold text-3xl lg:text-5xl text-cream leading-tight mb-space-md">
              Personal Insurance Throughout Ohio
            </h1>
            <p className="font-body text-lg text-cream/80 mb-space-lg max-w-[560px]">
              Your car, your house, your family's future. We help Ohio families figure out what they actually need and find the best price for it.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-space-md mb-space-lg">
              <Link
                to="/get-quote"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-cream text-primary font-body font-semibold text-sm transition-all duration-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-xl"
              >
                Get a Personal Insurance Quote
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
                <span className="font-body text-sm">Compare 30+ carriers</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-500" />
                <span className="font-body text-sm">Quote in under 10 minutes</span>
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
              Personal Insurance Products
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-[600px]">
              Every family is different. We'll help you build a protection plan that fits your life.
            </p>
          </div>

          {personalInsuranceProducts.map((category, categoryIndex) => (
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
                          to={product.slug ? `/personal-insurance/${product.slug}` : "/get-quote"}
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
      <section className="py-space-2xl bg-gradient-to-br from-primary via-burgundy-800 to-burgundy-900 relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="whyPersonalDots" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.5" fill="currentColor" className="text-cream" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#whyPersonalDots)" />
          </svg>
        </div>
        
        <div className="relative max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <div className="text-center mb-space-xl">
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-cream">
              Why Choose Scioto for Personal Insurance
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-space-lg">
            {personalInsuranceReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-space-md rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                    <Icon className="w-7 h-7 text-gold-500" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-cream mb-space-sm">
                    {reason.title}
                  </h3>
                  <p className="font-body text-cream/80 text-sm leading-relaxed max-w-[280px] mx-auto">
                    {reason.description}
                  </p>
                </div>
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
              What Our Clients Say
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-[500px] mx-auto">
              Real feedback from Ohio families we've helped protect.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-space-lg max-w-[900px] mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-space-2xl bg-white">
        <div className="max-w-[700px] mx-auto px-space-md lg:px-space-lg text-center">
          <h2 className="font-display font-semibold text-2xl lg:text-3xl text-foreground leading-tight mb-space-md">
            Not sure where to start?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-space-lg">
            That's fine. Tell us your situation and we'll help you figure out what makes sense.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md mb-space-md">
            <Link
              to="/get-quote"
              className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-base transition-all duration-300 hover:bg-burgundy-800 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get Your Free Quote
            </Link>
            
            <a
              href="tel:6146120050"
              className="inline-flex items-center gap-2 font-body font-medium text-primary hover:underline transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Or call (614) 612-0050
            </a>
          </div>
          
          <p className="font-body text-sm text-muted-foreground">
            We'll respond within 24 hours—usually much faster.
          </p>
        </div>
      </section>
    </>
  );
};

export default PersonalInsurance;