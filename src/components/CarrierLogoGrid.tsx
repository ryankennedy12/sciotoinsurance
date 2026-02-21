import { AnimatedSection } from "@/components/ui/animated-section";

// Carrier data with actual logo SVGs
const carriers = [
  { 
    name: "Nationwide", 
    logo: (
      <svg viewBox="0 0 120 40" fill="currentColor" className="h-8 w-auto">
        <text x="0" y="28" fontFamily="Arial Black, sans-serif" fontSize="16" fontWeight="900">NATIONWIDE</text>
      </svg>
    )
  },
  { 
    name: "Progressive", 
    logo: (
      <svg viewBox="0 0 120 40" fill="currentColor" className="h-8 w-auto">
        <text x="0" y="26" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700">PROGRESSIVE</text>
      </svg>
    )
  },
  { 
    name: "Travelers", 
    logo: (
      <svg viewBox="0 0 100 40" fill="currentColor" className="h-8 w-auto">
        <text x="0" y="26" fontFamily="Georgia, serif" fontSize="15" fontWeight="600">Travelers</text>
      </svg>
    )
  },
  { 
    name: "Safeco", 
    logo: (
      <svg viewBox="0 0 80 40" fill="currentColor" className="h-7 w-auto">
        <text x="0" y="26" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700">SAFECO</text>
      </svg>
    )
  },
  { 
    name: "Liberty Mutual", 
    logo: (
      <svg viewBox="0 0 130 40" fill="currentColor" className="h-8 w-auto">
        <text x="0" y="26" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="600">Liberty Mutual</text>
      </svg>
    )
  },
  { 
    name: "Grange", 
    logo: (
      <svg viewBox="0 0 80 40" fill="currentColor" className="h-7 w-auto">
        <text x="0" y="26" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700">GRANGE</text>
      </svg>
    )
  },
  { 
    name: "Westfield", 
    logo: (
      <svg viewBox="0 0 100 40" fill="currentColor" className="h-7 w-auto">
        <text x="0" y="26" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700">WESTFIELD</text>
      </svg>
    )
  },
  { 
    name: "Cincinnati Insurance", 
    logo: (
      <svg viewBox="0 0 100 40" fill="currentColor" className="h-7 w-auto">
        <text x="0" y="26" fontFamily="Georgia, serif" fontSize="14" fontWeight="600">Cincinnati</text>
      </svg>
    )
  },
  { 
    name: "Auto-Owners", 
    logo: (
      <svg viewBox="0 0 110 40" fill="currentColor" className="h-7 w-auto">
        <text x="0" y="26" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700">AUTO-OWNERS</text>
      </svg>
    )
  },
  { 
    name: "Erie Insurance", 
    logo: (
      <svg viewBox="0 0 60 40" fill="currentColor" className="h-7 w-auto">
        <text x="0" y="28" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900">ERIE</text>
      </svg>
    )
  },
  { 
    name: "The Hartford", 
    logo: (
      <svg viewBox="0 0 110 40" fill="currentColor" className="h-8 w-auto">
        <text x="0" y="26" fontFamily="Georgia, serif" fontSize="14" fontWeight="600">The Hartford</text>
      </svg>
    )
  },
  { 
    name: "Chubb", 
    logo: (
      <svg viewBox="0 0 70 40" fill="currentColor" className="h-7 w-auto">
        <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="800">CHUBB</text>
      </svg>
    )
  },
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
                className="group flex items-center justify-center h-16 sm:h-20 px-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-[background-color,transform] duration-300 lg:hover:scale-105"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Carrier logo - grayscale by default, primary color on hover */}
                <div className="text-muted-foreground/50 group-hover:text-primary transition-colors duration-300 flex items-center justify-center">
                  {carrier.logo}
                </div>
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
