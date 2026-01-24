import {
  Car, Home, Key, Umbrella, Heart, PawPrint, Building, Sparkles,
  Bike, Caravan, Timer, Ship, Mountain, Anchor, HousePlus, HomeIcon,
  Droplets, Globe, Gem, Plane, PartyPopper, Shield, Package,
  ShieldCheck, Users, RefreshCw,
  // Business icons
  Building2, Briefcase, HardHat, Scale, Truck, Lock, UserCog,
  Wine, Hammer, Leaf, Wrench, AlertTriangle, Landmark, Waves,
  Cog, FileCheck, UserPlus, Brain, BarChart3,
  // Benefits icons
  Eye, PiggyBank, Wallet, Gift, Stethoscope, Cross, Activity
} from "lucide-react";

// ============================================
// PERSONAL INSURANCE PRODUCTS
// ============================================

export interface Product {
  icon: typeof Car;
  name: string;
  description?: string;
  slug?: string;
}

export interface ProductCategory {
  title: string;
  products: Product[];
}

export const personalInsuranceProducts: ProductCategory[] = [
  {
    title: "Core Coverage",
    products: [
      {
        icon: Home,
        name: "Home Insurance",
        description: "Your home is probably your biggest investment. We make sure it's covered for what it would actually cost to rebuild.",
        slug: "home"
      },
      {
        icon: Car,
        name: "Auto Insurance",
        description: "We compare rates from 30+ companies to find coverage that makes sense for how you actually drive.",
        slug: "auto"
      },
      {
        icon: Key,
        name: "Renters Insurance",
        description: "Your landlord's insurance doesn't cover your stuff. This starts around $15/month. Worth it.",
        slug: "renters"
      },
      {
        icon: Building,
        name: "Condo Insurance",
        description: "Covers what your HOA policy doesn't. Your unit's interior, your belongings, and your liability.",
        slug: "condo"
      },
      {
        icon: Umbrella,
        name: "Umbrella Insurance",
        description: "When a lawsuit exceeds your auto or home policy limits, this is what keeps you from losing everything.",
        slug: "umbrella"
      },
      {
        icon: PawPrint,
        name: "Pet Insurance",
        description: "Vet bills add up fast. This means you can make medical decisions based on what's best for your pet.",
        slug: "pet"
      },
    ]
  },
  {
    title: "Life & Income Protection",
    products: [
      {
        icon: Heart,
        name: "Life Insurance",
        description: "Term or permanent, simple or complicated. We help you figure out what makes sense for your family.",
        slug: "life"
      },
      {
        icon: Shield,
        name: "Long-Term Disability Insurance",
        description: "Replaces your income if illness or injury keeps you from working. Your ability to earn is your most valuable asset.",
        slug: "long-term-disability"
      },
      {
        icon: Users,
        name: "Long-Term Care Insurance",
        description: "Covers the cost of nursing homes, assisted living, or in-home care. Protects your savings and your family.",
        slug: "long-term-care"
      },
      {
        icon: PiggyBank,
        name: "Annuities",
        description: "Guaranteed income for retirement. We can help you understand which type fits your situation.",
        slug: "annuities"
      },
      {
        icon: Briefcase,
        name: "Individual Retirement",
        description: "IRAs and retirement planning solutions beyond what your employer offers.",
        slug: "individual-retirement"
      },
    ]
  },
  {
    title: "Vehicle & Recreation",
    products: [
      {
        icon: Bike,
        name: "Motorcycle Insurance",
        description: "Specialized coverage for riders. From cruisers to sport bikes, we find policies that fit how you ride.",
        slug: "motorcycle"
      },
      {
        icon: Caravan,
        name: "RV Insurance",
        description: "Whether it's a weekend camper or you're living in it full-time, we'll find coverage that travels with you.",
        slug: "rv"
      },
      {
        icon: Timer,
        name: "Classic Car Insurance",
        description: "Your classic deserves more than a standard policy. Agreed value coverage protects your investment.",
        slug: "classic-car"
      },
      {
        icon: Ship,
        name: "Watercraft Insurance",
        description: "Boats, jet skis, personal watercraft. Coverage for the vessel, liability, and passengers.",
        slug: "watercraft"
      },
      {
        icon: Mountain,
        name: "Off-Road Vehicle Insurance",
        description: "ATVs, UTVs, dirt bikes, snowmobiles. Your auto policy won't cover these.",
        slug: "off-road"
      },
      {
        icon: Anchor,
        name: "Yacht Insurance",
        description: "Comprehensive coverage for larger vessels including hull, liability, and crew protection.",
        slug: "yacht"
      },
    ]
  },
  {
    title: "Property & Specialty",
    products: [
      {
        icon: Droplets,
        name: "Flood Insurance",
        description: "Your home policy doesn't cover floods. If you're in a flood zone (or near water), you need this.",
        slug: "flood"
      },
      {
        icon: Globe,
        name: "Earthquake Insurance",
        description: "Protects your home from ground-up damage that standard policies exclude.",
        slug: "earthquake"
      },
      {
        icon: Caravan,
        name: "Mobile Home Insurance",
        description: "Specialized coverage for manufactured and mobile homes with their unique risks.",
        slug: "mobile-home"
      },
      {
        icon: HousePlus,
        name: "Secondary Home Insurance",
        description: "Vacation homes and second properties need coverage tailored to part-time occupancy.",
        slug: "secondary-home"
      },
      {
        icon: HomeIcon,
        name: "Rental Property Insurance",
        description: "Landlord coverage that protects your investment property and rental income.",
        slug: "rental-property"
      },
    ]
  },
  {
    title: "Lifestyle & Events",
    products: [
      {
        icon: PartyPopper,
        name: "Wedding Insurance",
        description: "Protect your investment in your big day from vendor no-shows, weather, and other surprises.",
        slug: "wedding"
      },
      {
        icon: Plane,
        name: "Travel Insurance",
        description: "Trip cancellation, medical emergencies abroad, and lost luggage protection.",
        slug: "travel"
      },
      {
        icon: Gem,
        name: "Valuable Possessions Insurance",
        description: "Jewelry, art, collectibles, and high-value items that need coverage beyond your home policy limits.",
        slug: "valuable-possessions"
      },
    ]
  },
  {
    title: "Bundled & High Value",
    products: [
      {
        icon: Package,
        name: "Home & Auto Bundle",
        description: "Save money and simplify things by bundling your home and auto policies together.",
        slug: "home-auto-bundle"
      },
      {
        icon: Sparkles,
        name: "High Net Worth Insurance",
        description: "Comprehensive protection for affluent households with complex assets and higher liability exposure.",
        slug: "high-net-worth"
      },
      {
        icon: Shield,
        name: "Excess Liability Insurance",
        description: "Additional liability protection beyond your standard policies for high-value individuals.",
        slug: "excess-liability"
      },
    ]
  },
];

// Flat list of all personal insurance products for simple display
export const allPersonalInsuranceProducts = personalInsuranceProducts.flatMap(
  category => category.products
);

// ============================================
// BUSINESS INSURANCE PRODUCTS
// ============================================

export const businessInsuranceProducts: ProductCategory[] = [
  {
    title: "Foundational Coverage",
    products: [
      {
        icon: Shield,
        name: "General Liability Insurance",
        description: "Protection when someone gets hurt on your property or claims your work caused damage. Every business needs this.",
        slug: "general-liability"
      },
      {
        icon: Briefcase,
        name: "Business Owners Policy (BOP)",
        description: "Bundles property and liability coverage at a lower cost than buying separately. Works well for small to mid-sized businesses.",
        slug: "bop"
      },
      {
        icon: Building2,
        name: "Commercial Property Insurance",
        description: "Your building, equipment, inventory, and everything else you need to operate. Covered against fire, theft, and disasters.",
        slug: "commercial-property"
      },
      {
        icon: Truck,
        name: "Commercial Auto Insurance",
        description: "If your business owns vehicles or employees drive for work, personal auto won't cut it. This will.",
        slug: "commercial-auto"
      },
    ]
  },
  {
    title: "Liability Protection",
    products: [
      {
        icon: HardHat,
        name: "Workers' Compensation Insurance",
        description: "Required in Ohio if you have employees. We help you stay compliant and find ways to lower your costs.",
        slug: "workers-comp"
      },
      {
        icon: Scale,
        name: "Professional Liability Insurance (E&O)",
        description: "When a client claims your advice or services cost them money. Essential for consultants, accountants, and service providers.",
        slug: "professional-liability"
      },
      {
        icon: UserCog,
        name: "Directors & Officers Insurance (D&O)",
        description: "Protects your leadership team's personal assets from lawsuits related to business decisions.",
        slug: "directors-officers"
      },
      {
        icon: Users,
        name: "Employment Practices Liability (EPLI)",
        description: "Protection against claims of discrimination, harassment, wrongful termination, and other employment issues.",
        slug: "employment-practices"
      },
      {
        icon: FileCheck,
        name: "Fiduciary Liability Insurance",
        description: "Protects those who manage employee benefit plans from claims of mismanagement.",
        slug: "fiduciary-liability"
      },
      {
        icon: Umbrella,
        name: "Commercial Umbrella Insurance",
        description: "Extra liability protection that kicks in when your other policies hit their limits.",
        slug: "commercial-umbrella"
      },
    ]
  },
  {
    title: "Industry-Specific",
    products: [
      {
        icon: Lock,
        name: "Cyber Liability Insurance",
        description: "Data breaches happen to businesses of every size. This covers notification costs, legal fees, and business interruption.",
        slug: "cyber-liability"
      },
      {
        icon: Wine,
        name: "Liquor Liability Insurance",
        description: "If your business serves alcohol, you need protection from claims related to intoxicated patrons.",
        slug: "liquor-liability"
      },
      {
        icon: Hammer,
        name: "Builders Risk Insurance",
        description: "Covers buildings under construction against damage from fire, weather, theft, and vandalism.",
        slug: "builders-risk"
      },
      {
        icon: Leaf,
        name: "Environmental Insurance",
        description: "Protection against pollution liability claims and cleanup costs.",
        slug: "environmental"
      },
      {
        icon: Wrench,
        name: "Contractors Insurance",
        description: "Specialized coverage packages built for the risks contractors face on every job.",
        slug: "contractors"
      },
    ]
  },
  {
    title: "Specialty Coverage",
    products: [
      {
        icon: AlertTriangle,
        name: "Crime Insurance",
        description: "Protects against employee theft, forgery, robbery, and other criminal acts targeting your business.",
        slug: "crime"
      },
      {
        icon: Truck,
        name: "Inland Marine Insurance",
        description: "Covers equipment, tools, and goods in transit or stored at job sites away from your main location.",
        slug: "inland-marine"
      },
      {
        icon: Waves,
        name: "Ocean Marine Insurance",
        description: "Coverage for cargo, vessels, and liability for businesses involved in maritime commerce.",
        slug: "ocean-marine"
      },
      {
        icon: Cog,
        name: "Systems Breakdown Insurance",
        description: "Covers mechanical and electrical breakdown of equipment that property insurance doesn't.",
        slug: "systems-breakdown"
      },
    ]
  },
  {
    title: "Financial & Bonds",
    products: [
      {
        icon: Landmark,
        name: "Surety Bonds",
        description: "Guarantee your contractual obligations to clients. Required for many construction and government contracts.",
        slug: "surety-bonds"
      },
      {
        icon: Heart,
        name: "Key Person Life Insurance",
        description: "Protects your business financially if a crucial employee or owner passes away unexpectedly.",
        slug: "key-person"
      },
      {
        icon: Brain,
        name: "Captive Insurance Management",
        description: "Alternative risk financing for larger businesses looking for more control over their insurance program.",
        slug: "captive-insurance"
      },
    ]
  },
  {
    title: "Risk Services",
    products: [
      {
        icon: BarChart3,
        name: "Risk Management",
        description: "We help you identify and reduce risks before they become claims.",
        slug: "risk-management"
      },
    ]
  },
];

export const allBusinessInsuranceProducts = businessInsuranceProducts.flatMap(
  category => category.products
);

// ============================================
// EMPLOYEE BENEFITS PRODUCTS
// ============================================

export const employeeBenefitsProducts: Product[] = [
  {
    icon: Heart,
    name: "Group Health Insurance",
    description: "Group health is complicated. We help you find the right fit for your team and budget, and we actually return your calls.",
    slug: "group-health"
  },
  {
    icon: Stethoscope,
    name: "Group Dental Insurance",
    description: "Preventive care that keeps employees healthy and productive. Plans from basic to comprehensive.",
    slug: "group-dental"
  },
  {
    icon: Eye,
    name: "Group Vision Insurance",
    description: "Coverage for exams, glasses, and contacts. A benefit employees use and appreciate.",
    slug: "group-vision"
  },
  {
    icon: Shield,
    name: "Disability Insurance",
    description: "Short-term and long-term disability coverage that replaces income when employees can't work.",
    slug: "disability"
  },
  {
    icon: Users,
    name: "Long-Term Care Insurance",
    description: "Helps employees plan for future care needs including nursing homes and assisted living.",
    slug: "ltc"
  },
  {
    icon: Gift,
    name: "Group Voluntary Benefits",
    description: "Additional options employees can choose and pay for themselves. Enhances your package without increasing your costs.",
    slug: "voluntary"
  },
  {
    icon: Activity,
    name: "Group Accident Insurance",
    description: "Supplements health insurance with cash benefits for accidental injuries.",
    slug: "accident"
  },
  {
    icon: Cross,
    name: "Life & AD&D Insurance",
    description: "Group life and accidental death & dismemberment coverage to protect employees' families.",
    slug: "life-add"
  },
  {
    icon: Building2,
    name: "Group Hospital Insurance",
    description: "Cash benefits for hospital stays that help cover out-of-pocket costs.",
    slug: "hospital"
  },
];

// ============================================
// WHY CHOOSE SCIOTO SECTIONS
// ============================================

export const personalInsuranceReasons = [
  {
    icon: ShieldCheck,
    title: "We compare 30+ carriers for you",
    description: "We're not locked into one company. We shop around to find the best coverage at the best price.",
  },
  {
    icon: Users,
    title: "Local support when something goes wrong",
    description: "When you need help, you won't get transferred to a call center. We're here in New Albany, working for you.",
  },
  {
    icon: RefreshCw,
    title: "We check your coverage every year",
    description: "Life changes. We review your coverage each year to make sure you're not underinsured or overpaying.",
  },
];

export const businessInsuranceReasons = [
  {
    icon: ShieldCheck,
    title: "We know your industry",
    description: "We understand the specific risks your industry faces and build coverage programs that address them.",
  },
  {
    icon: Users,
    title: "You get a real person",
    description: "You have a dedicated account manager who knows your business. Same person every time you call.",
  },
  {
    icon: RefreshCw,
    title: "We help you prevent claims",
    description: "We identify and reduce risks before they become problems. That can lower your premiums too.",
  },
];
