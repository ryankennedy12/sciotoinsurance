import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { personalInsuranceProducts, personalInsuranceReasons } from "@/data/products";

const PersonalInsurance = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-space-xl bg-gradient-to-br from-cream via-white to-burgundy-100/30">
        <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <div className="max-w-[700px]">
            <p className="font-body font-medium text-xs uppercase tracking-[0.1em] text-muted-foreground mb-space-sm">
              Personal Insurance
            </p>
            <h1 className="font-display font-semibold text-3xl lg:text-5xl text-foreground leading-tight mb-space-md">
              Personal Insurance Throughout Ohio
            </h1>
            <p className="font-body text-lg text-muted-foreground mb-space-lg max-w-[540px]">
              Your car, your house, your family's future. We help Ohio families figure out what they actually need and find the best price for it.
            </p>
            <Link
              to="/get-quote"
              className="inline-flex items-center justify-center px-8 py-4 rounded bg-primary text-primary-foreground font-body font-medium text-sm transition-all duration-300 hover:bg-burgundy-800 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get a Personal Insurance Quote
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
              Why Choose Scioto for Personal Insurance
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-space-lg">
            {personalInsuranceReasons.map((reason, index) => {
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
              className="inline-flex items-center justify-center px-10 py-4 rounded bg-primary text-primary-foreground font-body font-medium text-base transition-all duration-300 hover:bg-burgundy-800 hover:-translate-y-0.5 hover:shadow-xl"
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
        </div>
      </section>
    </>
  );
};

export default PersonalInsurance;
