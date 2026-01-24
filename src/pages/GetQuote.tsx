import { useState } from "react";
import { Check, Phone, Star, Users, Clock, ShieldCheck, ChevronLeft, User, Briefcase, Heart, HelpCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import QuoteFormExitIntent from "@/components/QuoteFormExitIntent";

type CoverageType = "personal" | "business" | "benefits" | "not_sure";
type ContactMethod = "email" | "phone" | "text";

interface FormData {
  // Step 1
  coverageType: CoverageType | null;
  
  // Step 2 - Personal
  personalCoverageInterests: string[];
  hasCurrentCoverage: boolean | null;
  switchReason: string;
  
  // Step 2 - Business
  businessType: string;
  employeeCount: string;
  businessCoverageInterests: string[];
  
  // Step 2 - Benefits
  benefitsEmployeeCount: string;
  benefitsSituation: string;
  benefitsInterests: string[];
  
  // Step 2 - Not sure
  additionalInfo: string;
  
  // Step 3
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContact: ContactMethod;
  bestTime: string;
}

const initialFormData: FormData = {
  coverageType: null,
  personalCoverageInterests: [],
  hasCurrentCoverage: null,
  switchReason: "",
  businessType: "",
  employeeCount: "",
  businessCoverageInterests: [],
  benefitsEmployeeCount: "",
  benefitsSituation: "",
  benefitsInterests: [],
  additionalInfo: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  preferredContact: "email",
  bestTime: "",
};

const GetQuote = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const coverageOptions = [
    { id: "personal" as CoverageType, icon: User, label: "Personal Insurance", description: "Auto, home, life, and more" },
    { id: "business" as CoverageType, icon: Briefcase, label: "Business Insurance", description: "Liability, property, workers' comp" },
    { id: "benefits" as CoverageType, icon: Heart, label: "Employee Benefits", description: "Health, dental, retirement" },
    { id: "not_sure" as CoverageType, icon: HelpCircle, label: "I'm Not Sure", description: "Help me figure it out" },
  ];

  const personalCoverageOptions = ["Auto", "Home", "Renters", "Life", "Umbrella", "Other"];
  const businessCoverageOptions = ["General Liability", "Commercial Property", "Workers' Comp", "Professional Liability", "Commercial Auto", "Cyber Liability"];
  const benefitsCoverageOptions = ["Group Health", "Dental & Vision", "Life Insurance", "Disability", "401(k)", "HSA/FSA"];
  
  const businessTypes = [
    "Contractor / Construction",
    "Restaurant / Food Service",
    "Retail",
    "Professional Services",
    "Healthcare / Medical",
    "Manufacturing",
    "Nonprofit",
    "Real Estate",
    "Technology",
    "Other",
  ];

  const employeeCountOptions = ["Just me", "2-5", "6-10", "11-25", "26-50", "51-100", "100+"];
  const switchReasons = ["Better price", "Better coverage", "Better service", "Just exploring"];
  const benefitsSituations = ["Have benefits, shopping for better options", "No benefits yet", "New business"];
  const bestTimeOptions = ["Morning (9am-12pm)", "Afternoon (12pm-5pm)", "Evening (5pm-7pm)"];

  const handleCoverageSelect = (type: CoverageType) => {
    setFormData({ ...formData, coverageType: type });
    setCurrentStep(2);
  };

  const handleCheckboxChange = (field: keyof FormData, value: string) => {
    const currentValues = formData[field] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];
    setFormData({ ...formData, [field]: newValues });
  };

  const validateStep3 = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateStep3()) return;
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from("leads").insert({
        coverage_type: formData.coverageType!,
        request_type: "quote",
        personal_coverage_interests: formData.coverageType === "personal" ? formData.personalCoverageInterests : null,
        has_current_coverage: formData.coverageType === "personal" ? formData.hasCurrentCoverage : null,
        switch_reason: formData.coverageType === "personal" ? formData.switchReason : null,
        business_type: formData.coverageType === "business" ? formData.businessType : null,
        employee_count: formData.coverageType === "business" ? formData.employeeCount : null,
        business_coverage_interests: formData.coverageType === "business" ? formData.businessCoverageInterests : null,
        benefits_employee_count: formData.coverageType === "benefits" ? formData.benefitsEmployeeCount : null,
        benefits_situation: formData.coverageType === "benefits" ? formData.benefitsSituation : null,
        benefits_interests: formData.coverageType === "benefits" ? formData.benefitsInterests : null,
        additional_info: formData.coverageType === "not_sure" ? formData.additionalInfo : null,
        first_name: formData.firstName.trim(),
        last_name: formData.lastName.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim() || null,
        preferred_contact: formData.preferredContact,
        best_time: formData.bestTime || null,
      });

      if (error) throw error;
      
      setCurrentStep(4);
      toast.success("Quote request submitted successfully!");
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderProgressBar = () => (
    <div className="mb-space-lg">
      <div className="flex items-center justify-between mb-2">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-body font-medium text-xs sm:text-sm transition-colors duration-300 ${
                step < currentStep
                  ? "bg-primary text-white"
                  : step === currentStep
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {step < currentStep ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : step}
            </div>
            {step < 4 && (
              <div
                className={`w-8 sm:w-16 md:w-24 lg:w-32 h-1 mx-1 sm:mx-2 rounded ${
                  step < currentStep ? "bg-primary" : "bg-muted"
                }`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[10px] sm:text-xs font-body text-muted-foreground">
        <span>Coverage</span>
        <span>Details</span>
        <span>Contact</span>
        <span>Done</span>
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="animate-fade-in">
      <h2 className="font-display font-semibold text-2xl text-foreground mb-space-sm">
        What type of coverage are you looking for?
      </h2>
      <p className="font-body text-muted-foreground mb-space-lg">
        Select one to get started. Don't worry — you can always add more later.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-space-md">
        {coverageOptions.map((option) => {
          const Icon = option.icon;
          return (
            <button
              key={option.id}
              onClick={() => handleCoverageSelect(option.id)}
              className="group p-4 sm:p-space-lg rounded-lg border-2 border-border bg-card text-left hover:border-primary hover:shadow-md active:scale-[0.98] transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-space-sm group-hover:bg-primary/20 transition-colors duration-300">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-base sm:text-lg text-foreground mb-1">
                {option.label}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {option.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderStep2Personal = () => (
    <div className="space-y-space-lg animate-fade-in">
      <div>
        <label className="block font-body font-medium text-foreground mb-space-sm">
          What coverage types interest you?
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm">
          {personalCoverageOptions.map((option) => (
            <label
              key={option}
              className={`flex items-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                formData.personalCoverageInterests.includes(option)
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 hover:border-primary/50"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.personalCoverageInterests.includes(option)}
                onChange={() => handleCheckboxChange("personalCoverageInterests", option)}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                  formData.personalCoverageInterests.includes(option)
                    ? "border-primary bg-primary"
                    : "border-gray-300"
                }`}
              >
                {formData.personalCoverageInterests.includes(option) && (
                  <Check className="w-3 h-3 text-white" />
                )}
              </div>
              <span className="font-body text-sm">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block font-body font-medium text-foreground mb-space-sm">
          Do you currently have coverage?
        </label>
        <div className="flex gap-space-sm">
          {[true, false].map((value) => (
            <button
              key={value ? "yes" : "no"}
              onClick={() => setFormData({ ...formData, hasCurrentCoverage: value })}
              className={`px-6 py-3 rounded-lg border-2 font-body font-medium transition-all duration-300 ${
                formData.hasCurrentCoverage === value
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-gray-200 hover:border-primary/50"
              }`}
            >
              {value ? "Yes" : "No"}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block font-body font-medium text-foreground mb-space-sm">
          What would make you switch?
        </label>
        <select
          value={formData.switchReason}
          onChange={(e) => setFormData({ ...formData, switchReason: e.target.value })}
          className="w-full p-3 rounded-lg border-2 border-gray-200 font-body focus:border-primary focus:outline-none transition-colors duration-300"
        >
          <option value="">Select a reason</option>
          {switchReasons.map((reason) => (
            <option key={reason} value={reason}>{reason}</option>
          ))}
        </select>
      </div>
    </div>
  );

  const renderStep2Business = () => (
    <div className="space-y-space-lg animate-fade-in">
      <div>
        <label className="block font-body font-medium text-foreground mb-space-sm">
          What type of business do you have?
        </label>
        <select
          value={formData.businessType}
          onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
          className="w-full p-3 rounded-lg border-2 border-gray-200 font-body focus:border-primary focus:outline-none transition-colors duration-300"
        >
          <option value="">Select your industry</option>
          {businessTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-body font-medium text-foreground mb-space-sm">
          Number of employees?
        </label>
        <select
          value={formData.employeeCount}
          onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
          className="w-full p-3 rounded-lg border-2 border-gray-200 font-body focus:border-primary focus:outline-none transition-colors duration-300"
        >
          <option value="">Select range</option>
          {employeeCountOptions.map((count) => (
            <option key={count} value={count}>{count}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-body font-medium text-foreground mb-space-sm">
          What coverage interests you?
        </label>
        <div className="grid grid-cols-2 gap-space-sm">
          {businessCoverageOptions.map((option) => (
            <label
              key={option}
              className={`flex items-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                formData.businessCoverageInterests.includes(option)
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 hover:border-primary/50"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.businessCoverageInterests.includes(option)}
                onChange={() => handleCheckboxChange("businessCoverageInterests", option)}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                  formData.businessCoverageInterests.includes(option)
                    ? "border-primary bg-primary"
                    : "border-gray-300"
                }`}
              >
                {formData.businessCoverageInterests.includes(option) && (
                  <Check className="w-3 h-3 text-white" />
                )}
              </div>
              <span className="font-body text-sm">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep2Benefits = () => (
    <div className="space-y-space-lg animate-fade-in">
      <div>
        <label className="block font-body font-medium text-foreground mb-space-sm">
          Number of employees?
        </label>
        <select
          value={formData.benefitsEmployeeCount}
          onChange={(e) => setFormData({ ...formData, benefitsEmployeeCount: e.target.value })}
          className="w-full p-3 rounded-lg border-2 border-gray-200 font-body focus:border-primary focus:outline-none transition-colors duration-300"
        >
          <option value="">Select range</option>
          {employeeCountOptions.map((count) => (
            <option key={count} value={count}>{count}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-body font-medium text-foreground mb-space-sm">
          Current benefits situation?
        </label>
        <select
          value={formData.benefitsSituation}
          onChange={(e) => setFormData({ ...formData, benefitsSituation: e.target.value })}
          className="w-full p-3 rounded-lg border-2 border-gray-200 font-body focus:border-primary focus:outline-none transition-colors duration-300"
        >
          <option value="">Select your situation</option>
          {benefitsSituations.map((situation) => (
            <option key={situation} value={situation}>{situation}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-body font-medium text-foreground mb-space-sm">
          What benefits interest you?
        </label>
        <div className="grid grid-cols-2 gap-space-sm">
          {benefitsCoverageOptions.map((option) => (
            <label
              key={option}
              className={`flex items-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                formData.benefitsInterests.includes(option)
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 hover:border-primary/50"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.benefitsInterests.includes(option)}
                onChange={() => handleCheckboxChange("benefitsInterests", option)}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                  formData.benefitsInterests.includes(option)
                    ? "border-primary bg-primary"
                    : "border-gray-300"
                }`}
              >
                {formData.benefitsInterests.includes(option) && (
                  <Check className="w-3 h-3 text-white" />
                )}
              </div>
              <span className="font-body text-sm">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep2NotSure = () => (
    <div className="animate-fade-in">
      <label className="block font-body font-medium text-foreground mb-space-sm">
        Tell us what's on your mind
      </label>
      <p className="font-body text-sm text-muted-foreground mb-space-md">
        Describe your situation and we'll point you in the right direction.
      </p>
      <textarea
        value={formData.additionalInfo}
        onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
        rows={5}
        className="w-full p-4 rounded-lg border-2 border-gray-200 font-body focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
        placeholder="For example: I just bought a house and I'm not sure what insurance I need..."
      />
    </div>
  );

  const renderStep2 = () => {
    const content = (() => {
      switch (formData.coverageType) {
        case "personal": return renderStep2Personal();
        case "business": return renderStep2Business();
        case "benefits": return renderStep2Benefits();
        case "not_sure": return renderStep2NotSure();
        default: return null;
      }
    })();

    return (
      <div>
        <h2 className="font-display font-semibold text-2xl text-foreground mb-space-sm">
          Tell us a bit more
        </h2>
        <p className="font-body text-muted-foreground mb-space-lg">
          This helps us prepare relevant options for you.
        </p>
        {content}
      </div>
    );
  };

  const renderStep3 = () => (
    <div className="animate-fade-in">
      <h2 className="font-display font-semibold text-2xl text-foreground mb-space-sm">
        How can we reach you?
      </h2>
      <p className="font-body text-muted-foreground mb-space-lg">
        We'll get back to you within one business day — usually much sooner.
      </p>

      <div className="space-y-space-md">
        <div className="grid sm:grid-cols-2 gap-space-md">
          <div>
            <label className="block font-body font-medium text-foreground mb-2">
              First Name *
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className={`w-full p-3 rounded-lg border-2 font-body focus:outline-none transition-colors duration-300 ${
                errors.firstName ? "border-red-500" : "border-gray-200 focus:border-primary"
              }`}
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <label className="block font-body font-medium text-foreground mb-2">
              Last Name *
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className={`w-full p-3 rounded-lg border-2 font-body focus:outline-none transition-colors duration-300 ${
                errors.lastName ? "border-red-500" : "border-gray-200 focus:border-primary"
              }`}
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <label className="block font-body font-medium text-foreground mb-2">
            Email *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full p-3 rounded-lg border-2 font-body focus:outline-none transition-colors duration-300 ${
              errors.email ? "border-red-500" : "border-gray-200 focus:border-primary"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block font-body font-medium text-foreground mb-2">
            Phone <span className="text-muted-foreground font-normal">(Preferred for fastest response)</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full p-3 rounded-lg border-2 border-gray-200 font-body focus:border-primary focus:outline-none transition-colors duration-300"
            placeholder="(555) 555-5555"
          />
        </div>

        <div>
          <label className="block font-body font-medium text-foreground mb-space-sm">
            Preferred contact method
          </label>
          <div className="flex flex-wrap gap-space-sm">
            {(["email", "phone", "text"] as ContactMethod[]).map((method) => (
              <button
                key={method}
                onClick={() => setFormData({ ...formData, preferredContact: method })}
                className={`px-5 py-2 rounded-lg border-2 font-body font-medium capitalize transition-all duration-300 ${
                  formData.preferredContact === method
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-gray-200 hover:border-primary/50"
                }`}
              >
                {method}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-body font-medium text-foreground mb-2">
            Best time to reach you
          </label>
          <select
            value={formData.bestTime}
            onChange={(e) => setFormData({ ...formData, bestTime: e.target.value })}
            className="w-full p-3 rounded-lg border-2 border-gray-200 font-body focus:border-primary focus:outline-none transition-colors duration-300"
          >
            <option value="">No preference</option>
            {bestTimeOptions.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="text-center py-space-xl animate-fade-in">
      <div className="w-20 h-20 mx-auto mb-space-lg rounded-full bg-green-100 flex items-center justify-center">
        <Check className="w-10 h-10 text-green-600" />
      </div>
      <h2 className="font-display font-semibold text-3xl text-foreground mb-space-sm">
        You're All Set!
      </h2>
      <p className="font-body text-lg text-muted-foreground mb-space-lg max-w-md mx-auto">
        We'll review your info and reach out within one business day — usually much sooner. No spam, no nonsense.
      </p>
      
      <div className="bg-cream rounded-lg p-space-lg max-w-md mx-auto mb-space-lg">
        <h3 className="font-display font-semibold text-lg text-foreground mb-space-sm">
          What happens next?
        </h3>
        <ol className="font-body text-sm text-muted-foreground text-left space-y-2">
          <li className="flex gap-2">
            <span className="font-semibold text-primary">1.</span>
            We'll review your information and research your options
          </li>
          <li className="flex gap-2">
            <span className="font-semibold text-primary">2.</span>
            We'll reach out via your preferred contact method
          </li>
          <li className="flex gap-2">
            <span className="font-semibold text-primary">3.</span>
            We'll discuss your options — no pressure, just honest advice
          </li>
        </ol>
      </div>

      <a
        href="tel:6146120050"
        className="inline-flex items-center gap-2 font-body font-medium text-primary hover:underline"
      >
        <Phone className="w-4 h-4" />
        Need something urgent? Call (614) 612-0050
      </a>
    </div>
  );

  const renderTrustSidebar = () => (
    <div className="hidden lg:block">
      <div className="sticky top-32 bg-cream rounded-lg p-space-lg">
        <h3 className="font-display font-semibold text-lg text-foreground mb-space-md">
          Why Scioto?
        </h3>
        <div className="space-y-space-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
              <Star className="w-5 h-5 text-gold-500" />
            </div>
            <div>
              <p className="font-body font-medium text-foreground text-sm">4.9 Rating</p>
              <p className="font-body text-xs text-muted-foreground">on Google Reviews</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-body font-medium text-foreground text-sm">1,200+ Clients</p>
              <p className="font-body text-xs text-muted-foreground">Families & businesses</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-body font-medium text-foreground text-sm">Fast Response</p>
              <p className="font-body text-xs text-muted-foreground">Within 1 business day</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-body font-medium text-foreground text-sm">No Pressure</p>
              <p className="font-body text-xs text-muted-foreground">Honest advice only</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Check if form has been submitted (step 4)
  const hasSubmitted = currentStep === 4;

  return (
    <>
      {/* Exit Intent Popup */}
      <QuoteFormExitIntent 
        formData={{
          coverageType: formData.coverageType,
          personalCoverageInterests: formData.personalCoverageInterests,
          businessCoverageInterests: formData.businessCoverageInterests,
          benefitsInterests: formData.benefitsInterests,
          businessType: formData.businessType,
          employeeCount: formData.employeeCount,
        }}
        hasSubmitted={hasSubmitted}
      />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-4 sm:pb-space-lg bg-gradient-to-br from-cream via-white to-burgundy-100/30">
        <div className="max-w-[800px] mx-auto px-4 sm:px-space-md lg:px-space-lg text-center">
          <h1 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-2 sm:mb-space-sm">
            Let's Find You Better Coverage
          </h1>
          <p className="font-body text-base sm:text-lg text-muted-foreground">
            Takes about 3 minutes. No spam, no aggressive follow-up — just honest recommendations.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-6 sm:py-space-xl bg-background">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-space-md lg:px-space-lg">
          <div className="grid lg:grid-cols-[1fr_280px] gap-6 lg:gap-space-xl">
            {/* Main Form */}
            <div>
              {currentStep < 4 && renderProgressBar()}
              
              <div className="bg-card rounded-xl border border-border p-4 sm:p-space-lg lg:p-space-xl shadow-sm">
                {currentStep === 1 && renderStep1()}
                {currentStep === 2 && renderStep2()}
                {currentStep === 3 && renderStep3()}
                {currentStep === 4 && renderStep4()}

                {/* Navigation Buttons - Mobile optimized */}
                {currentStep > 1 && currentStep < 4 && (
                  <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-6 sm:mt-space-xl pt-4 sm:pt-space-lg border-t border-border">
                    <button
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="inline-flex items-center justify-center gap-2 py-3 sm:py-0 font-body font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Back
                    </button>
                    
                    {currentStep === 2 && (
                      <button
                        onClick={() => setCurrentStep(3)}
                        className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 sm:py-3 rounded bg-primary text-primary-foreground font-body font-medium text-base transition-all duration-300 hover:bg-burgundy-800 active:scale-[0.98]"
                      >
                        Continue
                      </button>
                    )}
                    
                    {currentStep === 3 && (
                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 sm:py-3 rounded bg-primary text-primary-foreground font-body font-medium text-base transition-all duration-300 hover:bg-burgundy-800 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Submitting..." : "Get My Free Quote"}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Trust Sidebar */}
            {currentStep < 4 && renderTrustSidebar()}
          </div>
        </div>
      </section>
    </>
  );
};

export default GetQuote;
