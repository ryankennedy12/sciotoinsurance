import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { ShieldCheck, Users, RefreshCw } from "lucide-react";

const UmbrellaInsurance = () => {
  return (
    <ProductDetailTemplate
      // SEO
      metaTitle="Umbrella Insurance in Columbus & New Albany, OH | Scioto Insurance Group"
      metaDescription="Protect your assets with umbrella liability insurance. $1M+ in additional coverage for Columbus families. Call (614) 612-0050 for a quote."
      
      // Hero
      heroTitle="Umbrella Insurance"
      heroSubtitle="Columbus & Central Ohio Liability Protection"
      heroDescription="When a lawsuit exceeds your auto or home policy limits, umbrella coverage is what keeps you from losing everything. It costs a lot less than you'd think for a lot more protection than you might expect."
      
      // Coverage
      coverageTitle="What Does Umbrella Insurance Cover?"
      coverageItems={[
        {
          title: "Extended Liability Protection",
          description: "Kicks in when your auto or home liability limits run out. Typically provides $1M to $5M in additional coverage."
        },
        {
          title: "Auto Accident Liability",
          description: "Covers excess liability if you're at fault in a serious car accident that goes beyond your auto policy limits."
        },
        {
          title: "Homeowner Liability",
          description: "Protects against major claims if someone is seriously injured on your property."
        },
        {
          title: "Defamation & Libel",
          description: "Coverage for claims of slander, libel, or defamation. More relevant now with social media."
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
          description: "Extends to boats and recreational vehicles that are listed under your umbrella policy."
        },
        {
          title: "Legal Defense Costs",
          description: "Pays for attorneys, court costs, and settlements. Even if the lawsuit is frivolous."
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
          title: "It's Cheaper Than You Think",
          description: "Umbrella insurance usually runs $200-$400/year for $1M in coverage. That's less than a dollar a day to protect your home, savings, and future income."
        },
        {
          icon: Users,
          title: "We Figure Out How Much You Need",
          description: "We look at your total net worth, your future earning potential, and your risk exposure to recommend the right amount."
        },
        {
          icon: RefreshCw,
          title: "We Make Sure Everything Works Together",
          description: "Your auto, home, and umbrella policies need to line up properly. No gaps. We handle the coordination."
        }
      ]}
      
      // FAQs
      productName="Umbrella Insurance"
      faqs={[
        {
          question: "Who needs umbrella insurance?",
          answer: "Anyone with assets to protect. If you own a home, have savings, earn a good income, or have teenage drivers, you're a target for lawsuits. Umbrella coverage protects your current assets and your future earnings."
        },
        {
          question: "How much umbrella coverage do I need?",
          answer: "A common recommendation is to cover your total net worth plus a few years of income. At minimum, most people should have $1M. High earners, business owners, and those with significant assets often need $2M-$5M or more."
        },
        {
          question: "Why is umbrella insurance so affordable?",
          answer: "It only pays after your other policies are exhausted, so claims don't happen that often. The high deductible (your auto/home limits) keeps premiums low while still providing a lot of protection."
        },
        {
          question: "What doesn't umbrella insurance cover?",
          answer: "It won't cover your own injuries or property damage, intentional acts, business activities, or professional liability. It also doesn't cover things your underlying policies exclude."
        },
        {
          question: "Do I need higher auto/home limits for an umbrella?",
          answer: "Yes. Most umbrella policies require minimum underlying limits (typically 250/500 for auto liability and $300K for home liability). We'll help you adjust your policies to meet these requirements."
        },
        {
          question: "Does umbrella insurance cover my teenage driver?",
          answer: "Yes. This is one of the best reasons to have it. Teen drivers are statistically high-risk. If your teen causes a serious accident, your regular auto policy may not be enough."
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