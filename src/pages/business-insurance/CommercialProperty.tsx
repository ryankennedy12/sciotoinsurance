import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { ShieldCheck, Users, RefreshCw } from "lucide-react";

const CommercialProperty = () => {
  return (
    <ProductDetailTemplate
      metaTitle="Commercial Property Insurance in Columbus & Ohio | Scioto Insurance Group"
      metaDescription="Protect your building, equipment, and inventory with commercial property insurance. Coverage for Ohio businesses. Call (614) 612-0050."
      
      heroTitle="Commercial Property Insurance: Protect Your Business Assets"
      heroSubtitle="Columbus & Central Ohio Commercial Coverage"
      heroDescription="Your building, equipment, inventory, and everything you need to operate—covered against fire, theft, weather, and disasters. Don't let a single event destroy years of hard work building your business."
      
      coverageTitle="What Does Commercial Property Insurance Cover?"
      coverageItems={[
        {
          title: "Building Coverage",
          description: "Protects the structure you own or are responsible for under your lease, including walls, roof, and permanently attached fixtures."
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
          description: "Pays for additional costs to continue operating after a loss, like temporary locations or expedited shipping."
        },
        {
          title: "Equipment Breakdown",
          description: "Covers mechanical and electrical breakdown of equipment not covered by standard property insurance."
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
          title: "Accurate Valuations",
          description: "We ensure your property is insured at true replacement cost—not market value or book value. Underinsurance is the most common coverage gap we see."
        },
        {
          icon: Users,
          title: "Business Continuity Focus",
          description: "Property damage is just the beginning. We make sure you have the income and expense coverage to survive the weeks or months of rebuilding."
        },
        {
          icon: RefreshCw,
          title: "Annual Property Reviews",
          description: "Values change. New equipment gets added. We review your coverage annually to keep pace with your growing business."
        }
      ]}
      
      productName="Commercial Property Insurance"
      faqs={[
        {
          question: "What's the difference between replacement cost and actual cash value?",
          answer: "Replacement cost pays to replace damaged property with new items of similar quality. Actual cash value deducts depreciation, so a 10-year-old piece of equipment might only pay out 20% of its replacement value. We recommend replacement cost coverage."
        },
        {
          question: "Do I need commercial property insurance if I rent my space?",
          answer: "Yes. Your landlord's policy covers the building structure, not your business property inside it. You need coverage for your equipment, inventory, furniture, and improvements you've made to the space."
        },
        {
          question: "What's coinsurance and why does it matter?",
          answer: "Coinsurance requires you to insure your property for at least 80-90% of its value. If you're underinsured, claims may be reduced proportionally. For example, if you're 50% underinsured, you might only receive 50% of a claim."
        },
        {
          question: "Does commercial property insurance cover floods or earthquakes?",
          answer: "No. Standard property policies exclude flood and earthquake damage. These require separate policies. If your business is in a flood-prone area, we'll help you get appropriate coverage."
        },
        {
          question: "How much business income coverage do I need?",
          answer: "Business income coverage should be based on your projected income during the time it would take to rebuild and resume normal operations—typically 12-18 months for serious losses. We help you calculate an appropriate limit."
        },
        {
          question: "What's the difference between named perils and open perils coverage?",
          answer: "Named perils (or basic form) only covers losses from specifically listed causes like fire or theft. Open perils (or special form) covers all losses except those specifically excluded. Open perils provides broader protection."
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
