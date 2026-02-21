import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { ShieldCheck, Users, RefreshCw } from "lucide-react";
import heroCommercialAuto from "@/assets/hero-commercial-auto.jpg";
import { FleetCalculator } from "@/components/calculators";

const CommercialAuto = () => {
  return (
    <ProductDetailTemplate
      metaTitle="Commercial Auto Insurance | Scioto Insurance Group"
      metaDescription="Commercial vehicle coverage for businesses nationwide. Protect company cars, trucks, and fleets. Call (614) 612-0050 for a quote."
      
      heroTitle="Commercial Auto Insurance"
      heroSubtitle="Fleet Coverage for Businesses Nationwide"
      heroDescription="If your business owns vehicles or your employees drive for work, personal auto won't cut it. Commercial auto covers owned vehicles, rented vehicles, and employee-owned cars when they're used for business."
      heroImage={heroCommercialAuto}
      
      // Stats
      stats={[
        { value: "Fleet", label: "Specialists" },
        { value: "Hired & Non-Owned", label: "Coverage" },
        { value: "Driver Safety", label: "Programs" }
      ]}
      
      // Interactive Tool
      interactiveTitle="Calculate Your Fleet Coverage"
      interactiveElement={<FleetCalculator />}
      
      // Testimonial
      testimonial={{
        quote: "Managing insurance for our 15 vehicles was a headache. Scioto consolidated everything and saved us 20% annually.",
        name: "Central Ohio Plumbing",
        location: "Hilliard, OH",
        helpedWith: "Commercial Fleet"
      }}
      
      coverageTitle="What Does Commercial Auto Insurance Cover?"
      coverageItems={[
        {
          title: "Liability Coverage",
          description: "Covers injuries and property damage your business vehicles cause to others. Ohio requires minimum limits, but we usually recommend higher."
        },
        {
          title: "Physical Damage",
          description: "Comprehensive and collision coverage for damage to your owned vehicles from accidents, theft, vandalism, and weather."
        },
        {
          title: "Hired Auto Coverage",
          description: "Covers vehicles you rent or hire for business. Important when employees rent cars for business trips."
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
          description: "Protects your business when the at-fault driver has no insurance or not enough."
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
          title: "We Get the Classification Right",
          description: "Commercial auto rating is tricky. Vehicle type, use, radius, driver classification. We make sure your vehicles are classified correctly so claims don't get denied."
        },
        {
          icon: Users,
          title: "We Help Manage Larger Fleets",
          description: "For bigger fleets, we help you set up driver safety programs, track claims experience, and negotiate better rates."
        },
        {
          icon: RefreshCw,
          title: "We Review Your Fleet Every Year",
          description: "Vehicles come and go. We check your fleet annually to make sure everything's covered and you're not paying for vehicles you don't have anymore."
        }
      ]}
      
      productName="Commercial Auto Insurance"
      faqs={[
        {
          question: "When do I need commercial auto insurance vs. personal auto?",
          answer: "You need commercial auto if vehicles are titled to your business, used mainly for business, carry goods or equipment, transport passengers for hire, or are used by multiple employees. Personal policies usually exclude business use."
        },
        {
          question: "Does commercial auto cover employee personal vehicles?",
          answer: "Not directly. Their personal auto is primary. But non-owned auto coverage on your commercial policy gives you excess liability protection when employees use their own cars for work. You need this."
        },
        {
          question: "What about employees who drive their own cars for work?",
          answer: "Require them to maintain adequate personal auto insurance. Add non-owned auto coverage to your commercial policy. If you don't own vehicles but employees drive for work regularly, consider a hired and non-owned auto policy."
        },
        {
          question: "How does commercial auto rating work?",
          answer: "Premiums are based on vehicle type, age, value, how it's used (service, delivery, sales), territory, radius, driver ages and records, and your claims history. We shop multiple carriers to find the best rates."
        },
        {
          question: "Does my commercial auto policy cover trailers?",
          answer: "Liability usually extends to trailers you tow. Physical damage for trailers usually needs them to be specifically listed on the policy. We make sure your trailers are properly covered."
        },
        {
          question: "What limits should I carry on commercial auto?",
          answer: "Ohio minimums are 25/50/25, but we usually recommend at least 100/300/100 for businesses. If you have commercial contracts or significant assets, you may need $1M combined single limit plus an umbrella."
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
