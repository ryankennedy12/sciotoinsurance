import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, Shield, Send, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AnimatedSection } from "@/components/ui/animated-section";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().trim().min(1, "Message is required").max(2000),
  preferredContact: z.enum(["email", "phone", "text"]),
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjects = [
  { value: "general", label: "General Inquiry" },
  { value: "quote", label: "Quote Request" },
  { value: "policy", label: "Policy Question" },
  { value: "claims", label: "Claims Help" },
  { value: "other", label: "Other" },
];

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      preferredContact: "email",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const preferredContact = watch("preferredContact");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const subjectLabel = subjects.find((s) => s.value === data.subject)?.label || data.subject;

      const { error } = await supabase.from("leads").insert({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone || null,
        preferred_contact: data.preferredContact,
        coverage_type: "not_sure" as const,
        request_type: "contact_general" as const,
        status: "new" as const,
        is_read: false,
        reply_status: "unread",
        notes: `Contact form inquiry: ${subjectLabel}`,
        additional_info: data.message,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast.success("Message sent successfully!");
    } catch {
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary to-burgundy-800 py-space-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-space-md lg:px-space-lg text-center">
            <h1 className="heading-xl text-white mb-space-sm">Thank You!</h1>
            <p className="body-lg text-white/80 max-w-2xl mx-auto">
              We've received your message and will be in touch soon.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <AnimatedSection>
              <div className="bg-primary/5 rounded-2xl p-space-xl">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-space-md" />
                <h2 className="heading-md text-charcoal mb-space-sm">Message Received</h2>
                <p className="body-lg text-muted-foreground mb-space-lg">
                  Here's what happens next:
                </p>
                <div className="space-y-space-sm text-left max-w-md mx-auto">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">1</span>
                    <p className="font-body text-charcoal pt-1">We'll send a confirmation email within 1 hour</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">2</span>
                    <p className="font-body text-charcoal pt-1">A team member will review your message</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">3</span>
                    <p className="font-body text-charcoal pt-1">We'll respond within 1 business day</p>
                  </div>
                </div>
                <div className="mt-space-lg pt-space-md border-t border-charcoal/10">
                  <p className="font-body text-sm text-muted-foreground">
                    Need immediate help? Call us at{" "}
                    <a href="tel:6146120050" className="text-primary font-medium hover:underline">
                      (614) 612-0050
                    </a>
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary to-burgundy-800 py-space-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-space-md lg:px-space-lg text-center">
          <h1 className="heading-xl text-white mb-space-sm">Get in Touch</h1>
          <p className="body-lg text-white/80 max-w-2xl mx-auto">
            Have a question or need help? Reach out—you'll talk to a real person, not a call center.
          </p>
        </div>
      </section>

      {/* Contact Form + Sidebar */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-space-md lg:px-space-lg">
          <div className="grid lg:grid-cols-3 gap-space-xl">
            {/* Form - Left */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-space-md">
                  {/* Name Row */}
                  <div className="grid sm:grid-cols-2 gap-space-sm">
                    <div>
                      <Label htmlFor="firstName" className="font-body text-sm font-medium text-charcoal mb-1.5 block">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        {...register("firstName")}
                        className="font-body"
                        placeholder="Sarah"
                      />
                      {errors.firstName && (
                        <p className="text-destructive text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="font-body text-sm font-medium text-charcoal mb-1.5 block">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        {...register("lastName")}
                        className="font-body"
                        placeholder="Mitchell"
                      />
                      {errors.lastName && (
                        <p className="text-destructive text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="font-body text-sm font-medium text-charcoal mb-1.5 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="font-body"
                      placeholder="sarah@example.com"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="font-body text-sm font-medium text-charcoal mb-1.5 block">
                      Phone <span className="text-muted-foreground">(optional)</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      className="font-body"
                      placeholder="(614) 555-0123"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <Label className="font-body text-sm font-medium text-charcoal mb-1.5 block">
                      Subject *
                    </Label>
                    <Select onValueChange={(value) => setValue("subject", value)}>
                      <SelectTrigger className="font-body">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((subject) => (
                          <SelectItem key={subject.value} value={subject.value} className="font-body">
                            {subject.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.subject && (
                      <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="font-body text-sm font-medium text-charcoal mb-1.5 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      className="font-body min-h-[140px]"
                      placeholder="How can we help you?"
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Preferred Contact */}
                  <div>
                    <Label className="font-body text-sm font-medium text-charcoal mb-2 block">
                      Preferred Contact Method
                    </Label>
                    <RadioGroup
                      value={preferredContact}
                      onValueChange={(value) => setValue("preferredContact", value as "email" | "phone" | "text")}
                      className="flex gap-space-md"
                    >
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="email" id="contact-email" />
                        <Label htmlFor="contact-email" className="font-body text-sm cursor-pointer">Email</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="phone" id="contact-phone" />
                        <Label htmlFor="contact-phone" className="font-body text-sm cursor-pointer">Phone</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="text" id="contact-text" />
                        <Label htmlFor="contact-text" className="font-body text-sm cursor-pointer">Text</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground hover:bg-burgundy-800 font-body font-medium"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="font-body text-xs text-muted-foreground">
                    ✓ No spam, ever &nbsp; ✓ We respond within 1 business day
                  </p>
                </form>
              </AnimatedSection>
            </div>

            {/* Sidebar - Right */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.2}>
                <div className="bg-secondary rounded-2xl p-space-lg space-y-space-md sticky top-32">
                  <h3 className="heading-sm text-charcoal">Contact Information</h3>

                  <div className="space-y-space-sm">
                    <a href="tel:6146120050" className="flex items-center gap-3 group">
                      <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-5 h-5 text-primary" />
                      </span>
                      <div>
                        <p className="font-body text-sm font-medium text-charcoal group-hover:text-primary transition-colors">(614) 612-0050</p>
                        <p className="font-body text-xs text-muted-foreground">Call or text</p>
                      </div>
                    </a>

                    <a href="mailto:info@sciotoinsurancegroup.com" className="flex items-center gap-3 group">
                      <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </span>
                      <div>
                        <p className="font-body text-sm font-medium text-charcoal group-hover:text-primary transition-colors break-all">info@sciotoinsurancegroup.com</p>
                        <p className="font-body text-xs text-muted-foreground">Email us anytime</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </span>
                      <div>
                        <p className="font-body text-sm font-medium text-charcoal">102 W Main St. #491</p>
                        <p className="font-body text-xs text-muted-foreground">New Albany, OH 43054</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </span>
                      <div>
                        <p className="font-body text-sm font-medium text-charcoal">Mon–Fri 9am–5pm</p>
                        <p className="font-body text-xs text-muted-foreground">Sat by appointment</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-charcoal/10 pt-space-sm">
                    <div className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <p className="font-body text-xs text-muted-foreground">
                        We respond within 1 business day. Your information is secure and will never be shared.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
