import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { ShieldCheck, Users, RefreshCw } from "lucide-react";

const CommercialAuto = () => {
  return (
    <ProductDetailTemplate
      metaTitle="Commercial Auto Insurance in Columbus & Ohio | Scioto Insurance Group"
      metaDescription="Commercial vehicle coverage for Ohio businesses. Protect company cars, trucks, and fleets. Call (614) 612-0050 for a quote."
      
      heroTitle="Commercial Auto Insurance: Protect Your Business Vehicles"
      heroSubtitle="Columbus & Central Ohio Fleet Coverage"
      heroDescription="If your business owns vehicles or your employees drive for work, personal auto policies won't cover you. Commercial auto provides the protection your business needs—for owned vehicles, hired vehicles, and employee-owned cars used for work."
      
      coverageTitle="What Does Commercial Auto Insurance Cover?"
      coverageItems={[
        {
          title: "Liability Coverage",
          description: "Covers injuries and property damage your business vehicles cause to others. Ohio requires minimum limits, but we recommend higher."
        },
        {
          title: "Physical Damage",
          description: "Comprehensive and collision coverage for damage to your owned vehicles from accidents, theft, vandalism, and weather."
        },
        {
          title: "Hired Auto Coverage",
          description: "Covers vehicles you rent or hire for business use—essential when employees rent cars for business trips."
        },
        {
          title: "Non-Owned Auto Coverage",
          description: "Protects your business when employees use their personal vehicles for work purposes."
        },
        {
          title: "Medical Payments",
          description: "Covers medical expenses for drivers and passengers in your business vehicles, regardless of fault."
        },
        {
          title: "Uninsured/Underinsured Motorist",
          description: "Protects your business when the at-fault driver has no insurance or insufficient coverage."
        },
        {
          title: "Cargo Coverage",
          description: "Covers goods and materials you're transporting in case of accident, theft, or damage."
        },
        {
          title: "Roadside Assistance",
          description: "24/7 help for breakdowns, flat tires, dead batteries, and lockouts for your commercial fleet."
        },
        {
          title: "Rental Reimbursement",
          description: "Pays for replacement vehicles while your covered vehicles are being repaired after a claim."
        }
      ]}
      
      whyChooseItems={[
        {
          icon: ShieldCheck,
          title: "Proper Vehicle Classification",
          description: "Commercial auto rating is complex—vehicle type, use, radius, and driver classification all matter. We ensure your vehicles are properly classified to avoid claim denials."
        },
        {
          icon: Users,
          title: "Fleet Management Support",
          description: "For larger fleets, we help you implement driver safety programs, track claims experience, and negotiate competitive rates."
        },
        {
          icon: RefreshCw,
          title: "Annual Fleet Reviews",
          description: "Vehicles come and go. We review your fleet annually to ensure all vehicles are covered and you're not paying for vehicles you no longer own."
        }
      ]}
      
      productName="Commercial Auto Insurance"
      faqs={[
        {
          question: "When do I need commercial auto insurance vs. personal auto?",
          answer: "You need commercial auto if vehicles are titled to your business, used primarily for business, carry goods or equipment, transport passengers for hire, or are used by multiple employees. Personal policies typically exclude business use."
        },
        {
          question: "Does commercial auto cover employee personal vehicles?",
          answer: "Not directly—their personal auto is primary. However, non-owned auto coverage on your commercial policy provides excess liability protection when employees use their personal vehicles for work. This is essential coverage."
        },
        {
          question: "What about employees who drive their own cars for work?",
          answer: "Require employees to maintain adequate personal auto insurance. Add non-owned auto coverage to your commercial policy. Consider a hired and non-owned auto policy if you don't own vehicles but employees drive for work regularly."
        },
        {
          question: "How does commercial auto rating work?",
          answer: "Premiums are based on vehicle type, age, value, use (service, delivery, sales), territory, radius of operation, driver ages and records, and your claims history. We shop multiple carriers to find the best rates for your profile."
        },
        {
          question: "Does my commercial auto policy cover trailers?",
          answer: "Liability typically extends to trailers you tow. Physical damage coverage for trailers usually requires them to be specifically listed on the policy. We ensure your trailers are properly covered."
        },
        {
          question: "What limits should I carry on commercial auto?",
          answer: "Ohio minimums are 25/50/25, but we typically recommend at least 100/300/100 for businesses. If you have commercial contracts or significant assets, you may need $1M combined single limit plus an umbrella policy."
        }
      ]}
      
      relatedProducts={[
        { name: "General Liability", slug: "general-liability", category: "business-insurance" },
        { name: "Commercial Umbrella", slug: "commercial-umbrella", category: "business-insurance" },
        { name: "Inland Marine", slug: "inland-marine", category: "business-insurance" },
        { name: "Workers' Compensation", slug: "workers-comp", category: "business-insurance" }
      ]}
      
      category="Business Insurance"
      categorySlug="business-insurance"
    />
  );
};

export default CommercialAuto;
