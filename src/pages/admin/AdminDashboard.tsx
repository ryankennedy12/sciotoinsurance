import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  MessageSquare, 
  ClipboardList, 
  Clock,
  ArrowRight,
  TrendingUp
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

interface Lead {
  id: string;
  first_name: string;
  last_name: string;
  coverage_type: string;
  status: string;
  created_at: string;
  notes: string | null;
}

interface MetricCard {
  title: string;
  value: number;
  icon: React.ElementType;
  description: string;
}

const statusColors: Record<string, string> = {
  new: "bg-blue-100 text-blue-800 border-blue-200",
  contacted: "bg-yellow-100 text-yellow-800 border-yellow-200",
  quoted: "bg-purple-100 text-purple-800 border-purple-200",
  won: "bg-green-100 text-green-800 border-green-200",
  lost: "bg-gray-100 text-gray-600 border-gray-200",
};

const coverageLabels: Record<string, string> = {
  personal: "Personal",
  business: "Business",
  benefits: "Benefits",
  not_sure: "General",
};

export default function AdminDashboard() {
  const [metrics, setMetrics] = useState<MetricCard[]>([]);
  const [recentLeads, setRecentLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Get all leads
      const { data: leads, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      const allLeads = leads || [];

      // Calculate metrics
      const now = new Date();
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      
      const newLeadsThisWeek = allLeads.filter(
        l => new Date(l.created_at) >= weekAgo
      ).length;

      const pendingQuotes = allLeads.filter(
        l => l.status === "new" || l.status === "contacted"
      ).length;

      // Service requests are leads with specific notes indicating service type
      const serviceRequests = allLeads.filter(
        l => l.notes?.includes("Contact form inquiry:")
      ).length;

      const unreadContacts = allLeads.filter(
        l => l.status === "new" && l.notes?.includes("Contact form")
      ).length;

      setMetrics([
        {
          title: "New Leads This Week",
          value: newLeadsThisWeek,
          icon: TrendingUp,
          description: "Quote requests received",
        },
        {
          title: "Pending Quotes",
          value: pendingQuotes,
          icon: Users,
          description: "Awaiting response",
        },
        {
          title: "Service Requests",
          value: serviceRequests,
          icon: ClipboardList,
          description: "Claims, changes, etc.",
        },
        {
          title: "Unread Contacts",
          value: unreadContacts,
          icon: MessageSquare,
          description: "New messages",
        },
      ]);

      setRecentLeads(allLeads.slice(0, 10));
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="heading-lg text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your leads and activity
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {metric.value}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {metric.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="flex gap-4">
        <Button asChild>
          <Link to="/admin/leads">
            View All Leads
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/admin/requests">
            View Service Requests
          </Link>
        </Button>
      </div>

      {/* Recent Activity */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          {recentLeads.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              No leads yet. They'll appear here once someone submits a form.
            </p>
          ) : (
            <div className="divide-y divide-border">
              {recentLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="py-4 flex items-center justify-between gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className={statusColors[lead.status]}>
                        {lead.status}
                      </Badge>
                      <span className="font-medium text-foreground truncate">
                        {lead.first_name} {lead.last_name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                      <span>{coverageLabels[lead.coverage_type] || lead.coverage_type}</span>
                      <span>•</span>
                      <span>
                        {format(new Date(lead.created_at), "MMM d, yyyy 'at' h:mm a")}
                      </span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={`/admin/leads?id=${lead.id}`}>
                      View
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
