import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { ShieldCheck, Users, RefreshCw } from "lucide-react";

const LifeInsurance = () => {
  return (
    <ProductDetailTemplate
      // SEO
      metaTitle="Life Insurance in Columbus & New Albany, OH | Scioto Insurance Group"
      metaDescription="Term and permanent life insurance for Columbus families. We help you figure out what your family actually needs. Call (614) 612-0050 for guidance."
      
      // Hero
      heroTitle="Life Insurance for Your Family"
      heroSubtitle="Columbus & Central Ohio Life Coverage"
      heroDescription="Term or permanent, simple or complicated. We help you figure out what makes sense for your family. No pressure, no sales pitch. Just an honest conversation about protecting the people who depend on you."
      
      // Coverage
      coverageTitle="Types of Life Insurance We Offer"
      coverageItems={[
        {
          title: "Term Life Insurance",
          description: "Pure protection for a set period (10, 20, or 30 years). Usually the most affordable option if you need maximum coverage."
        },
        {
          title: "Whole Life Insurance",
          description: "Permanent coverage that builds cash value over time. Premiums stay level for life, and you can borrow against the policy."
        },
        {
          title: "Universal Life Insurance",
          description: "Flexible permanent coverage with adjustable premiums and death benefits. Works well when your life circumstances change."
        },
        {
          title: "Indexed Universal Life",
          description: "Cash value grows based on market index performance, but without direct market risk. Potentially higher returns than whole life."
        },
        {
          title: "Final Expense Insurance",
          description: "Smaller policies ($5,000-$25,000) designed to cover funeral costs and final medical bills."
        },
        {
          title: "Survivorship Life",
          description: "Insures two people (usually spouses) and pays out after both deaths. Often used for estate planning."
        }
      ]}
      
      // Why Choose
      whyChooseItems={[
        {
          icon: ShieldCheck,
          title: "We Work With Multiple Carriers",
          description: "We represent a bunch of different companies, so we can recommend what's actually best for you. Not just what pays us the most."
        },
        {
          icon: Users,
          title: "We Do the Math With You",
          description: "We calculate how much coverage your family actually needs based on your income, debts, and goals. Not some arbitrary formula."
        },
        {
          icon: RefreshCw,
          title: "We Review Your Policy as Life Changes",
          description: "You get married, have kids, buy a house, retire. Your coverage needs change too. We'll check in as things evolve."
        }
      ]}
      
      // FAQs
      productName="Life Insurance"
      faqs={[
        {
          question: "How much life insurance do I need?",
          answer: "The rule of thumb is 10-15x your annual income, but the real answer depends on your situation. We calculate based on replacing your income, paying off debts (mortgage, student loans), funding your kids' education, and covering final expenses."
        },
        {
          question: "Should I get term or permanent life insurance?",
          answer: "For most families, term insurance gives you the best value. Maximum coverage at the lowest cost during your earning years. Permanent insurance makes sense for estate planning, leaving a legacy, or if you have a lifelong dependent."
        },
        {
          question: "What affects my life insurance premiums?",
          answer: "Age is the biggest one. Premiums go up a lot as you get older. Health, tobacco use, occupation, hobbies, and family medical history matter too. That's why we suggest locking in coverage while you're young and healthy."
        },
        {
          question: "Can I get life insurance if I have health issues?",
          answer: "Yes. Different carriers underwrite conditions differently. We work with carriers that specialize in various health conditions (diabetes, heart disease, etc.) to find you the best rates. Some policies don't even require medical exams."
        },
        {
          question: "Do I need life insurance if I'm single?",
          answer: "It depends. If someone would be financially impacted by your death (co-signed loans, aging parents you support), coverage makes sense. Even if not, locking in coverage now while you're healthy guarantees you can get it later."
        },
        {
          question: "Can I have multiple life insurance policies?",
          answer: "Absolutely. A lot of people have a group policy through work plus a personal policy. Or they combine a large term policy with a smaller permanent one. We can help you design something that fits your needs and budget."
        }
      ]}
      
      // Related Products
      relatedProducts={[
        { name: "Long-Term Disability", slug: "long-term-disability", category: "personal-insurance" },
        { name: "Long-Term Care", slug: "long-term-care", category: "personal-insurance" },
        { name: "Umbrella Insurance", slug: "umbrella", category: "personal-insurance" },
        { name: "Annuities", slug: "annuities", category: "personal-insurance" }
      ]}
      
      // Category
      category="Personal Insurance"
      categorySlug="personal-insurance"
    />
  );
};

export default LifeInsurance;