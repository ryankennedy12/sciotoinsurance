import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import ProductFAQ, { FAQItem } from "@/components/ProductFAQ";
import { AnimatedSection } from "@/components/ui/animated-section";
import StatsBar, { StatItem } from "@/components/StatsBar";
import TestimonialCallout, { TestimonialData } from "@/components/TestimonialCallout";

interface CoverageItem {
  title: string;
  description: string;
}

interface WhyChooseItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface RelatedProduct {
  name: string;
  slug: string;
  category: "personal-insurance" | "business-insurance";
}

export interface ProductDetailProps {
  // SEO
  metaTitle: string;
  metaDescription: string;
  
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImage?: string;
  
  // NEW: Category theming
  categoryTheme?: "personal" | "business";
  
  // NEW: Stats bar
  stats?: StatItem[];
  
  // NEW: Testimonial
  testimonial?: TestimonialData;
  
  // NEW: Interactive element
  interactiveElement?: ReactNode;
  interactiveTitle?: string;
  interactiveSubtitle?: string;
  
  // Coverage section
  coverageTitle: string;
  coverageItems: CoverageItem[];
  
  // Why Choose section
  whyChooseItems: WhyChooseItem[];
  
  // FAQs
  faqs: FAQItem[];
  productName: string;
  
  // Related products
  relatedProducts: RelatedProduct[];
  
  // Category for breadcrumb
  category: "Personal Insurance" | "Business Insurance" | "Employee Benefits";
  categorySlug: "personal-insurance" | "business-insurance" | "employee-benefits";
}

const ProductDetailTemplate = ({
  metaTitle,
  metaDescription,
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroImage,
  categoryTheme = "personal",
  stats,
  testimonial,
  interactiveElement,
  interactiveTitle,
  interactiveSubtitle,
  coverageTitle,
  coverageItems,
  whyChooseItems,
  faqs,
  productName,
  relatedProducts,
  category,
  categorySlug,
}: ProductDetailProps) => {
  // Category-specific gradients
  const heroGradient = categoryTheme === "personal"
    ? "from-burgundy-900/95 via-burgundy-800/80 to-burgundy-700/50"
    : "from-charcoal/95 via-charcoal/85 to-charcoal/60";
  
  const heroBgClass = categoryTheme === "personal"
    ? "bg-gradient-to-br from-primary via-burgundy-800 to-burgundy-900"
    : "bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90";

  return (
    <>
      {/* SEO Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />

      {/* Hero Section - Enhanced with full-bleed image */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        {/* Background Color */}
        <div className={`absolute inset-0 ${heroBgClass}`} />
        
        {/* Hero Image */}
        {heroImage && (
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        )}
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${heroGradient}`} />

        <div className="relative z-10 container-wide section-padding">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-white/70">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li className="text-white/50">/</li>
              <li>
                <Link to={`/${categorySlug}`} className="hover:text-white transition-colors">
                  {category}
                </Link>
              </li>
              <li className="text-white/50">/</li>
              <li className="text-white">{productName}</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <AnimatedSection animation="fade-up">
              <p className="text-accent font-display text-lg mb-4">{heroSubtitle}</p>
              <h1 className="heading-xl text-white mb-6">{heroTitle}</h1>
              <p className="body-lg text-white/90 mb-8 max-w-2xl">
                {heroDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-cream">
                  <Link to="/get-quote">Get Your Free Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <a href="tel:+16146120050">
                    <Phone className="w-5 h-5 mr-2" />
                    (614) 612-0050
                  </a>
                </Button>
              </div>
            </AnimatedSection>

            {/* Stats Bar - NEW */}
            {stats && stats.length > 0 && (
              <StatsBar stats={stats} variant="dark" />
            )}
          </div>
        </div>
      </section>

      {/* Interactive Tool Section - NEW */}
      {interactiveElement && (
        <section className="section-padding bg-secondary/50">
          <div className="container-wide">
            {interactiveTitle && (
              <AnimatedSection animation="fade-up" className="text-center mb-8">
                <h2 className="heading-md text-foreground mb-3">{interactiveTitle}</h2>
                {interactiveSubtitle && (
                  <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                    {interactiveSubtitle}
                  </p>
                )}
              </AnimatedSection>
            )}

            <AnimatedSection animation="fade-up" delay={100}>
              <div className={`
                max-w-3xl mx-auto rounded-2xl p-6 sm:p-8
                bg-card border border-border shadow-lg
                ${categoryTheme === "personal" 
                  ? "ring-1 ring-primary/10" 
                  : "ring-1 ring-charcoal/10"
                }
              `}>
                {interactiveElement}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* What Does It Cover Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="heading-md text-foreground mb-4">{coverageTitle}</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Here's what a comprehensive {productName.toLowerCase()} policy typically includes.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageItems.map((item, index) => (
              <AnimatedSection 
                key={index} 
                animation="fade-up" 
                delay={index * 100}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className={`
                    flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                    ${categoryTheme === "personal" ? "bg-secondary" : "bg-charcoal/10"}
                  `}>
                    <CheckCircle className={`w-5 h-5 ${categoryTheme === "personal" ? "text-primary" : "text-charcoal"}`} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground body-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Callout - NEW */}
      {testimonial && (
        <TestimonialCallout testimonial={testimonial} />
      )}

      {/* Why Choose Scioto Section */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="heading-md text-foreground mb-4">
              Why Choose Scioto for {productName}?
            </h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Here's why Ohio families and businesses trust us with their coverage.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection 
                  key={index} 
                  animation="fade-up" 
                  delay={index * 100}
                  className="text-center"
                >
                  <div className={`
                    w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center
                    ${categoryTheme === "personal" ? "bg-secondary" : "bg-charcoal/10"}
                  `}>
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground body-base">
                    {item.description}
                  </p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ProductFAQ faqs={faqs} productName={productName} />

      {/* Related Products Section */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-10">
            <h2 className="heading-sm text-foreground mb-4">
              You Might Also Need
            </h2>
            <p className="body-base text-muted-foreground">
              Explore related coverage options to build comprehensive protection.
            </p>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-4">
            {relatedProducts.map((product, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                <Button asChild variant="outline" className="group">
                  <Link to={`/${product.category}/${product.slug}`}>
                    {product.name}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={`section-padding ${categoryTheme === "personal" ? "bg-primary" : "bg-charcoal"}`}>
        <div className="container-wide text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="heading-md text-white mb-4">
              Ready to Protect What Matters?
            </h2>
            <p className="body-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free {productName.toLowerCase()} quote in minutes. We'll walk you through 
              your options and help you find the right coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-cream">
                <Link to="/get-quote">Get My Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <a href="tel:+16146120050">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us: (614) 612-0050
                </a>
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-6">
              We're happy to just talk. See if we're a good fit.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ProductDetailTemplate;
