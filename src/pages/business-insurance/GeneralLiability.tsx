import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { ShieldCheck, Users, RefreshCw } from "lucide-react";
import heroGeneralLiability from "@/assets/hero-general-liability.jpg";
import { LiabilityLimitTool } from "@/components/calculators";

const GeneralLiability = () => {
  return (
    <ProductDetailTemplate
      metaTitle="General Liability Insurance for Businesses | Scioto Insurance Group"
      metaDescription="Protect your business from lawsuits and claims with general liability insurance. We shop 30+ carriers for businesses nationwide. Call (614) 612-0050."
      
      heroTitle="General Liability Insurance"
      heroSubtitle="Coverage for Businesses Nationwide"
      heroDescription="This is the basic coverage every business needs. It protects you when someone gets hurt on your property or claims your work caused damage. It's the foundation of your commercial insurance program."
      heroImage={heroGeneralLiability}
      
      // Stats
      stats={[
        { value: "30+", label: "Business Carriers" },
        { value: "Same-Day", label: "Certificates" },
        { value: "24hr", label: "Claims Support" }
      ]}
      
      // Interactive Tool
      interactiveTitle="Find Your Recommended Limits"
      interactiveElement={<LiabilityLimitTool />}
      
      // Testimonial
      testimonial={{
        quote: "When a customer slipped at our store, Scioto handled everything. The claim was resolved quickly and professionally.",
        name: "Maria S.",
        location: "Columbus, OH",
        helpedWith: "General Liability Claim"
      }}
      
      coverageTitle="What Does General Liability Insurance Cover?"
      coverageItems={[
        {
          title: "Bodily Injury",
          description: "Covers medical expenses, legal fees, and settlements if someone is injured on your premises or by your operations."
        },
        {
          title: "Property Damage",
          description: "Pays for damage your business causes to someone else's property, including their equipment or inventory."
        },
        {
          title: "Personal & Advertising Injury",
          description: "Protection against claims of libel, slander, copyright infringement, or false advertising."
        },
        {
          title: "Products-Completed Operations",
          description: "Covers claims from products you sell or work you've completed after you leave the job site."
        },
        {
          title: "Medical Payments",
          description: "Pays for minor medical expenses for people injured on your property, regardless of fault."
        },
        {
          title: "Legal Defense Costs",
          description: "Covers attorney fees, court costs, and settlements. Even for frivolous lawsuits."
        },
        {
          title: "Damage to Rented Premises",
          description: "Covers damage you cause to property you're renting for business purposes."
        },
        {
          title: "Contractual Liability",
          description: "Protection for liability you take on in certain business contracts."
        }
      ]}
      
      whyChooseItems={[
        {
          icon: ShieldCheck,
          title: "We Recommend the Right Limits",
          description: "We look at your operations, contracts, and exposure to recommend appropriate limits. Not just the minimum that keeps premiums low."
        },
        {
          icon: Users,
          title: "We Handle Certificates",
          description: "Need certificates of insurance for clients or landlords? We issue them same-day and track renewal dates for you."
        },
        {
          icon: RefreshCw,
          title: "We Help When Claims Happen",
          description: "When claims come in, we walk you through the process and advocate with the carrier to make sure you're treated fairly."
        }
      ]}
      
      productName="General Liability Insurance"
      faqs={[
        {
          question: "How much general liability insurance do I need?",
          answer: "Most small businesses start with $1M per occurrence / $2M aggregate. But a lot of contracts and leases require higher limits. We look at your contracts and risk exposure to recommend appropriate coverage."
        },
        {
          question: "What's the difference between general liability and professional liability?",
          answer: "General liability covers physical injuries and property damage from your operations. Professional liability (E&O) covers claims that your professional advice or services caused financial harm. A lot of businesses need both."
        },
        {
          question: "Is general liability required by law in Ohio?",
          answer: "No, but it's required by most commercial leases, contracts, and clients. Operating without it puts your business assets (and sometimes personal assets) at serious risk."
        },
        {
          question: "Does general liability cover employee injuries?",
          answer: "No. Employee injuries are covered by workers' compensation, which is separate from general liability. In Ohio, you need both."
        },
        {
          question: "What doesn't general liability cover?",
          answer: "Key exclusions: employee injuries (that's workers' comp), professional errors (that's E&O), auto accidents (that's commercial auto), intentional acts, and damage to your own property (that's commercial property)."
        },
        {
          question: "How much does general liability insurance cost?",
          answer: "Varies a lot by industry, revenue, and claims history. Low-risk office businesses might pay $400-$800/year, while contractors or manufacturers pay significantly more. We shop multiple carriers to find competitive rates."
        }
      ]}
      
      relatedProducts={[
        { name: "Business Owners Policy", slug: "bop", category: "business-insurance" },
        { name: "Professional Liability", slug: "professional-liability", category: "business-insurance" },
        { name: "Commercial Umbrella", slug: "commercial-umbrella", category: "business-insurance" },
        { name: "Workers' Compensation", slug: "workers-comp", category: "business-insurance" }
      ]}
      
      category="Business Insurance"
      categorySlug="business-insurance"
    />
  );
};

export default GeneralLiability;
