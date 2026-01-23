import { useState, useEffect } from "react";
import { format } from "date-fns";
import { 
  Mail, 
  Phone, 
  Clock, 
  FileText,
  Trash2,
  User,
  Calendar,
  CheckCircle2,
  FileWarning,
  FilePen,
  Award,
  CreditCard,
  FileSearch,
  DollarSign,
  ClipboardList
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

interface ServiceRequest {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  additional_info: string | null;
  notes: string | null;
  status: string;
  request_type: string | null;
  created_at: string;
}

interface Activity {
  id: string;
  activity_type: string;
  old_status: string | null;
  new_status: string | null;
  note: string | null;
  created_at: string;
}

interface ServiceRequestDetailModalProps {
  request: ServiceRequest | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRequestUpdated: () => void;
  onRequestDeleted: (requestId: string) => void;
}

const requestTypeLabels: Record<string, string> = {
  service_claim: "Claim Report",
  service_change: "Policy Change",
  service_cert: "Certificate Request",
  service_idcard: "ID Card Request",
  service_review: "Policy Review",
  service_payment: "Payment Help",
};

const requestTypeIcons: Record<string, React.ElementType> = {
  service_claim: FileWarning,
  service_change: FilePen,
  service_cert: Award,
  service_idcard: CreditCard,
  service_review: FileSearch,
  service_payment: DollarSign,
};

const statusColors: Record<string, string> = {
  new: "bg-blue-100 text-blue-800 border-blue-200",
  in_progress: "bg-yellow-100 text-yellow-800 border-yellow-200",
  complete: "bg-green-100 text-green-800 border-green-200",
};

const statusLabels: Record<string, string> = {
  new: "New",
  in_progress: "In Progress",
  complete: "Complete",
};

// Map lead status to service status
const mapLeadStatusToServiceStatus = (leadStatus: string): string => {
  switch (leadStatus) {
    case "new":
      return "new";
    case "contacted":
    case "quoted":
      return "in_progress";
    case "won":
    case "lost":
      return "complete";
    default:
      return "new";
  }
};

// Map service status back to lead status
const mapServiceStatusToLeadStatus = (serviceStatus: string): string => {
  switch (serviceStatus) {
    case "new":
      return "new";
    case "in_progress":
      return "contacted";
    case "complete":
      return "won";
    default:
      return "new";
  }
};

export function ServiceRequestDetailModal({
  request,
  open,
  onOpenChange,
  onRequestUpdated,
  onRequestDeleted,
}: ServiceRequestDetailModalProps) {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [newNote, setNewNote] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (request && open) {
      fetchActivities();
    }
  }, [request, open]);

  const fetchActivities = async () => {
    if (!request) return;
    
    const { data, error } = await supabase
      .from("lead_activity")
      .select("*")
      .eq("lead_id", request.id)
      .order("created_at", { ascending: false });

    if (!error && data) {
      setActivities(data);
    }
  };

  const updateStatus = async (newServiceStatus: string) => {
    if (!request) return;
    setIsUpdating(true);

    const newLeadStatus = mapServiceStatusToLeadStatus(newServiceStatus) as "new" | "contacted" | "quoted" | "won" | "lost";
    const oldServiceStatus = mapLeadStatusToServiceStatus(request.status);

    try {
      const { error } = await supabase
        .from("leads")
        .update({ status: newLeadStatus })
        .eq("id", request.id);

      if (error) throw error;

      // Log activity
      await supabase.from("lead_activity").insert({
        lead_id: request.id,
        activity_type: "status_change",
        old_status: oldServiceStatus,
        new_status: newServiceStatus,
      });

      toast({ title: "Status updated" });
      onRequestUpdated();
      fetchActivities();
    } catch (error) {
      console.error("Error updating status:", error);
      toast({
        title: "Error updating status",
        variant: "destructive",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const addNote = async () => {
    if (!request || !newNote.trim()) return;
    setIsUpdating(true);

    try {
      const updatedNotes = request.notes
        ? `${request.notes}\n\n[${format(new Date(), "MMM d, yyyy h:mm a")}]\n${newNote.trim()}`
        : `[${format(new Date(), "MMM d, yyyy h:mm a")}]\n${newNote.trim()}`;

      const { error } = await supabase
        .from("leads")
        .update({ notes: updatedNotes })
        .eq("id", request.id);

      if (error) throw error;

      // Log activity
      await supabase.from("lead_activity").insert({
        lead_id: request.id,
        activity_type: "note_added",
        note: newNote.trim(),
      });

      toast({ title: "Note added" });
      setNewNote("");
      onRequestUpdated();
      fetchActivities();
    } catch (error) {
      console.error("Error adding note:", error);
      toast({
        title: "Error adding note",
        variant: "destructive",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const deleteRequest = async () => {
    if (!request) return;

    try {
      const { error } = await supabase
        .from("leads")
        .delete()
        .eq("id", request.id);

      if (error) throw error;

      toast({ title: "Request deleted" });
      onRequestDeleted(request.id);
      onOpenChange(false);
    } catch (error) {
      console.error("Error deleting request:", error);
      toast({
        title: "Error deleting request",
        variant: "destructive",
      });
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "created":
        return <ClipboardList className="h-4 w-4" />;
      case "status_change":
        return <Clock className="h-4 w-4" />;
      case "note_added":
        return <FileText className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  if (!request) return null;

  const serviceStatus = mapLeadStatusToServiceStatus(request.status);
  const TypeIcon = requestTypeIcons[request.request_type || ""] || ClipboardList;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <TypeIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <DialogTitle className="text-xl font-display">
                  {requestTypeLabels[request.request_type || ""] || "Service Request"}
                </DialogTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {request.first_name} {request.last_name}
                </p>
              </div>
            </div>
            <Badge
              variant="outline"
              className={statusColors[serviceStatus] || statusColors.new}
            >
              {statusLabels[serviceStatus] || "New"}
            </Badge>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Status Update */}
          <div className="flex items-center gap-4">
            <Label className="text-sm font-medium">Status</Label>
            <Select
              value={serviceStatus}
              onValueChange={updateStatus}
              disabled={isUpdating}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="complete">Complete</SelectItem>
              </SelectContent>
            </Select>
            {serviceStatus !== "complete" && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => updateStatus("complete")}
                disabled={isUpdating}
              >
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Mark Complete
              </Button>
            )}
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-3">
              <User className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium">{request.first_name} {request.last_name}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href={`mailto:${request.email}`} className="font-medium text-primary hover:underline">
                  {request.email}
                </a>
              </div>
            </div>
            {request.phone && (
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href={`tel:${request.phone}`} className="font-medium text-primary hover:underline">
                    {request.phone}
                  </a>
                </div>
              </div>
            )}
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Submitted</p>
                <p className="font-medium">
                  {format(new Date(request.created_at), "MMM d, yyyy 'at' h:mm a")}
                </p>
              </div>
            </div>
          </div>

          {/* Request Details */}
          {request.additional_info && (
            <div>
              <Label className="text-sm font-medium mb-2 block">Additional Details</Label>
              <div className="p-4 bg-muted/50 rounded-lg whitespace-pre-wrap">
                {request.additional_info}
              </div>
            </div>
          )}

          {/* Notes */}
          <div>
            <Label className="text-sm font-medium mb-2 block">Internal Notes</Label>
            <Textarea
              placeholder="Add a note..."
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              rows={3}
              className="mb-2"
            />
            <Button
              size="sm"
              onClick={addNote}
              disabled={!newNote.trim() || isUpdating}
            >
              Add Note
            </Button>
          </div>

          {/* Activity Log */}
          {activities.length > 0 && (
            <div>
              <Label className="text-sm font-medium mb-2 block">Activity</Label>
              <div className="space-y-3 max-h-48 overflow-y-auto">
                {activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-3 text-sm p-3 bg-muted/30 rounded-lg"
                  >
                    <div className="text-muted-foreground mt-0.5">
                      {getActivityIcon(activity.activity_type)}
                    </div>
                    <div className="flex-1">
                      <p>
                        {activity.activity_type === "created" && "Request submitted"}
                        {activity.activity_type === "status_change" &&
                          `Status changed from ${activity.old_status} to ${activity.new_status}`}
                        {activity.activity_type === "note_added" && `Note added: "${activity.note}"`}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {format(new Date(activity.created_at), "MMM d, yyyy 'at' h:mm a")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-between pt-4 border-t">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" size="sm">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete this request?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete this service request. This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={deleteRequest}>Delete</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <div className="flex gap-2">
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Close
              </Button>
              <Button asChild>
                <a href={`mailto:${request.email}`}>
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
