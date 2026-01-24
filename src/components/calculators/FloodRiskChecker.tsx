import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight, Droplets, AlertTriangle, CheckCircle } from "lucide-react";

const FloodRiskChecker = () => {
  const [basement, setBasement] = useState<string>("");
  const [distanceToWater, setDistanceToWater] = useState<string>("");
  const [previousFlooding, setPreviousFlooding] = useState<string>("");
  const [floodZone, setFloodZone] = useState<string>("");

  const allAnswered = basement && distanceToWater && previousFlooding && floodZone;

  const getRiskLevel = () => {
    if (!allAnswered) return null;

    let score = 0;
    
    // Basement adds risk
    if (basement === "finished") score += 3;
    else if (basement === "unfinished") score += 1;
    
    // Distance to water
    if (distanceToWater === "less500") score += 4;
    else if (distanceToWater === "500to1000") score += 2;
    
    // Previous flooding is a big indicator
    if (previousFlooding === "yes") score += 5;
    
    // Flood zone
    if (floodZone === "high") score += 5;
    else if (floodZone === "moderate") score += 2;

    if (score >= 8) return { level: "high", label: "High Risk", color: "text-red-600 bg-red-100" };
    if (score >= 4) return { level: "moderate", label: "Moderate Risk", color: "text-yellow-600 bg-yellow-100" };
    return { level: "low", label: "Lower Risk", color: "text-green-600 bg-green-100" };
  };

  const risk = getRiskLevel();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Droplets className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Flood Risk Assessment</h3>
          <p className="text-sm text-muted-foreground">Find out if you need flood insurance</p>
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-5">
        <div>
          <Label className="mb-3 block">Does your home have a basement?</Label>
          <RadioGroup value={basement} onValueChange={setBasement} className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="basement-no" />
              <label htmlFor="basement-no" className="text-sm">No basement</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="unfinished" id="basement-unfinished" />
              <label htmlFor="basement-unfinished" className="text-sm">Unfinished</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="finished" id="basement-finished" />
              <label htmlFor="basement-finished" className="text-sm">Finished</label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="mb-3 block">How close is your property to water (creek, river, pond)?</Label>
          <Select value={distanceToWater} onValueChange={setDistanceToWater}>
            <SelectTrigger>
              <SelectValue placeholder="Select distance" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="less500">Less than 500 feet</SelectItem>
              <SelectItem value="500to1000">500 - 1,000 feet</SelectItem>
              <SelectItem value="more1000">More than 1,000 feet</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="mb-3 block">Has your property flooded before?</Label>
          <RadioGroup value={previousFlooding} onValueChange={setPreviousFlooding} className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="flood-yes" />
              <label htmlFor="flood-yes" className="text-sm">Yes</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="flood-no" />
              <label htmlFor="flood-no" className="text-sm">No</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="unknown" id="flood-unknown" />
              <label htmlFor="flood-unknown" className="text-sm">Not sure</label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="mb-3 block">What flood zone is your property in?</Label>
          <Select value={floodZone} onValueChange={setFloodZone}>
            <SelectTrigger>
              <SelectValue placeholder="Select flood zone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high">High-risk (Zone A, AE, V)</SelectItem>
              <SelectItem value="moderate">Moderate (Zone B, X-shaded)</SelectItem>
              <SelectItem value="low">Low-risk (Zone C, X)</SelectItem>
              <SelectItem value="unknown">I don't know</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground mt-1">
            Don't know? We can look it up for you.
          </p>
        </div>
      </div>

      {/* Results */}
      {risk && (
        <div className="bg-secondary/50 rounded-lg p-4 space-y-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Your Estimated Flood Risk</p>
            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-lg font-semibold ${risk.color}`}>
              {risk.level === "high" && <AlertTriangle className="w-5 h-5" />}
              {risk.level === "low" && <CheckCircle className="w-5 h-5" />}
              {risk.label}
            </span>
          </div>

          <div className="pt-3 border-t border-border text-sm text-muted-foreground space-y-2">
            {risk.level === "high" && (
              <>
                <p>• <strong>Flood insurance is strongly recommended</strong></p>
                <p>• Standard home insurance does NOT cover flood damage</p>
                <p>• We compare NFIP and private flood options to find better rates</p>
              </>
            )}
            {risk.level === "moderate" && (
              <>
                <p>• 25% of flood claims come from moderate-risk zones</p>
                <p>• Flood insurance is affordable in moderate zones</p>
                <p>• We can quote both NFIP and private options</p>
              </>
            )}
            {risk.level === "low" && (
              <>
                <p>• Lower risk doesn't mean no risk</p>
                <p>• Preferred Risk policies start around $350/year</p>
                <p>• Worth considering if you have a finished basement</p>
              </>
            )}
          </div>
        </div>
      )}

      {/* CTA */}
      <Button asChild className="w-full" size="lg">
        <Link to="/get-quote">
          Check My Flood Insurance Options
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </Button>
    </div>
  );
};

export default FloodRiskChecker;
