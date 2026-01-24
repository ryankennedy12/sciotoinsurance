import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { ShieldCheck, Users, RefreshCw } from "lucide-react";

const AutoInsurance = () => {
  return (
    <ProductDetailTemplate
      // SEO
      metaTitle="Auto Insurance in Columbus & New Albany, OH | Scioto Insurance Group"
      metaDescription="Get comprehensive auto insurance from 30+ carriers. We find the best rates for Columbus & New Albany drivers. Call (614) 612-0050 for a free quote."
      
      // Hero
      heroTitle="Auto Insurance That Works for You"
      heroSubtitle="Columbus & Central Ohio Auto Coverage"
      heroDescription="We look at how you actually drive, what you're driving, and what you need covered. Then we compare rates from over 30 companies to find something that fits. Most people save a few hundred bucks when they switch."
      
      // Coverage
      coverageTitle="What Does Auto Insurance Cover?"
      coverageItems={[
        {
          title: "Liability Coverage",
          description: "Pays for injuries and property damage you cause to others in an accident. Ohio requires minimum coverage, but we usually suggest carrying more."
        },
        {
          title: "Collision Coverage",
          description: "Covers damage to your car from accidents with other vehicles or objects, no matter who caused it."
        },
        {
          title: "Comprehensive Coverage",
          description: "Handles things that aren't collisions: theft, vandalism, hail, hitting a deer. That kind of thing."
        },
        {
          title: "Uninsured/Underinsured Motorist",
          description: "Covers you when the other driver doesn't have insurance or doesn't have enough. About 12% of Ohio drivers are uninsured."
        },
        {
          title: "Medical Payments",
          description: "Pays for medical expenses for you and your passengers after an accident, regardless of who was at fault."
        },
        {
          title: "Rental Car Coverage",
          description: "Pays for a rental car while yours is in the shop after a covered claim."
        },
        {
          title: "Roadside Assistance",
          description: "24/7 help for breakdowns, flat tires, dead batteries, and lockouts."
        },
        {
          title: "Gap Coverage",
          description: "If you owe more than your car is worth and it's totaled, gap coverage pays the difference."
        },
        {
          title: "New Car Replacement",
          description: "If your new car is totaled, this replaces it with a brand new one of the same make and model."
        }
      ]}
      
      // Why Choose
      whyChooseItems={[
        {
          icon: ShieldCheck,
          title: "We Compare 30+ Companies",
          description: "Progressive, State Farm, Nationwide, and a bunch more. We find the best combination of coverage and price for your situation."
        },
        {
          icon: Users,
          title: "You Call Us, Not a 1-800 Number",
          description: "When something happens, you talk to us. We'll walk you through the claims process and make sure you're treated fairly."
        },
        {
          icon: RefreshCw,
          title: "We Check Your Rates Every Year",
          description: "Auto rates change constantly. We review your policy each year to make sure you're not overpaying."
        }
      ]}
      
      // FAQs
      productName="Auto Insurance"
      faqs={[
        {
          question: "How much auto insurance do I really need in Ohio?",
          answer: "Ohio requires minimum liability of 25/50/25 ($25,000 per person, $50,000 per accident for injuries, $25,000 for property damage). But honestly, that's not enough for a serious accident. We usually recommend at least 100/300/100. How much you need depends on what you have to protect."
        },
        {
          question: "What factors affect my auto insurance rate?",
          answer: "Driving record, age, credit score, what you drive, how much you drive, and where you live. Rates can vary a lot just by ZIP code in the Columbus area. That's why we shop multiple carriers."
        },
        {
          question: "Do I need full coverage on my car?",
          answer: "If you have a loan or lease, yes. If you own your car outright, it depends on what it's worth. Here's a rough rule: if your car is worth less than 10 times what you'd pay for comp and collision, it might not be worth it."
        },
        {
          question: "How can I lower my auto insurance premium?",
          answer: "Bundle with home insurance (usually saves 10-25%), keep a clean driving record, ask about low mileage discounts, and pay annually instead of monthly. We also check for professional or alumni group discounts."
        },
        {
          question: "What happens if I'm in an accident with an uninsured driver?",
          answer: "That's where uninsured motorist coverage comes in. It covers your injuries and, if you have uninsured motorist property damage, your vehicle repairs too. We strongly recommend this coverage since about 12% of Ohio drivers don't have insurance."
        },
        {
          question: "Will my rates go up after an accident?",
          answer: "It depends on who's at fault and your carrier. A lot of carriers offer accident forgiveness for your first at-fault accident if you've been claim-free for a while. We can help you figure out your options before you file a claim."
        }
      ]}
      
      // Related Products
      relatedProducts={[
        { name: "Home Insurance", slug: "home", category: "personal-insurance" },
        { name: "Umbrella Insurance", slug: "umbrella", category: "personal-insurance" },
        { name: "Motorcycle Insurance", slug: "motorcycle", category: "personal-insurance" },
        { name: "Classic Car Insurance", slug: "classic-car", category: "personal-insurance" }
      ]}
      
      // Category
      category="Personal Insurance"
      categorySlug="personal-insurance"
    />
  );
};

export default AutoInsurance;