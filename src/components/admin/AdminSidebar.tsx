import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  FileText, 
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ClipboardList
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface NavItem {
  title: string;
  url: string;
  icon: React.ElementType;
  badgeKey?: "contacts" | "requests";
}

const navItems: NavItem[] = [
  { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
  { title: "Leads", url: "/admin/leads", icon: Users },
  { title: "Contacts", url: "/admin/contacts", icon: MessageSquare, badgeKey: "contacts" },
  { title: "Service Requests", url: "/admin/requests", icon: ClipboardList, badgeKey: "requests" },
  { title: "Clients", url: "/admin/clients", icon: FileText },
  { title: "Settings", url: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [badgeCounts, setBadgeCounts] = useState({ contacts: 0, requests: 0 });
  const location = useLocation();
  const { signOut } = useAuth();

  const fetchCounts = async () => {
    try {
      const { count: contactCount } = await supabase
        .from("leads")
        .select("*", { count: "exact", head: true })
        .eq("request_type", "contact_general")
        .eq("reply_status", "unread");

      const { count: requestCount } = await supabase
        .from("leads")
        .select("*", { count: "exact", head: true })
        .in("request_type", [
          "service_claim",
          "service_change",
          "service_cert",
          "service_idcard",
          "service_review",
          "service_payment",
        ])
        .eq("status", "new");

      setBadgeCounts({
        contacts: contactCount || 0,
        requests: requestCount || 0,
      });
    } catch (error) {
      console.error("Error fetching badge counts:", error);
    }
  };

  // Initial fetch + polling fallback
  useEffect(() => {
    fetchCounts();
    const interval = setInterval(fetchCounts, 30000);
    return () => clearInterval(interval);
  }, []);

  // Realtime: refresh counts instantly on any leads change
  useEffect(() => {
    const channel = supabase
      .channel("sidebar-badge-counts")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "leads" },
        () => fetchCounts()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const isActive = (path: string) => {
    if (path === "/admin") {
      return location.pathname === "/admin";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside 
      className={cn(
        "bg-card border-r border-border flex flex-col h-screen sticky top-0 transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        {!collapsed && (
          <span className="font-display font-bold text-lg text-primary">
            Admin
          </span>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-1">
        {navItems.map((item) => {
          const badgeCount = item.badgeKey ? badgeCounts[item.badgeKey] : 0;
          
          return (
            <NavLink
              key={item.url}
              to={item.url}
              end={item.url === "/admin"}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive(item.url)
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && (
                <span className="flex-1">{item.title}</span>
              )}
              {badgeCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className={cn(
                    "h-5 min-w-5 px-1.5 text-xs",
                    collapsed && "absolute -top-1 -right-1"
                  )}
                >
                  {badgeCount > 99 ? "99+" : badgeCount}
                </Badge>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-2 border-t border-border">
        <button
          onClick={signOut}
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors w-full",
            "text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
          )}
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          {!collapsed && <span>Sign Out</span>}
        </button>
      </div>
    </aside>
  );
}
