import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ArrowRight, Shield } from "lucide-react";

const LiabilityLimitTool = () => {
  const [businessType, setBusinessType] = useState<string>("");
  const [revenue, setRevenue] = useState<string>("");
  const [employees, setEmployees] = useState<string>("");

  const getRecommendation = () => {
    if (!businessType || !revenue) return null;
    const revenueNum = parseInt(revenue) || 0;
    if (revenueNum >= 5000000) return { per: "$2,000,000", agg: "$4,000,000" };
    if (revenueNum >= 1000000) return { per: "$1,000,000", agg: "$2,000,000" };
    return { per: "$1,000,000", agg: "$2,000,000" };
  };

  const recommendation = getRecommendation();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-full bg-charcoal/10 flex items-center justify-center">
          <Shield className="w-5 h-5 text-charcoal" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Liability Limit Recommendation</h3>
          <p className="text-sm text-muted-foreground">What limits does your business need?</p>
        </div>
      </div>

      <div className="grid gap-4">
        <div>
          <Label>Business Type</Label>
          <Select value={businessType} onValueChange={setBusinessType}>
            <SelectTrigger className="mt-1"><SelectValue placeholder="Select type" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="contractor">Contractor</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="restaurant">Restaurant</SelectItem>
              <SelectItem value="office">Office/Professional</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Annual Revenue</Label>
          <Select value={revenue} onValueChange={setRevenue}>
            <SelectTrigger className="mt-1"><SelectValue placeholder="Select range" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="500000">Under $500K</SelectItem>
              <SelectItem value="1000000">$500K - $1M</SelectItem>
              <SelectItem value="5000000">$1M - $5M</SelectItem>
              <SelectItem value="10000000">$5M+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Number of Employees</Label>
          <Input type="number" placeholder="e.g., 10" value={employees} onChange={(e) => setEmployees(e.target.value)} className="mt-1" />
        </div>
      </div>

      {recommendation && (
        <div className="bg-secondary/50 rounded-lg p-4 text-center">
          <p className="text-sm text-muted-foreground mb-2">Recommended Limits</p>
          <p className="text-xl font-display font-bold text-primary">{recommendation.per} / {recommendation.agg}</p>
          <p className="text-xs text-muted-foreground mt-1">Per Occurrence / General Aggregate</p>
        </div>
      )}

      <Button asChild className="w-full" size="lg">
        <Link to="/get-quote">Get Your Business Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
      </Button>
    </div>
  );
};

export default LiabilityLimitTool;
