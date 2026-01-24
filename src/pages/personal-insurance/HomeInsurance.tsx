import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { ShieldCheck, Users, RefreshCw } from "lucide-react";

const HomeInsurance = () => {
  return (
    <ProductDetailTemplate
      // SEO
      metaTitle="Home Insurance in Columbus & New Albany, OH | Scioto Insurance Group"
      metaDescription="Protect your biggest investment with comprehensive home insurance. We shop 30+ carriers for Columbus & New Albany homeowners. Call (614) 612-0050."
      
      // Hero
      heroTitle="Home Insurance That Actually Covers What You Need"
      heroSubtitle="Columbus & Central Ohio Home Coverage"
      heroDescription="Your home is your biggest investment. We know Ohio homes—clay soil issues, basement flooding, freeze-thaw damage. We'll make sure you have the right coverage for Columbus-area risks."
      
      // Coverage
      coverageTitle="What Does Home Insurance Cover?"
      coverageItems={[
        {
          title: "Dwelling Coverage",
          description: "Covers the structure of your home—walls, roof, floors, and built-in appliances—against covered perils like fire, wind, and hail."
        },
        {
          title: "Other Structures",
          description: "Protects detached structures on your property like garages, sheds, fences, and gazebos."
        },
        {
          title: "Personal Property",
          description: "Covers your belongings inside the home—furniture, electronics, clothing, and more—if damaged or stolen."
        },
        {
          title: "Loss of Use",
          description: "Pays for temporary living expenses if your home becomes uninhabitable due to a covered claim."
        },
        {
          title: "Personal Liability",
          description: "Protects you if someone is injured on your property or you accidentally damage someone else's property."
        },
        {
          title: "Medical Payments",
          description: "Covers medical bills for guests injured on your property, regardless of fault."
        },
        {
          title: "Water Backup Coverage",
          description: "Optional coverage for damage from sewer or drain backup—common in older Columbus neighborhoods."
        },
        {
          title: "Replacement Cost Coverage",
          description: "Pays to replace items at today's prices, not depreciated value. Critical for full protection."
        },
        {
          title: "Extended Replacement Cost",
          description: "Provides an extra cushion (10-50%) above your dwelling limit if rebuilding costs exceed estimates."
        }
      ]}
      
      // Why Choose
      whyChooseItems={[
        {
          icon: ShieldCheck,
          title: "Proper Replacement Cost Values",
          description: "We calculate what it would actually cost to rebuild your home—not just what you paid for it. This prevents being underinsured when you need coverage most."
        },
        {
          icon: Users,
          title: "Claims Advocacy",
          description: "We've helped hundreds of Columbus families through fire claims, storm damage, and burst pipes. We know which carriers pay claims fairly and quickly."
        },
        {
          icon: RefreshCw,
          title: "Annual Coverage Reviews",
          description: "Construction costs change. We review your coverage every year to make sure your home is fully protected as values increase."
        }
      ]}
      
      // FAQs
      productName="Home Insurance"
      faqs={[
        {
          question: "How much home insurance do I need?",
          answer: "You need enough to rebuild your home from the ground up at today's construction costs—not your purchase price or tax assessment. We use replacement cost calculators that factor in local labor and material costs to determine the right amount."
        },
        {
          question: "Does home insurance cover flooding?",
          answer: "No. Standard home insurance excludes flood damage. If you're in a flood zone (or even if you're not—25% of flood claims come from outside flood zones), you need a separate flood insurance policy."
        },
        {
          question: "What's the difference between actual cash value and replacement cost?",
          answer: "Actual cash value pays what your items are worth after depreciation—so a 5-year-old TV might only get you $200. Replacement cost pays to replace items at today's prices. We always recommend replacement cost coverage."
        },
        {
          question: "Does home insurance cover water damage?",
          answer: "It depends on the source. Sudden, accidental water damage (like a burst pipe) is typically covered. Gradual leaks from poor maintenance are not. Flood water and sewer backup require separate endorsements."
        },
        {
          question: "How can I save on home insurance?",
          answer: "Bundle with auto insurance for 10-25% savings. Other discounts include claims-free history, security systems, newer roof, and loyalty discounts. We shop multiple carriers to find the best combination of coverage and price."
        },
        {
          question: "What should I do immediately after a home insurance claim?",
          answer: "Call us first—before calling your carrier. We'll guide you through documenting the damage, understanding your coverage, and navigating the claims process. Taking photos and preventing further damage are your first steps."
        }
      ]}
      
      // Related Products
      relatedProducts={[
        { name: "Auto Insurance", slug: "auto", category: "personal-insurance" },
        { name: "Umbrella Insurance", slug: "umbrella", category: "personal-insurance" },
        { name: "Flood Insurance", slug: "flood", category: "personal-insurance" },
        { name: "Valuable Possessions", slug: "valuable-possessions", category: "personal-insurance" }
      ]}
      
      // Category
      category="Personal Insurance"
      categorySlug="personal-insurance"
    />
  );
};

export default HomeInsurance;
