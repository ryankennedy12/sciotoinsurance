import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Home } from "lucide-react";

const qualityMultipliers: Record<string, number> = {
  standard: 175,
  above_average: 225,
  custom: 300,
};

const RebuildCostEstimator = () => {
  const [sqft, setSqft] = useState<string>("");
  const [quality, setQuality] = useState<string>("standard");
  const [features, setFeatures] = useState({
    basement: false,
    pool: false,
    garage: false,
  });

  const estimate = useMemo(() => {
    const sqftNum = parseInt(sqft) || 0;
    if (sqftNum === 0) return null;

    const baseMultiplier = qualityMultipliers[quality] || 175;
    let baseCost = sqftNum * baseMultiplier;

    // Add for features
    if (features.basement) baseCost += 35000;
    if (features.pool) baseCost += 45000;
    if (features.garage) baseCost += 25000;

    // Add 10% cushion for Ohio market conditions
    const cushion = baseCost * 0.1;
    const recommended = baseCost + cushion;

    return {
      rebuildCost: Math.round(baseCost),
      recommended: Math.round(recommended),
    };
  }, [sqft, quality, features]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Home className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Rebuild Cost Estimator</h3>
          <p className="text-sm text-muted-foreground">Based on Central Ohio construction costs</p>
        </div>
      </div>

      {/* Form */}
      <div className="grid gap-4">
        <div>
          <Label htmlFor="sqft">Home Square Footage</Label>
          <Input
            id="sqft"
            type="number"
            placeholder="e.g., 2500"
            value={sqft}
            onChange={(e) => setSqft(e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="quality">Quality Level</Label>
          <Select value={quality} onValueChange={setQuality}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select quality" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard ($175/sqft)</SelectItem>
              <SelectItem value="above_average">Above Average ($225/sqft)</SelectItem>
              <SelectItem value="custom">Custom/Luxury ($300/sqft)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="mb-3 block">Special Features</Label>
          <div className="grid gap-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="basement"
                checked={features.basement}
                onCheckedChange={(checked) =>
                  setFeatures((prev) => ({ ...prev, basement: checked as boolean }))
                }
              />
              <label htmlFor="basement" className="text-sm text-muted-foreground">
                Finished Basement (+$35,000)
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="pool"
                checked={features.pool}
                onCheckedChange={(checked) =>
                  setFeatures((prev) => ({ ...prev, pool: checked as boolean }))
                }
              />
              <label htmlFor="pool" className="text-sm text-muted-foreground">
                In-Ground Pool (+$45,000)
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="garage"
                checked={features.garage}
                onCheckedChange={(checked) =>
                  setFeatures((prev) => ({ ...prev, garage: checked as boolean }))
                }
              />
              <label htmlFor="garage" className="text-sm text-muted-foreground">
                Detached Garage (+$25,000)
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      {estimate && (
        <div className="bg-secondary/50 rounded-lg p-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Estimated Rebuild Cost</span>
            <span className="font-semibold text-foreground">
              ${estimate.rebuildCost.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-border">
            <span className="text-muted-foreground">Recommended Coverage</span>
            <span className="text-xl font-display font-bold text-primary">
              ${estimate.recommended.toLocaleString()}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            *Includes 10% cushion for construction cost fluctuations
          </p>
        </div>
      )}

      {/* CTA */}
      <Button asChild className="w-full" size="lg">
        <Link to="/get-quote">
          Get Your Custom Home Quote
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </Button>
    </div>
  );
};

export default RebuildCostEstimator;
