import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import jeffNatalieTogether from "@/assets/jeff-natalie-together.jpg";
import teamJeff from "@/assets/team-jeff-pireu.jpg";
import teamNatalie from "@/assets/team-natalie-kennedy.jpg";
import teamEmily from "@/assets/team-emily-andrews.jpg";
import teamJoe from "@/assets/team-joe-amato.jpg";
import teamSarah from "@/assets/team-sarah-heindel.jpg";

const teamMembers = [
  { name: "Jeff Pireu", photo: teamJeff },
  { name: "Natalie Kennedy", photo: teamNatalie },
  { name: "Emily Andrews", photo: teamEmily },
  { name: "Joe Amato", photo: teamJoe },
  { name: "Sarah Heindel", photo: teamSarah },
];

const About = () => {
  return (
    <>
      {/* ── Section 1: Hero — Solid burgundy with skyline silhouette ── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-burgundy-800 to-burgundy-900">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 60%, hsl(345 55% 34% / 0.3), transparent 60%)' }} />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-24 pb-16">
          <AnimatedSection animation="fade-up">
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[68px] text-white leading-[1.08] mb-6 [text-shadow:_0_2px_20px_rgba(0,0,0,0.4)]">
              About Scioto Insurance Group
            </h1>
            {/* Gold divider */}
            <div className="w-16 h-0.5 bg-accent mx-auto" />
          </AnimatedSection>
        </div>
      </section>

      {/* ── Section 2: Our Story — Photo right, text left ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <div className="w-10 h-0.5 bg-primary mb-8" />
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-foreground mb-12">
              Our Story
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <div className="grid lg:grid-cols-[1fr_400px] gap-10 lg:gap-16 items-center">
              {/* Text */}
              <div className="font-body text-muted-foreground text-lg leading-[1.85]">
                <p>
                  Founded by the father-daughter team of Jeff Pireu and Natalie Kennedy, Scioto Insurance Group is built on a mission to protect what matters most to you through personalized insurance solutions. We simplify the insurance process by leveraging our specialized staff and access to a wide network of carriers to provide a seamless experience. As your protection partner, we'll help you understand your insurance and make sure you have the right coverage for your needs.
                </p>
              </div>

              {/* Photo */}
              <div className="flex justify-center lg:justify-end">
                <div className="rounded-2xl overflow-hidden border border-gold-500/30 shadow-[0_8px_40px_-12px_rgba(139,41,66,0.25)]">
                  <img
                    src={jeffNatalieTogether}
                    alt="Jeff Pireu and Natalie Kennedy"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Section 3: Meet the Team ── */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-[1100px] mx-auto px-6">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <div className="w-12 h-1 bg-primary mx-auto mb-4 rounded-full" />
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[44px] text-foreground leading-[1.1]">
              Meet the Team
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={member.name} animation="fade-up" delay={i * 80}>
                <div className="text-center">
                  <div className="rounded-2xl overflow-hidden mb-4 border border-border shadow-sm">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full aspect-[3/4] object-cover object-top"
                    />
                  </div>
                  <p className="font-display font-semibold text-foreground text-base sm:text-lg">
                    {member.name}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: CTA ── */}
      <section className="py-20 sm:py-28 bg-primary relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, hsl(345 55% 40% / 0.4), transparent 60%)' }} />

        <AnimatedSection animation="fade-up" className="relative max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Gold accent bar */}
          <div className="w-12 h-1 bg-accent mx-auto mb-6 rounded-full" />

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] mb-4 sm:mb-6">
            Interested in a Free Risk Assessment?
          </h2>

          <p className="font-body text-lg sm:text-xl text-white/80 mb-8 sm:mb-10 max-w-[600px] mx-auto leading-relaxed">
            We'll review your current coverage to identify any gaps and explore more comprehensive options that fit your needs. Get a free quote today and see if we can offer a better solution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
            <Link
              to="/get-quote"
              className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 rounded-lg bg-white text-primary font-body font-semibold text-base transition-[transform,opacity,box-shadow] duration-300 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Get Your Free Quote
            </Link>

            <a
              href="tel:6146120050"
              className="inline-flex items-center gap-2 py-3 font-body font-medium text-white/90 hover:text-white transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              Or call us: (614) 612-0050
            </a>
          </div>

          <p className="font-body text-sm text-white/50 italic">
            We won't spam you or pass your info around. Promise.
          </p>
        </AnimatedSection>
      </section>
    </>
  );
};

export default About;
