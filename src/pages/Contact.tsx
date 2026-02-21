import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  CheckCircle,
  Send,
  Loader2
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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

  // Pre-fill help topic from URL params (from Services page links)
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
      // Map help topic to request_type
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
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream to-burgundy-50 pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container-wide px-4 md:px-space-lg">
          <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl text-foreground mb-4">
              Let's Start a Conversation
            </h1>
            <p className="body-lg text-muted-foreground">
              Whether you have questions, need a quote, or just want to talk through your options, we're here.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Column: Contact Form */}
            <AnimatedSection animation="fade-up" delay={0}>
              <Card className="border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600" />
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
                    </form>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Right Column: Contact Info & Map */}
            <AnimatedSection animation="fade-up" delay={150} className="space-y-8">
              {/* Direct Contact */}
              <div>
                <h2 className="heading-md text-foreground mb-6">Get in Touch</h2>
                
                <div className="space-y-5">
                  {/* Phone */}
                  <a 
                    href="tel:6146120050"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-burgundy-50 flex items-center justify-center flex-shrink-0 group-hover:bg-burgundy-100 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        (614) 612-0050
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Click to call on mobile
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:info@sciotoinsurancegroup.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-burgundy-50 flex items-center justify-center flex-shrink-0 group-hover:bg-burgundy-100 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        info@sciotoinsurancegroup.com
                      </p>
                      <p className="text-sm text-muted-foreground">
                        We respond within hours
                      </p>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-burgundy-50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        102 W Main St. #491
                      </p>
                      <p className="text-muted-foreground">
                        New Albany, OH 43054
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="pt-6 border-t border-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-burgundy-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Business Hours</p>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday & Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg">
                  <strong>After hours?</strong> Leave a message or email us. Urgent claims? Most carriers have 24/7 claim lines — call us and we'll give you the number.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="pt-6 border-t border-border">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-burgundy-50 to-burgundy-100 overflow-hidden relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48911.87391555889!2d-82.8485!3d40.0812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388f0a4a91d2e5%3A0x1a7c05c6dbf48d33!2sNew%20Albany%2C%20OH!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Scioto Insurance Group Location"
                    className="absolute inset-0"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Schedule a Call Section */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-burgundy-100 flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h2 className="heading-lg text-foreground mb-4">
              Prefer to Schedule a Specific Time?
            </h2>
            <p className="body-md text-muted-foreground mb-8">
              If you want a dedicated call without playing phone tag, pick a time that works for you.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Schedule a Call
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              It's free, no strings attached.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
