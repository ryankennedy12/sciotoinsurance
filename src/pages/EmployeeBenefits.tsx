import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Calculator, FileSearch, Handshake, HeadphonesIcon, ClipboardCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import TestimonialCard from "@/components/TestimonialCard";
import { employeeBenefitsProducts } from "@/data/products";
import { useState, useEffect, useRef } from "react";

const heroStats = [
  { value: 78, suffix: "%", label: "of employees consider benefits in job decisions" },
  { value: 50, suffix: "%", label: "lower turnover with strong benefits" },
  { value: 3, suffix: "x", label: "ROI on benefit investments" },
];

const processSteps = [
  { step: 1, title: "Discovery", description: "We learn about your business, employees, and goals.", icon: FileSearch },
  { step: 2, title: "Market Analysis", description: "We shop multiple carriers to find the best coverage.", icon: ClipboardCheck },
  { step: 3, title: "Implementation", description: "We handle the paperwork and train your team.", icon: Handshake },
  { step: 4, title: "Ongoing Support", description: "Year-round support for questions and annual reviews.", icon: HeadphonesIcon },
];

const testimonials = [
  { quote: "Our retention rate improved 40% after implementing the benefits package they recommended.", name: "Amanda R.", location: "Columbus, OH", date: "November 2024", rating: 5, helpedWith: "Group Health Benefits" },
  { quote: "They made open enrollment so easy. Our employees actually understood their options.", name: "Michael T.", location: "Dublin, OH", date: "October 2024", rating: 5, helpedWith: "Benefits Administration" },
  { quote: "The 401(k) setup was seamless. They saved us $8,000 annually in fees.", name: "Jennifer L.", location: "Westerville, OH", date: "September 2024", rating: 5, helpedWith: "Retirement Planning" }
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let current = 0;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          const stepDuration = duration / steps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, stepDuration);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const EmployeeBenefits = () => {
  const [calc, setCalc] = useState({ employees: 25, avgSalary: 50000, turnoverRate: 20 });
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const currentTurnover = Math.round(calc.employees * (calc.turnoverRate / 100));
  const improvedTurnover = Math.round(currentTurnover * 0.75);
  const annualSavings = (currentTurnover - improvedTurnover) * (calc.avgSalary * 0.5);
  const hiringSavings = (currentTurnover - improvedTurnover) * (calc.avgSalary * 0.33);

  return (
    <div className="min-h-screen bg-background">
      {/* Section 1: Centered Typographic Hero */}
      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <AnimatedSection animation="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Calculator className="h-4 w-4" />Strategic Benefits Partner
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 tracking-tight">
              Your Benefits Package Is<br />
              <span className="text-primary">Costing You Talent</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Attract top talent, reduce turnover, and build a healthier workforce with benefits packages designed for real business impact.
            </p>
          </AnimatedSection>

          {/* Stat Ticker Strip */}
          <AnimatedSection animation="fade-up" delay={150}>
            <div className="bg-secondary rounded-2xl p-6 md:p-8 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {heroStats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-1">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button asChild size="lg" className="text-base">
                <Link to="/get-quote">Get Custom Quote<ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <a href="tel:6146120050">(614) 612-0050</a>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground justify-center">
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>Free consultation</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>Multiple carriers</span></div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 2: Comparison Table Products */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">Comprehensive Benefits Solutions</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Everything your team needs, from one independent advisor.</p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="max-w-3xl mx-auto divide-y divide-border border-t border-b border-border">
              {employeeBenefitsProducts.map((product) => (
                <Link
                  key={product.name}
                  to="/get-quote"
                  className="group flex items-center justify-between py-5 px-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-8 flex-1">
                    <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors md:w-56 shrink-0">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-4 shrink-0 hidden md:block" />
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3: ROI Calculator (Elevated) */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-6">
                <Calculator className="h-4 w-4" />ROI Calculator
              </div>
              <h2 className="heading-lg text-foreground mb-4">See the Impact of Better Benefits</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Employees</label>
                  <input type="range" min="5" max="200" value={calc.employees} onChange={(e) => setCalc(p => ({ ...p, employees: +e.target.value }))} className="w-full h-2 bg-accent/30 rounded-lg accent-primary" />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1"><span>5</span><span className="font-semibold text-foreground">{calc.employees}</span><span>200</span></div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Avg Salary</label>
                  <input type="range" min="30000" max="150000" step="5000" value={calc.avgSalary} onChange={(e) => setCalc(p => ({ ...p, avgSalary: +e.target.value }))} className="w-full h-2 bg-accent/30 rounded-lg accent-primary" />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1"><span>$30k</span><span className="font-semibold text-foreground">${(calc.avgSalary / 1000).toFixed(0)}k</span><span>$150k</span></div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Turnover Rate</label>
                  <input type="range" min="5" max="50" value={calc.turnoverRate} onChange={(e) => setCalc(p => ({ ...p, turnoverRate: +e.target.value }))} className="w-full h-2 bg-accent/30 rounded-lg accent-primary" />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1"><span>5%</span><span className="font-semibold text-foreground">{calc.turnoverRate}%</span><span>50%</span></div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left">
              <div className="bg-foreground rounded-2xl p-8 lg:p-10 text-background">
                <h3 className="font-display font-semibold text-2xl mb-8">Potential Annual Impact</h3>
                <div className="space-y-4 mb-8">
                  <div className="bg-background/10 rounded-xl p-6 text-center">
                    <div className="text-sm text-background/70 mb-1">Reduced Turnover Savings</div>
                    <div className="text-4xl md:text-5xl font-display font-bold">${annualSavings.toLocaleString()}</div>
                  </div>
                  <div className="bg-background/10 rounded-xl p-6 text-center">
                    <div className="text-sm text-background/70 mb-1">Estimated Hiring Cost Savings</div>
                    <div className="text-4xl md:text-5xl font-display font-bold">${hiringSavings.toLocaleString()}</div>
                  </div>
                </div>
                <Button asChild size="lg" variant="secondary" className="w-full">
                  <Link to="/get-quote">Get Your Custom Analysis<ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 4: Horizontal Stepper Process */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-4">How We Work With You</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            {/* Desktop stepper */}
            <div className="hidden md:block max-w-4xl mx-auto">
              {/* Line + circles */}
              <div className="relative flex items-start justify-between">
                {/* Connecting line */}
                <div className="absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
                {processSteps.map((step) => {
                  const Icon = step.icon;
                  const isActive = activeStep === step.step;
                  return (
                    <div
                      key={step.step}
                      className="relative flex flex-col items-center w-1/4 cursor-pointer group"
                      onMouseEnter={() => setActiveStep(step.step)}
                      onMouseLeave={() => setActiveStep(null)}
                    >
                      <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg transition-all duration-300 ${isActive ? 'bg-primary text-primary-foreground scale-110 shadow-lg' : 'bg-secondary text-foreground border-2 border-border'}`}>
                        {step.step}
                      </div>
                      <div className="mt-4 text-center">
                        <div className="flex items-center justify-center gap-1.5 mb-1">
                          <Icon className={`h-4 w-4 transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                          <h3 className={`font-display font-semibold transition-colors ${isActive ? 'text-primary' : 'text-foreground'}`}>{step.title}</h3>
                        </div>
                        <p className={`text-sm text-muted-foreground max-w-[180px] mx-auto transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Mobile stepper (vertical) */}
            <div className="md:hidden space-y-6">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold shrink-0">{step.step}</div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <Icon className="h-4 w-4 text-primary" />
                        <h3 className="font-display font-semibold text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 5: Testimonials (unchanged) */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">What HR Leaders Say</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 100}><TestimonialCard {...t} /></AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Bottom CTA (fixed legibility) */}
      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <AnimatedSection animation="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-primary-foreground text-sm font-medium mb-6">
              <Users className="h-4 w-4" />Schedule Your Free Consultation
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">Ready to Build a Better Benefits Package?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link to="/contact">Schedule Consultation<ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="text-base">
                <a href="tel:6146120050">(614) 612-0050</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default EmployeeBenefits;
