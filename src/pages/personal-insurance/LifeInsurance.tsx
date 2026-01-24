import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { ShieldCheck, Users, RefreshCw } from "lucide-react";

const LifeInsurance = () => {
  return (
    <ProductDetailTemplate
      // SEO
      metaTitle="Life Insurance in Columbus & New Albany, OH | Scioto Insurance Group"
      metaDescription="Term and permanent life insurance for Columbus families. We help you figure out what your family actually needs. Call (614) 612-0050 for guidance."
      
      // Hero
      heroTitle="Life Insurance That Protects What Matters Most"
      heroSubtitle="Columbus & Central Ohio Life Coverage"
      heroDescription="Term or permanent, simple or complex—we help you figure out what your family actually needs. No pressure, no sales tactics. Just honest guidance about protecting the people who depend on you."
      
      // Coverage
      coverageTitle="Types of Life Insurance We Offer"
      coverageItems={[
        {
          title: "Term Life Insurance",
          description: "Pure protection for a specific period (10, 20, or 30 years). Most affordable option for young families who need maximum coverage."
        },
        {
          title: "Whole Life Insurance",
          description: "Permanent coverage that builds cash value over time. Premiums stay level for life, and you can borrow against the policy."
        },
        {
          title: "Universal Life Insurance",
          description: "Flexible permanent coverage with adjustable premiums and death benefits. Good for changing life circumstances."
        },
        {
          title: "Indexed Universal Life",
          description: "Cash value grows based on market index performance without direct market risk. Potential for higher returns than whole life."
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
          title: "Unbiased Guidance",
          description: "We represent multiple carriers, so we recommend what's best for your situation—not what pays us the highest commission."
        },
        {
          icon: Users,
          title: "Needs-Based Analysis",
          description: "We calculate how much coverage your family actually needs based on your income, debts, and goals. Not arbitrary formulas."
        },
        {
          icon: RefreshCw,
          title: "Ongoing Policy Reviews",
          description: "Life changes—marriages, kids, home purchases. We review your coverage as your needs evolve to ensure you're always protected."
        }
      ]}
      
      // FAQs
      productName="Life Insurance"
      faqs={[
        {
          question: "How much life insurance do I need?",
          answer: "The rule of thumb is 10-15x your annual income, but the real answer depends on your specific situation. We calculate based on replacing your income, paying off debts (mortgage, student loans), funding your kids' education, and covering final expenses."
        },
        {
          question: "Should I get term or permanent life insurance?",
          answer: "For most families, term insurance provides the best value—maximum coverage at the lowest cost during your earning years. Permanent insurance makes sense for estate planning, leaving a legacy, or if you have a lifelong dependent."
        },
        {
          question: "What affects my life insurance premiums?",
          answer: "Age is the biggest factor—premiums increase significantly as you get older. Health, tobacco use, occupation, hobbies, and family medical history also impact rates. That's why we recommend locking in coverage while you're young and healthy."
        },
        {
          question: "Can I get life insurance if I have health issues?",
          answer: "Yes. Different carriers underwrite conditions differently. We work with carriers that specialize in various health conditions—from diabetes to heart disease—to find you the best rates. Some policies don't require medical exams."
        },
        {
          question: "Do I need life insurance if I'm single?",
          answer: "It depends. If someone would be financially impacted by your death (co-signed loans, aging parents you support), coverage makes sense. Even if not, locking in coverage now while you're healthy guarantees future insurability."
        },
        {
          question: "Can I have multiple life insurance policies?",
          answer: "Absolutely. Many people have a group policy through work plus a personal policy. Or they combine a large term policy with a smaller permanent policy. We can help design a strategy that fits your needs and budget."
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
