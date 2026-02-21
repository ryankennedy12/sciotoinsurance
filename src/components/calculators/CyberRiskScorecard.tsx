import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight, ShieldAlert } from "lucide-react";

const questions = [
  "Do you store customer personal data?",
  "Do you process credit card payments?",
  "Do employees work remotely?",
  "Have you had security training this year?",
  "Do you have a written security policy?",
];

const CyberRiskScorecard = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const answered = Object.keys(answers).length;
  
  const score = answered === questions.length ? Object.values(answers).filter(a => a === "yes").length * 20 : null;
  
  const getRisk = () => {
    if (score === null) return null;
    if (score <= 40) return { level: "High", color: "text-red-600 bg-red-100", coverage: "$1M - $5M" };
    if (score <= 60) return { level: "Moderate", color: "text-yellow-600 bg-yellow-100", coverage: "$500K - $2M" };
    return { level: "Lower", color: "text-green-600 bg-green-100", coverage: "$250K - $1M" };
  };

  const risk = getRisk();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-full bg-charcoal/10 flex items-center justify-center">
          <ShieldAlert className="w-5 h-5 text-charcoal" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Cyber Risk Scorecard</h3>
          <p className="text-sm text-muted-foreground">Quick assessment of your cyber exposure</p>
        </div>
      </div>

      <div className="space-y-4">
        {questions.map((q, i) => (
          <div key={i} className="p-3 rounded-lg border border-border">
            <p className="text-sm font-medium text-foreground mb-2">{q}</p>
            <RadioGroup value={answers[i] || ""} onValueChange={(v) => setAnswers(prev => ({ ...prev, [i]: v }))} className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id={`q${i}-yes`} />
                <label htmlFor={`q${i}-yes`} className="text-sm">Yes</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id={`q${i}-no`} />
                <label htmlFor={`q${i}-no`} className="text-sm">No</label>
              </div>
            </RadioGroup>
          </div>
        ))}
      </div>

      {risk && (
        <div className="bg-secondary/50 rounded-lg p-4 text-center space-y-3">
          <p className="text-sm text-muted-foreground">Your Cyber Risk Level</p>
          <span className={`inline-block px-4 py-2 rounded-full font-semibold ${risk.color}`}>{risk.level} Risk</span>
          <p className="text-lg font-display font-bold text-primary">Suggested Coverage: {risk.coverage}</p>
        </div>
      )}

      <Button asChild className="w-full" size="lg">
        <Link to="/get-quote">Get Cyber Insurance Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
      </Button>
    </div>
  );
};

export default CyberRiskScorecard;
