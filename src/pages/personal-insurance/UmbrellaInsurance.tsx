import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { ShieldCheck, Users, RefreshCw } from "lucide-react";

const UmbrellaInsurance = () => {
  return (
    <ProductDetailTemplate
      // SEO
      metaTitle="Umbrella Insurance in Columbus & New Albany, OH | Scioto Insurance Group"
      metaDescription="Protect your assets with umbrella liability insurance. $1M+ in additional coverage for Columbus families. Call (614) 612-0050 for a quote."
      
      // Hero
      heroTitle="Umbrella Insurance: Protection Against Financial Ruin"
      heroSubtitle="Columbus & Central Ohio Liability Protection"
      heroDescription="When a lawsuit exceeds your auto or home policy limits, umbrella coverage is the difference between inconvenience and financial ruin. For surprisingly low premiums, protect everything you've worked for."
      
      // Coverage
      coverageTitle="What Does Umbrella Insurance Cover?"
      coverageItems={[
        {
          title: "Extended Liability Protection",
          description: "Kicks in when your auto or home liability limits are exhausted. Typically provides $1M to $5M in additional coverage."
        },
        {
          title: "Auto Accident Liability",
          description: "Covers excess liability if you're at fault in a serious car accident that exceeds your auto policy limits."
        },
        {
          title: "Homeowner Liability",
          description: "Protects against major claims if someone is seriously injured on your property."
        },
        {
          title: "Defamation & Libel",
          description: "Coverage for claims of slander, libel, or defamation—increasingly relevant in the social media age."
        },
        {
          title: "False Arrest & Imprisonment",
          description: "Protection against claims of wrongful detention or false arrest."
        },
        {
          title: "Landlord Liability",
          description: "Additional protection for rental property owners beyond their landlord policy limits."
        },
        {
          title: "Watercraft & RV Coverage",
          description: "Extends to recreational vehicles and boats that are listed under your umbrella policy."
        },
        {
          title: "Legal Defense Costs",
          description: "Pays for attorneys, court costs, and settlements—even if the lawsuit is frivolous."
        },
        {
          title: "Worldwide Coverage",
          description: "Protection that follows you anywhere in the world, not just in Ohio."
        }
      ]}
      
      // Why Choose
      whyChooseItems={[
        {
          icon: ShieldCheck,
          title: "Affordable Protection",
          description: "Umbrella insurance is surprisingly affordable—typically $200-$400/year for $1M in coverage. That's less than $1/day to protect your home, savings, and future income."
        },
        {
          icon: Users,
          title: "Asset Protection Analysis",
          description: "We analyze your total net worth, future earning potential, and risk exposure to recommend the right amount of umbrella coverage for your situation."
        },
        {
          icon: RefreshCw,
          title: "Coordinated Coverage",
          description: "We ensure your auto, home, and umbrella policies work together seamlessly with no gaps. Proper coordination is essential for claims."
        }
      ]}
      
      // FAQs
      productName="Umbrella Insurance"
      faqs={[
        {
          question: "Who needs umbrella insurance?",
          answer: "Anyone with assets to protect should consider umbrella insurance. If you own a home, have savings, earn a good income, or have teenage drivers, you're a target for lawsuits. Umbrella coverage protects your current assets AND future earnings."
        },
        {
          question: "How much umbrella coverage do I need?",
          answer: "A common recommendation is to cover your total net worth plus a few years of income. At minimum, most people should have $1M. High earners, business owners, and those with significant assets often need $2M-$5M or more."
        },
        {
          question: "Why is umbrella insurance so affordable?",
          answer: "Umbrella policies only pay after your underlying policies are exhausted, so claims are less frequent. The high deductible (your auto/home limits) keeps premiums low while still providing massive protection."
        },
        {
          question: "What doesn't umbrella insurance cover?",
          answer: "Umbrella insurance doesn't cover your own injuries or property damage, intentional acts, business activities, or professional liability. It also doesn't cover what your underlying policies exclude."
        },
        {
          question: "Do I need higher auto/home limits for an umbrella?",
          answer: "Yes. Most umbrella policies require minimum underlying limits (typically 250/500 for auto liability and $300K for home liability). We'll help you adjust your policies to meet these requirements."
        },
        {
          question: "Does umbrella insurance cover my teenage driver?",
          answer: "Yes—this is one of the best reasons to have umbrella coverage. Teen drivers are statistically high-risk. If your teen causes a serious accident, your regular auto policy may not be enough to cover the damages."
        }
      ]}
      
      // Related Products
      relatedProducts={[
        { name: "Auto Insurance", slug: "auto", category: "personal-insurance" },
        { name: "Home Insurance", slug: "home", category: "personal-insurance" },
        { name: "High Net Worth", slug: "high-net-worth", category: "personal-insurance" },
        { name: "Rental Property", slug: "rental-property", category: "personal-insurance" }
      ]}
      
      // Category
      category="Personal Insurance"
      categorySlug="personal-insurance"
    />
  );
};

export default UmbrellaInsurance;
