import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight, HardHat } from "lucide-react";

const WorkersCompEstimator = () => {
  const [payroll, setPayroll] = useState<string>("");
  const [groupRating, setGroupRating] = useState<string>("");

  const estimate = payroll && parseInt(payroll) > 0 ? {
    without: Math.round(parseInt(payroll) * 0.025),
    with: Math.round(parseInt(payroll) * 0.018),
  } : null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-full bg-charcoal/10 flex items-center justify-center">
          <HardHat className="w-5 h-5 text-charcoal" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Ohio BWC Savings Estimator</h3>
          <p className="text-sm text-muted-foreground">See potential group rating savings</p>
        </div>
      </div>

      <div className="grid gap-4">
        <div>
          <Label>Annual Payroll</Label>
          <div className="relative mt-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input type="number" placeholder="500,000" value={payroll} onChange={(e) => setPayroll(e.target.value)} className="pl-7" />
          </div>
        </div>
        <div>
          <Label className="mb-3 block">Currently in Group Rating?</Label>
          <RadioGroup value={groupRating} onValueChange={setGroupRating} className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="gr-yes" />
              <label htmlFor="gr-yes" className="text-sm">Yes</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="gr-no" />
              <label htmlFor="gr-no" className="text-sm">No</label>
            </div>
          </RadioGroup>
        </div>
      </div>

      {estimate && (
        <div className="bg-secondary/50 rounded-lg p-4 space-y-3">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-xs text-muted-foreground">Without Group Rating</p>
              <p className="font-semibold text-foreground">${estimate.without.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">With Group Rating</p>
              <p className="font-semibold text-primary">${estimate.with.toLocaleString()}</p>
            </div>
          </div>
          <div className="text-center pt-3 border-t border-border">
            <p className="text-sm text-muted-foreground">Potential Annual Savings</p>
            <p className="text-2xl font-display font-bold text-green-600">${(estimate.without - estimate.with).toLocaleString()}</p>
          </div>
        </div>
      )}

      <Button asChild className="w-full" size="lg">
        <Link to="/get-quote">See If You Qualify <ArrowRight className="w-4 h-4 ml-2" /></Link>
      </Button>
    </div>
  );
};

export default WorkersCompEstimator;
