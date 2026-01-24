import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { ShieldCheck, Users, RefreshCw } from "lucide-react";

const ProfessionalLiability = () => {
  return (
    <ProductDetailTemplate
      metaTitle="Professional Liability Insurance (E&O) in Columbus & Ohio | Scioto Insurance Group"
      metaDescription="Errors & Omissions coverage for Ohio professionals. Protection when clients claim your advice caused harm. Call (614) 612-0050."
      
      heroTitle="Professional Liability Insurance: Protection for Your Expertise"
      heroSubtitle="Errors & Omissions Coverage for Ohio Professionals"
      heroDescription="When a client claims your professional advice or services caused them financial harm, professional liability (E&O) coverage defends you. Essential for consultants, accountants, architects, and any service-based business."
      
      coverageTitle="What Does Professional Liability Cover?"
      coverageItems={[
        {
          title: "Negligence Claims",
          description: "Covers claims that your professional services failed to meet the standard of care expected in your field."
        },
        {
          title: "Errors & Omissions",
          description: "Protection when mistakes, oversights, or incomplete work cause financial harm to clients."
        },
        {
          title: "Misrepresentation",
          description: "Covers claims that you provided inaccurate information or advice that led to client losses."
        },
        {
          title: "Breach of Contract",
          description: "Defense against claims that you failed to deliver services as promised in your contract."
        },
        {
          title: "Legal Defense Costs",
          description: "Pays for attorneys, expert witnesses, court costs, and settlements—even for baseless claims."
        },
        {
          title: "Regulatory Proceedings",
          description: "Coverage for defense costs if you face disciplinary actions from professional licensing boards."
        },
        {
          title: "Prior Acts Coverage",
          description: "Retroactive coverage for work performed before the policy inception date (if no known claims)."
        },
        {
          title: "Network Security Liability",
          description: "Some E&O policies include coverage for data breaches and cyber incidents affecting your clients."
        }
      ]}
      
      whyChooseItems={[
        {
          icon: ShieldCheck,
          title: "Industry-Specific Expertise",
          description: "We understand the unique risks facing accountants, consultants, IT professionals, architects, and other service providers. We match you with carriers that specialize in your field."
        },
        {
          icon: Users,
          title: "Contract Review Support",
          description: "Many contracts require specific E&O limits or endorsements. We review your client contracts to ensure your coverage meets requirements."
        },
        {
          icon: RefreshCw,
          title: "Claims History Protection",
          description: "How you handle E&O claims affects future insurability. We guide you through the claims process to protect your professional reputation."
        }
      ]}
      
      productName="Professional Liability Insurance"
      faqs={[
        {
          question: "Who needs professional liability insurance?",
          answer: "Any business that provides advice, services, or expertise to clients. This includes accountants, consultants, IT professionals, architects, engineers, real estate agents, financial advisors, marketing agencies, and many others."
        },
        {
          question: "How is professional liability different from general liability?",
          answer: "General liability covers physical injuries and property damage. Professional liability covers financial losses caused by your professional services, advice, or expertise. A consultant's bad advice that costs a client money is an E&O claim, not a GL claim."
        },
        {
          question: "Do I need E&O if I have a contract limiting my liability?",
          answer: "Yes. Limitation of liability clauses provide some protection, but they can be challenged in court and may not cover all types of claims. E&O insurance provides defense coverage even when liability limits might apply."
        },
        {
          question: "What's the difference between claims-made and occurrence policies?",
          answer: "Most E&O policies are claims-made, meaning they cover claims made during the policy period regardless of when the incident occurred. This is different from occurrence policies. If you switch carriers, you may need tail coverage."
        },
        {
          question: "How much professional liability coverage do I need?",
          answer: "It depends on your services, contract requirements, and potential exposure. Many small professional firms carry $1M per claim / $2M aggregate. Larger contracts or higher-risk services may require more."
        },
        {
          question: "Does my E&O policy cover cyber claims?",
          answer: "Some E&O policies include limited cyber coverage, especially for technology professionals. However, comprehensive cyber coverage usually requires a separate cyber liability policy. We can help you understand any gaps."
        }
      ]}
      
      relatedProducts={[
        { name: "General Liability", slug: "general-liability", category: "business-insurance" },
        { name: "Cyber Liability", slug: "cyber-liability", category: "business-insurance" },
        { name: "Directors & Officers", slug: "directors-officers", category: "business-insurance" },
        { name: "Commercial Umbrella", slug: "commercial-umbrella", category: "business-insurance" }
      ]}
      
      category="Business Insurance"
      categorySlug="business-insurance"
    />
  );
};

export default ProfessionalLiability;
