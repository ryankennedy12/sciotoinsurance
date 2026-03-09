import { useState } from "react";
import { CheckCircle, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { AnimatedSection } from "@/components/ui/animated-section";

const HGConnect2026 = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim()) return;

    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      first_name: form.firstName.trim(),
      last_name: form.lastName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      coverage_type: "not_sure" as const,
      request_type: "contact_general" as const,
      additional_info: "H&G Connect 2026 Event Lead",
    });
    setLoading(false);

    if (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us at info@sciotoinsurancegroup.com",
        variant: "destructive",
      });
    } else {
      setSubmitted(true);
      toast({
        title: "Thank you!",
        description: "We'll be in touch soon with your free risk assessment.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-primary pt-32 sm:pt-36 pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              Let's Get You Covered
            </h1>
            <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
            <p className="font-body text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl mx-auto">
              Fill out the form below and one of our agents will reach out to schedule your free risk assessment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-xl mx-auto px-6">
          <AnimatedSection animation="fade-up">
            {submitted ? (
              <div className="bg-card rounded-2xl border border-border p-10 text-center shadow-sm">
                <CheckCircle className="h-14 w-14 text-primary mx-auto mb-4" />
                <h2 className="font-display font-bold text-2xl text-foreground mb-2">
                  Thank You!
                </h2>
                <p className="font-body text-muted-foreground">
                  We've received your information and will be in touch soon with your free risk assessment.
                </p>
              </div>
            ) : (
              <div className="bg-card rounded-2xl border border-border p-8 sm:p-10 shadow-sm">
                <h2 className="font-display font-semibold text-2xl text-foreground mb-2 text-center">
                  Get Your Free Risk Assessment
                </h2>
                <p className="font-body text-muted-foreground text-center mb-8">
                  We'll reach out to schedule a time that works for you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Smith"
                        required
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(614) 555-1234"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    {loading ? (
                      <><Loader2 className="h-5 w-5 animate-spin mr-2" /> Sending...</>
                    ) : (
                      <><Send className="h-5 w-5 mr-2" /> Send Message</>
                    )}
                  </Button>
                </form>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Footer Contact Info */}
      <section className="pb-12 text-center">
        <p className="font-body text-sm text-muted-foreground">
          614-612-0050 &nbsp;|&nbsp; info@sciotoinsurancegroup.com
        </p>
      </section>
    </div>
  );
};

export default HGConnect2026;
