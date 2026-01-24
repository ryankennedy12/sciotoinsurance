import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { ShieldCheck, Users, RefreshCw } from "lucide-react";

const HomeInsurance = () => {
  return (
    <ProductDetailTemplate
      // SEO
      metaTitle="Home Insurance in Ohio | Scioto Insurance Group"
      metaDescription="Protect your biggest investment with comprehensive home insurance. We shop 30+ carriers for Ohio homeowners. Call (614) 612-0050."
      
      // Hero
      heroTitle="Home Insurance for Ohio Homeowners"
      heroSubtitle="Coverage Throughout Ohio"
      heroDescription="Your home is probably your biggest investment. We know the stuff that can go wrong with Ohio homes: clay soil, basement flooding, freeze-thaw cycles. We'll make sure you're actually covered for what matters."
      
      // Coverage
      coverageTitle="What Does Home Insurance Cover?"
      coverageItems={[
        {
          title: "Dwelling Coverage",
          description: "Covers the structure of your home (walls, roof, floors, built-in appliances) against things like fire, wind, and hail."
        },
        {
          title: "Other Structures",
          description: "Protects detached structures on your property like garages, sheds, fences, and gazebos."
        },
        {
          title: "Personal Property",
          description: "Covers your stuff inside the home. Furniture, electronics, clothing, and more if they're damaged or stolen."
        },
        {
          title: "Loss of Use",
          description: "Pays for temporary living expenses if you can't live in your home because of a covered claim."
        },
        {
          title: "Personal Liability",
          description: "Protects you if someone gets injured on your property or you accidentally damage someone else's property."
        },
        {
          title: "Medical Payments",
          description: "Covers medical bills for guests injured on your property, regardless of whose fault it was."
        },
        {
          title: "Water Backup Coverage",
          description: "Optional coverage for sewer or drain backup damage. This is pretty common in older Columbus neighborhoods."
        },
        {
          title: "Replacement Cost Coverage",
          description: "Pays to replace items at today's prices, not depreciated value. This matters more than people realize."
        },
        {
          title: "Extended Replacement Cost",
          description: "Gives you an extra cushion (10-50%) above your dwelling limit if rebuilding costs more than expected."
        }
      ]}
      
      // Why Choose
      whyChooseItems={[
        {
          icon: ShieldCheck,
          title: "We Calculate Real Replacement Costs",
          description: "We figure out what it would actually cost to rebuild your home today. Not what you paid for it. This is how people end up underinsured."
        },
        {
          icon: Users,
          title: "We've Been Through This Before",
          description: "We've helped hundreds of Columbus families through fire claims, storm damage, and burst pipes. We know which carriers handle claims well."
        },
        {
          icon: RefreshCw,
          title: "We Review Your Coverage Every Year",
          description: "Construction costs go up. We check your coverage each year to make sure your home stays fully protected."
        }
      ]}
      
      // FAQs
      productName="Home Insurance"
      faqs={[
        {
          question: "How much home insurance do I need?",
          answer: "Enough to rebuild your home from scratch at today's construction costs. Not your purchase price. Not your tax assessment. We use replacement cost calculators that factor in local labor and material costs to figure out the right number."
        },
        {
          question: "Does home insurance cover flooding?",
          answer: "No. Standard home insurance doesn't cover flood damage. If you're in a flood zone (or even if you're not, since 25% of flood claims come from outside flood zones), you need a separate flood insurance policy."
        },
        {
          question: "What's the difference between actual cash value and replacement cost?",
          answer: "Actual cash value pays what your items are worth after depreciation. So a 5-year-old TV might only get you $200. Replacement cost pays to replace items at today's prices. We always recommend replacement cost coverage."
        },
        {
          question: "Does home insurance cover water damage?",
          answer: "Depends on the source. Sudden, accidental water damage (like a burst pipe) is usually covered. Gradual leaks from poor maintenance are not. Flood water and sewer backup need separate coverage."
        },
        {
          question: "How can I save on home insurance?",
          answer: "Bundle with auto insurance for 10-25% savings. Other discounts include claims-free history, security systems, newer roof, and loyalty discounts. We shop multiple carriers to find the best combination of coverage and price."
        },
        {
          question: "What should I do immediately after a home insurance claim?",
          answer: "Call us first, before calling your carrier. We'll guide you through documenting the damage, understanding your coverage, and navigating the claims process. Take photos and prevent further damage while you wait."
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