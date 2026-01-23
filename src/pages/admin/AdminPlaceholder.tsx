import { Card, CardContent } from "@/components/ui/card";
import { Construction } from "lucide-react";

interface AdminPlaceholderProps {
  title: string;
  description: string;
}

export default function AdminPlaceholder({ title, description }: AdminPlaceholderProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="heading-lg text-foreground">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <Card className="border-border/50">
        <CardContent className="flex flex-col items-center justify-center py-16">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
            <Construction className="h-8 w-8 text-muted-foreground" />
          </div>
          <h2 className="heading-sm text-foreground mb-2">Coming Soon</h2>
          <p className="text-muted-foreground text-center max-w-md">
            This feature is under development. Check back soon for updates.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
