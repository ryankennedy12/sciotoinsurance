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

const services = [
  {
    icon: FileWarning,
    title: "Report a Claim",
    description: "Something happened? We'll guide you through it and advocate with your carrier.",
    cta: "Start a Claim",
    link: "/contact?type=claim",
    external: false,
    priority: true,
  },
  {
    icon: FilePen,
    title: "Policy Change",
    description: "New car, new address, adding a driver — we'll handle it.",
    cta: "Request a Change",
    link: "/contact?type=change",
    external: false,
    priority: false,
  },
  {
    icon: Award,
    title: "Get a Certificate",
    description: "Proof of insurance for a landlord, lender, or contractor.",
    cta: "Request Certificate",
    link: "/contact?type=certificate",
    external: false,
    priority: false,
  },
  {
    icon: CreditCard,
    title: "Auto ID Cards",
    description: "Lost your cards? We'll email new ones within hours.",
    cta: "Request ID Cards",
    link: "/contact?type=id-cards",
    external: false,
    priority: false,
  },
  {
    icon: DollarSign,
    title: "Pay Your Bill",
    description: "Access your carrier's payment portal to pay your premium.",
    cta: "Go to Payment Portal",
    link: "/contact?type=payment",
    external: false,
    priority: false,
  },
  {
    icon: FileSearch,
    title: "Policy Review",
    description: "Make sure your coverage still matches your life.",
    cta: "Schedule a Review",
    link: "/contact?type=review",
    external: false,
    priority: false,
  },
];

const responseTimes = [
  { label: "Claims", time: "1", unit: "hour" },
  { label: "Policy Changes", time: "Same", unit: "day" },
  { label: "Certificates", time: "2", unit: "hours" },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Section 1: Minimal Greeting Hero */}
      <section className="bg-card pt-28 pb-10 md:pt-32 md:pb-12">
        <div className="container-wide px-4 md:px-space-lg">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block text-xs font-body font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              Client Services
            </span>
            <h1 className="heading-lg text-foreground mb-3">
              How Can We Help Today?
            </h1>
            <p className="body-base text-muted-foreground mb-8">
              Quick access to everything you need. No hold music, no runaround.
            </p>
            <a
              href="tel:6146120050"
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-5 py-2.5 font-semibold text-sm hover:bg-primary/15 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Need help now? (614) 612-0050
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: Bento Grid — Action Tiles */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isPriority = service.priority;

              return (
                <div
                  key={index}
                  className={`
                    group relative rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                    ${isPriority
                      ? "md:col-span-2 bg-secondary border-l-4 border-primary"
                      : "bg-card"
                    }
                  `}
                >
                  <div className={`
                    inline-flex items-center justify-center rounded-xl mb-5
                    w-12 h-12
                    ${isPriority ? "bg-primary/10" : "bg-secondary"}
                  `}>
                    <Icon className={`w-6 h-6 ${isPriority ? "text-primary" : "text-primary"}`} />
                  </div>

                  <h3 className="font-display font-semibold text-foreground text-xl mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5 max-w-md">
                    {service.description}
                  </p>

                  {service.external ? (
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      {service.cta}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                    >
                      {service.cta}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Response Times Strip */}
      <section className="py-10 md:py-14 bg-cream">
        <div className="container-wide px-4 md:px-space-lg">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {responseTimes.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-center md:text-left">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <div>
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-3xl font-bold text-primary leading-none">
                      {item.time}
                    </span>
                    <span className="text-sm text-muted-foreground">{item.unit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Contact Fallback */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container-wide px-4 md:px-space-lg">
          <div className="max-w-md mx-auto text-center">
            <h2 className="heading-md text-foreground mb-8">
              Can't Find What You Need?
            </h2>

            <div className="rounded-2xl border border-border bg-card p-8 space-y-5 text-left">
              <a
                href="tel:6146120050"
                className="flex items-center gap-3 group"
              >
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-2xl font-display font-bold text-primary group-hover:text-primary/80 transition-colors">
                  (614) 612-0050
                </span>
              </a>

              <a
                href="mailto:info@sciotoinsurancegroup.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 shrink-0" />
                <span className="text-sm">info@sciotoinsurancegroup.com</span>
              </a>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 shrink-0" />
                <span className="text-sm">Mon–Fri 9am–5pm · Messages checked every 2 hours</span>
              </div>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Not a client yet?{" "}
              <Link to="/get-quote" className="text-primary font-semibold hover:underline">
                Get a free quote →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
