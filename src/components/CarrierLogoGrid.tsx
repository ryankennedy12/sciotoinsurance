import { AnimatedSection } from "@/components/ui/animated-section";

// Carrier data with placeholder logos (using text for now, can be replaced with real logos)
const carriers = [
  { name: "Nationwide", short: "NW" },
  { name: "Progressive", short: "PRO" },
  { name: "Travelers", short: "TRV" },
  { name: "Safeco", short: "SAF" },
  { name: "Liberty Mutual", short: "LM" },
  { name: "Grange", short: "GRG" },
  { name: "Westfield", short: "WF" },
  { name: "Cincinnati", short: "CIN" },
  { name: "Auto-Owners", short: "AO" },
  { name: "Erie", short: "ERIE" },
  { name: "The Hartford", short: "HTF" },
  { name: "Chubb", short: "CHB" },
];

const CarrierLogoGrid = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-border/50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-space-md lg:px-space-lg">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-10 sm:mb-12">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-[36px] text-foreground mb-3">
            We Shop These Carriers So You Don't Have To
          </h2>
          <p className="font-body text-muted-foreground max-w-[600px] mx-auto">
            As an independent agency, we compare options across dozens of carriers to find what actually fits your situation.
          </p>
        </AnimatedSection>

        {/* Logo Grid */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mb-8">
            {carriers.map((carrier, index) => (
              <div
                key={carrier.name}
                className="group flex items-center justify-center h-16 sm:h-20 px-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Placeholder for actual logo - using styled text */}
                <span className="font-display font-semibold text-sm sm:text-base text-muted-foreground/60 group-hover:text-primary transition-colors duration-300 text-center">
                  {carrier.name}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Bottom text */}
        <AnimatedSection animation="fade-up" delay={200} className="text-center">
          <p className="font-body text-sm text-muted-foreground">
            ...and <span className="font-semibold text-primary">20+ more carriers</span>. We find the right fit, not just the first option.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CarrierLogoGrid;
