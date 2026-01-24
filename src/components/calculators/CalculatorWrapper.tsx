import { ReactNode } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";

interface CalculatorWrapperProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  categoryTheme?: "personal" | "business";
}

const CalculatorWrapper = ({ 
  title, 
  subtitle, 
  children,
  categoryTheme = "personal"
}: CalculatorWrapperProps) => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-wide">
        <AnimatedSection animation="fade-up" className="text-center mb-8">
          <h2 className="heading-md text-foreground mb-3">{title}</h2>
          {subtitle && (
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={100}>
          <div className={`
            max-w-3xl mx-auto rounded-2xl p-6 sm:p-8
            bg-card border border-border shadow-lg
            ${categoryTheme === "personal" 
              ? "ring-1 ring-primary/10" 
              : "ring-1 ring-charcoal/10"
            }
          `}>
            {children}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CalculatorWrapper;
