import { Link } from "react-router-dom";
import { Phone, ArrowRight, Search, BarChart3, FileCheck, Headphones, Users, TrendingDown, DollarSign, PiggyBank, Wallet } from "lucide-react";
import { employeeBenefitsProducts } from "@/data/products";

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

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-space-xl bg-gradient-to-br from-cream via-white to-burgundy-100/30">
        <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <div className="max-w-[700px]">
            <p className="font-body font-medium text-xs uppercase tracking-[0.1em] text-muted-foreground mb-space-sm">
              Employee Benefits
            </p>
            <h1 className="font-display font-semibold text-3xl lg:text-5xl text-foreground leading-tight mb-space-md">
              Employee Benefits That Help You Compete for Talent
            </h1>
            <p className="font-body text-lg text-muted-foreground mb-space-lg max-w-[560px]">
              Top candidates expect solid benefits. We help small and mid-sized businesses offer packages that compete with the big guys — without the big-guy budget.
            </p>
            <Link
              to="/get-quote"
              className="inline-flex items-center justify-center px-8 py-4 rounded bg-primary text-primary-foreground font-body font-medium text-sm transition-all duration-300 hover:bg-burgundy-800 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get a Benefits Consultation
            </Link>
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
              Comprehensive benefits solutions designed to attract, retain, and protect your team.
            </p>
          </div>

          <div className="mb-space-lg">
            <h3 className="font-display font-semibold text-xl text-foreground mb-space-md flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gold-500" />
              Insurance Benefits
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-space-sm">
              {employeeBenefitsProducts.map((product, index) => {
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
                        Learn More
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional Offerings */}
          <div>
            <h3 className="font-display font-semibold text-xl text-foreground mb-space-md flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gold-500" />
              Financial Benefits
            </h3>
            
            <div className="grid md:grid-cols-2 gap-space-sm">
              {additionalOfferings.map((offering, index) => {
                const Icon = offering.icon;
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
                        {offering.name}
                      </h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {offering.description}
                      </p>
                      <Link
                        to="/get-quote"
                        className="inline-flex items-center gap-1 font-body text-sm font-medium text-primary mt-2 group-hover:gap-2 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Business Case Section */}
      <section className="py-space-2xl bg-primary">
        <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <div className="text-center mb-space-xl">
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-white mb-space-sm">
              Benefits Aren't Just a Cost — They're a Strategy
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-space-lg mb-space-md">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 mx-auto mb-space-sm rounded-full bg-white/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <p className="font-display font-bold text-5xl lg:text-6xl text-cream mb-space-xs">
                    {item.stat}
                  </p>
                  <p className="font-body text-sm text-white/80">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="text-center font-body text-xs text-white/50 italic">
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

      {/* CTA Section */}
      <section className="py-space-2xl bg-white">
        <div className="max-w-[700px] mx-auto px-space-md lg:px-space-lg text-center">
          <h2 className="font-display font-semibold text-2xl lg:text-3xl text-foreground leading-tight mb-space-md">
            Ready to make your benefits a competitive advantage?
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md mb-space-md">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded bg-primary text-primary-foreground font-body font-medium text-base transition-all duration-300 hover:bg-burgundy-800 hover:-translate-y-0.5 hover:shadow-xl"
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
            Free consultation • No obligation • Clear answers
          </p>
        </div>
      </section>
    </>
  );
};

export default EmployeeBenefits;
