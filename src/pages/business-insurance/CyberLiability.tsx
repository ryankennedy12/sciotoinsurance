import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { ShieldCheck, Users, RefreshCw } from "lucide-react";

const CyberLiability = () => {
  return (
    <ProductDetailTemplate
      metaTitle="Cyber Liability Insurance in Columbus & Ohio | Scioto Insurance Group"
      metaDescription="Protect your business from data breaches, ransomware, and cyber attacks. Cyber insurance for Ohio businesses. Call (614) 612-0050."
      
      heroTitle="Cyber Liability Insurance: Protection for the Digital Age"
      heroSubtitle="Columbus & Ohio Cyber Risk Coverage"
      heroDescription="Data breaches happen to businesses of every size. Cyber insurance covers notification costs, legal fees, ransom payments, and business interruption. In today's digital world, this coverage is essential—not optional."
      
      coverageTitle="What Does Cyber Liability Insurance Cover?"
      coverageItems={[
        {
          title: "Data Breach Response",
          description: "Covers the costs of responding to a breach: forensic investigation, customer notification, credit monitoring, and PR crisis management."
        },
        {
          title: "Ransomware & Extortion",
          description: "Pays ransom demands (when appropriate) and covers the costs of negotiating with and responding to cyber extortionists."
        },
        {
          title: "Business Interruption",
          description: "Replaces lost income and covers extra expenses when a cyber attack shuts down your operations."
        },
        {
          title: "Data Recovery",
          description: "Pays to restore, recreate, or recover data that's been damaged, destroyed, or stolen."
        },
        {
          title: "Third-Party Liability",
          description: "Defends against lawsuits from customers, vendors, or partners whose data was compromised."
        },
        {
          title: "Regulatory Fines & Penalties",
          description: "Covers fines and penalties from regulatory bodies like HIPAA, PCI-DSS, or state privacy laws."
        },
        {
          title: "Social Engineering Fraud",
          description: "Covers losses from fraudulent transfer of funds due to phishing or impersonation schemes."
        },
        {
          title: "System Failure Coverage",
          description: "Covers losses from system failures or outages, not just malicious attacks."
        },
        {
          title: "Cyber Crime Coverage",
          description: "Protection against theft of funds through computer fraud, wire fraud, and electronic theft."
        }
      ]}
      
      whyChooseItems={[
        {
          icon: ShieldCheck,
          title: "Comprehensive Risk Assessment",
          description: "We analyze your digital footprint, data handling practices, and vulnerabilities to recommend appropriate coverage—not just minimum limits."
        },
        {
          icon: Users,
          title: "Incident Response Support",
          description: "Cyber policies include access to breach response teams, forensic investigators, and legal experts. We help you activate these resources when needed."
        },
        {
          icon: RefreshCw,
          title: "Evolving Threat Coverage",
          description: "Cyber threats change constantly. We review your coverage annually to ensure it keeps pace with new risks like ransomware, deepfakes, and AI-powered attacks."
        }
      ]}
      
      productName="Cyber Liability Insurance"
      faqs={[
        {
          question: "Does my business really need cyber insurance?",
          answer: "If you use computers, store customer data, process payments, or rely on technology to operate—yes. 43% of cyber attacks target small businesses, and the average cost of a data breach exceeds $200,000. Most small businesses can't survive that uninsured."
        },
        {
          question: "What's the difference between first-party and third-party cyber coverage?",
          answer: "First-party covers your direct losses (breach response, business interruption, data recovery). Third-party covers lawsuits and claims from others (customers, partners) affected by your breach. Most policies include both."
        },
        {
          question: "Does my general liability policy cover cyber incidents?",
          answer: "No. General liability policies typically exclude cyber-related claims. You need a dedicated cyber policy or a cyber endorsement to your business owner's policy."
        },
        {
          question: "How much cyber insurance do I need?",
          answer: "It depends on your data exposure, revenue, and industry. A business with 1,000 customer records has different needs than one with 100,000. We help you calculate appropriate limits based on your specific risk profile."
        },
        {
          question: "Does cyber insurance cover ransomware payments?",
          answer: "Most policies do cover ransom payments, though carriers increasingly require proof that you've implemented security measures. Some policies also cover negotiation services to potentially reduce ransom demands."
        },
        {
          question: "What security measures do I need to qualify for cyber insurance?",
          answer: "Carriers increasingly require multi-factor authentication, regular backups, employee training, and endpoint protection. We'll help you understand requirements and may connect you with resources to improve your security posture."
        }
      ]}
      
      relatedProducts={[
        { name: "Professional Liability", slug: "professional-liability", category: "business-insurance" },
        { name: "Crime Insurance", slug: "crime", category: "business-insurance" },
        { name: "General Liability", slug: "general-liability", category: "business-insurance" },
        { name: "Business Owners Policy", slug: "bop", category: "business-insurance" }
      ]}
      
      category="Business Insurance"
      categorySlug="business-insurance"
    />
  );
};

export default CyberLiability;
