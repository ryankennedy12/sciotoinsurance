import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  date?: string;
  helpedWith?: string;
  rating?: number;
  variant?: "light" | "dark";
}

const TestimonialCard = ({
  quote,
  name,
  location,
  date,
  helpedWith,
  rating = 5,
  variant = "light",
}: TestimonialCardProps) => {
  const isLight = variant === "light";

  return (
    <div
      className={`rounded-xl p-6 sm:p-8 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 ${
        isLight
          ? "bg-card border border-border hover:shadow-lg"
          : "bg-white/15 border border-white/10"
      }`}
    >
      {/* Star Rating */}
      <div className="flex gap-0.5 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-gold-500 text-gold-500"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote
        className={`font-display italic text-lg leading-relaxed mb-4 ${
          isLight ? "text-foreground" : "text-cream"
        }`}
      >
        "{quote}"
      </blockquote>

      {/* Attribution */}
      <div className="flex items-center gap-3">
        {/* Avatar placeholder with initials */}
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-semibold text-sm ${
            isLight
              ? "bg-primary/10 text-primary"
              : "bg-white/20 text-white"
          }`}
        >
          {name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div>
          <p
            className={`font-body font-medium text-sm ${
              isLight ? "text-foreground" : "text-white"
            }`}
          >
            {name}
          </p>
          <p
            className={`font-body text-xs ${
              isLight ? "text-muted-foreground" : "text-white/60"
            }`}
          >
            {location}
            {date && ` • ${date}`}
          </p>
        </div>
      </div>

      {/* Helped with badge */}
      {helpedWith && (
        <div
          className={`mt-4 pt-4 border-t ${
            isLight ? "border-border" : "border-white/10"
          }`}
        >
          <p
            className={`font-body text-xs ${
              isLight ? "text-muted-foreground" : "text-white/60"
            }`}
          >
            Helped with:{" "}
            <span className={isLight ? "text-primary font-medium" : "text-white/80"}>
              {helpedWith}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
