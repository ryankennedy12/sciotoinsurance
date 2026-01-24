import { AnimatedSection } from "@/components/ui/animated-section";

export interface StatItem {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: StatItem[];
  variant?: "light" | "dark";
}

const StatsBar = ({ stats, variant = "dark" }: StatsBarProps) => {
  return (
    <AnimatedSection animation="fade-up" delay={200}>
      <div className={`
        flex flex-wrap justify-center gap-6 sm:gap-10 mt-8 pt-8
        ${variant === "dark" 
          ? "border-t border-white/20" 
          : "border-t border-border"
        }
      `}>
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`
              text-2xl sm:text-3xl font-display font-bold
              ${variant === "dark" ? "text-accent" : "text-primary"}
            `}>
              {stat.value}
            </div>
            <div className={`
              text-sm
              ${variant === "dark" ? "text-white/70" : "text-muted-foreground"}
            `}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default StatsBar;
