import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { personalInsuranceProducts } from "@/data/products";

import lifeStageFirstCar from "@/assets/life-stage-first-car.jpg";
import lifeStageFirstPlace from "@/assets/life-stage-first-place.jpg";
import lifeStageHome from "@/assets/life-stage-home.jpg";
import lifeStageFamily from "@/assets/life-stage-family.jpg";
import lifeStageWealth from "@/assets/life-stage-wealth.jpg";

const lifeStages = [
  { stage: "First Car", coverage: "Auto Insurance", image: lifeStageFirstCar, link: "/get-quote" },
  { stage: "First Place", coverage: "Renters Insurance", image: lifeStageFirstPlace, link: "/get-quote" },
  { stage: "Home Sweet Home", coverage: "Homeowners Insurance", image: lifeStageHome, link: "/get-quote" },
  { stage: "Growing Family", coverage: "Life Insurance", image: lifeStageFamily, link: "/get-quote" },
  { stage: "Building Wealth", coverage: "Umbrella Coverage", image: lifeStageWealth, link: "/get-quote" },
];

const allProducts = personalInsuranceProducts.flatMap((cat) => cat.products);

const PersonalInsurance = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Section 1: Typographic Hero */}
      <section className="bg-white pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="container-wide">
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6">
                Personal Insurance
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.15] text-balance">
                Personal Insurance
              </h1>
              <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Insurance solutions tailored to your specific coverage needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-xl text-base">
                  <Link to="/get-quote">
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href="tel:6146120050">
                    <Phone className="h-5 w-5" />
                    Give Us a Call
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 2: Life Stage Strip */}
      <section className="bg-cream section-padding">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground text-center mb-3">
              Coverage for Every Stage of Life
            </h2>
            <div className="w-12 h-0.5 bg-primary mx-auto" />
          </AnimatedSection>

          <div className="flex lg:grid lg:grid-cols-5 gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 lg:overflow-visible scrollbar-hide">
            {lifeStages.map((stage, i) => (
              <AnimatedSection key={stage.stage} animation="fade-up" delay={i * 80}>
                <Link
                  to={stage.link}
                  className="group flex-shrink-0 w-[240px] sm:w-[260px] lg:w-auto snap-start block rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={stage.image}
                      alt={stage.stage}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-semibold text-foreground text-lg mb-1">
                      {stage.stage}
                    </h3>
                    <span className="text-sm text-accent font-medium">
                      {stage.coverage}
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Coverage Products – Two-Column Editorial Grid */}
      <section className="bg-white section-padding">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Personal Insurance Coverage
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {allProducts.map((product, i) => {
              const Icon = product.icon;
              return (
                <AnimatedSection key={product.name} animation="fade-up" delay={i * 60}>
                  <Link
                    to="/get-quote"
                    className="group flex gap-5 p-6 sm:p-8 rounded-xl bg-card border-l-[3px] border-l-primary/40 border border-border hover:border-l-primary hover:shadow-md hover:-translate-y-0.5 transition-[border-color,box-shadow,transform] duration-200"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      {product.description && (
                        <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                          {product.description}
                        </p>
                      )}
                      <span className="inline-flex items-center text-sm font-medium text-primary">
                        Get a Quote
                        <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Featured Testimonial */}
      <section className="bg-white section-padding">
        <div className="container-wide">
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl italic text-foreground leading-relaxed mb-8">
                "When a tree fell on our garage, they handled everything. We barely had to lift a finger. Tom walked us through every step of the claim."
              </blockquote>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm">
                <span className="font-semibold text-foreground">— Marcus W.</span>
                <span className="hidden sm:block text-muted-foreground">|</span>
                <span className="text-muted-foreground">Westerville, OH</span>
                <span className="hidden sm:block text-muted-foreground">|</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  Helped with: Home Insurance Claim
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 5: CTA Banner */}
      <section className="relative bg-primary overflow-hidden">
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
        <div className="container-wide section-padding relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                Interested in a Free Risk Assessment?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg mx-auto">
                We'll review your current coverage to identify any gaps and explore more comprehensive options that fit your needs. Get a free quote today and see if we can offer a better solution.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl text-base bg-white text-primary hover:bg-white/90"
                >
                  <Link to="/get-quote">
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <a
                  href="tel:6146120050"
                  className="inline-flex items-center gap-2 py-3 font-body font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-200"
                >
                  <Phone className="h-4 w-4" />
                  Or call us: (614) 612-0050
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default PersonalInsurance;
