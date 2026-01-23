import { cn } from "@/lib/utils";

interface HeroVisualProps {
  scrollY: number;
}

const HeroVisual = ({ scrollY }: HeroVisualProps) => {
  // Parallax multipliers for different elements
  const parallax1 = scrollY * 0.05;
  const parallax2 = scrollY * 0.08;
  const parallax3 = scrollY * 0.03;

  return (
    <div className="relative w-full h-full">
      {/* Large background circle - burgundy-100 */}
      <div
        className="absolute w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px] rounded-full bg-burgundy-100 right-0 top-1/2 -translate-y-1/2"
        style={{
          transform: `translateY(calc(-50% + ${parallax1}px))`,
        }}
      />

      {/* Secondary circle - subtle burgundy wash */}
      <div
        className="absolute w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] rounded-full right-12 sm:right-16 lg:right-24 top-[20%]"
        style={{
          background: "linear-gradient(135deg, hsl(345 54% 35% / 0.08) 0%, hsl(345 54% 35% / 0.03) 100%)",
          transform: `translateY(${parallax2}px)`,
        }}
      />

      {/* Gold accent circle */}
      <div
        className="absolute w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full right-8 sm:right-12 lg:right-16 top-[15%]"
        style={{
          background: "linear-gradient(135deg, hsl(42 42% 59% / 0.6) 0%, hsl(42 42% 59% / 0.2) 100%)",
          transform: `translateY(${parallax3}px)`,
        }}
      />

      {/* Floating organic shape 1 */}
      <div
        className="absolute w-32 h-32 sm:w-44 sm:h-44 lg:w-56 lg:h-56 right-[30%] top-[55%]"
        style={{
          background: "linear-gradient(180deg, hsl(345 54% 35% / 0.12) 0%, transparent 100%)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          transform: `translateY(${parallax2}px) rotate(${scrollY * 0.02}deg)`,
        }}
      />

      {/* Floating organic shape 2 */}
      <div
        className="absolute w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 right-[5%] top-[65%]"
        style={{
          background: "linear-gradient(135deg, hsl(345 40% 96%) 0%, hsl(345 54% 35% / 0.05) 100%)",
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
          transform: `translateY(${-parallax1}px) rotate(${-scrollY * 0.015}deg)`,
        }}
      />

      {/* Decorative ring */}
      <div
        className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[350px] lg:h-[350px] rounded-full border-2 border-burgundy-700/10 right-[10%] top-[30%]"
        style={{
          transform: `translateY(${parallax1}px)`,
        }}
      />

      {/* Small gold dot accents */}
      <div
        className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gold-500/60 right-[45%] top-[25%]"
        style={{
          transform: `translateY(${parallax3}px)`,
        }}
      />
      <div
        className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gold-500/40 right-[20%] top-[75%]"
        style={{
          transform: `translateY(${-parallax2}px)`,
        }}
      />
      <div
        className="absolute w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gold-500/50 right-[60%] top-[60%]"
        style={{
          transform: `translateY(${parallax1}px)`,
        }}
      />

      {/* Curved line accent - representing the Scioto River */}
      <svg
        className="absolute right-[15%] top-[40%] w-[180px] h-[120px] sm:w-[240px] sm:h-[160px] lg:w-[300px] lg:h-[200px]"
        viewBox="0 0 300 200"
        fill="none"
        style={{
          transform: `translateY(${parallax2}px)`,
        }}
      >
        <path
          d="M20 180 Q 80 100, 150 120 T 280 40"
          stroke="hsl(42 42% 59% / 0.5)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M40 190 Q 100 110, 170 130 T 290 50"
          stroke="hsl(345 54% 35% / 0.15)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Subtle inner glow effect */}
      <div
        className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px] right-[5%] top-[35%] rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, hsl(345 40% 96%) 0%, transparent 70%)",
          transform: `translateY(${parallax1}px)`,
        }}
      />
    </div>
  );
};

export default HeroVisual;
