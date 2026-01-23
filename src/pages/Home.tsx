import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import HeroVisual from "@/components/HeroVisual";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-cream overflow-hidden">
        {/* Background subtle texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-burgundy-100/30" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-space-md lg:px-space-lg pt-24 lg:pt-32 pb-16">
          <div className="grid lg:grid-cols-[55%_45%] gap-space-xl lg:gap-space-lg items-center min-h-[calc(100vh-10rem)]">
            {/* Left Content */}
            <div className="order-2 lg:order-1 z-10">
              {/* Eyebrow */}
              <p className="font-body font-medium text-xs uppercase tracking-[0.1em] text-muted-foreground mb-space-md animate-fade-in">
                New Albany's Trusted Insurance Partner Since 1995
              </p>

              {/* Main Headline */}
              <h1 
                className="font-display font-semibold text-4xl sm:text-5xl lg:text-[56px] text-primary leading-[1.15] mb-space-md animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                Insurance That Actually Understands Your Life
              </h1>

              {/* Subheadline */}
              <p 
                className="font-body text-lg lg:text-xl text-muted-foreground leading-[1.6] max-w-[540px] mb-space-lg animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                You're not a policy number. You're a family protecting what matters, a business owner managing real risks, a person who deserves an advisor who picks up the phone.
              </p>

              {/* CTA Buttons */}
              <div 
                className="flex flex-wrap gap-space-sm mb-space-lg animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                <Link
                  to="/get-quote"
                  className="inline-flex items-center justify-center px-8 py-4 rounded bg-primary text-primary-foreground font-body font-medium text-sm transition-all duration-300 hover:bg-burgundy-800 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Get Your Free Quote
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded border-2 border-primary text-primary font-body font-medium text-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  <Phone className="w-4 h-4" />
                  Talk to an Advisor
                </Link>
              </div>

              {/* Trust Indicator */}
              <div 
                className="flex items-center gap-2 animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-body text-sm text-muted-foreground">
                  Rated 5.0 by New Albany families and businesses
                </span>
              </div>
            </div>

            {/* Right Visual */}
            <div className="order-1 lg:order-2 relative h-[300px] sm:h-[400px] lg:h-[600px]">
              <HeroVisual scrollY={scrollY} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
          aria-label="Scroll to content"
        >
          <span className="font-body text-xs uppercase tracking-wider">Explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
          </div>
        </button>
      </section>

      {/* Placeholder content section for scroll testing */}
      <section className="py-section-xl bg-white">
        <div className="max-w-7xl mx-auto px-space-md lg:px-space-lg text-center">
          <h2 className="heading-md text-foreground mb-space-md">
            Trusted Protection for Every Stage of Life
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            From your first home to your growing business, we're here with coverage that adapts to your journey.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
