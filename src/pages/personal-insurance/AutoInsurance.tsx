import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { ShieldCheck, Users, RefreshCw } from "lucide-react";

const AutoInsurance = () => {
  return (
    <ProductDetailTemplate
      // SEO
      metaTitle="Auto Insurance in Columbus & New Albany, OH | Scioto Insurance Group"
      metaDescription="Get comprehensive auto insurance from 30+ carriers. We find the best rates for Columbus & New Albany drivers. Call (614) 612-0050 for a free quote."
      
      // Hero
      heroTitle="Auto Insurance That Actually Protects You"
      heroSubtitle="Columbus & Central Ohio Auto Coverage"
      heroDescription="More than state minimums. We analyze your driving habits, vehicle, and risk to build a policy that protects you—without the fluff. Most clients save $300-$600/year by switching to us."
      
      // Coverage
      coverageTitle="What Does Auto Insurance Cover?"
      coverageItems={[
        {
          title: "Liability Coverage",
          description: "Pays for injuries and property damage you cause to others in an accident. Ohio requires minimum coverage, but we typically recommend higher limits."
        },
        {
          title: "Collision Coverage",
          description: "Covers damage to your vehicle from accidents with other cars or objects, regardless of who's at fault."
        },
        {
          title: "Comprehensive Coverage",
          description: "Protects against non-collision events like theft, vandalism, weather damage, and hitting an animal."
        },
        {
          title: "Uninsured/Underinsured Motorist",
          description: "Covers you if the at-fault driver has no insurance or insufficient coverage. Essential in Ohio."
        },
        {
          title: "Medical Payments",
          description: "Pays for medical expenses for you and your passengers after an accident, regardless of fault."
        },
        {
          title: "Rental Car Coverage",
          description: "Pays for a rental car while your vehicle is being repaired after a covered claim."
        },
        {
          title: "Roadside Assistance",
          description: "24/7 help for breakdowns, flat tires, dead batteries, and lockouts."
        },
        {
          title: "Gap Coverage",
          description: "If you owe more than your car is worth, gap coverage pays the difference after a total loss."
        },
        {
          title: "New Car Replacement",
          description: "Replaces your totaled new car with a brand new one of the same make and model."
        }
      ]}
      
      // Why Choose
      whyChooseItems={[
        {
          icon: ShieldCheck,
          title: "We Shop 30+ Carriers",
          description: "We compare rates from Progressive, State Farm, Nationwide, and dozens more to find you the best combination of coverage and price."
        },
        {
          icon: Users,
          title: "Local Claims Advocates",
          description: "When accidents happen, you call us—not a 1-800 number. We'll guide you through the claims process and fight for fair settlement."
        },
        {
          icon: RefreshCw,
          title: "Annual Rate Reviews",
          description: "Auto rates change constantly. We proactively review your policy each year to make sure you're never overpaying."
        }
      ]}
      
      // FAQs
      productName="Auto Insurance"
      faqs={[
        {
          question: "How much auto insurance do I really need in Ohio?",
          answer: "Ohio requires minimum liability of 25/50/25 ($25,000 per person, $50,000 per accident for injuries, $25,000 for property damage). However, we typically recommend at least 100/300/100 because the minimums won't fully protect you in a serious accident. Your assets determine how much coverage you need."
        },
        {
          question: "What factors affect my auto insurance rate?",
          answer: "The main factors are your driving record, age, credit score, vehicle type, annual mileage, and where you live. In Columbus and Central Ohio, rates can vary significantly by ZIP code. We shop multiple carriers to find the best rate for your specific profile."
        },
        {
          question: "Do I need full coverage on my car?",
          answer: "Full coverage (comprehensive + collision) is required if you have a loan or lease. If you own your car outright, it depends on the car's value. Generally, if your car is worth less than 10 times the annual premium for comp/collision, it may not be worth it."
        },
        {
          question: "How can I lower my auto insurance premium?",
          answer: "Common discounts include bundling with home insurance (saves 10-25%), good driver discounts, low mileage discounts, and paying annually instead of monthly. We also check if you qualify for professional or alumni group discounts."
        },
        {
          question: "What happens if I'm in an accident with an uninsured driver?",
          answer: "Uninsured motorist coverage protects you. It covers your injuries and, with uninsured motorist property damage (UMPD), your vehicle repairs. We strongly recommend this coverage since about 12% of Ohio drivers are uninsured."
        },
        {
          question: "Will my rates go up after an accident?",
          answer: "It depends on who's at fault and your carrier. Many carriers offer accident forgiveness for your first at-fault accident if you've been claim-free for 3-5 years. We can help you understand your options before filing a claim."
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
