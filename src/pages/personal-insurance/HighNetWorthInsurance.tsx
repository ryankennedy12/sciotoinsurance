import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { ShieldCheck, Users, RefreshCw } from "lucide-react";

const HighNetWorthInsurance = () => {
  return (
    <ProductDetailTemplate
      // SEO
      metaTitle="High Net Worth Insurance in Columbus & New Albany, OH | Scioto Insurance Group"
      metaDescription="Comprehensive protection for affluent households. Specialized coverage for luxury homes, collections, and liability. Call (614) 612-0050."
      
      // Hero
      heroTitle="High Net Worth Insurance"
      heroSubtitle="Comprehensive Coverage for Affluent Households"
      heroDescription="Standard insurance policies have limits that don't make sense for complex estates. High net worth coverage gives you guaranteed replacement cost, higher liability limits, and protection for the things you actually own."
      
      // Coverage
      coverageTitle="What Does High Net Worth Insurance Cover?"
      coverageItems={[
        {
          title: "Guaranteed Replacement Cost",
          description: "Rebuild your home exactly as it was. No limits, no depreciation. Covers increased construction costs and code upgrades."
        },
        {
          title: "Extended Liability Limits",
          description: "Higher built-in liability limits plus seamless integration with umbrella coverage up to $100M or more."
        },
        {
          title: "Valuable Collections",
          description: "Scheduled coverage for art, jewelry, wine, watches, and collectibles with agreed-value protection."
        },
        {
          title: "Multiple Properties",
          description: "One program that covers your primary home, vacation homes, and rental properties. Simplified."
        },
        {
          title: "Luxury Auto Coverage",
          description: "Agreed-value coverage for exotic, classic, and collector vehicles with specialized repair networks."
        },
        {
          title: "Watercraft & Aviation",
          description: "Coverage for yachts, planes, and other high-value recreational vehicles."
        },
        {
          title: "Worldwide Personal Property",
          description: "Your belongings are covered wherever they are in the world, with no sublimits on most categories."
        },
        {
          title: "Cash Settlement Option",
          description: "You can take cash instead of repairs/replacement. Gives you flexibility in how to use your claim payment."
        },
        {
          title: "Identity Theft & Cyber",
          description: "Protection against identity theft, cyber extortion, and online fraud."
        }
      ]}
      
      // Why Choose
      whyChooseItems={[
        {
          icon: ShieldCheck,
          title: "We Work With the Right Carriers",
          description: "Chubb, PURE, AIG Private Client. Carriers that specialize in protecting affluent households. Not available through most agencies."
        },
        {
          icon: Users,
          title: "We Look at Everything",
          description: "Properties, vehicles, collections, liability exposure. We analyze your whole estate to design a coordinated protection strategy."
        },
        {
          icon: RefreshCw,
          title: "Better Claims Service",
          description: "High net worth carriers provide dedicated adjusters, preferred contractors, and faster resolution. We make sure you get the service you're paying for."
        }
      ]}
      
      // FAQs
      productName="High Net Worth Insurance"
      faqs={[
        {
          question: "Who qualifies for high net worth insurance?",
          answer: "Most carriers require a home insured for $1M+ or total insurance premiums over $10,000-$15,000 per year. If you have multiple properties, valuable collections, or significant liability exposure, you probably qualify."
        },
        {
          question: "How is high net worth insurance different from regular home insurance?",
          answer: "The big differences: guaranteed replacement cost (no caps on rebuilding), higher built-in liability, worldwide coverage, agreed-value for collections, and much better claims service. The policies are more flexible overall."
        },
        {
          question: "What's guaranteed replacement cost and why does it matter?",
          answer: "Standard policies cap how much they'll pay to rebuild. If it costs more than expected, you pay the difference. Guaranteed replacement cost means the carrier pays whatever it actually costs. No surprises."
        },
        {
          question: "Do I need separate policies for my art and jewelry?",
          answer: "With high net worth insurance, valuable items can be scheduled on your main policy with agreed-value coverage. Better protection than standard floaters and way simpler to manage."
        },
        {
          question: "Can high net worth insurance cover all my properties?",
          answer: "Yes. That's one of the main benefits. Primary home, vacation homes, rental properties, all under one coordinated program. Eliminates gaps and makes everything easier."
        },
        {
          question: "Is high net worth insurance more expensive?",
          answer: "Not necessarily. Premiums may be higher than basic policies, but you're getting significantly more coverage. A lot of clients find these policies are competitively priced when you factor in the guaranteed replacement, higher limits, and better service."
        }
      ]}
      
      // Related Products
      relatedProducts={[
        { name: "Umbrella Insurance", slug: "umbrella", category: "personal-insurance" },
        { name: "Valuable Possessions", slug: "valuable-possessions", category: "personal-insurance" },
        { name: "Yacht Insurance", slug: "yacht", category: "personal-insurance" },
        { name: "Secondary Home", slug: "secondary-home", category: "personal-insurance" }
      ]}
      
      // Category
      category="Personal Insurance"
      categorySlug="personal-insurance"
    />
  );
};

export default HighNetWorthInsurance;