import { Link } from "react-router-dom";
import { 
  FileWarning, 
  FilePen, 
  Award, 
  CreditCard, 
  DollarSign, 
  FileSearch,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: FileWarning,
    title: "Report a Claim",
    description: "Something happened? Let us help. We'll guide you through the process and advocate with your carrier.",
    cta: "Start a Claim",
    link: "tel:6146120050",
    external: true,
  },
  {
    icon: FilePen,
    title: "Make a Policy Change",
    description: "New car? New address? Adding a driver? Let us know and we'll update your policy.",
    cta: "Request a Change",
    link: "tel:6146120050",
    external: true,
  },
  {
    icon: Award,
    title: "Request a Certificate",
    description: "Need proof of insurance for a landlord, lender, or contractor? We'll send it same-day.",
    cta: "Request Certificate",
    link: "tel:6146120050",
    external: true,
  },
  {
    icon: CreditCard,
    title: "Get Auto ID Cards",
    description: "Lost your insurance cards? We'll email new ones within hours.",
    cta: "Request ID Cards",
    link: "tel:6146120050",
    external: true,
  },
  {
    icon: DollarSign,
    title: "Pay Your Bill",
    description: "Access your carrier's payment portal to pay your premium.",
    cta: "Go to Payment Portal",
    link: "tel:6146120050",
    external: true,
  },
  {
    icon: FileSearch,
    title: "Request a Policy Review",
    description: "Been a while since we talked? Let's make sure your coverage still matches your life.",
    cta: "Schedule a Review",
    link: "tel:6146120050",
    external: true,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream to-burgundy-50 pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container-wide px-4 md:px-space-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl text-foreground mb-4">
              Current Client? We've Got You.
            </h1>
            <p className="body-lg text-muted-foreground">
              Quick access to the things you need most. And if you can't find it, just call us.
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group border-border/50 hover:border-primary/30 hover:shadow-lg transition-[border-color,box-shadow] duration-300 bg-card"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-burgundy-50 flex items-center justify-center mb-6 group-hover:bg-burgundy-100 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="heading-sm text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="body-md text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA */}
                  {service.external ? (
                    <a 
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:text-burgundy-800 transition-colors"
                    >
                      {service.cta}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link 
                      to={service.link}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:text-burgundy-800 transition-colors group/link"
                    >
                      {service.cta}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Backup Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-lg text-foreground mb-8">
              Can't Find What You Need?
            </h2>

            {/* Phone Number - Large Display */}
            <a 
              href="tel:6146120050"
              className="inline-flex items-center gap-4 mb-6 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:bg-burgundy-800 transition-colors">
                <Phone className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-3xl md:text-4xl font-display font-bold text-primary group-hover:text-burgundy-800 transition-colors">
                (614) 612-0050
              </span>
            </a>

            {/* Email */}
            <div className="mb-8">
              <a 
                href="mailto:info@sciotoinsurancegroup.com"
                className="inline-flex items-center gap-2 text-lg text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                info@sciotoinsurancegroup.com
              </a>
            </div>

            {/* Hours */}
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5" />
              <span>We're here Monday-Friday, 9am-5pm. Leave a message anytime.</span>
            </div>

            {/* Alternative CTA */}
            <div className="mt-10 pt-10 border-t border-border">
              <p className="body-md text-muted-foreground mb-6">
                Not a client yet? Let's change that.
              </p>
              <a
                href="tel:6146120050"
                className="inline-flex items-center justify-center px-8 py-3 rounded bg-primary text-primary-foreground font-body font-medium text-base transition-[transform,box-shadow,background-color] duration-300 hover:bg-burgundy-800"
              >
                Call Us: (614) 612-0050
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
