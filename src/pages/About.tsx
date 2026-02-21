import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
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
      {/* Hero Section - Split Layout with Photography */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden">
        {/* Multi-layer gradient background for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy-900 via-primary to-burgundy-800" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-space-md lg:px-space-lg pt-32 pb-space-xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="lg:col-span-7">
              <AnimatedSection animation="fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 mb-6">
                  <span className="w-2 h-2 rounded-full bg-gold-500" />
                  <span className="font-body text-sm text-white/80">Est. 2023 • New Albany, Ohio</span>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={100}>
                <h1 className="font-display font-semibold text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.1] mb-6">
                  A Father-Daughter Team That Picks Up the Phone
                </h1>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={200}>
                <p className="font-body text-lg lg:text-xl text-cream/90 leading-relaxed max-w-[550px]">
                  29 years of industry experience. A new agency built on doing things the right way.
                </p>
              </AnimatedSection>
            </div>
            
            {/* Image - Right Side (Desktop only) */}
            <div className="hidden lg:block lg:col-span-5">
              <AnimatedSection animation="fade-up" delay={300}>
                <div className="relative">
                  {/* Main image */}
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <img 
                      src={ohioNeighborhood} 
                      alt="Beautiful Ohio neighborhood in New Albany" 
                      className="w-full h-[350px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
                  </div>
                  
                  {/* Floating accent card */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-display font-semibold text-foreground text-sm">New Albany, OH</p>
                        <p className="font-body text-xs text-muted-foreground">Serving all of Ohio</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Story Section */}
      <section className="py-space-2xl bg-white -mt-16 relative z-10">
        <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <div className="grid lg:grid-cols-2 gap-space-xl items-start">
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
            </AnimatedSection>

            {/* What We Bring - Replaces fake timeline */}
            <AnimatedSection animation="fade-up" delay={150}>
              <div className="bg-cream rounded-2xl p-8 lg:p-10 shadow-sm">
                <h3 className="font-display font-semibold text-xl text-foreground mb-space-lg">
                  What We Bring
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-display font-bold text-xl text-primary">29</span>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-lg text-foreground">Years of Experience</p>
                      <p className="font-body text-sm text-muted-foreground mt-1">Jeff's background at Nationwide means he's seen it all: claims, carriers, coverage gaps, and what actually protects people.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-display font-bold text-lg text-primary">30+</span>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-lg text-foreground">Insurance Carriers</p>
                      <p className="font-body text-sm text-muted-foreground mt-1">Being independent means we shop dozens of carriers to find what fits you, not just sell one company's products.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-display font-bold text-xl text-primary">2</span>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-lg text-foreground">People. That's the Whole Team.</p>
                      <p className="font-body text-sm text-muted-foreground mt-1">When you call, you get Jeff or Natalie. We're small on purpose. It means we actually know who you are.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-lg text-foreground">Ohio Personal, Nationwide Business</p>
                      <p className="font-body text-sm text-muted-foreground mt-1">Personal insurance throughout Ohio. Business coverage across the country. We go where you need us.</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-space-2xl bg-cream">
        <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <AnimatedSection animation="fade-up" className="text-center mb-space-xl">
            <div className="w-10 h-0.5 bg-primary mx-auto mb-space-md" />
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-foreground">
              What We Stand For
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <AnimatedSection animation="fade-up" delay={0} className="text-center">
              <div className="w-16 h-16 mx-auto mb-space-md rounded-2xl bg-white shadow-sm flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 4L4 8v8c0 7.33 5.33 12 12 14.67C22.67 28 28 23.33 28 16V8L16 4z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 16l4 4 6-8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-space-sm">
                Independence Over Commission
              </h3>
              <p className="font-body text-muted-foreground">
                We represent you, not insurance companies. Our advice is based on what's best for your family or business, period.
              </p>
            </AnimatedSection>

            {/* Value 2 */}
            <AnimatedSection animation="fade-up" delay={100} className="text-center">
              <div className="w-16 h-16 mx-auto mb-space-md rounded-2xl bg-white shadow-sm flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="16" cy="12" r="4" />
                  <path d="M8 26c0-4.42 3.58-8 8-8s8 3.58 8 8" strokeLinecap="round" />
                  <circle cx="6" cy="14" r="3" />
                  <circle cx="26" cy="14" r="3" />
                  <path d="M3 24c0-2.5 1.5-4 3-5" strokeLinecap="round" />
                  <path d="M29 24c0-2.5-1.5-4-3-5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-space-sm">
                Small on Purpose
              </h3>
              <p className="font-body text-muted-foreground">
                We're a two-person team because that's how we want it. It means we actually know our clients, not just their policy numbers.
              </p>
            </AnimatedSection>

            {/* Value 3 */}
            <AnimatedSection animation="fade-up" delay={200} className="text-center">
              <div className="w-16 h-16 mx-auto mb-space-md rounded-2xl bg-white shadow-sm flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 6v20M10 10l6-4 6 4M8 16h16M10 22l6 4 6-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-space-sm">
                Straight Talk
              </h3>
              <p className="font-body text-muted-foreground">
                Insurance can be confusing. We get that. Ask us anything and we'll give you a straight answer. No jargon, no runaround.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-space-2xl bg-white">
        <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <div className="text-center mb-space-xl">
            <div className="w-10 h-0.5 bg-primary mx-auto mb-space-md" />
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-foreground">
              Meet the Team
            </h2>
            <p className="font-body text-muted-foreground mt-space-sm">
              This is everyone. Literally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-space-xl max-w-[800px] mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-cream rounded-lg p-space-lg text-center hover:shadow-lg transition-shadow duration-300"
              >
                {/* Professional Photo Placeholder */}
                <TeamPhotoPlaceholder name={member.name} className="mb-space-md" />
                
                <h3 className="font-display font-semibold text-xl text-foreground mb-space-xs">
                  {member.name}
                </h3>
                <p className="font-body text-sm text-primary font-medium mb-space-md">
                  {member.title}
                </p>
                <p className="font-body text-muted-foreground mb-space-lg leading-relaxed">
                  {member.bio}
                </p>
                
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-space-2xl bg-cream">
        <div className="max-w-[700px] mx-auto px-space-md lg:px-space-lg text-center">
          <h2 className="font-display font-semibold text-2xl lg:text-3xl text-foreground leading-tight mb-space-md">
            Want to know if we're a good fit?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-space-lg">
            We're happy to just talk. No sales pitch. If we're not the right agency for you, we'll say so.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-10 py-4 rounded bg-primary text-primary-foreground font-body font-medium text-base transition-[transform,box-shadow,background-color] duration-300 hover:bg-burgundy-800 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Schedule a Call
            </Link>
            
            <a
              href="tel:6146120050"
              className="inline-flex items-center gap-2 font-body font-medium text-primary hover:underline transition-[color] duration-300"
            >
              <Phone className="w-4 h-4" />
              (614) 612-0050
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
