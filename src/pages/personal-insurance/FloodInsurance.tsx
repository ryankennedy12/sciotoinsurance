import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { ShieldCheck, Users, RefreshCw } from "lucide-react";

const FloodInsurance = () => {
  return (
    <ProductDetailTemplate
      // SEO
      metaTitle="Flood Insurance in Columbus & New Albany, OH | Scioto Insurance Group"
      metaDescription="Flood insurance for Columbus & New Albany homes. Standard home insurance doesn't cover floods. Call (614) 612-0050 to protect your property."
      
      // Hero
      heroTitle="Flood Insurance: Because Your Home Policy Won't Cover This"
      heroSubtitle="Columbus & Central Ohio Flood Protection"
      heroDescription="Standard home insurance doesn't cover floods. And 25% of flood claims come from outside designated flood zones. If you're near a creek, in a low-lying area, or have a basement, flood insurance isn't optional—it's essential."
      
      // Coverage
      coverageTitle="What Does Flood Insurance Cover?"
      coverageItems={[
        {
          title: "Building Coverage",
          description: "Covers the structure of your home including foundation, electrical systems, plumbing, HVAC, and permanently installed fixtures."
        },
        {
          title: "Contents Coverage",
          description: "Protects your personal belongings—furniture, electronics, clothing, and valuables—from flood damage."
        },
        {
          title: "Basement Coverage",
          description: "Limited coverage for basement improvements. NFIP covers some items like furnaces and water heaters; private policies may offer more."
        },
        {
          title: "Debris Removal",
          description: "Pays to remove flood debris from your property after the water recedes."
        },
        {
          title: "Living Expenses (Private Policies)",
          description: "Some private flood policies cover temporary living expenses while your home is being repaired—NFIP does not."
        },
        {
          title: "Replacement Cost (Private Policies)",
          description: "Private flood insurance may offer replacement cost coverage instead of actual cash value."
        }
      ]}
      
      // Why Choose
      whyChooseItems={[
        {
          icon: ShieldCheck,
          title: "NFIP & Private Options",
          description: "We offer both National Flood Insurance Program (NFIP) policies and private flood insurance. Private options often provide better coverage at competitive rates."
        },
        {
          icon: Users,
          title: "Flood Zone Analysis",
          description: "We review your property's flood zone designation and history to recommend appropriate coverage. Some homes need more protection than FEMA maps suggest."
        },
        {
          icon: RefreshCw,
          title: "30-Day Waiting Period Help",
          description: "Flood policies typically have a 30-day waiting period before coverage begins. We help you plan ahead so you're not caught unprotected."
        }
      ]}
      
      // FAQs
      productName="Flood Insurance"
      faqs={[
        {
          question: "Do I need flood insurance if I'm not in a flood zone?",
          answer: "Potentially, yes. About 25% of flood claims come from outside designated high-risk flood zones. If your property has any flood history, is near water, or has a basement, we recommend at least basic coverage. It's also much cheaper in lower-risk zones."
        },
        {
          question: "What's the difference between NFIP and private flood insurance?",
          answer: "NFIP is the government program with standardized coverage and pricing. Private flood insurance from carriers like Zurich or Neptune can offer higher limits, replacement cost coverage, and sometimes lower premiums. We compare both options for you."
        },
        {
          question: "Does home insurance ever cover water damage?",
          answer: "Yes, but not flood water. Home insurance covers sudden, internal water damage like burst pipes or appliance leaks. It does NOT cover external flood water entering your home—that requires separate flood insurance."
        },
        {
          question: "How much flood insurance do I need?",
          answer: "NFIP offers up to $250,000 for the building and $100,000 for contents. If your home is worth more, you'll need excess flood coverage or a private policy with higher limits. We'll help you calculate the right amount."
        },
        {
          question: "Why is there a 30-day waiting period for flood insurance?",
          answer: "The waiting period prevents people from buying coverage only when floods are imminent. This keeps the program sustainable for everyone. That's why we recommend getting coverage before you think you need it."
        },
        {
          question: "Is flood insurance required for my mortgage?",
          answer: "If your home is in a designated high-risk flood zone (Special Flood Hazard Area) and you have a federally-backed mortgage, flood insurance is required. Even if not required, it's often a smart investment."
        }
      ]}
      
      // Related Products
      relatedProducts={[
        { name: "Home Insurance", slug: "home", category: "personal-insurance" },
        { name: "Umbrella Insurance", slug: "umbrella", category: "personal-insurance" },
        { name: "Secondary Home", slug: "secondary-home", category: "personal-insurance" },
        { name: "Rental Property", slug: "rental-property", category: "personal-insurance" }
      ]}
      
      // Category
      category="Personal Insurance"
      categorySlug="personal-insurance"
    />
  );
};

export default FloodInsurance;
