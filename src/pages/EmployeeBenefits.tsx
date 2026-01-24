import { Link } from "react-router-dom";
import { Phone, ArrowRight, CheckCircle, TrendingUp, Calculator, FileSearch, Handshake, HeadphonesIcon, ClipboardCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import TestimonialCard from "@/components/TestimonialCard";
import { employeeBenefitsProducts } from "@/data/products";
import { useState, useEffect, useRef } from "react";

import modernOfficeTeam from "@/assets/modern-office-team.jpg";
import hrMeeting from "@/assets/hr-meeting.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";

const heroStats = [
  { value: 78, suffix: "%", label: "of employees consider benefits in job decisions" },
  { value: 50, suffix: "%", label: "lower turnover with strong benefits" },
  { value: 3, suffix: "x", label: "ROI on benefit investments" },
];

const processSteps = [
  { step: 1, title: "Discovery", description: "We learn about your business, employees, and goals.", icon: FileSearch, image: hrMeeting },
  { step: 2, title: "Market Analysis", description: "We shop multiple carriers to find the best coverage.", icon: ClipboardCheck, image: teamMeeting },
  { step: 3, title: "Implementation", description: "We handle the paperwork and train your team.", icon: Handshake, image: modernOfficeTeam },
  { step: 4, title: "Ongoing Support", description: "Year-round support for questions and annual reviews.", icon: HeadphonesIcon, image: hrMeeting },
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
          const duration = 2000; // 2 seconds
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
  const currentTurnover = Math.round(calc.employees * (calc.turnoverRate / 100));
  const improvedTurnover = Math.round(currentTurnover * 0.75);
  const annualSavings = (currentTurnover - improvedTurnover) * (calc.avgSalary * 0.5);

  return (
    <div className="min-h-screen bg-background">
      {/* Data-Forward Hero */}
      <section className="relative min-h-[90vh] lg:min-h-screen">
        <div className="grid lg:grid-cols-2 min-h-[90vh] lg:min-h-screen">
          <div className="relative z-10 flex flex-col justify-center px-6 py-16 lg:px-12 xl:px-20 bg-card">
            <AnimatedSection animation="fade-up" className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"><TrendingUp className="h-4 w-4" />Strategic Benefits Partner</div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6 tracking-tight">Employee Benefits<br /><span className="text-primary">That Work</span></h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">Attract top talent, reduce turnover, and build a healthier workforce with benefits packages designed for real business impact.</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="text-base"><Link to="/get-quote">Get Custom Quote<ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
                <Button asChild variant="outline" size="lg" className="text-base"><a href="tel:6146120050"><Phone className="mr-2 h-5 w-5" />(614) 612-0050</a></Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>Free consultation</span></div>
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>Multiple carriers</span></div>
              </div>
            </AnimatedSection>
          </div>
          <div className="relative bg-primary flex items-center justify-center px-6 py-16 lg:px-12">
            <AnimatedSection animation="fade-up" className="relative z-10 w-full max-w-md">
              <div className="space-y-6">
                {heroStats.map((stat, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                    <div className="text-5xl font-display font-bold text-white mb-2"><AnimatedCounter value={stat.value} suffix={stat.suffix} /></div>
                    <p className="text-white/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Products */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-16"><h2 className="heading-lg text-foreground mb-4">Comprehensive Benefits Solutions</h2></AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {employeeBenefitsProducts.map((product, i) => { const Icon = product.icon; return (
              <AnimatedSection key={product.name} animation="fade-up" delay={i * 75}>
                <Link to="/get-quote" className="group block bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"><Icon className="h-6 w-6 text-primary" /></div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                      {product.description && <p className="text-sm text-muted-foreground">{product.description}</p>}
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ); })}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-6"><Calculator className="h-4 w-4" />ROI Calculator</div>
              <h2 className="heading-lg text-foreground mb-4">See the Impact of Better Benefits</h2>
              <div className="space-y-6">
                <div><label className="block text-sm font-medium text-foreground mb-2">Employees</label><input type="range" min="5" max="200" value={calc.employees} onChange={(e) => setCalc(p => ({ ...p, employees: +e.target.value }))} className="w-full h-2 bg-secondary rounded-lg accent-primary" /><div className="flex justify-between text-sm text-muted-foreground mt-1"><span>5</span><span className="font-semibold text-foreground">{calc.employees}</span><span>200</span></div></div>
                <div><label className="block text-sm font-medium text-foreground mb-2">Avg Salary</label><input type="range" min="30000" max="150000" step="5000" value={calc.avgSalary} onChange={(e) => setCalc(p => ({ ...p, avgSalary: +e.target.value }))} className="w-full h-2 bg-secondary rounded-lg accent-primary" /><div className="flex justify-between text-sm text-muted-foreground mt-1"><span>$30k</span><span className="font-semibold text-foreground">${(calc.avgSalary / 1000).toFixed(0)}k</span><span>$150k</span></div></div>
                <div><label className="block text-sm font-medium text-foreground mb-2">Turnover Rate</label><input type="range" min="5" max="50" value={calc.turnoverRate} onChange={(e) => setCalc(p => ({ ...p, turnoverRate: +e.target.value }))} className="w-full h-2 bg-secondary rounded-lg accent-primary" /><div className="flex justify-between text-sm text-muted-foreground mt-1"><span>5%</span><span className="font-semibold text-foreground">{calc.turnoverRate}%</span><span>50%</span></div></div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left">
              <div className="bg-primary rounded-2xl p-8 lg:p-10 text-primary-foreground">
                <h3 className="font-display font-semibold text-2xl mb-8">Potential Annual Savings</h3>
                <div className="bg-white/10 rounded-xl p-6 text-center mb-6"><div className="text-sm text-primary-foreground/80 mb-1">Estimated Annual ROI</div><div className="text-5xl font-display font-bold">${annualSavings.toLocaleString()}</div></div>
                <Button asChild size="lg" variant="secondary" className="w-full"><Link to="/get-quote">Get Your Custom Analysis<ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-16"><h2 className="heading-lg text-foreground mb-4">How We Work With You</h2></AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => { const Icon = step.icon; return (
              <AnimatedSection key={step.step} animation="fade-up" delay={i * 100}>
                <div className="relative bg-card rounded-xl overflow-hidden h-full border border-border">
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-lg z-10">{step.step}</div>
                  <div className="h-32 overflow-hidden"><img src={step.image} alt={step.title} className="w-full h-full object-cover" /><div className="absolute inset-0 h-32 bg-gradient-to-t from-card via-card/50 to-transparent" /></div>
                  <div className="p-6 relative -mt-8"><div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4"><Icon className="h-6 w-6 text-primary" /></div><h3 className="font-display font-semibold text-lg text-foreground mb-2">{step.title}</h3><p className="text-sm text-muted-foreground">{step.description}</p></div>
                </div>
              </AnimatedSection>
            ); })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <AnimatedSection animation="fade-up" className="text-center mb-12"><h2 className="heading-lg text-foreground mb-4">What HR Leaders Say</h2></AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">{testimonials.map((t, i) => <AnimatedSection key={i} animation="fade-up" delay={i * 100}><TestimonialCard {...t} /></AnimatedSection>)}</div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <AnimatedSection animation="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-primary-foreground text-sm font-medium mb-6"><Users className="h-4 w-4" />Schedule Your Free Consultation</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">Ready to Build a Better Benefits Package?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base"><Link to="/contact">Schedule Consultation<ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><a href="tel:6146120050"><Phone className="mr-2 h-5 w-5" />(614) 612-0050</a></Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default EmployeeBenefits;
