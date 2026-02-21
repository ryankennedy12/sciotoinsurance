import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Umbrella, AlertTriangle } from "lucide-react";

const UmbrellaGapCalculator = () => {
  const [homeValue, setHomeValue] = useState<string>("");
  const [investments, setInvestments] = useState<string>("");
  const [otherAssets, setOtherAssets] = useState<string>("");
  const [autoLimit, setAutoLimit] = useState<string>("100000");
  const [homeLimit, setHomeLimit] = useState<string>("100000");

  const analysis = useMemo(() => {
    const homeNum = parseInt(homeValue) || 0;
    const investNum = parseInt(investments) || 0;
    const otherNum = parseInt(otherAssets) || 0;
    const autoNum = parseInt(autoLimit) || 0;
    const homeLiabilityNum = parseInt(homeLimit) || 0;

    const totalAssets = homeNum + investNum + otherNum;
    const currentProtection = Math.max(autoNum, homeLiabilityNum);
    const gap = totalAssets - currentProtection;

    if (totalAssets === 0) return null;

    // Recommend umbrella in $1M increments
    const recommendedUmbrella = Math.ceil(gap / 1000000) * 1000000;

    return {
      totalAssets,
      currentProtection,
      gap: Math.max(gap, 0),
      recommendedUmbrella: Math.max(recommendedUmbrella, 1000000),
      riskLevel: gap > 500000 ? "high" : gap > 100000 ? "medium" : "low",
    };
  }, [homeValue, investments, otherAssets, autoLimit, homeLimit]);

  const getRiskColor = (level: string) => {
    switch (level) {
      case "high":
        return "text-red-600 bg-red-100";
      case "medium":
        return "text-yellow-600 bg-yellow-100";
      default:
        return "text-green-600 bg-green-100";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Umbrella className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Liability Gap Calculator</h3>
          <p className="text-sm text-muted-foreground">Are your assets protected from lawsuits?</p>
        </div>
      </div>

      {/* Assets Section */}
      <div>
        <h4 className="font-medium text-foreground mb-3">Your Assets</h4>
        <div className="grid gap-4">
          <div>
            <Label htmlFor="homeValue">Home Value (Equity)</Label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input
                id="homeValue"
                type="number"
                placeholder="300,000"
                value={homeValue}
                onChange={(e) => setHomeValue(e.target.value)}
                className="pl-7"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="investments">Savings & Investments</Label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input
                id="investments"
                type="number"
                placeholder="200,000"
                value={investments}
                onChange={(e) => setInvestments(e.target.value)}
                className="pl-7"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="otherAssets">Other Property (vehicles, boats, etc.)</Label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input
                id="otherAssets"
                type="number"
                placeholder="50,000"
                value={otherAssets}
                onChange={(e) => setOtherAssets(e.target.value)}
                className="pl-7"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Current Limits Section */}
      <div>
        <h4 className="font-medium text-foreground mb-3">Current Liability Limits</h4>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="autoLimit">Auto Policy</Label>
            <Select value={autoLimit} onValueChange={setAutoLimit}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select limit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="50000">$50K</SelectItem>
                <SelectItem value="100000">$100K</SelectItem>
                <SelectItem value="250000">$250K</SelectItem>
                <SelectItem value="300000">$300K</SelectItem>
                <SelectItem value="500000">$500K</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="homeLimit">Home Policy</Label>
            <Select value={homeLimit} onValueChange={setHomeLimit}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select limit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="100000">$100K</SelectItem>
                <SelectItem value="300000">$300K</SelectItem>
                <SelectItem value="500000">$500K</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Results */}
      {analysis && (
        <div className="bg-secondary/50 rounded-lg p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-sm text-muted-foreground">Total Assets at Risk</p>
              <p className="text-lg font-semibold text-foreground">
                ${analysis.totalAssets.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Current Protection</p>
              <p className="text-lg font-semibold text-foreground">
                ${analysis.currentProtection.toLocaleString()}
              </p>
            </div>
          </div>

          {analysis.gap > 0 && (
            <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
              <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  Coverage Gap: ${analysis.gap.toLocaleString()}
                </p>
                <p className="text-xs text-muted-foreground">
                  An umbrella policy closes this gap for about $150-300/year per $1M
                </p>
              </div>
            </div>
          )}

          <div className="text-center pt-3 border-t border-border">
            <p className="text-sm text-muted-foreground mb-1">Recommended Umbrella Coverage</p>
            <p className="text-2xl font-display font-bold text-primary">
              ${(analysis.recommendedUmbrella / 1000000).toFixed(0)}M
            </p>
            <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${getRiskColor(analysis.riskLevel)}`}>
              {analysis.riskLevel === "high" ? "High Risk" : analysis.riskLevel === "medium" ? "Moderate Risk" : "Lower Risk"}
            </span>
          </div>
        </div>
      )}

      {/* CTA */}
      <Button asChild className="w-full" size="lg">
        <Link to="/get-quote">
          Get Umbrella Quote
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </Button>
    </div>
  );
};

export default UmbrellaGapCalculator;
