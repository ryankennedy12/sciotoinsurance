import { Star } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

export interface TestimonialData {
  quote: string;
  name: string;
  location: string;
  helpedWith: string;
}

interface TestimonialCalloutProps {
  testimonial: TestimonialData;
}

const TestimonialCallout = ({ testimonial }: TestimonialCalloutProps) => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <AnimatedSection animation="fade-up">
          <div className="max-w-4xl mx-auto text-center">
            {/* Star Rating */}
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-6 h-6 fill-accent text-accent"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-display text-xl sm:text-2xl text-foreground italic mb-6 leading-relaxed">
              "{testimonial.quote}"
            </blockquote>

            {/* Attribution */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span className="font-semibold text-foreground">
                — {testimonial.name}
              </span>
              <span className="hidden sm:block text-muted-foreground">|</span>
              <span className="text-muted-foreground">
                {testimonial.location}
              </span>
              <span className="hidden sm:block text-muted-foreground">|</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Helped with: {testimonial.helpedWith}
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialCallout;
