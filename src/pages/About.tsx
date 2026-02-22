import { Link } from "react-router-dom";
import { Phone, ArrowRight, ShieldCheck, Users, MessageSquare, Mail, Award, MapPin, Calendar } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import TeamPhotoPlaceholder from "@/components/TeamPhotoPlaceholder";
import ohioNeighborhood from "@/assets/ohio-neighborhood.jpg";

const About = () => {
  const milestones = [
    {
      year: "1994",
      headline: "A Career Begins",
      description: "Jeff starts his career at Nationwide, learning the industry from the ground up — underwriting, claims, complex risk analysis.",
    },
    {
      year: "2010",
      headline: "Senior Agent, Bigger Questions",
      description: "Promoted to senior agent managing commercial accounts. But Jeff starts noticing how the system fails families who need it most.",
    },
    {
      year: "2020",
      headline: "The Breaking Point",
      description: "After 26 years, Jeff sees too many clients locked into one-size-fits-all policies. He starts planning something different.",
    },
    {
      year: "2023",
      headline: "Scioto Insurance Group Is Born",
      description: "Jeff launches an independent agency in New Albany. His daughter Natalie joins as Account Manager. Two people, 30+ carriers, zero call centers.",
    },
    {
      year: "Today",
      headline: "Small on Purpose",
      description: "A two-person team serving Ohio families and businesses nationwide. Every client gets Jeff or Natalie — not a phone tree.",
    },
  ];

  return (
    <>
      {/* ── Section 1: Immersive Hero ── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src={ohioNeighborhood}
          alt="Ohio neighborhood street"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Burgundy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-800/50 via-burgundy-800/60 to-burgundy-900/85" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-24">
          <AnimatedSection animation="fade-up">
            <p className="font-body text-sm font-semibold tracking-[0.2em] text-white/60 uppercase mb-6">
              Est. 2023 · New Albany, Ohio
            </p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[68px] text-white leading-[1.08] mb-6 [text-shadow:_0_2px_20px_rgba(0,0,0,0.4)]">
              29 Years of Knowing What Matters
            </h1>
            <p className="font-body text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl mx-auto mb-8 [text-shadow:_0_1px_8px_rgba(0,0,0,0.3)]">
              Jeff built a career at Nationwide. Then he built something better.
            </p>
            {/* Gold divider */}
            <div className="w-16 h-0.5 bg-accent mx-auto" />
          </AnimatedSection>
        </div>
      </section>

      {/* ── Section 2: The Origin Story ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-[720px] mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <div className="w-10 h-0.5 bg-primary mx-auto mb-8" />
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-foreground text-center mb-12">
              Our Story
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <div className="font-body text-muted-foreground text-lg leading-[1.85] space-y-6">
              <p>
                After 29 years working at Nationwide, Jeff Pireu knew insurance inside and out. He also knew what frustrated people about it: the one-size-fits-all policies, the 1-800 numbers, the feeling that you're just a policy number.
              </p>
              <p>
                In 2023, he decided to do something about it. He started Scioto Insurance Group with a simple idea: be independent, so he could actually shop for the best coverage instead of pushing one company's products.
              </p>

              {/* Pull quote */}
              <blockquote className="relative py-8 my-10 border-y border-border">
                <p className="font-display italic text-2xl sm:text-3xl text-primary leading-snug text-center">
                  "I spent 29 years learning what works. Then I went and did it myself."
                </p>
              </blockquote>

              <p>
                His daughter Natalie joined him to handle the day-to-day operations. When you call, you get one of them. Not a call center. Not a phone tree. Just two people who know your name and your policy.
              </p>
              <p>
                We're new as an agency, but not new to insurance. Jeff's seen just about everything in three decades. And we're building something we're proud of: an agency that works for you, not the insurance companies.
              </p>
            </div>
          </AnimatedSection>

          {/* Gold divider + Stats */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-14 mb-10" />
            <div className="flex justify-center gap-12 sm:gap-16">
              {[
                { value: "29", label: "Years Experience" },
                { value: "30+", label: "Carriers" },
                { value: "2", label: "Person Team" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl sm:text-4xl font-display font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Section 3: Meet Jeff and Natalie ── */}

      {/* Jeff's Profile */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-[1100px] mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">
              {/* Photo */}
              <div className="flex justify-center lg:justify-start">
                <TeamPhotoPlaceholder name="Jeff Pireu" className="[&>div]:w-[260px] [&>div]:h-[310px]" />
              </div>

              {/* Content */}
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-foreground">Jeff Pireu</h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-body font-semibold">
                    <Award className="w-3.5 h-3.5" />
                    Principal Agent & Founder
                  </span>
                </div>

                <p className="font-body text-sm text-accent font-semibold uppercase tracking-wider mb-5">
                  Specialty: High-value homes, umbrella policies, complex coverage needs
                </p>

                <blockquote className="font-display italic text-xl text-primary leading-snug mb-6 pl-4 border-l-2 border-accent">
                  "I started this agency because I was tired of watching good people get bad advice."
                </blockquote>

                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  Jeff spent 29 years at Nationwide learning what works (and what doesn't) in insurance. He started Scioto Insurance Group in 2023 because he wanted to do things differently. As an independent agent, he can shop 30+ carriers to find the right fit for each client, not just push whatever one company offers.
                </p>

                {/* Credential chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {["29 Years at Nationwide", "Licensed in OH", "Independent Agent", "Commercial & Personal Lines"].map((cred) => (
                    <span key={cred} className="inline-block px-3 py-1.5 rounded-full bg-secondary text-foreground text-xs font-body font-medium border border-border">
                      {cred}
                    </span>
                  ))}
                </div>

                {/* Contact */}
                <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
                  <a href="tel:6146120050" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" /> (614) 612-0050
                  </a>
                  <a href="mailto:info@sciotoinsurancegroup.com" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" /> info@sciotoinsurancegroup.com
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Natalie's Profile (reversed layout) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <div className="grid lg:grid-cols-[1fr_280px] gap-10 lg:gap-16 items-start">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-foreground">Natalie Kennedy</h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-body font-semibold">
                    <Award className="w-3.5 h-3.5" />
                    Account Manager
                  </span>
                </div>

                <p className="font-body text-sm text-accent font-semibold uppercase tracking-wider mb-5">
                  Specialty: Policy changes, renewals, certificates of insurance
                </p>

                <blockquote className="font-display italic text-xl text-primary leading-snug mb-6 pl-4 border-l-2 border-accent">
                  "Insurance shouldn't be confusing. If you don't understand something, that's on us — not you."
                </blockquote>

                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  Natalie handles the day-to-day: policy questions, changes, renewals, and making sure nothing falls through the cracks. When you call, you'll probably talk to her. She believes insurance shouldn't be confusing, and she'll explain things in plain English.
                </p>

                {/* Credential chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Policy Management", "Licensed in OH", "Client Advocate", "Renewals & Certificates"].map((cred) => (
                    <span key={cred} className="inline-block px-3 py-1.5 rounded-full bg-secondary text-foreground text-xs font-body font-medium border border-border">
                      {cred}
                    </span>
                  ))}
                </div>

                {/* Contact */}
                <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
                  <a href="tel:6146120050" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" /> (614) 612-0050
                  </a>
                  <a href="mailto:info@sciotoinsurancegroup.com" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" /> info@sciotoinsurancegroup.com
                  </a>
                </div>
              </div>

              {/* Photo */}
              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                <TeamPhotoPlaceholder name="Natalie Kennedy" className="[&>div]:w-[260px] [&>div]:h-[310px]" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Section 4: Timeline ── */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-burgundy-800 to-burgundy-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, hsl(345 55% 34% / 0.15), transparent 55%)' }} />

        <div className="relative max-w-[900px] mx-auto px-6">
          <AnimatedSection animation="fade-up" className="text-center mb-14">
            <div className="w-12 h-1 bg-gold-500 mx-auto mb-4 rounded-full" />
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[44px] text-white leading-[1.1]">
              The Journey
            </h2>
          </AnimatedSection>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gold-500/60 -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <AnimatedSection key={i} animation="fade-up" delay={i * 80}>
                  <div className={`relative flex items-start gap-6 lg:gap-0 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Node */}
                    <div className="absolute left-6 lg:left-1/2 w-5 h-5 rounded-full bg-gold-500 border-[3px] border-burgundy-800 -translate-x-1/2 mt-1 z-10" />

                    {/* Spacer for mobile */}
                    <div className="w-12 shrink-0 lg:hidden" />

                    {/* Card */}
                    <div className={`flex-1 lg:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'}`}>
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/20 text-gold-500 border border-gold-500/30 text-xs font-body font-bold mb-3">
                          <Calendar className="w-3.5 h-3.5" />
                          {m.year}
                        </span>
                        <h3 className="font-display font-semibold text-lg text-white mb-2">{m.headline}</h3>
                        <p className="font-body text-sm text-white/70 leading-relaxed">{m.description}</p>
                      </div>
                    </div>

                    {/* Opposite spacer for desktop */}
                    <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Values ── */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-[900px] mx-auto px-6">
          <AnimatedSection animation="fade-up" className="text-center mb-14">
            <div className="w-12 h-1 bg-primary mx-auto mb-4 rounded-full" />
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[44px] text-foreground leading-[1.1] mb-4">
              What We Stand For
            </h2>
            <p className="font-body text-muted-foreground text-lg">
              Four principles that guide every recommendation we make.
            </p>
          </AnimatedSection>

          <div className="divide-y divide-border">
            {[
              {
                icon: ShieldCheck,
                title: "Independence Over Commission",
                body: "We represent you, not insurance companies. Our advice is based on what's best for your family or business, period.",
              },
              {
                icon: Users,
                title: "Small on Purpose",
                body: "We're a two-person team because that's how we want it. It means we actually know our clients, not just their policy numbers.",
              },
              {
                icon: MessageSquare,
                title: "Straight Talk",
                body: "Insurance can be confusing. We get that. Ask us anything and we'll give you a straight answer. No jargon, no runaround.",
              },
              {
                icon: MapPin,
                title: "Rooted in Ohio",
                body: "We live here, work here, and raise our families here. We understand the risks Ohio homeowners and businesses face because we face them too.",
              },
            ].map((v, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 80}>
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 py-8 sm:py-10">
                  {/* Number + Icon */}
                  <div className="flex items-center gap-4 sm:gap-6 shrink-0">
                    <span className="font-display text-4xl sm:text-5xl font-bold text-gold-500/40 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-burgundy-100 to-primary/10 flex items-center justify-center border border-primary/20">
                      <v.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="pt-1">
                    <h3 className="font-display font-semibold text-xl text-foreground mb-2">{v.title}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">{v.body}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: CTA ── */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-burgundy-700 to-burgundy-800 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 30% 50%, hsl(345 55% 34% / 0.15), transparent 60%)' }} />

        <div className="relative max-w-[700px] mx-auto px-6 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[44px] text-white leading-[1.1] mb-6">
              Want to Know If We're the Right Fit?
            </h2>
            <p className="font-body text-lg text-white/80 mb-10 leading-relaxed">
              We're happy to just talk. No sales pitch. If we're not the right agency for you, we'll say so.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg bg-white text-primary font-body font-semibold text-base transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
              >
                Schedule a Call
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:6146120050"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg border-2 border-white/60 text-white font-body font-semibold text-base transition-[transform,box-shadow,background-color,color,border-color] duration-300 hover:bg-white hover:text-primary hover:border-white active:scale-[0.98]"
              >
                <Phone className="w-5 h-5" />
                (614) 612-0050
              </a>
            </div>

            <p className="font-body text-sm text-white/50">
              Est. 2023 in New Albany, Ohio
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default About;
