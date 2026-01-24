import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { ShieldCheck, Users, RefreshCw } from "lucide-react";

const WorkersComp = () => {
  return (
    <ProductDetailTemplate
      metaTitle="Workers' Compensation Insurance | Scioto Insurance Group"
      metaDescription="Required workers' comp coverage for employers. We help you stay compliant and find competitive rates. Call (614) 612-0050."
      
      heroTitle="Workers' Compensation Insurance"
      heroSubtitle="Workers' Comp Compliance & Coverage"
      heroDescription="If you have employees, you likely need workers' comp. We help you navigate state requirements and find ways to lower your costs while staying compliant."
      
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
          description: "Pays for physical therapy, vocational training, and rehab needed to return to work."
        },
        {
          title: "Death Benefits",
          description: "Provides financial support to dependents of employees who die from work-related injuries or illnesses."
        },
        {
          title: "Employer Liability",
          description: "Protects your business from lawsuits by injured employees beyond workers' comp benefits."
        },
        {
          title: "Legal Defense",
          description: "Covers legal costs if an employee challenges a workers' comp decision or files a related lawsuit."
        }
      ]}
      
      whyChooseItems={[
        {
          icon: ShieldCheck,
          title: "We Know Ohio BWC",
          description: "We understand Ohio's unique state-fund system. Group rating programs, safety councils, premium discounts. We know how to work the system."
        },
        {
          icon: Users,
          title: "We Help Manage Claims",
          description: "We help you handle claims effectively to keep costs down and get injured employees back to work safely."
        },
        {
          icon: RefreshCw,
          title: "We Find Ways to Lower Your Rate",
          description: "Group rating, safety programs, other discount opportunities. Some businesses save 20-50% on premiums."
        }
      ]}
      
      productName="Workers' Compensation Insurance"
      faqs={[
        {
          question: "Is workers' comp required in Ohio?",
          answer: "Yes. Ohio law requires nearly all employers to carry workers' comp. Exceptions are very limited (some agricultural operations, domestic workers). Penalties for non-compliance can be up to $10,000 per employee."
        },
        {
          question: "How does Ohio's workers' comp system work?",
          answer: "Ohio is a monopolistic state-fund state. Most employers buy coverage through the Ohio Bureau of Workers' Compensation (BWC). But we help you access group rating programs and other ways to save money."
        },
        {
          question: "What is group rating and how does it save money?",
          answer: "Group rating pools similar businesses together. If the group has better-than-average claims, all members get discounted rates. Savings can be 20-50% or more. We can connect you with the right groups."
        },
        {
          question: "What should I do if an employee is injured?",
          answer: "Get them medical attention immediately. Report the injury to BWC within 24 hours. Document everything. Call us. We'll help you navigate the claims process and manage the case."
        },
        {
          question: "How can I reduce my workers' comp premiums?",
          answer: "Join group rating programs, implement safety programs, return injured workers to light duty quickly, and keep accurate payroll records. We'll help you develop a comprehensive approach."
        },
        {
          question: "Does workers' comp cover all employee injuries?",
          answer: "It covers injuries and illnesses that happen during and because of work. It typically doesn't cover injuries from horseplay, intoxication, or self-inflicted harm. Coverage disputes can get complicated. We help you work through them."
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