import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Phone, FileSearch, ClipboardCheck, Handshake, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { employeeBenefitsProducts } from "@/data/products";

const processSteps = [
  { step: 1, title: "Discovery", description: "We learn about your business, employees, and goals.", icon: FileSearch },
  { step: 2, title: "Market Analysis", description: "We shop multiple carriers to find the best coverage.", icon: ClipboardCheck },
  { step: 3, title: "Implementation", description: "We handle the paperwork and train your team.", icon: Handshake },
  { step: 4, title: "Ongoing Support", description: "Year-round support for questions and annual reviews.", icon: HeadphonesIcon },
];

const EmployeeBenefits = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Section 1: Hero */}
      <section className="section-padding pt-32 md:pt-36 lg:pt-40 bg-card">
        <div className="container-narrow text-center">
          <AnimatedSection animation="fade-up">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6">
              Employee Benefits
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-[1.15] text-balance">
              Employee Benefits
            </h1>
            <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              With benefit costs climbing and employee expectations higher than ever, we can help bridge the gap by tailoring a benefits package that makes sense for everyone involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base">
                <Link to="/get-quote">Get a Custom Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <a
                href="tel:6146120050"
                className="inline-flex items-center justify-center gap-2 text-primary font-medium hover:underline underline-offset-4"
              >
                <Phone className="h-4 w-4" />
                (614) 612-0050
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 2: Benefits We Offer */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">What We Offer</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive benefits solutions for your team.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {employeeBenefitsProducts.map((product, i) => {
              const Icon = product.icon;
              return (
                <AnimatedSection key={product.name} animation="fade-up" delay={i * 80}>
                  <div className="bg-card rounded-xl border border-border p-6 text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Our Process */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-3">How We Work With You</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">A simple four-step process.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.step} animation="fade-up" delay={i * 100}>
                  <div className="group relative rounded-2xl border border-border bg-background p-6 pt-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30">
                    <div className="absolute -top-4 left-6">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-display font-bold text-sm shadow-md">
                        {step.step}
                      </span>
                    </div>
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: CTA */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, hsl(345 55% 40% / 0.4), transparent 60%)' }} />
        <div className="container-narrow text-center relative z-10">
          <AnimatedSection animation="fade-up">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] mb-4 sm:mb-6">
              Interested in a Free Risk Assessment?
            </h2>
            <p className="font-body text-lg sm:text-xl text-white/80 mb-8 sm:mb-10 max-w-[600px] mx-auto leading-relaxed">
              We'll review your current coverage to identify any gaps and explore more comprehensive options that fit your needs. Get a free quote today and see if we can offer a better solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link to="/get-quote">Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <a
                href="tel:6146120050"
                className="inline-flex items-center gap-2 py-3 font-body font-medium text-white/90 hover:text-white transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                Or call us: (614) 612-0050
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default EmployeeBenefits;
