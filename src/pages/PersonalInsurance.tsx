import { Link } from "react-router-dom";
import { Phone, ArrowRight, Car, Home, Key, Umbrella, Heart, PawPrint, Building, Sparkles, ShieldCheck, Users, RefreshCw } from "lucide-react";

const PersonalInsurance = () => {
  const coverageTypes = [
    {
      icon: Car,
      name: "Auto Insurance",
      description: "More than state minimums. Actual protection for your car, your passengers, and your peace of mind.",
    },
    {
      icon: Home,
      name: "Home Insurance",
      description: "Your home is your biggest investment. We make sure it's covered for what it would actually cost to rebuild.",
    },
    {
      icon: Key,
      name: "Renters Insurance",
      description: "Your landlord's insurance doesn't cover your stuff. Starting at around $15/month, there's no excuse not to have this.",
    },
    {
      icon: Umbrella,
      name: "Umbrella Insurance",
      description: "When a lawsuit exceeds your auto or home policy limits, umbrella coverage is the difference between inconvenience and financial ruin.",
    },
    {
      icon: Heart,
      name: "Life Insurance",
      description: "Term or permanent, simple or complex — we help you figure out what your family actually needs.",
    },
    {
      icon: PawPrint,
      name: "Pet Insurance",
      description: "Vet bills add up fast. Pet insurance means you make medical decisions based on what's best for your pet, not your wallet.",
    },
    {
      icon: Building,
      name: "Condo Insurance",
      description: "Covers what your HOA policy doesn't — your unit's interior, your belongings, and your liability.",
    },
    {
      icon: Sparkles,
      name: "Specialty Coverage",
      description: "Boats, RVs, motorcycles, jewelry, art — if it matters to you, we can insure it.",
    },
  ];

  const reasons = [
    {
      icon: ShieldCheck,
      title: "We shop 30+ carriers to find your best rate",
      description: "As an independent agency, we're not locked into one company. We compare options to get you the best coverage at the best price.",
    },
    {
      icon: Users,
      title: "Local claims support when you need it most",
      description: "When something goes wrong, you won't be transferred to a call center. We're here in New Albany, advocating for you.",
    },
    {
      icon: RefreshCw,
      title: "Annual policy reviews to catch coverage gaps",
      description: "Life changes. We proactively review your coverage each year to make sure you're never under-insured or overpaying.",
    },
  ];

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
              Personal Insurance That Protects What Actually Matters
            </h1>
            <p className="font-body text-lg text-muted-foreground mb-space-lg max-w-[540px]">
              Your home. Your family. Your future. We help you protect all of it — without overpaying.
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

      {/* Coverage Grid Section */}
      <section className="py-space-2xl bg-white">
        <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <div className="mb-space-xl">
            <div className="w-10 h-0.5 bg-primary mb-space-md" />
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-foreground mb-space-sm">
              Coverage Options
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-[600px]">
              Every family is different. We'll help you build a protection plan that fits your life.
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
            {reasons.map((reason, index) => {
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
            Not sure what coverage you need?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-space-lg">
            That's literally our job. Let's talk through your situation and build a plan that makes sense.
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
