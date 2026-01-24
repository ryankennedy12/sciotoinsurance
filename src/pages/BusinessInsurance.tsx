import { Link } from "react-router-dom";
import { Phone, ArrowRight, Handshake, Hammer, UtensilsCrossed, ShoppingBag, Briefcase, Stethoscope, Factory, Heart, Home as HomeIcon } from "lucide-react";
import { businessInsuranceProducts, businessInsuranceReasons } from "@/data/products";

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
              Business Insurance for Ohio Companies
            </h1>
            <p className="font-body text-lg text-muted-foreground mb-space-lg max-w-[540px]">
              A contractor doesn't need the same coverage as a restaurant. We'll build a policy around what you actually do, not some generic template.
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

      {/* Coverage Grid Section - By Category */}
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
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-space-sm">
                {category.products.map((product, index) => {
                  const Icon = product.icon;
                  return (
                    <div
                      key={index}
                      className="group flex items-start gap-space-sm p-space-md rounded-lg bg-cream hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-border"
                    >
                      <div className="w-10 h-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display font-semibold text-base text-foreground mb-1">
                          {product.name}
                        </h4>
                        {product.description && (
                          <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2">
                            {product.description}
                          </p>
                        )}
                        <Link
                          to="/get-quote"
                          className="inline-flex items-center gap-1 font-body text-sm font-medium text-primary mt-2 group-hover:gap-2 transition-all duration-300"
                        >
                          Get Quote
                          <ArrowRight className="w-3.5 h-3.5" />
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

      {/* Why Choose Scioto Section */}
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
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-space-md rounded-full bg-white shadow-sm flex items-center justify-center">
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

      {/* Industry Expertise Section */}
      <section className="py-space-2xl bg-white">
        <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <div className="text-center mb-space-xl">
            <div className="w-10 h-0.5 bg-primary mx-auto mb-space-md" />
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-foreground mb-space-sm">
              Industries We Work With
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-[600px] mx-auto">
              We've insured hundreds of Ohio businesses. Here are some of the industries we know best.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="group bg-cream rounded-lg p-space-md text-center hover:shadow-md transition-all duration-300 cursor-pointer"
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
            Wondering if you're missing something? We'll look at your current policies and tell you where the gaps are. Takes about 20 minutes and costs nothing.
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
