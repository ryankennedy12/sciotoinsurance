import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { ShieldCheck, Users, RefreshCw } from "lucide-react";

const GeneralLiability = () => {
  return (
    <ProductDetailTemplate
      metaTitle="General Liability Insurance in Columbus & New Albany, OH | Scioto Insurance Group"
      metaDescription="Protect your business from lawsuits and claims with general liability insurance. We shop 30+ carriers for Ohio businesses. Call (614) 612-0050."
      
      heroTitle="General Liability Insurance: The Foundation of Business Protection"
      heroSubtitle="Columbus & Central Ohio Business Coverage"
      heroDescription="Protection when someone gets hurt on your property or claims your work caused damage. Every Ohio business needs general liability—it's the foundation of your commercial insurance program."
      
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
          description: "Covers claims arising from products you sell or work you've completed after leaving the job site."
        },
        {
          title: "Medical Payments",
          description: "Pays for minor medical expenses for people injured on your property, regardless of fault."
        },
        {
          title: "Legal Defense Costs",
          description: "Covers attorney fees, court costs, and settlements—even for frivolous lawsuits."
        },
        {
          title: "Damage to Rented Premises",
          description: "Covers damage you cause to property you're renting for business purposes."
        },
        {
          title: "Contractual Liability",
          description: "Protection for liability you assume under certain business contracts."
        }
      ]}
      
      whyChooseItems={[
        {
          icon: ShieldCheck,
          title: "Right Coverage Limits",
          description: "We analyze your operations, contracts, and exposure to recommend appropriate limits—not just the minimum that keeps premiums low."
        },
        {
          icon: Users,
          title: "Certificate Management",
          description: "Need certificates of insurance for clients or landlords? We issue them same-day and track renewal dates for you."
        },
        {
          icon: RefreshCw,
          title: "Claims Advocacy",
          description: "When claims happen, we guide you through the process and advocate with the carrier to ensure fair treatment."
        }
      ]}
      
      productName="General Liability Insurance"
      faqs={[
        {
          question: "How much general liability insurance do I need?",
          answer: "Most small businesses start with $1M per occurrence / $2M aggregate limits. However, many contracts and leases require higher limits. We review your contracts and risk exposure to recommend appropriate coverage."
        },
        {
          question: "What's the difference between general liability and professional liability?",
          answer: "General liability covers physical injuries and property damage from your operations. Professional liability (E&O) covers claims that your professional advice or services caused financial harm. Many businesses need both."
        },
        {
          question: "Is general liability required by law in Ohio?",
          answer: "No, but it's required by most commercial leases, contracts, and clients. Operating without it puts your business assets and personal assets (in some business structures) at serious risk."
        },
        {
          question: "Does general liability cover employee injuries?",
          answer: "No. Employee injuries are covered by workers' compensation insurance, which is separate from and required in addition to general liability in Ohio."
        },
        {
          question: "What doesn't general liability cover?",
          answer: "Key exclusions include employee injuries (needs workers' comp), professional errors (needs E&O), auto accidents (needs commercial auto), intentional acts, and your own property damage (needs commercial property)."
        },
        {
          question: "How much does general liability insurance cost?",
          answer: "Premiums vary widely based on your industry, revenue, and claims history. Low-risk office businesses might pay $400-$800/year, while contractors or manufacturers pay significantly more. We shop multiple carriers to find competitive rates."
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
