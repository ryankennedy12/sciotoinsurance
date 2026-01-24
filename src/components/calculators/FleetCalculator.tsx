import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Truck } from "lucide-react";

const FleetCalculator = () => {
  const [passenger, setPassenger] = useState<string>("");
  const [trucks, setTrucks] = useState<string>("");
  const [heavy, setHeavy] = useState<string>("");

  const total = (parseInt(passenger) || 0) + (parseInt(trucks) || 0) + (parseInt(heavy) || 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-full bg-charcoal/10 flex items-center justify-center">
          <Truck className="w-5 h-5 text-charcoal" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Fleet Size Calculator</h3>
          <p className="text-sm text-muted-foreground">Get your commercial auto quote</p>
        </div>
      </div>

      <div className="grid gap-4">
        <div>
          <Label>Passenger Vehicles</Label>
          <Input type="number" placeholder="0" value={passenger} onChange={(e) => setPassenger(e.target.value)} className="mt-1" />
        </div>
        <div>
          <Label>Light Trucks/Vans</Label>
          <Input type="number" placeholder="0" value={trucks} onChange={(e) => setTrucks(e.target.value)} className="mt-1" />
        </div>
        <div>
          <Label>Heavy Trucks</Label>
          <Input type="number" placeholder="0" value={heavy} onChange={(e) => setHeavy(e.target.value)} className="mt-1" />
        </div>
      </div>

      <div className="bg-secondary/50 rounded-lg p-4 text-center">
        <p className="text-sm text-muted-foreground">Total Fleet Size</p>
        <p className="text-3xl font-display font-bold text-primary">{total} vehicles</p>
        {total >= 5 && <p className="text-xs text-muted-foreground mt-1">Qualifies for fleet discount!</p>}
      </div>

      <Button asChild className="w-full" size="lg">
        <Link to="/get-quote">Get Fleet Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
      </Button>
    </div>
  );
};

export default FleetCalculator;
