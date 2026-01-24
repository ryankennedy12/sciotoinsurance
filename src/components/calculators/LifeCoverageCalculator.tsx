import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Heart } from "lucide-react";

const LifeCoverageCalculator = () => {
  const [income, setIncome] = useState<string>("");
  const [yearsToReplace, setYearsToReplace] = useState<string>("10");
  const [mortgage, setMortgage] = useState<string>("");
  const [debts, setDebts] = useState<string>("");
  const [childrenEducation, setChildrenEducation] = useState<string>("0");

  const estimate = useMemo(() => {
    const incomeNum = parseInt(income) || 0;
    const yearsNum = parseInt(yearsToReplace) || 10;
    const mortgageNum = parseInt(mortgage) || 0;
    const debtsNum = parseInt(debts) || 0;
    const educationNum = parseInt(childrenEducation) || 0;

    if (incomeNum === 0) return null;

    const educationCost = educationNum * 100000; // ~$100k per child for education
    const incomeReplacement = incomeNum * yearsNum;
    const totalNeed = incomeReplacement + mortgageNum + debtsNum + educationCost + 25000; // +25k for final expenses

    // Estimate monthly premium (very rough - term life)
    const monthlyEstimate = Math.round((totalNeed / 1000000) * 35); // ~$35/mo per $1M for healthy 35yo

    return {
      totalCoverage: Math.round(totalNeed / 50000) * 50000, // Round to nearest 50k
      monthlyEstimate: Math.max(monthlyEstimate, 15), // Minimum $15/mo
    };
  }, [income, yearsToReplace, mortgage, debts, childrenEducation]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Heart className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Coverage Needs Calculator</h3>
          <p className="text-sm text-muted-foreground">How much life insurance do you really need?</p>
        </div>
      </div>

      {/* Form */}
      <div className="grid gap-4">
        <div>
          <Label htmlFor="income">Your Annual Income</Label>
          <div className="relative mt-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input
              id="income"
              type="number"
              placeholder="75,000"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="pl-7"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="years">Years of Income to Replace</Label>
          <Select value={yearsToReplace} onValueChange={setYearsToReplace}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select years" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 years</SelectItem>
              <SelectItem value="10">10 years</SelectItem>
              <SelectItem value="15">15 years</SelectItem>
              <SelectItem value="20">20 years</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="mortgage">Outstanding Mortgage Balance</Label>
          <div className="relative mt-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input
              id="mortgage"
              type="number"
              placeholder="250,000"
              value={mortgage}
              onChange={(e) => setMortgage(e.target.value)}
              className="pl-7"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="debts">Other Debts (student loans, car, etc.)</Label>
          <div className="relative mt-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input
              id="debts"
              type="number"
              placeholder="50,000"
              value={debts}
              onChange={(e) => setDebts(e.target.value)}
              className="pl-7"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="children">Children's Education to Fund</Label>
          <Select value={childrenEducation} onValueChange={setChildrenEducation}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select number" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">None</SelectItem>
              <SelectItem value="1">1 child (~$100K)</SelectItem>
              <SelectItem value="2">2 children (~$200K)</SelectItem>
              <SelectItem value="3">3 children (~$300K)</SelectItem>
              <SelectItem value="4">4+ children (~$400K)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results */}
      {estimate && (
        <div className="bg-secondary/50 rounded-lg p-4 space-y-3">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">Suggested Coverage Amount</p>
            <p className="text-3xl font-display font-bold text-primary">
              ${estimate.totalCoverage.toLocaleString()}
            </p>
          </div>
          <div className="flex justify-center items-center pt-3 border-t border-border">
            <span className="text-muted-foreground">Estimated Monthly Premium:</span>
            <span className="ml-2 font-semibold text-foreground">
              ${estimate.monthlyEstimate} - ${estimate.monthlyEstimate * 2}/mo
            </span>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            *Estimates for healthy non-smoker, age 30-40. Actual rates vary.
          </p>
        </div>
      )}

      {/* CTA */}
      <Button asChild className="w-full" size="lg">
        <Link to="/get-quote">
          Talk to an Advisor
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </Button>
    </div>
  );
};

export default LifeCoverageCalculator;
