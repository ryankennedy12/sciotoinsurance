import { useEffect, useRef, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";

const coverageLabels: Record<string, string> = {
  personal: "Personal Insurance",
  business: "Business Insurance",
  benefits: "Employee Benefits",
  not_sure: "General Inquiry",
};

const requestLabels: Record<string, string> = {
  quote: "Quote Request",
  service_claim: "Claim Report",
  service_change: "Policy Change",
  service_cert: "Certificate Request",
  service_idcard: "ID Card Request",
  service_review: "Policy Review",
  service_payment: "Payment Question",
  contact_general: "Contact Message",
};

function playNotificationSound() {
  try {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    // Two-tone chime
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.setValueAtTime(1100, ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.4);
  } catch {
    // Audio not available — silent fallback
  }
}

interface UseLeadNotificationsOptions {
  onNewLead?: (lead: any) => void;
}

export function useLeadNotifications(options?: UseLeadNotificationsOptions) {
  const { user, isAdmin } = useAuth();
  const onNewLeadRef = useRef(options?.onNewLead);
  onNewLeadRef.current = options?.onNewLead;

  const handleNewLead = useCallback((payload: any) => {
    const lead = payload.new;
    const name = `${lead.first_name} ${lead.last_name}`;
    const type = requestLabels[lead.request_type] || coverageLabels[lead.coverage_type] || "New Submission";

    playNotificationSound();

    toast({
      title: "🔔 New Lead Received",
      description: `${name} — ${type}`,
    });

    onNewLeadRef.current?.(lead);
  }, []);

  useEffect(() => {
    if (!user || !isAdmin) return;

    const channel = supabase
      .channel("admin-lead-notifications")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "leads",
        },
        handleNewLead
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user, isAdmin, handleNewLead]);
}
