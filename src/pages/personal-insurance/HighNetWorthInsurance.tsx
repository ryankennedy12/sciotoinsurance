import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { ShieldCheck, Users, RefreshCw } from "lucide-react";

const HighNetWorthInsurance = () => {
  return (
    <ProductDetailTemplate
      // SEO
      metaTitle="High Net Worth Insurance in Columbus & New Albany, OH | Scioto Insurance Group"
      metaDescription="Comprehensive protection for affluent households. Specialized coverage for luxury homes, collections, and liability. Call (614) 612-0050."
      
      // Hero
      heroTitle="High Net Worth Insurance: Protection Worthy of What You've Built"
      heroSubtitle="Comprehensive Coverage for Affluent Households"
      heroDescription="Standard insurance falls short for complex estates. High net worth policies provide guaranteed replacement cost, higher liability limits, and coverage for luxury items—all with white-glove claims service."
      
      // Coverage
      coverageTitle="What Does High Net Worth Insurance Cover?"
      coverageItems={[
        {
          title: "Guaranteed Replacement Cost",
          description: "Rebuild your home exactly as it was—no limits, no depreciation. Covers increased construction costs and code upgrades."
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
          description: "Simplified coverage for primary home, vacation homes, and rental properties under one comprehensive program."
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
          description: "Option to receive cash instead of repairs/replacement, giving you flexibility in how to use your claim payment."
        },
        {
          title: "Identity Theft & Cyber",
          description: "Comprehensive protection against identity theft, cyber extortion, and online fraud."
        }
      ]}
      
      // Why Choose
      whyChooseItems={[
        {
          icon: ShieldCheck,
          title: "Specialized Carrier Access",
          description: "We work with Chubb, PURE, AIG Private Client, and other carriers that specialize in protecting affluent households—not available through typical agencies."
        },
        {
          icon: Users,
          title: "Comprehensive Risk Review",
          description: "We analyze your entire estate—properties, vehicles, collections, liability exposure—to design a coordinated protection strategy."
        },
        {
          icon: RefreshCw,
          title: "White-Glove Claims Service",
          description: "High net worth carriers provide dedicated claims adjusters, preferred contractors, and expedited resolution. We ensure you get the service you deserve."
        }
      ]}
      
      // FAQs
      productName="High Net Worth Insurance"
      faqs={[
        {
          question: "Who qualifies for high net worth insurance?",
          answer: "Most high net worth carriers require a home insured for $1M+ or total insurance premiums exceeding $10,000-$15,000 annually. If you have multiple properties, valuable collections, or significant liability exposure, you likely qualify."
        },
        {
          question: "How is high net worth insurance different from regular home insurance?",
          answer: "Key differences include guaranteed replacement cost (no limits on rebuilding), higher built-in liability, worldwide coverage, agreed-value for collections, and superior claims service. The policies are more flexible and comprehensive."
        },
        {
          question: "What's guaranteed replacement cost and why does it matter?",
          answer: "Standard policies have limits—if rebuilding costs more than expected, you pay the difference. Guaranteed replacement cost means the carrier pays whatever it actually costs to rebuild your home to its original condition, even if costs exceed estimates."
        },
        {
          question: "Do I need separate policies for my art and jewelry?",
          answer: "With high net worth insurance, valuable items can be scheduled on your main policy with agreed-value coverage. This provides better protection than standard floaters and simplifies your insurance program."
        },
        {
          question: "Can high net worth insurance cover all my properties?",
          answer: "Yes. One of the main benefits is consolidating coverage for your primary home, vacation homes, and rental properties under a single, coordinated program. This eliminates gaps and simplifies management."
        },
        {
          question: "Is high net worth insurance more expensive?",
          answer: "Not necessarily. While premiums may be higher than basic policies, you're getting significantly more coverage. Many clients find that high net worth policies are competitively priced when you consider the guaranteed replacement, higher limits, and better service."
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
