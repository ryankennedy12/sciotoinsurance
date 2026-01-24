import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Tom Mitchell",
      title: "Founder & Principal Agent",
      bio: "Tom founded Scioto Insurance Group in 1995 with a simple mission: treat every client like a neighbor. With nearly three decades of experience, he's helped thousands of Ohio families find the right coverage.",
      phone: "(614) 612-0050",
      email: "tom@sciotoinsurancegroup.com",
    },
    {
      name: "Sarah Mitchell",
      title: "Account Manager",
      bio: "Sarah joined the family business in 2008 and has become the friendly voice most clients hear when they call. She specializes in personal lines and making sure no question goes unanswered.",
      phone: "(614) 612-0051",
      email: "sarah@sciotoinsurancegroup.com",
    },
    {
      name: "Mike Reynolds",
      title: "Commercial Lines Specialist",
      bio: "Mike brings 15 years of experience in business insurance. From startups to established companies, he understands the unique risks Ohio businesses face and how to protect against them.",
      phone: "(614) 612-0052",
      email: "mike@sciotoinsurancegroup.com",
    },
    {
      name: "Lisa Chen",
      title: "Benefits Consultant",
      bio: "Lisa helps businesses of all sizes design employee benefits packages that attract and retain talent. She believes great benefits shouldn't be reserved for Fortune 500 companies.",
      phone: "(614) 612-0053",
      email: "lisa@sciotoinsurancegroup.com",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-primary overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-space-md lg:px-space-lg pt-32 pb-space-xl text-center">
          <h1 className="font-display font-semibold text-4xl lg:text-5xl text-white leading-tight mb-space-md animate-fade-in">
            Insurance Is Personal. We Never Forgot That.
          </h1>
          <p className="font-body text-lg lg:text-xl text-cream/90 max-w-[600px] mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            We're a family-owned agency that believes you deserve more than a 1-800 number.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-space-2xl bg-white">
        <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <div className="grid lg:grid-cols-2 gap-space-xl items-center">
            {/* Text Content */}
            <div>
              <div className="w-10 h-0.5 bg-primary mb-space-md" />
              <h2 className="font-display font-semibold text-3xl lg:text-4xl text-foreground mb-space-lg">
                Our Story
              </h2>
              
              <div className="space-y-space-md font-body text-muted-foreground leading-relaxed">
                <p>
                  Tom Mitchell started Scioto Insurance Group in 1995. Back then, most of his clients were neighbors. Literally. He knew their kids, their dogs, their driveways.
                </p>
                <p>
                  Twenty-nine years later, we've grown. But we're still family-owned, still independent, and small enough that when you call, you talk to someone who knows your name.
                </p>
                <p>
                  Being independent means we don't work for any one insurance company. We have access to over 30 carriers. So we can shop around and find what actually fits you, instead of pushing whatever policy pays us the most.
                </p>
                <p>
                  Insurance has changed a lot since 1995. Paper files are gone. There's an app for everything now. But when something goes wrong, people still want to talk to a human who gives a damn. That hasn't changed, and neither have we.
                </p>
              </div>
            </div>

            {/* Visual Timeline */}
            <div className="relative">
              <div className="bg-cream rounded-lg p-space-lg lg:p-space-xl">
                {/* Timeline */}
                <div className="relative pl-8 border-l-2 border-primary/20 space-y-space-lg">
                  <div className="relative">
                    <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-primary" />
                    <p className="font-display font-semibold text-2xl text-primary">1995</p>
                    <p className="font-body text-muted-foreground">Tom Mitchell founds Scioto Insurance Group in New Albany</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-primary/60" />
                    <p className="font-display font-semibold text-2xl text-primary">2003</p>
                    <p className="font-body text-muted-foreground">Expanded to serve 500+ families across Central Ohio</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-primary/60" />
                    <p className="font-display font-semibold text-2xl text-primary">2008</p>
                    <p className="font-body text-muted-foreground">Second generation joins the family business</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-primary/60" />
                    <p className="font-display font-semibold text-2xl text-primary">2015</p>
                    <p className="font-body text-muted-foreground">Launched employee benefits division</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-gold-500" />
                    <p className="font-display font-semibold text-2xl text-primary">Today</p>
                    <p className="font-body text-muted-foreground">1,200+ families and businesses protected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-space-2xl bg-cream">
        <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <div className="text-center mb-space-xl">
            <div className="w-10 h-0.5 bg-primary mx-auto mb-space-md" />
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-foreground">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-space-lg">
            {/* Value 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-space-md rounded-full bg-primary/10 flex items-center justify-center">
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
            </div>

            {/* Value 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-space-md rounded-full bg-primary/10 flex items-center justify-center">
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
                Local Roots, Real Relationships
              </h3>
              <p className="font-body text-muted-foreground">
                We coach Little League, attend the same churches, and shop at the same Kroger. Your success is our success.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-space-md rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 6v20M10 10l6-4 6 4M8 16h16M10 22l6 4 6-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-space-sm">
                Expertise Without the Ego
              </h3>
              <p className="font-body text-muted-foreground">
                Insurance can be confusing. We get that. Ask us anything and we'll give you a straight answer. No industry jargon, no talking down to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-space-2xl bg-white">
        <div className="max-w-[1200px] mx-auto px-space-md lg:px-space-lg">
          <div className="text-center mb-space-xl">
            <div className="w-10 h-0.5 bg-primary mx-auto mb-space-md" />
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-foreground">
              The People Behind Your Policy
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-cream rounded-lg p-space-lg text-center hover:shadow-lg transition-shadow duration-300"
              >
                {/* Photo Placeholder */}
                <div className="w-28 h-28 mx-auto mb-space-md rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="font-display font-semibold text-2xl text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <h3 className="font-display font-semibold text-lg text-foreground mb-space-xs">
                  {member.name}
                </h3>
                <p className="font-body text-sm text-primary font-medium mb-space-sm">
                  {member.title}
                </p>
                <p className="font-body text-sm text-muted-foreground mb-space-md leading-relaxed">
                  {member.bio}
                </p>
                
                {/* Contact */}
                <div className="flex flex-col gap-space-xs">
                  <a
                    href={`tel:${member.phone.replace(/[^0-9]/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 font-body text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Phone className="w-3 h-3" />
                    {member.phone}
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center justify-center gap-2 font-body text-xs text-muted-foreground hover:text-primary transition-colors duration-300 break-all"
                  >
                    <Mail className="w-3 h-3" />
                    {member.email.split('@')[0]}@...
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
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded bg-primary text-primary-foreground font-body font-medium text-base transition-all duration-300 hover:bg-burgundy-800 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Schedule a Call
            </Link>
            
            <a
              href="tel:6146120050"
              className="inline-flex items-center gap-2 font-body font-medium text-primary hover:underline transition-all duration-300"
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
