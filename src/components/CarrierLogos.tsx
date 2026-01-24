import { AnimatedSection } from "@/components/ui/animated-section";

// Individual carrier logo components - stylized SVG representations
const StateFarmLogo = () => (
  <svg viewBox="0 0 120 40" className="w-full h-full">
    <rect x="5" y="8" width="24" height="24" rx="2" fill="currentColor" opacity="0.9" />
    <text x="35" y="24" fontSize="11" fontWeight="700" fill="currentColor" fontFamily="Arial">State Farm</text>
  </svg>
);

const ProgressiveLogo = () => (
  <svg viewBox="0 0 120 40" className="w-full h-full">
    <text x="10" y="26" fontSize="14" fontWeight="700" fill="currentColor" fontFamily="Arial" fontStyle="italic">Progressive</text>
  </svg>
);

const NationwideLogo = () => (
  <svg viewBox="0 0 120 40" className="w-full h-full">
    <path d="M10 20 L20 10 L30 20 L20 15 Z" fill="currentColor" opacity="0.9" />
    <text x="35" y="24" fontSize="10" fontWeight="700" fill="currentColor" fontFamily="Arial">Nationwide</text>
  </svg>
);

const TravelersLogo = () => (
  <svg viewBox="0 0 120 40" className="w-full h-full">
    <circle cx="18" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M18 12 L18 28 M10 20 L26 20" stroke="currentColor" strokeWidth="1.5" />
    <text x="32" y="24" fontSize="11" fontWeight="600" fill="currentColor" fontFamily="Arial">Travelers</text>
  </svg>
);

const SafecoLogo = () => (
  <svg viewBox="0 0 120 40" className="w-full h-full">
    <path d="M10 28 L18 8 L26 28 Z" fill="none" stroke="currentColor" strokeWidth="2" />
    <text x="32" y="24" fontSize="13" fontWeight="700" fill="currentColor" fontFamily="Arial">SAFECO</text>
  </svg>
);

const LibertyMutualLogo = () => (
  <svg viewBox="0 0 120 40" className="w-full h-full">
    <path d="M8 28 L15 10 L22 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <text x="28" y="18" fontSize="8" fontWeight="600" fill="currentColor" fontFamily="Arial">Liberty</text>
    <text x="28" y="28" fontSize="8" fontWeight="600" fill="currentColor" fontFamily="Arial">Mutual</text>
  </svg>
);

const GrangeLogo = () => (
  <svg viewBox="0 0 120 40" className="w-full h-full">
    <rect x="8" y="12" width="16" height="16" fill="currentColor" opacity="0.15" />
    <rect x="10" y="14" width="12" height="12" fill="currentColor" opacity="0.3" />
    <text x="30" y="24" fontSize="13" fontWeight="700" fill="currentColor" fontFamily="Georgia">Grange</text>
  </svg>
);

const WestfieldLogo = () => (
  <svg viewBox="0 0 120 40" className="w-full h-full">
    <path d="M8 12 L14 28 L20 16 L26 28 L32 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <text x="38" y="24" fontSize="10" fontWeight="600" fill="currentColor" fontFamily="Arial">Westfield</text>
  </svg>
);

const CincinnatiLogo = () => (
  <svg viewBox="0 0 120 40" className="w-full h-full">
    <circle cx="16" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
    <text x="16" y="24" fontSize="10" fontWeight="700" fill="currentColor" fontFamily="Arial" textAnchor="middle">C</text>
    <text x="32" y="18" fontSize="7" fontWeight="600" fill="currentColor" fontFamily="Arial">Cincinnati</text>
    <text x="32" y="27" fontSize="7" fontWeight="600" fill="currentColor" fontFamily="Arial">Insurance</text>
  </svg>
);

const AutoOwnersLogo = () => (
  <svg viewBox="0 0 120 40" className="w-full h-full">
    <path d="M10 26 Q18 8 26 26" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="18" cy="22" r="3" fill="currentColor" />
    <text x="32" y="18" fontSize="8" fontWeight="600" fill="currentColor" fontFamily="Arial">Auto-</text>
    <text x="32" y="27" fontSize="8" fontWeight="600" fill="currentColor" fontFamily="Arial">Owners</text>
  </svg>
);

const ErieLogo = () => (
  <svg viewBox="0 0 120 40" className="w-full h-full">
    <path d="M8 10 L8 30 L24 30 M8 20 L20 20 M8 10 L24 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <text x="30" y="24" fontSize="14" fontWeight="700" fill="currentColor" fontFamily="Georgia">ERIE</text>
  </svg>
);

const MetLifeLogo = () => (
  <svg viewBox="0 0 120 40" className="w-full h-full">
    <rect x="8" y="14" width="4" height="14" fill="currentColor" />
    <rect x="14" y="10" width="4" height="18" fill="currentColor" />
    <rect x="20" y="14" width="4" height="14" fill="currentColor" />
    <text x="30" y="24" fontSize="12" fontWeight="700" fill="currentColor" fontFamily="Arial">MetLife</text>
  </svg>
);

const GuardianLogo = () => (
  <svg viewBox="0 0 120 40" className="w-full h-full">
    <path d="M18 8 L8 16 L8 28 L18 32 L28 28 L28 16 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <text x="34" y="24" fontSize="11" fontWeight="600" fill="currentColor" fontFamily="Arial">Guardian</text>
  </svg>
);

const AllstateLogo = () => (
  <svg viewBox="0 0 120 40" className="w-full h-full">
    <ellipse cx="18" cy="20" rx="12" ry="8" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M10 20 Q18 14 26 20" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <text x="34" y="24" fontSize="11" fontWeight="700" fill="currentColor" fontFamily="Arial">Allstate</text>
  </svg>
);

const FarmersLogo = () => (
  <svg viewBox="0 0 120 40" className="w-full h-full">
    <path d="M10 28 L18 10 L26 28 M13 22 L23 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <text x="32" y="24" fontSize="12" fontWeight="700" fill="currentColor" fontFamily="Arial">Farmers</text>
  </svg>
);

const AmericanFamilyLogo = () => (
  <svg viewBox="0 0 120 40" className="w-full h-full">
    <path d="M8 28 L14 14 L20 28 M18 14 L24 28 L30 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <text x="36" y="18" fontSize="7" fontWeight="600" fill="currentColor" fontFamily="Arial">American</text>
    <text x="36" y="27" fontSize="7" fontWeight="600" fill="currentColor" fontFamily="Arial">Family</text>
  </svg>
);

const carriers = [
  { name: "State Farm", Logo: StateFarmLogo, color: "#C02135" },
  { name: "Progressive", Logo: ProgressiveLogo, color: "#0070BA" },
  { name: "Nationwide", Logo: NationwideLogo, color: "#0047BB" },
  { name: "Travelers", Logo: TravelersLogo, color: "#CC0000" },
  { name: "Safeco", Logo: SafecoLogo, color: "#003C71" },
  { name: "Liberty Mutual", Logo: LibertyMutualLogo, color: "#F7B500" },
  { name: "Grange", Logo: GrangeLogo, color: "#00563F" },
  { name: "Westfield", Logo: WestfieldLogo, color: "#003366" },
  { name: "Cincinnati Insurance", Logo: CincinnatiLogo, color: "#003B5C" },
  { name: "Auto-Owners", Logo: AutoOwnersLogo, color: "#0066B3" },
  { name: "Erie", Logo: ErieLogo, color: "#003F72" },
  { name: "MetLife", Logo: MetLifeLogo, color: "#00A3E0" },
  { name: "Guardian", Logo: GuardianLogo, color: "#003366" },
  { name: "Allstate", Logo: AllstateLogo, color: "#003B73" },
  { name: "Farmers", Logo: FarmersLogo, color: "#E31837" },
  { name: "American Family", Logo: AmericanFamilyLogo, color: "#0056A3" },
];

const CarrierLogos = () => {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <div className="w-10 h-0.5 bg-primary mx-auto mb-6" />
          <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-foreground">
            We Shop These 30+ Carriers So You Don't Have To
          </h2>
        </AnimatedSection>

        {/* Carrier Logo Grid */}
        <AnimatedSection animation="fade-up" delay={100} className="mb-8">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
            {carriers.map((carrier, index) => (
              <div
                key={index}
                className="group flex items-center justify-center h-16 lg:h-20 bg-white rounded-lg border border-gray-200/50 px-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/30"
                title={carrier.name}
              >
                <div 
                  className="w-full h-10 text-gray-400 transition-all duration-300 group-hover:text-primary"
                  style={{ 
                    // On hover, use the carrier's brand color
                    ['--hover-color' as string]: carrier.color 
                  }}
                >
                  <carrier.Logo />
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* "...and more" text */}
        <AnimatedSection animation="fade-up" delay={200} className="text-center mb-8">
          <p className="font-body text-muted-foreground text-sm italic">
            ...and 20+ more carriers
          </p>
        </AnimatedSection>

        {/* Explanation text */}
        <AnimatedSection animation="fade-up" delay={300} className="text-center max-w-2xl mx-auto">
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            As an independent agency, we work for <span className="font-semibold text-foreground">YOU</span>, not one insurance company. We compare coverage and pricing across dozens of carriers to find your best fit.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CarrierLogos;
