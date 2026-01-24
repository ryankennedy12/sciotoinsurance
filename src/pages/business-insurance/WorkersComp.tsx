import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { ShieldCheck, Users, RefreshCw } from "lucide-react";

const WorkersComp = () => {
  return (
    <ProductDetailTemplate
      metaTitle="Workers' Compensation Insurance in Columbus & Ohio | Scioto Insurance Group"
      metaDescription="Required workers' comp coverage for Ohio employers. We help you stay compliant and find competitive rates. Call (614) 612-0050."
      
      heroTitle="Workers' Compensation: Required Protection for Ohio Employers"
      heroSubtitle="Ohio Workers' Comp Compliance & Coverage"
      heroDescription="Required in Ohio if you have employees. We help you navigate Ohio's state-fund system and find competitive rates while staying compliant. Protect your employees and your business."
      
      coverageTitle="What Does Workers' Compensation Cover?"
      coverageItems={[
        {
          title: "Medical Expenses",
          description: "Covers all reasonable and necessary medical treatment for work-related injuries and illnesses."
        },
        {
          title: "Lost Wages",
          description: "Replaces a portion of income for employees who miss work due to covered injuries."
        },
        {
          title: "Disability Benefits",
          description: "Provides ongoing income for employees with temporary or permanent disabilities from workplace injuries."
        },
        {
          title: "Rehabilitation Costs",
          description: "Pays for physical therapy, vocational training, and rehabilitation needed to return to work."
        },
        {
          title: "Death Benefits",
          description: "Provides financial support to dependents of employees who die from work-related injuries or illnesses."
        },
        {
          title: "Employer Liability",
          description: "Protects your business from lawsuits by injured employees (beyond workers' comp benefits)."
        },
        {
          title: "Legal Defense",
          description: "Covers legal costs if an employee challenges a workers' comp decision or files a related lawsuit."
        }
      ]}
      
      whyChooseItems={[
        {
          icon: ShieldCheck,
          title: "Ohio BWC Expertise",
          description: "We understand Ohio's unique state-fund workers' comp system and help you navigate group rating programs, safety councils, and premium discounts."
        },
        {
          icon: Users,
          title: "Claims Management Support",
          description: "We help you manage claims effectively to minimize costs and get injured employees back to work safely."
        },
        {
          icon: RefreshCw,
          title: "Rate Reduction Strategies",
          description: "We identify group rating, safety programs, and other discount opportunities that can reduce your premiums by 20-50%."
        }
      ]}
      
      productName="Workers' Compensation Insurance"
      faqs={[
        {
          question: "Is workers' comp required in Ohio?",
          answer: "Yes. Ohio law requires nearly all employers to carry workers' compensation coverage. Exceptions are very limited (some agricultural operations, domestic workers). Penalties for non-compliance include fines up to $10,000 per employee."
        },
        {
          question: "How does Ohio's workers' comp system work?",
          answer: "Ohio is a monopolistic state-fund state, meaning most employers must purchase coverage through the Ohio Bureau of Workers' Compensation (BWC). However, we help you access group rating programs and other cost-saving options."
        },
        {
          question: "What is group rating and how does it save money?",
          answer: "Group rating pools similar businesses together, and if the group has better-than-average claims experience, all members get discounted rates. Savings can be 20-50% or more. We can connect you with appropriate groups."
        },
        {
          question: "What should I do if an employee is injured?",
          answer: "Get them medical attention immediately. Report the injury to BWC within 24 hours. Document everything. Contact us—we'll help you navigate the claims process and manage the case effectively."
        },
        {
          question: "How can I reduce my workers' comp premiums?",
          answer: "Key strategies include joining group rating programs, implementing safety programs, returning injured workers to light duty quickly, and maintaining accurate payroll records. We'll help you develop a comprehensive approach."
        },
        {
          question: "Does workers' comp cover all employee injuries?",
          answer: "It covers injuries and illnesses that arise out of and in the course of employment. It typically doesn't cover injuries from horseplay, intoxication, or self-inflicted harm. Coverage disputes can be complex—we help you navigate them."
        }
      ]}
      
      relatedProducts={[
        { name: "General Liability", slug: "general-liability", category: "business-insurance" },
        { name: "Employment Practices Liability", slug: "employment-practices", category: "business-insurance" },
        { name: "Commercial Umbrella", slug: "commercial-umbrella", category: "business-insurance" },
        { name: "Business Owners Policy", slug: "bop", category: "business-insurance" }
      ]}
      
      category="Business Insurance"
      categorySlug="business-insurance"
    />
  );
};

export default WorkersComp;
