import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Crown, AlertCircle } from "lucide-react";

const checklistItems = [
  {
    id: "primary",
    label: "Primary Residence valued over $750,000",
    coverage: "Guaranteed Replacement Cost",
  },
  {
    id: "secondary",
    label: "Secondary/Vacation Home",
    coverage: "Multi-home policies, vacancy endorsements",
  },
  {
    id: "collections",
    label: "Valuable Collections (art, wine, jewelry, antiques)",
    coverage: "Scheduled items with agreed value",
  },
  {
    id: "vehicles",
    label: "3+ Vehicles or Luxury/Classic Cars",
    coverage: "Agreed value, OEM parts, diminished value",
  },
  {
    id: "watercraft",
    label: "Watercraft or Aircraft",
    coverage: "Specialized marine/aviation coverage",
  },
  {
    id: "staff",
    label: "Household Staff (nanny, housekeeper, etc.)",
    coverage: "Domestic workers' compensation, EPLI",
  },
  {
    id: "liability",
    label: "Net Worth over $1 Million",
    coverage: "High-limit umbrella, excess liability",
  },
];

const HighNetWorthChecklist = () => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const checkedCount = Object.values(checked).filter(Boolean).length;

  const toggleItem = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getRecommendation = () => {
    if (checkedCount >= 5) {
      return {
        level: "comprehensive",
        title: "Comprehensive High-Net-Worth Coverage Recommended",
        description: "Your asset profile suggests you'd benefit significantly from a specialized high-net-worth program like Chubb, PURE, or AIG Private Client.",
        color: "bg-primary/10 border-primary/20 text-primary",
      };
    }
    if (checkedCount >= 3) {
      return {
        level: "enhanced",
        title: "Enhanced Coverage Recommended",
        description: "You have several assets that may be underinsured by standard policies. Let's review your coverage for gaps.",
        color: "bg-yellow-50 border-yellow-200 text-yellow-700",
      };
    }
    if (checkedCount >= 1) {
      return {
        level: "review",
        title: "Coverage Review Suggested",
        description: "You have some assets that may need specialized coverage. A quick review can identify any gaps.",
        color: "bg-secondary border-border text-foreground",
      };
    }
    return null;
  };

  const recommendation = getRecommendation();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
          <Crown className="w-5 h-5 text-accent" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Asset Protection Checklist</h3>
          <p className="text-sm text-muted-foreground">Do you need high-net-worth coverage?</p>
        </div>
      </div>

      {/* Checklist */}
      <div className="space-y-4">
        {checklistItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-start gap-3 p-3 rounded-lg border transition-colors ${
              checked[item.id] 
                ? "bg-primary/5 border-primary/20" 
                : "bg-card border-border hover:border-muted-foreground/30"
            }`}
          >
            <Checkbox
              id={item.id}
              checked={checked[item.id] || false}
              onCheckedChange={() => toggleItem(item.id)}
              className="mt-0.5"
            />
            <div className="flex-1">
              <label 
                htmlFor={item.id} 
                className="text-sm font-medium text-foreground cursor-pointer"
              >
                {item.label}
              </label>
              {checked[item.id] && (
                <p className="text-xs text-muted-foreground mt-1">
                  Needs: {item.coverage}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Score */}
      <div className="text-center py-2">
        <span className="text-3xl font-display font-bold text-primary">{checkedCount}</span>
        <span className="text-muted-foreground"> of {checklistItems.length} items apply to you</span>
      </div>

      {/* Recommendation */}
      {recommendation && (
        <div className={`rounded-lg p-4 border ${recommendation.color}`}>
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm">{recommendation.title}</p>
              <p className="text-sm mt-1 opacity-90">{recommendation.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <Button asChild className="w-full" size="lg">
        <Link to="/get-quote">
          Schedule Private Consultation
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </Button>
    </div>
  );
};

export default HighNetWorthChecklist;
