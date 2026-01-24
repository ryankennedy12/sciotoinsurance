import { Link } from "react-router-dom";
import { Phone, ArrowRight, Search, BarChart3, FileCheck, Headphones, Users, TrendingDown, DollarSign, PiggyBank, Wallet, Star, CheckCircle, Clock } from "lucide-react";
import { employeeBenefitsProducts } from "@/data/products";
import TestimonialCard from "@/components/TestimonialCard";

const EmployeeBenefits = () => {
  const stats = [
    {
      icon: Users,
      stat: "78%",
      description: "of employees say benefits influence where they work",
    },
    {
      icon: TrendingDown,
      stat: "50%",
      description: "lower turnover at companies with strong benefits",
    },
    {
      icon: DollarSign,
      stat: "$3",
      description: "saved in recruitment for every $1 spent on benefits",
    },
  ];

  const processSteps = [
    {
      icon: Search,
      step: "01",
      title: "Discovery",
      description: "We learn about your business, your people, and your budget.",
    },
    {
      icon: BarChart3,
      step: "02",
      title: "Market Analysis",
      description: "We shop multiple carriers and present your options.",
    },
    {
      icon: FileCheck,
      step: "03",
      title: "Implementation",
      description: "We handle the paperwork and employee enrollment.",
    },
    {
      icon: Headphones,
      step: "04",
      title: "Ongoing Support",
      description: "We're here for questions, changes, and annual renewals.",
    },
  ];

  const additionalOfferings = [
    {
      icon: PiggyBank,
      name: "Retirement Plans (401k)",
      description: "Help your team build for the future with retirement plan options that fit businesses of any size.",
    },
    {
      icon: Wallet,
      name: "Health Savings Accounts (HSA/FSA)",
      description: "Tax-advantaged accounts that give employees flexibility in managing healthcare costs.",
    },
  ];

  const testimonials = [
    {
      quote: "Natalie helped us set up a benefits package that our employees actually use. We've seen a real difference in retention.",
      name: "Mark Davidson",
      location: "Columbus, OH",
      date: "November 2024",
      rating: 5,
      helpedWith: "Group Health + 401k Setup"
    },
    {
      quote: "As a small business, we didn't think we could afford real benefits. Jeff showed us options we didn't know existed.",
      name: "Lisa Chen",
      location: "Dublin, OH", 
      date: "September 2024",
      rating: 5,
      helpedWith: "Small Business Benefits"
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
              <pattern id="benefitsGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.5" fill="currentColor" className="text-cream" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#benefitsGrid)" />
          </svg>
        </div>
        
        {/* Radial glow effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-500/10 to-transparent" />
        
        <div className="relative max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <div className="max-w-[700px]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-space-md">
              <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
              <span className="font-body text-sm text-cream">Trusted by Ohio Businesses</span>
            </div>
            
            <h1 className="font-display font-semibold text-3xl lg:text-5xl text-cream leading-tight mb-space-md">
              Employee Benefits That Help You Hire (and Keep) Good People
            </h1>
            <p className="font-body text-lg text-cream/80 mb-space-lg max-w-[560px]">
              Good candidates expect good benefits. We help small and mid-sized businesses put together packages that can compete with larger companies.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-space-md mb-space-lg">
              <Link
                to="/get-quote"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-cream text-primary font-body font-semibold text-sm transition-all duration-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-xl"
              >
                Get a Benefits Consultation
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
                <span className="font-body text-sm">Multiple carrier options</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-500" />
                <span className="font-body text-sm">Response within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Products Section */}
      <section className="py-space-2xl bg-white">
        <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <div className="mb-space-xl">
            <div className="w-10 h-0.5 bg-primary mb-space-md" />
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-foreground mb-space-sm">
              Employee Benefits Products
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-[600px]">
              Here's what we can help you set up for your team.
            </p>
          </div>

          <div className="mb-space-xl">
            <h3 className="font-display font-semibold text-xl text-foreground mb-space-md flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gold-500" />
              Insurance Benefits
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-space-md">
              {employeeBenefitsProducts.map((product, index) => {
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
                        to="/get-quote"
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

          {/* Additional Offerings - Enhanced cards */}
          <div>
            <h3 className="font-display font-semibold text-xl text-foreground mb-space-md flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gold-500" />
              Financial Benefits
            </h3>
            
            <div className="grid md:grid-cols-2 gap-space-md">
              {additionalOfferings.map((offering, index) => {
                const Icon = offering.icon;
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
                      <h4 className="font-display font-semibold text-lg text-foreground mb-2">
                        {offering.name}
                      </h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                        {offering.description}
                      </p>
                      <Link
                        to="/get-quote"
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
        </div>
      </section>

      {/* Business Case Section - Enhanced visual treatment */}
      <section className="py-space-2xl bg-gradient-to-br from-primary via-burgundy-800 to-burgundy-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="statsDots" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.5" fill="currentColor" className="text-cream" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#statsDots)" />
          </svg>
        </div>
        
        <div className="relative max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <div className="text-center mb-space-xl">
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-cream mb-space-sm">
              Why Benefits Matter More Than You Think
            </h2>
            <p className="font-body text-cream/70 max-w-[500px] mx-auto">
              The numbers speak for themselves—investing in your team pays off.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-space-lg mb-space-md">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-space-sm rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                    <Icon className="w-7 h-7 text-gold-500" />
                  </div>
                  <p className="font-display font-bold text-5xl lg:text-6xl text-cream mb-space-xs">
                    {item.stat}
                  </p>
                  <p className="font-body text-sm text-cream/80 max-w-[200px] mx-auto">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="text-center font-body text-xs text-cream/50 italic">
            Source: Industry research, 2023
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-space-2xl bg-cream">
        <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <div className="text-center mb-space-xl">
            <div className="w-10 h-0.5 bg-primary mx-auto mb-space-md" />
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-foreground">
              How We Work With You
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connector Line (desktop only) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/20" />
                  )}
                  
                  <div className="bg-white rounded-lg p-space-lg text-center relative z-10">
                    <div className="w-20 h-20 mx-auto mb-space-md rounded-full bg-primary/5 flex items-center justify-center relative">
                      <Icon className="w-8 h-8 text-primary" />
                      <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-primary text-white font-display font-semibold text-sm flex items-center justify-center">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-space-xs">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
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
              What Business Owners Say
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-[500px] mx-auto">
              Real feedback from Ohio businesses we've helped with employee benefits.
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
            Want to see what's possible for your team?
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md mb-space-md">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-base transition-all duration-300 hover:bg-burgundy-800 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Schedule a Consultation
            </Link>
            
            <a
              href="tel:6146120050"
              className="inline-flex items-center gap-2 font-body font-medium text-primary hover:underline transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              (614) 612-0050
            </a>
          </div>
          
          <p className="font-body text-sm text-muted-foreground">
            We'll walk you through your options and answer any questions. No sales pitch—just honest advice.
          </p>
        </div>
      </section>
    </>
  );
};

export default EmployeeBenefits;
