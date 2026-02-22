import { Link } from "react-router-dom";
import { Phone, ArrowRight, ShieldCheck, Users, MessageSquare, Mail, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import TeamPhotoPlaceholder from "@/components/TeamPhotoPlaceholder";
import ohioNeighborhood from "@/assets/ohio-neighborhood.jpg";
import officeInterior from "@/assets/office-interior.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Jeff Pireu",
      title: "Principal Agent & Founder",
      bio: "Jeff spent 29 years at Nationwide learning what works (and what doesn't) in insurance. He started Scioto Insurance Group in 2023 because he wanted to do things differently. As an independent agent, he can shop 30+ carriers to find the right fit for each client, not just push whatever one company offers.",
      phone: "(614) 612-0050",
      email: "info@sciotoinsurancegroup.com",
      specialty: "High-value homes, umbrella policies, complex coverage needs",
    },
    {
      name: "Natalie Kennedy",
      title: "Account Manager",
      bio: "Natalie handles the day-to-day: policy questions, changes, renewals, and making sure nothing falls through the cracks. When you call, you'll probably talk to her. She believes insurance shouldn't be confusing, and she'll explain things in plain English.",
      phone: "(614) 612-0050",
      email: "info@sciotoinsurancegroup.com",
      specialty: "Policy changes, renewals, certificates of insurance",
    },
  ];

  return (
    <>
      {/* Hero Section - Split Layout matching Homepage */}
      <section className="relative bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative lg:grid lg:grid-cols-2 lg:min-h-[85vh]">

            {/* Image Panel - desktop only */}
            <div className="hidden lg:flex lg:order-2 items-center justify-center py-24 px-10">
              <div className="relative w-full rounded-2xl overflow-hidden border border-gold-500/30 shadow-[0_8px_40px_-12px_rgba(139,41,66,0.25)]">
                <img
                  src={ohioNeighborhood}
                  alt="Beautiful Ohio neighborhood in New Albany"
                  className="w-full h-auto rounded-2xl object-cover object-center"
                />
              </div>
            </div>

            {/* Text Panel */}
            <div className="relative flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 sm:px-10 lg:px-16 pt-36 lg:pt-40 pb-16 lg:pb-20 min-h-[85svh] lg:min-h-0 lg:order-1">
              {/* Mobile/Tablet background image + overlay */}
              <div className="absolute inset-0 lg:hidden">
                <img
                  src={ohioNeighborhood}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover object-[30%_center]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/85 via-burgundy-900/55 to-burgundy-800/30" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center lg:items-start justify-center w-full flex-1">
                <p className="font-body text-sm font-semibold tracking-widest text-white/70 lg:text-accent uppercase mb-4">
                  Est. 2023 · New Albany, Ohio
                </p>

                <h1 className="font-display font-bold lg:font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white lg:text-foreground leading-[1.1] mb-6 [text-shadow:_0_2px_12px_rgba(0,0,0,0.5),_0_1px_3px_rgba(0,0,0,0.4)] lg:[text-shadow:none]">
                  A Father-Daughter Team That Picks Up the Phone
                </h1>

                <p className="font-body text-lg sm:text-xl lg:text-2xl text-white/85 lg:text-muted-foreground leading-relaxed max-w-2xl mb-8 [text-shadow:_0_1px_8px_rgba(0,0,0,0.4),_0_1px_2px_rgba(0,0,0,0.3)] lg:[text-shadow:none]">
                  29 years of industry experience. A new agency built on doing things the right way.
                </p>

                {/* Dual CTAs */}
                <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                  <Link
                    to="/get-quote"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-base transition-[transform,box-shadow,background-color] duration-300 hover:bg-burgundy-800 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
                  >
                    Get Your Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="tel:6146120050"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-white text-white lg:bg-card lg:text-primary lg:border-primary font-body font-semibold text-base transition-[transform,box-shadow,background-color,color] duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary active:scale-[0.98]"
                  >
                    <Phone className="w-5 h-5" />
                    Talk to a Real Person
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-space-2xl bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-space-md lg:px-space-lg">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-space-xl items-start">
            {/* Text Content */}
            <AnimatedSection animation="fade-up">
              <div className="w-10 h-0.5 bg-primary mb-space-md" />
              <h2 className="font-display font-semibold text-3xl lg:text-4xl text-foreground mb-space-lg">
                Our Story
              </h2>

              <div className="space-y-space-md font-body text-muted-foreground leading-relaxed">
                <p>
                  After 29 years working at Nationwide, Jeff Pireu knew insurance inside and out. He also knew what frustrated people about it: the one-size-fits-all policies, the 1-800 numbers, the feeling that you're just a policy number.
                </p>
                <p>
                  In 2023, he decided to do something about it. He started Scioto Insurance Group with a simple idea: be independent, so he could actually shop for the best coverage instead of pushing one company's products.
                </p>
                <p>
                  His daughter Natalie joined him to handle the day-to-day operations. When you call, you get one of them. Not a call center. Not a phone tree. Just two people who know your name and your policy.
                </p>
                <p>
                  We're new as an agency, but not new to insurance. Jeff's seen just about everything in three decades. And we're building something we're proud of: an agency that works for you, not the insurance companies.
                </p>
              </div>

              {/* Stats Bar */}
              <div className="flex flex-wrap gap-8 mt-8 pt-8 border-t border-border">
                {[
                  { value: "29", label: "Years Experience" },
                  { value: "30+", label: "Carriers" },
                  { value: "2", label: "Person Team" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl sm:text-3xl font-display font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Image */}
            <AnimatedSection animation="fade-up" delay={150}>
              <div className="relative w-full rounded-2xl overflow-hidden border border-gold-500/30 shadow-[0_8px_40px_-12px_rgba(139,41,66,0.15)]">
                <img
                  src={officeInterior}
                  alt="Scioto Insurance Group office"
                  className="w-full h-[350px] lg:h-[450px] object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section - matching homepage card style */}
      <section className="relative py-16 sm:py-space-3xl bg-secondary overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, hsl(345 55% 34% / 0.04), transparent 60%)' }} />

        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-space-md lg:px-space-lg">
          <AnimatedSection animation="fade-up" className="text-center mb-10 sm:mb-space-xl">
            <div className="w-12 h-1 bg-primary mx-auto mb-4 sm:mb-space-md rounded-full" />
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-[52px] text-foreground leading-[1.1]">
              What We Stand For
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-space-md">
            {/* Card 1 */}
            <AnimatedSection animation="fade-up" delay={0} className="relative bg-card rounded-lg border-t-[3px] border-t-primary/60 p-7 sm:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-[transform,box-shadow] duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-burgundy-100 to-primary/10 flex items-center justify-center border border-primary/20 mb-5">
                <ShieldCheck className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-semibold text-xl sm:text-2xl text-foreground tracking-tight mb-2 sm:mb-space-sm">
                Independence Over Commission
              </h3>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                We represent you, not insurance companies. Our advice is based on what's best for your family or business, period.
              </p>
            </AnimatedSection>

            {/* Card 2 */}
            <AnimatedSection animation="fade-up" delay={100} className="relative bg-card rounded-lg border-t-[3px] border-t-primary/60 p-7 sm:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-[transform,box-shadow] duration-300 lg:scale-[1.03] lg:shadow-md lg:z-10">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-burgundy-100 to-primary/10 flex items-center justify-center border border-primary/20 mb-5">
                <Users className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-semibold text-xl sm:text-2xl text-foreground tracking-tight mb-2 sm:mb-space-sm">
                Small on Purpose
              </h3>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                We're a two-person team because that's how we want it. It means we actually know our clients, not just their policy numbers.
              </p>
            </AnimatedSection>

            {/* Card 3 */}
            <AnimatedSection animation="fade-up" delay={200} className="relative bg-card rounded-lg border-t-[3px] border-t-primary/60 p-7 sm:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-[transform,box-shadow] duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-burgundy-100 to-primary/10 flex items-center justify-center border border-primary/20 mb-5">
                <MessageSquare className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-semibold text-xl sm:text-2xl text-foreground tracking-tight mb-2 sm:mb-space-sm">
                Straight Talk
              </h3>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                Insurance can be confusing. We get that. Ask us anything and we'll give you a straight answer. No jargon, no runaround.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-space-2xl bg-secondary">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-space-md lg:px-space-lg">
          <AnimatedSection animation="fade-up" className="text-center mb-10 sm:mb-space-xl">
            <div className="w-12 h-1 bg-primary mx-auto mb-4 sm:mb-space-md rounded-full" />
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-[52px] text-foreground leading-[1.1] mb-4">
              Meet the Team
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              This is everyone. Literally.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-space-lg max-w-[900px] mx-auto">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-card rounded-lg border-t-[3px] border-t-primary/60 p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-[transform,box-shadow] duration-300">
                  <TeamPhotoPlaceholder name={member.name} className="mb-space-md" />

                  <h3 className="font-display font-semibold text-xl text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="font-body text-sm text-primary font-medium mb-3">
                    {member.title}
                  </p>
                  <p className="font-body text-xs text-accent font-semibold uppercase tracking-wider mb-space-md">
                    {member.specialty}
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Gold divider */}
                  <div className="w-12 h-0.5 bg-gold-500/40 mx-auto mb-6" />

                  {/* Contact */}
                  <div className="flex flex-col gap-space-sm">
                    <a
                      href={`tel:${member.phone.replace(/[^0-9]/g, '')}`}
                      className="inline-flex items-center justify-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Phone className="w-4 h-4" />
                      {member.phone}
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center justify-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Mail className="w-4 h-4" />
                      {member.email}
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Burgundy Gradient */}
      <section className="relative py-16 sm:py-space-2xl bg-gradient-to-br from-burgundy-700 to-burgundy-800 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 30% 50%, hsl(345 55% 34% / 0.15), transparent 60%)' }} />

        <div className="relative max-w-[700px] mx-auto px-4 sm:px-space-md lg:px-space-lg text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[44px] text-white leading-[1.1] mb-space-md">
            Want to know if we're a good fit?
          </h2>
          <p className="font-body text-lg text-white/80 mb-8 leading-relaxed">
            We're happy to just talk. No sales pitch. If we're not the right agency for you, we'll say so.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
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
            29 Years Serving Ohio Families
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
