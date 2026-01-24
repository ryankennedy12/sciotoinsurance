import { useState } from "react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

const coverageLevels = [
  {
    name: "State Minimum",
    liability: "$25K/$50K/$25K",
    collision: "$1,000 deductible",
    comprehensive: false,
    uninsured: false,
    rental: false,
    estimatedRange: "$400 - $600",
  },
  {
    name: "Basic",
    liability: "$50K/$100K/$50K",
    collision: "$1,000 deductible",
    comprehensive: true,
    uninsured: false,
    rental: false,
    estimatedRange: "$600 - $900",
  },
  {
    name: "Standard",
    liability: "$100K/$300K/$100K",
    collision: "$500 deductible",
    comprehensive: true,
    uninsured: true,
    rental: false,
    estimatedRange: "$900 - $1,400",
  },
  {
    name: "Full Protection",
    liability: "$250K/$500K/$250K",
    collision: "$250 deductible",
    comprehensive: true,
    uninsured: true,
    rental: true,
    estimatedRange: "$1,400 - $2,000",
  },
];

const AutoCoverageSlider = () => {
  const [level, setLevel] = useState([2]); // Default to "Standard"
  const currentLevel = coverageLevels[level[0]];

  return (
    <div className="space-y-6">
      {/* Coverage Level Label */}
      <div className="text-center">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold">
          {currentLevel.name} Coverage
        </span>
      </div>

      {/* Slider */}
      <div className="px-4">
        <Slider
          value={level}
          onValueChange={setLevel}
          max={3}
          min={0}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span>Minimum</span>
          <span>Basic</span>
          <span>Standard</span>
          <span>Full</span>
        </div>
      </div>

      {/* Coverage Details */}
      <div className="grid gap-3 mt-6">
        <div className="flex items-center justify-between py-2 border-b border-border">
          <span className="text-muted-foreground">Liability Limits</span>
          <span className="font-semibold text-foreground">{currentLevel.liability}</span>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-border">
          <span className="text-muted-foreground">Collision Deductible</span>
          <span className="font-semibold text-foreground">{currentLevel.collision}</span>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-border">
          <span className="text-muted-foreground">Comprehensive Coverage</span>
          {currentLevel.comprehensive ? (
            <CheckCircle className="w-5 h-5 text-green-600" />
          ) : (
            <XCircle className="w-5 h-5 text-muted-foreground/50" />
          )}
        </div>
        <div className="flex items-center justify-between py-2 border-b border-border">
          <span className="text-muted-foreground">Uninsured Motorist</span>
          {currentLevel.uninsured ? (
            <CheckCircle className="w-5 h-5 text-green-600" />
          ) : (
            <XCircle className="w-5 h-5 text-muted-foreground/50" />
          )}
        </div>
        <div className="flex items-center justify-between py-2 border-b border-border">
          <span className="text-muted-foreground">Rental Car Coverage</span>
          {currentLevel.rental ? (
            <CheckCircle className="w-5 h-5 text-green-600" />
          ) : (
            <XCircle className="w-5 h-5 text-muted-foreground/50" />
          )}
        </div>
      </div>

      {/* Estimated Range */}
      <div className="bg-secondary/50 rounded-lg p-4 text-center">
        <p className="text-sm text-muted-foreground mb-1">Estimated Annual Premium</p>
        <p className="text-2xl font-display font-bold text-primary">
          {currentLevel.estimatedRange}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          *Actual rates vary based on driving history, vehicle, and location
        </p>
      </div>

      {/* CTA */}
      <Button asChild className="w-full" size="lg">
        <Link to="/get-quote">
          Get Your Exact Quote
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </Button>
    </div>
  );
};

export default AutoCoverageSlider;
