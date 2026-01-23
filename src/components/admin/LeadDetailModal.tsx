import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  Calendar, 
  Clock, 
  MessageSquare,
  Trash2,
  Send,
  CheckCircle,
  XCircle,
  User,
  Briefcase,
  Building2,
  HelpCircle
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";

interface Lead {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  coverage_type: string;
  status: string;
  created_at: string;
  preferred_contact: string;
  personal_coverage_interests: string[] | null;
  business_coverage_interests: string[] | null;
  benefits_interests: string[] | null;
  additional_info: string | null;
  notes: string | null;
  best_time: string | null;
  has_current_coverage: boolean | null;
  switch_reason: string | null;
  business_type: string | null;
  employee_count: string | null;
  benefits_employee_count: string | null;
  benefits_situation: string | null;
}

interface LeadActivity {
  id: string;
  activity_type: string;
  old_status: string | null;
  new_status: string | null;
  note: string | null;
  created_at: string;
}

interface LeadDetailModalProps {
  lead: Lead | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLeadUpdated: () => void;
  onLeadDeleted: (leadId: string) => void;
}

const statusOptions = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "quoted", label: "Quoted" },
  { value: "won", label: "Won" },
  { value: "lost", label: "Lost" },
];

const statusColors: Record<string, string> = {
  new: "bg-blue-100 text-blue-800 border-blue-200",
  contacted: "bg-yellow-100 text-yellow-800 border-yellow-200",
  quoted: "bg-purple-100 text-purple-800 border-purple-200",
  won: "bg-green-100 text-green-800 border-green-200",
  lost: "bg-gray-100 text-gray-600 border-gray-200",
};

const coverageIcons: Record<string, React.ReactNode> = {
  personal: <User className="h-4 w-4" />,
  business: <Building2 className="h-4 w-4" />,
  benefits: <Briefcase className="h-4 w-4" />,
  not_sure: <HelpCircle className="h-4 w-4" />,
};

const coverageLabels: Record<string, string> = {
  personal: "Personal Insurance",
  business: "Business Insurance",
  benefits: "Employee Benefits",
  not_sure: "Not Sure / General",
};

export function LeadDetailModal({
  lead,
  open,
  onOpenChange,
  onLeadUpdated,
  onLeadDeleted,
}: LeadDetailModalProps) {
  const [activities, setActivities] = useState<LeadActivity[]>([]);
  const [newNote, setNewNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    if (lead && open) {
      fetchActivities();
    }
  }, [lead, open]);

  const fetchActivities = async () => {
    if (!lead) return;
    
    const { data, error } = await supabase
      .from("lead_activity")
      .select("*")
      .eq("lead_id", lead.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching activities:", error);
    } else {
      setActivities(data || []);
    }
  };

  const updateStatus = async (newStatus: string) => {
    if (!lead || !user) return;
    
    const oldStatus = lead.status;
    
    try {
      // Update lead status
      const { error: updateError } = await supabase
        .from("leads")
        .update({ status: newStatus as "new" | "contacted" | "quoted" | "won" | "lost" })
        .eq("id", lead.id);

      if (updateError) throw updateError;

      // Log the activity
      const { error: activityError } = await supabase
        .from("lead_activity")
        .insert({
          lead_id: lead.id,
          user_id: user.id,
          activity_type: "status_change",
          old_status: oldStatus,
          new_status: newStatus,
        });

      if (activityError) throw activityError;

      toast({
        title: "Status updated",
        description: `Lead marked as ${newStatus}.`,
      });

      onLeadUpdated();
      fetchActivities();
    } catch (error) {
      console.error("Error updating status:", error);
      toast({
        title: "Error updating status",
        variant: "destructive",
      });
    }
  };

  const addNote = async () => {
    if (!lead || !user || !newNote.trim()) return;
    
    setIsSubmitting(true);
    
    try {
      // Update notes on lead
      const existingNotes = lead.notes || "";
      const timestamp = format(new Date(), "MMM d, yyyy h:mm a");
      const updatedNotes = existingNotes 
        ? `${existingNotes}\n\n[${timestamp}]\n${newNote.trim()}`
        : `[${timestamp}]\n${newNote.trim()}`;

      const { error: updateError } = await supabase
        .from("leads")
        .update({ notes: updatedNotes })
        .eq("id", lead.id);

      if (updateError) throw updateError;

      // Log the activity
      const { error: activityError } = await supabase
        .from("lead_activity")
        .insert({
          lead_id: lead.id,
          user_id: user.id,
          activity_type: "note_added",
          note: newNote.trim(),
        });

      if (activityError) throw activityError;

      toast({
        title: "Note added",
        description: "Your note has been saved.",
      });

      setNewNote("");
      onLeadUpdated();
      fetchActivities();
    } catch (error) {
      console.error("Error adding note:", error);
      toast({
        title: "Error adding note",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const deleteLead = async () => {
    if (!lead) return;
    
    setIsDeleting(true);
    
    try {
      const { error } = await supabase
        .from("leads")
        .delete()
        .eq("id", lead.id);

      if (error) throw error;

      toast({
        title: "Lead deleted",
        description: "The lead has been permanently removed.",
      });

      onLeadDeleted(lead.id);
      onOpenChange(false);
    } catch (error) {
      console.error("Error deleting lead:", error);
      toast({
        title: "Error deleting lead",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(false);
    }
  };

  const getInterests = (): string[] => {
    if (!lead) return [];
    return (
      lead.personal_coverage_interests ||
      lead.business_coverage_interests ||
      lead.benefits_interests ||
      []
    );
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "status_change":
        return <CheckCircle className="h-4 w-4 text-primary" />;
      case "note_added":
        return <MessageSquare className="h-4 w-4 text-blue-500" />;
      case "created":
        return <Calendar className="h-4 w-4 text-green-500" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const formatActivityMessage = (activity: LeadActivity): string => {
    switch (activity.activity_type) {
      case "status_change":
        return `Status changed from "${activity.old_status}" to "${activity.new_status}"`;
      case "note_added":
        return `Note added: "${activity.note?.substring(0, 50)}${activity.note && activity.note.length > 50 ? "..." : ""}"`;
      case "created":
        return "Lead created";
      default:
        return "Activity recorded";
    }
  };

  if (!lead) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <span className="text-xl">
              {lead.first_name} {lead.last_name}
            </span>
            <Badge className={`${statusColors[lead.status]} text-xs`}>
              {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="flex flex-wrap gap-2">
            <Select value={lead.status} onValueChange={updateStatus}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Change status" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((status) => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              size="sm"
              className="text-green-600 border-green-200 hover:bg-green-50"
              onClick={() => updateStatus("won")}
              disabled={lead.status === "won"}
            >
              <CheckCircle className="h-4 w-4 mr-1" />
              Mark Won
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="text-gray-600 border-gray-200 hover:bg-gray-50"
              onClick={() => updateStatus("lost")}
              disabled={lead.status === "lost"}
            >
              <XCircle className="h-4 w-4 mr-1" />
              Mark Lost
            </Button>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-destructive border-destructive/30 hover:bg-destructive/10 ml-auto"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete this lead?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete {lead.first_name} {lead.last_name}'s
                    lead and all associated activity. This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={deleteLead}
                    disabled={isDeleting}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    {isDeleting ? "Deleting..." : "Delete Lead"}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <Separator />

          {/* Contact Information */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-foreground">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href={`mailto:${lead.email}`} className="text-primary hover:underline">
                  {lead.email}
                </a>
              </div>
              {lead.phone && (
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a href={`tel:${lead.phone}`} className="text-primary hover:underline">
                    {lead.phone}
                  </a>
                </div>
              )}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Send className="h-4 w-4" />
                <span>Preferred: {lead.preferred_contact}</span>
              </div>
              {lead.best_time && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Best time: {lead.best_time}</span>
                </div>
              )}
            </div>
          </div>

          <Separator />

          {/* Coverage Details */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-foreground">Coverage Details</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                {coverageIcons[lead.coverage_type]}
                <span className="font-medium">
                  {coverageLabels[lead.coverage_type] || lead.coverage_type}
                </span>
              </div>
              
              {lead.has_current_coverage !== null && (
                <p className="text-sm text-muted-foreground">
                  Current coverage: {lead.has_current_coverage ? "Yes" : "No"}
                </p>
              )}
              
              {lead.switch_reason && (
                <p className="text-sm text-muted-foreground">
                  Reason for switch: {lead.switch_reason}
                </p>
              )}
              
              {lead.business_type && (
                <p className="text-sm text-muted-foreground">
                  Business type: {lead.business_type}
                </p>
              )}
              
              {(lead.employee_count || lead.benefits_employee_count) && (
                <p className="text-sm text-muted-foreground">
                  Employee count: {lead.employee_count || lead.benefits_employee_count}
                </p>
              )}
              
              {lead.benefits_situation && (
                <p className="text-sm text-muted-foreground">
                  Benefits situation: {lead.benefits_situation}
                </p>
              )}

              {getInterests().length > 0 && (
                <div className="pt-2">
                  <p className="text-sm font-medium mb-2">Interested in:</p>
                  <div className="flex flex-wrap gap-1">
                    {getInterests().map((interest, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {lead.additional_info && (
            <>
              <Separator />
              <div className="space-y-2">
                <h3 className="font-semibold text-sm text-foreground">Additional Information</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                  {lead.additional_info}
                </p>
              </div>
            </>
          )}

          <Separator />

          {/* Notes Section */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-foreground">Internal Notes</h3>
            
            {lead.notes && (
              <div className="bg-muted/50 rounded-lg p-3 text-sm whitespace-pre-wrap">
                {lead.notes}
              </div>
            )}
            
            <div className="space-y-2">
              <Textarea
                placeholder="Add a note..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                rows={3}
              />
              <Button
                size="sm"
                onClick={addNote}
                disabled={!newNote.trim() || isSubmitting}
              >
                {isSubmitting ? "Adding..." : "Add Note"}
              </Button>
            </div>
          </div>

          <Separator />

          {/* Activity Log */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-foreground">Activity Log</h3>
            
            {activities.length === 0 ? (
              <p className="text-sm text-muted-foreground">No activity recorded yet.</p>
            ) : (
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-3 text-sm py-2 border-b border-border/50 last:border-0"
                  >
                    {getActivityIcon(activity.activity_type)}
                    <div className="flex-1 min-w-0">
                      <p className="text-muted-foreground">
                        {formatActivityMessage(activity)}
                      </p>
                      <p className="text-xs text-muted-foreground/70">
                        {format(new Date(activity.created_at), "MMM d, yyyy 'at' h:mm a")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submission Info */}
          <div className="pt-2 text-xs text-muted-foreground border-t border-border/50">
            Submitted on {format(new Date(lead.created_at), "MMMM d, yyyy 'at' h:mm a")}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
