import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle,
  Send,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { AnimatedSection } from "@/components/ui/animated-section";

const helpTopics = [
  { value: "quote", label: "I need a quote" },
  { value: "question", label: "I have a question about my policy" },
  { value: "change", label: "I need to make a change" },
  { value: "claim", label: "I want to report a claim" },
  { value: "certificate", label: "I need a certificate of insurance" },
  { value: "id-cards", label: "I need auto ID cards" },
  { value: "payment", label: "I need help with a payment" },
  { value: "review", label: "I want a policy review" },
  { value: "other", label: "Something else" },
];

const channels = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "(614) 612-0050",
    subtitle: "We pick up on the second ring",
    href: "tel:6146120050",
    priority: true,
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "info@sciotoinsurancegroup.com",
    subtitle: "We respond within hours",
    href: "mailto:info@sciotoinsurancegroup.com",
    priority: false,
  },
  {
    icon: MapPin,
    title: "Mailing Address",
    detail: "P.O. Box 491",
    subtitle: "New Albany, OH 43054",
    href: undefined,
    priority: false,
  },
];

const Contact = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    helpTopic: "",
    message: "",
  });

  useEffect(() => {
    const type = searchParams.get("type");
    if (type && helpTopics.some(t => t.value === type)) {
      setFormData(prev => ({ ...prev, helpTopic: type }));
    }
  }, [searchParams]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Please fill in required fields",
        description: "First name, last name, and email are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const getRequestType = (topic: string) => {
        switch (topic) {
          case "claim": return "service_claim";
          case "change": return "service_change";
          case "certificate": return "service_cert";
          case "id-cards": return "service_idcard";
          case "review": return "service_review";
          case "payment": return "service_payment";
          case "quote": return "quote";
          default: return "contact_general";
        }
      };
      
      const requestType = getRequestType(formData.helpTopic);
      const coverageType = formData.helpTopic === "quote" ? "not_sure" : "personal";
      
      const { error } = await supabase.from("leads").insert({
        first_name: formData.firstName.trim(),
        last_name: formData.lastName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,
        coverage_type: coverageType,
        additional_info: formData.message.trim() || null,
        notes: `Contact form inquiry: ${helpTopics.find(t => t.value === formData.helpTopic)?.label || "Not specified"}`,
        request_type: requestType,
      });

      if (error) throw error;

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Section 1: Minimal Hero */}
      <section className="bg-card pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container-wide px-4 md:px-space-lg">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-accent mb-4 block">
              Contact
            </span>
            <h1 className="heading-xl text-foreground mb-4">
              Let's Start a Conversation
            </h1>
            <p className="body-lg text-muted-foreground">
              Whether you have questions, need a quote, or just want to talk through your options, we're here.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Contact Form */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-wide px-4 md:px-space-lg">
          <div className="max-w-xl mx-auto">
            <AnimatedSection animation="fade-up" delay={0}>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="heading-md text-foreground mb-4">
                    Thanks for reaching out!
                  </h3>
                  <p className="body-md text-muted-foreground max-w-md mx-auto">
                    We typically respond within a few hours during business days. Talk soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="John"
                        required
                        maxLength={100}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Smith"
                        required
                        maxLength={100}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john@example.com"
                      required
                      maxLength={255}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="(614) 555-1234"
                      maxLength={20}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="helpTopic">What can we help with?</Label>
                    <Select
                      value={formData.helpTopic}
                      onValueChange={(value) => handleInputChange("helpTopic", value)}
                    >
                      <SelectTrigger id="helpTopic" className="bg-background">
                        <SelectValue placeholder="Select a topic..." />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-border z-50">
                        {helpTopics.map((topic) => (
                          <SelectItem 
                            key={topic.value} 
                            value={topic.value}
                            className="cursor-pointer"
                          >
                            {topic.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us more about what you need..."
                      rows={4}
                      maxLength={2000}
                      className="resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We'll respond within one business day. No spam, ever.
                  </p>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 3: Channel Cards */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container-wide px-4 md:px-space-lg">
          <AnimatedSection animation="fade-up" delay={100}>
            <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8 block text-center">
              Or reach us directly
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {channels.map((channel) => {
                const Wrapper = channel.href ? "a" : "div";
                const wrapperProps = channel.href
                  ? { href: channel.href, ...(channel.href.startsWith("mailto") ? { target: "_blank", rel: "noopener noreferrer" } : {}) }
                  : {};
                return (
                  <Wrapper
                    key={channel.title}
                    {...wrapperProps}
                    className={`rounded-2xl p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${
                      channel.priority
                        ? "bg-secondary border-l-4 border-primary"
                        : "bg-card border border-border"
                    }`}
                  >
                    <channel.icon className="w-6 h-6 text-primary mb-4" />
                    <h3 className="font-display font-semibold text-lg text-foreground">
                      {channel.title}
                    </h3>
                    <p className="text-primary font-medium mt-1 text-sm">
                      {channel.detail}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {channel.subtitle}
                    </p>
                  </Wrapper>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 4: Business Hours */}
      <section className="py-12 md:py-16 bg-cream border-b border-border">
        <div className="container-wide px-4 md:px-space-lg">
          <div className="max-w-xl mx-auto">
            <AnimatedSection animation="fade-up" delay={0}>
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-semibold text-lg text-foreground">Business Hours</h3>
                </div>
                <div className="space-y-1 text-muted-foreground text-sm mb-4">
                  <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
                  <p>Saturday & Sunday: Closed</p>
                </div>
                <p className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg">
                  <strong>After hours?</strong> Leave a message or email us. Urgent claims? Most carriers have 24/7 claim lines — call us and we'll give you the number.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;