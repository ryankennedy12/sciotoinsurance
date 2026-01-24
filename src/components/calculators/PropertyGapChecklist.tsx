import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Building } from "lucide-react";

const items = [
  { id: "replacement", label: "Building at replacement cost (not ACV)" },
  { id: "property", label: "Business personal property coverage" },
  { id: "income", label: "Business income/interruption" },
  { id: "extra", label: "Extra expense coverage" },
  { id: "equipment", label: "Equipment breakdown" },
  { id: "signage", label: "Outdoor signage" },
  { id: "papers", label: "Valuable papers and records" },
];

const PropertyGapChecklist = () => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const gaps = items.filter(item => !checked[item.id]).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-full bg-charcoal/10 flex items-center justify-center">
          <Building className="w-5 h-5 text-charcoal" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Coverage Gap Checklist</h3>
          <p className="text-sm text-muted-foreground">Check what you currently have</p>
        </div>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-3 p-3 rounded-lg border border-border">
            <Checkbox id={item.id} checked={checked[item.id] || false} onCheckedChange={(c) => setChecked(prev => ({ ...prev, [item.id]: c as boolean }))} />
            <label htmlFor={item.id} className="text-sm text-foreground cursor-pointer">{item.label}</label>
          </div>
        ))}
      </div>

      <div className="bg-secondary/50 rounded-lg p-4 text-center">
        <p className="text-sm text-muted-foreground">Potential Coverage Gaps</p>
        <p className="text-3xl font-display font-bold text-primary">{gaps} of {items.length}</p>
      </div>

      <Button asChild className="w-full" size="lg">
        <Link to="/get-quote">Review Your Current Policy <ArrowRight className="w-4 h-4 ml-2" /></Link>
      </Button>
    </div>
  );
};

export default PropertyGapChecklist;
