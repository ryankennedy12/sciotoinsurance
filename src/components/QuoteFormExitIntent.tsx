import { useState, useEffect, useCallback } from "react";
import { X, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface QuoteFormExitIntentProps {
  formData?: {
    coverageType?: string | null;
    personalCoverageInterests?: string[];
    businessCoverageInterests?: string[];
    benefitsInterests?: string[];
    businessType?: string;
    employeeCount?: string;
  };
  hasSubmitted: boolean;
}

const QuoteFormExitIntent = ({ formData, hasSubmitted }: QuoteFormExitIntentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [wantsCall, setWantsCall] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");

  const shouldShow = useCallback(() => {
    if (hasSubmitted) return false;
    if (typeof window === "undefined") return false;
    
    const exitIntentShown = localStorage.getItem("exitIntentShown");
    const exitIntentConverted = localStorage.getItem("exitIntentConverted");
    
    return !exitIntentShown && !exitIntentConverted;
  }, [hasSubmitted]);

  const handleShow = useCallback(() => {
    if (shouldShow() && !isVisible) {
      setIsVisible(true);
    }
  }, [shouldShow, isVisible]);

  const handleClose = useCallback(() => {
    localStorage.setItem("exitIntentShown", "true");
    setIsVisible(false);
  }, []);

  // Desktop exit intent - mouse leaves at top
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        timeout = setTimeout(() => {
          handleShow();
        }, 200);
      }
    };

    const handleMouseEnter = () => {
      if (timeout) clearTimeout(timeout);
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (timeout) clearTimeout(timeout);
    };
  }, [handleShow]);

  // Mobile - beforeunload event
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (shouldShow()) {
        handleShow();
        // Can't actually prevent navigation, but we try
        e.preventDefault();
        e.returnValue = "";
      }
    };

    // Mobile back button detection via popstate
    const handlePopState = () => {
      if (shouldShow()) {
        handleShow();
        // Push state back so they stay on page
        window.history.pushState(null, "", window.location.href);
      }
    };

    // Push initial state for back button detection
    window.history.pushState(null, "", window.location.href);

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [shouldShow, handleShow]);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");

    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    setIsSubmitting(true);

    try {
      // Build additional info from current form data
      const additionalInfo = formData?.coverageType 
        ? `Exit intent capture. Coverage interest: ${formData.coverageType}. ${
            formData.personalCoverageInterests?.length 
              ? `Personal interests: ${formData.personalCoverageInterests.join(", ")}.` 
              : ""
          }${
            formData.businessCoverageInterests?.length 
              ? `Business interests: ${formData.businessCoverageInterests.join(", ")}.` 
              : ""
          }${
            formData.benefitsInterests?.length 
              ? `Benefits interests: ${formData.benefitsInterests.join(", ")}.` 
              : ""
          }${
            formData.businessType ? ` Business type: ${formData.businessType}.` : ""
          }${
            formData.employeeCount ? ` Employees: ${formData.employeeCount}.` : ""
          } Wants call: ${wantsCall ? "Yes" : "No"}`
        : `Exit intent capture. Wants call: ${wantsCall ? "Yes" : "No"}`;

      // Determine coverage type with proper typing
      type CoverageTypeValue = "personal" | "business" | "benefits" | "not_sure";
      const coverageType: CoverageTypeValue = (formData?.coverageType as CoverageTypeValue) || "not_sure";

      const { error } = await supabase.from("leads").insert([{
        email: email.trim().toLowerCase(),
        first_name: "Exit Intent",
        last_name: "Lead",
        coverage_type: coverageType,
        request_type: "quote" as const,
        preferred_contact: (wantsCall ? "phone" : "email") as "email" | "phone" | "text",
        additional_info: additionalInfo,
        notes: `Exit intent popup submission. Wants callback: ${wantsCall ? "Yes" : "No"}`,
      }]);

      if (error) throw error;

      localStorage.setItem("exitIntentConverted", "true");
      setIsSuccess(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    } catch (error) {
      console.error("Error saving exit intent lead:", error);
      setEmailError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Modal */}
      <div 
        className="relative bg-white rounded-lg border-2 border-burgundy-100 max-w-[500px] w-full p-8 shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-primary hover:text-primary/80 transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 animate-fade-in">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-display font-semibold text-xl text-primary mb-2">
              Got it!
            </h3>
            <p className="font-body text-muted-foreground">
              Check your email in the next 4 hours.
            </p>
          </div>
        ) : (
          <>
            {/* Headline */}
            <h3 className="font-display font-semibold text-2xl text-primary mb-3 pr-8">
              Wait! Don't Have Time Right Now?
            </h3>

            {/* Subheadline */}
            <p className="font-body text-lg text-foreground mb-6">
              No problem. Give us your email and we'll send you a custom quote—no phone call required unless you want one.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email input */}
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                  placeholder="your@email.com"
                  className={`w-full px-4 py-3 rounded-lg border-2 font-body text-base transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                    emailError 
                      ? "border-destructive focus:border-destructive" 
                      : "border-border focus:border-primary"
                  }`}
                />
                {emailError && (
                  <p className="mt-1 text-sm text-destructive font-body">{emailError}</p>
                )}
              </div>

              {/* Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer">
                <div className="mt-0.5">
                  <div
                    onClick={() => setWantsCall(!wantsCall)}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors cursor-pointer ${
                      wantsCall 
                        ? "border-primary bg-primary" 
                        : "border-muted-foreground/40 hover:border-primary"
                    }`}
                  >
                    {wantsCall && <Check className="w-3 h-3 text-white" />}
                  </div>
                </div>
                <span className="font-body text-foreground">
                  I'd like a quick call to discuss my options
                </span>
              </label>

              {/* Small text with checkmarks */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground font-body">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No spam, ever
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unsubscribe anytime
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Quote in your inbox within 4 hours
                </span>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Email Me My Quote"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default QuoteFormExitIntent;
