import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { ShieldCheck, Users, RefreshCw } from "lucide-react";

const CommercialProperty = () => {
  return (
    <ProductDetailTemplate
      metaTitle="Commercial Property Insurance in Columbus & Ohio | Scioto Insurance Group"
      metaDescription="Protect your building, equipment, and inventory with commercial property insurance. Coverage for Ohio businesses. Call (614) 612-0050."
      
      heroTitle="Commercial Property Insurance"
      heroSubtitle="Columbus & Central Ohio Commercial Coverage"
      heroDescription="Your building, equipment, inventory, and everything else you need to operate. Covered against fire, theft, weather, and disasters. A single event shouldn't be able to wipe out years of work."
      
      coverageTitle="What Does Commercial Property Insurance Cover?"
      coverageItems={[
        {
          title: "Building Coverage",
          description: "Protects the structure you own (or are responsible for under your lease), including walls, roof, and permanently attached fixtures."
        },
        {
          title: "Business Personal Property",
          description: "Covers equipment, furniture, inventory, supplies, and other property you own that's used in your business."
        },
        {
          title: "Business Income Coverage",
          description: "Replaces lost income and covers ongoing expenses when a covered loss forces you to close temporarily."
        },
        {
          title: "Extra Expense Coverage",
          description: "Pays for additional costs to keep operating after a loss, like temporary locations or expedited shipping."
        },
        {
          title: "Equipment Breakdown",
          description: "Covers mechanical and electrical breakdown of equipment that standard property insurance doesn't cover."
        },
        {
          title: "Outdoor Property",
          description: "Coverage for signs, fences, antennas, and other outdoor property on your premises."
        },
        {
          title: "Tenant Improvements",
          description: "Covers improvements you've made to a rented space, like built-in fixtures or renovations."
        },
        {
          title: "Valuable Papers & Records",
          description: "Covers the cost to research and recreate important business documents that are damaged or destroyed."
        },
        {
          title: "Debris Removal",
          description: "Pays to remove debris from your property after a covered loss."
        }
      ]}
      
      whyChooseItems={[
        {
          icon: ShieldCheck,
          title: "We Get Your Valuations Right",
          description: "We make sure your property is insured at true replacement cost. Not market value. Not book value. Underinsurance is the most common gap we see."
        },
        {
          icon: Users,
          title: "We Think About Business Continuity",
          description: "Property damage is just the beginning. We make sure you have the income and expense coverage to survive weeks or months of rebuilding."
        },
        {
          icon: RefreshCw,
          title: "We Review Your Coverage Every Year",
          description: "Values change. Equipment gets added. We check your coverage annually to keep pace with your growing business."
        }
      ]}
      
      productName="Commercial Property Insurance"
      faqs={[
        {
          question: "What's the difference between replacement cost and actual cash value?",
          answer: "Replacement cost pays to replace damaged property with new items of similar quality. Actual cash value deducts depreciation, so a 10-year-old piece of equipment might only pay out 20% of what it costs to replace. We recommend replacement cost."
        },
        {
          question: "Do I need commercial property insurance if I rent my space?",
          answer: "Yes. Your landlord's policy covers the building structure, not your stuff inside. You need coverage for your equipment, inventory, furniture, and any improvements you've made to the space."
        },
        {
          question: "What's coinsurance and why does it matter?",
          answer: "Coinsurance requires you to insure your property for at least 80-90% of its value. If you're underinsured, claims get reduced proportionally. So if you're 50% underinsured, you might only get 50% of a claim."
        },
        {
          question: "Does commercial property insurance cover floods or earthquakes?",
          answer: "No. Standard property policies exclude flood and earthquake damage. Those need separate policies. If your business is in a flood-prone area, we'll help you get appropriate coverage."
        },
        {
          question: "How much business income coverage do I need?",
          answer: "It should be based on your projected income during the time it would take to rebuild and get back to normal. Usually 12-18 months for serious losses. We help you calculate an appropriate limit."
        },
        {
          question: "What's the difference between named perils and open perils coverage?",
          answer: "Named perils only covers losses from specifically listed causes like fire or theft. Open perils covers everything except what's specifically excluded. Open perils gives you broader protection."
        }
      ]}
      
      relatedProducts={[
        { name: "Business Owners Policy", slug: "bop", category: "business-insurance" },
        { name: "General Liability", slug: "general-liability", category: "business-insurance" },
        { name: "Inland Marine", slug: "inland-marine", category: "business-insurance" },
        { name: "Equipment Breakdown", slug: "systems-breakdown", category: "business-insurance" }
      ]}
      
      category="Business Insurance"
      categorySlug="business-insurance"
    />
  );
};

export default CommercialProperty;