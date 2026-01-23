import { Link } from "react-router-dom";
import { Phone, ArrowRight, Shield, Building2, Briefcase, HardHat, Scale, Truck, Lock, Users, Hammer, UtensilsCrossed, ShoppingBag, Stethoscope, Factory, Heart, Home as HomeIcon, Handshake } from "lucide-react";

const BusinessInsurance = () => {
  const coverageTypes = [
    {
      icon: Shield,
      name: "General Liability",
      description: "Protection when someone gets hurt on your property or claims your work caused damage. The foundation of business coverage.",
    },
    {
      icon: Building2,
      name: "Commercial Property",
      description: "Your building, equipment, inventory, and everything you need to operate — covered against fire, theft, and disasters.",
    },
    {
      icon: Briefcase,
      name: "Business Owner's Policy (BOP)",
      description: "Bundles property and liability coverage at a lower cost than buying separately. Smart choice for small to mid-sized businesses.",
    },
    {
      icon: HardHat,
      name: "Workers' Compensation",
      description: "Required in Ohio if you have employees. We help you stay compliant and find competitive rates.",
    },
    {
      icon: Scale,
      name: "Professional Liability (E&O)",
      description: "When a client claims your professional advice or services caused them harm. Essential for consultants, accountants, and service providers.",
    },
    {
      icon: Truck,
      name: "Commercial Auto",
      description: "If your business owns vehicles or your employees drive for work, personal auto policies won't cover you. This will.",
    },
    {
      icon: Lock,
      name: "Cyber Liability",
      description: "Data breaches happen to businesses of every size. This covers notification costs, legal fees, and business interruption.",
    },
    {
      icon: Users,
      name: "Directors & Officers (D&O)",
      description: "Protects your leadership team's personal assets from lawsuits related to business decisions.",
    },
  ];

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

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-space-xl bg-gradient-to-br from-cream via-white to-burgundy-100/30">
        <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <div className="max-w-[700px]">
            <p className="font-body font-medium text-xs uppercase tracking-[0.1em] text-muted-foreground mb-space-sm">
              Business Insurance
            </p>
            <h1 className="font-display font-semibold text-3xl lg:text-5xl text-foreground leading-tight mb-space-md">
              Business Insurance That Understands How You Actually Operate
            </h1>
            <p className="font-body text-lg text-muted-foreground mb-space-lg max-w-[540px]">
              Every business has different risks. Cookie-cutter policies leave gaps. We build coverage around your specific operation.
            </p>
            <Link
              to="/get-quote"
              className="inline-flex items-center justify-center px-8 py-4 rounded bg-primary text-primary-foreground font-body font-medium text-sm transition-all duration-300 hover:bg-burgundy-800 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get a Business Insurance Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage Grid Section */}
      <section className="py-space-2xl bg-white">
        <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <div className="mb-space-xl">
            <div className="w-10 h-0.5 bg-primary mb-space-md" />
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-foreground mb-space-sm">
              Business Coverage Options
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-[600px]">
              From startups to established operations, we tailor coverage to your unique risks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {coverageTypes.map((coverage, index) => {
              const Icon = coverage.icon;
              return (
                <div
                  key={index}
                  className="group bg-cream rounded-lg p-space-md hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-space-md group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-space-xs">
                    {coverage.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-space-md leading-relaxed">
                    {coverage.description}
                  </p>
                  <Link
                    to="/get-quote"
                    className="inline-flex items-center gap-1 font-body text-sm font-medium text-primary group-hover:gap-2 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="py-space-2xl bg-cream">
        <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <div className="text-center mb-space-xl">
            <div className="w-10 h-0.5 bg-primary mx-auto mb-space-md" />
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-foreground mb-space-sm">
              Industries We Know Inside and Out
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-[600px] mx-auto">
              We've built specialized programs for these industries, which means better coverage and better rates.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-lg p-space-md text-center hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <div className="w-14 h-14 mx-auto mb-space-sm rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-body font-medium text-sm text-foreground">
                    {industry.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Risk Assessment CTA Section */}
      <section className="py-space-2xl bg-primary">
        <div className="max-w-[800px] mx-auto px-space-md lg:px-space-lg text-center">
          <div className="w-16 h-16 mx-auto mb-space-md rounded-full bg-white/10 flex items-center justify-center">
            <Handshake className="w-8 h-8 text-cream" />
          </div>
          
          <h2 className="font-display font-semibold text-2xl lg:text-4xl text-white leading-tight mb-space-md">
            Free Business Risk Assessment
          </h2>
          <p className="font-body text-lg text-cream/90 mb-space-lg max-w-[600px] mx-auto">
            Not sure if you're properly covered? We'll review your current policies, identify gaps, and give you an honest assessment — no obligation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md">
            <Link
              to="/get-quote"
              className="inline-flex items-center justify-center px-10 py-4 rounded bg-white text-primary font-body font-medium text-base transition-all duration-300 hover:bg-cream hover:-translate-y-0.5 hover:shadow-xl"
            >
              Request Your Free Assessment
            </Link>
            
            <a
              href="tel:6146120050"
              className="inline-flex items-center gap-2 font-body font-medium text-cream hover:text-white transition-all duration-300"
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
