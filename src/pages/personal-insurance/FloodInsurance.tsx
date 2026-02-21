import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { ShieldCheck, Users, RefreshCw } from "lucide-react";
import heroFloodInsurance from "@/assets/hero-flood-insurance.jpg";
import { FloodRiskChecker } from "@/components/calculators";

const FloodInsurance = () => {
  return (
    <ProductDetailTemplate
      // SEO
      metaTitle="Flood Insurance in Ohio | Scioto Insurance Group"
      metaDescription="Flood insurance for Ohio homes. Standard home insurance doesn't cover floods. Call (614) 612-0050 to protect your property."
      
      // Hero
      heroTitle="Flood Insurance"
      heroSubtitle="Ohio Flood Protection"
      heroDescription="Your home insurance won't cover floods. A lot of people don't know that. And about 25% of flood claims come from outside the official flood zones. If you're near a creek, in a low spot, or have a basement, you should probably look into this."
      heroImage={heroFloodInsurance}
      
      // Stats
      stats={[
        { value: "25%", label: "Claims Outside Flood Zones" },
        { value: "NFIP + Private", label: "Options Available" },
        { value: "30 Days", label: "Typical Waiting Period" }
      ]}
      
      // Interactive Tool
      interactiveTitle="Check Your Flood Risk"
      interactiveElement={<FloodRiskChecker />}
      
      // Testimonial
      testimonial={{
        quote: "We didn't think we needed flood insurance since we're not in a flood zone. Then our basement flooded. Lesson learned—now we're covered.",
        name: "Robert T.",
        location: "Gahanna, OH",
        helpedWith: "Flood Insurance"
      }}
      
      // Coverage
      coverageTitle="What Does Flood Insurance Cover?"
      coverageItems={[
        {
          title: "Building Coverage",
          description: "Covers the structure of your home including foundation, electrical, plumbing, HVAC, and permanently installed fixtures."
        },
        {
          title: "Contents Coverage",
          description: "Protects your stuff. Furniture, electronics, clothing, valuables."
        },
        {
          title: "Basement Coverage",
          description: "Limited coverage for basement improvements. NFIP covers some items like furnaces and water heaters. Private policies may offer more."
        },
        {
          title: "Debris Removal",
          description: "Pays to haul away flood debris from your property after the water goes down."
        },
        {
          title: "Living Expenses (Private Policies)",
          description: "Some private flood policies cover temporary living expenses while your home is being fixed. NFIP doesn't include this."
        },
        {
          title: "Replacement Cost (Private Policies)",
          description: "Private flood insurance may pay replacement cost instead of actual cash value."
        }
      ]}
      
      // Why Choose
      whyChooseItems={[
        {
          icon: ShieldCheck,
          title: "We Offer Both NFIP and Private Options",
          description: "We can do the government program (NFIP) or private flood insurance. Private options often provide better coverage at competitive rates."
        },
        {
          icon: Users,
          title: "We'll Check Your Actual Risk",
          description: "We review your property's flood zone and history to recommend appropriate coverage. Some homes need more protection than the FEMA maps suggest."
        },
        {
          icon: RefreshCw,
          title: "Plan Ahead for the Waiting Period",
          description: "Flood policies usually have a 30-day waiting period before coverage starts. We help you plan ahead so you're not caught off guard."
        }
      ]}
      
      // FAQs
      productName="Flood Insurance"
      faqs={[
        {
          question: "Do I need flood insurance if I'm not in a flood zone?",
          answer: "Maybe. About 25% of flood claims come from outside designated high-risk zones. If your property has any flood history, is near water, or has a basement, we'd recommend at least basic coverage. It's also a lot cheaper in lower-risk zones."
        },
        {
          question: "What's the difference between NFIP and private flood insurance?",
          answer: "NFIP is the government program with standardized coverage and pricing. Private flood insurance from carriers like Zurich or Neptune can offer higher limits, replacement cost coverage, and sometimes lower premiums. We compare both for you."
        },
        {
          question: "Does home insurance ever cover water damage?",
          answer: "Yes, but not flood water. Home insurance covers sudden, internal water damage like burst pipes or appliance leaks. It does not cover external flood water entering your home. That needs separate flood insurance."
        },
        {
          question: "How much flood insurance do I need?",
          answer: "NFIP offers up to $250,000 for the building and $100,000 for contents. If your home is worth more, you'll need excess flood coverage or a private policy with higher limits. We'll help you figure out the right amount."
        },
        {
          question: "Why is there a 30-day waiting period for flood insurance?",
          answer: "It prevents people from buying coverage only when a storm is coming. That keeps the program sustainable for everyone. That's why we recommend getting coverage before you think you need it."
        },
        {
          question: "Is flood insurance required for my mortgage?",
          answer: "If your home is in a designated high-risk flood zone and you have a federally-backed mortgage, yes, it's required. Even if not required, it's often worth having."
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
