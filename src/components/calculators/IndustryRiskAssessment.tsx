import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Briefcase } from "lucide-react";

const IndustryRiskAssessment = () => {
  const [industry, setIndustry] = useState<string>("");

  const getRisk = () => {
    if (!industry) return null;
    const highRisk = ["legal", "healthcare", "financial"];
    const moderateRisk = ["consulting", "it", "realestate"];
    if (highRisk.includes(industry)) return { level: "High", coverage: "$1M - $5M", color: "text-red-600 bg-red-100" };
    if (moderateRisk.includes(industry)) return { level: "Moderate", coverage: "$500K - $2M", color: "text-yellow-600 bg-yellow-100" };
    return { level: "Standard", coverage: "$250K - $1M", color: "text-green-600 bg-green-100" };
  };

  const risk = getRisk();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-full bg-charcoal/10 flex items-center justify-center">
          <Briefcase className="w-5 h-5 text-charcoal" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Professional Liability Risk Assessment</h3>
          <p className="text-sm text-muted-foreground">E&O coverage based on your industry</p>
        </div>
      </div>

      <div>
        <Label>Select Your Industry</Label>
        <Select value={industry} onValueChange={setIndustry}>
          <SelectTrigger className="mt-1"><SelectValue placeholder="Choose industry" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="accounting">Accounting</SelectItem>
            <SelectItem value="legal">Legal</SelectItem>
            <SelectItem value="consulting">Consulting</SelectItem>
            <SelectItem value="it">IT Services</SelectItem>
            <SelectItem value="realestate">Real Estate</SelectItem>
            <SelectItem value="healthcare">Healthcare</SelectItem>
            <SelectItem value="financial">Financial Services</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {risk && (
        <div className="bg-secondary/50 rounded-lg p-4 text-center space-y-3">
          <p className="text-sm text-muted-foreground">Your E&O Risk Level</p>
          <span className={`inline-block px-4 py-2 rounded-full font-semibold ${risk.color}`}>{risk.level} Risk</span>
          <p className="text-lg font-display font-bold text-primary">Recommended: {risk.coverage}</p>
        </div>
      )}

      <Button asChild className="w-full" size="lg">
        <Link to="/get-quote">Get Industry-Specific Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
      </Button>
    </div>
  );
};

export default IndustryRiskAssessment;
