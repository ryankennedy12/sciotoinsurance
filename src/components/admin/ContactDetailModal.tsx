import { useState, useEffect } from "react";
import { format } from "date-fns";
import { 
  Mail, 
  Phone, 
  Clock, 
  MessageSquare,
  Trash2,
  User,
  Calendar,
  FileText
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

interface Contact {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  additional_info: string | null;
  notes: string | null;
  status: string;
  is_read: boolean;
  reply_status: string;
  created_at: string;
  request_type: string | null;
}

interface Activity {
  id: string;
  activity_type: string;
  old_status: string | null;
  new_status: string | null;
  note: string | null;
  created_at: string;
}

interface ContactDetailModalProps {
  contact: Contact | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onContactUpdated: () => void;
  onContactDeleted: (contactId: string) => void;
}

const replyStatusColors: Record<string, string> = {
  unread: "bg-blue-100 text-blue-800 border-blue-200",
  read: "bg-gray-100 text-gray-800 border-gray-200",
  replied: "bg-green-100 text-green-800 border-green-200",
};

const replyStatusLabels: Record<string, string> = {
  unread: "Unread",
  read: "Read",
  replied: "Replied",
};

export function ContactDetailModal({
  contact,
  open,
  onOpenChange,
  onContactUpdated,
  onContactDeleted,
}: ContactDetailModalProps) {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [newNote, setNewNote] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (contact && open) {
      fetchActivities();
      // Mark as read when opening
      if (contact.reply_status === "unread") {
        markAsRead();
      }
    }
  }, [contact, open]);

  const fetchActivities = async () => {
    if (!contact) return;
    
    const { data, error } = await supabase
      .from("lead_activity")
      .select("*")
      .eq("lead_id", contact.id)
      .order("created_at", { ascending: false });

    if (!error && data) {
      setActivities(data);
    }
  };

  const markAsRead = async () => {
    if (!contact) return;

    await supabase
      .from("leads")
      .update({ reply_status: "read", is_read: true })
      .eq("id", contact.id);

    onContactUpdated();
  };

  const updateReplyStatus = async (newStatus: string) => {
    if (!contact) return;
    setIsUpdating(true);

    try {
      const { error } = await supabase
        .from("leads")
        .update({ reply_status: newStatus, is_read: true })
        .eq("id", contact.id);

      if (error) throw error;

      // Log activity
      await supabase.from("lead_activity").insert({
        lead_id: contact.id,
        activity_type: "status_change",
        old_status: contact.reply_status,
        new_status: newStatus,
      });

      toast({ title: "Status updated" });
      onContactUpdated();
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
    if (!contact || !newNote.trim()) return;
    setIsUpdating(true);

    try {
      const timestamp = new Date().toISOString();
      const updatedNotes = contact.notes
        ? `${contact.notes}\n\n[${format(new Date(), "MMM d, yyyy h:mm a")}]\n${newNote.trim()}`
        : `[${format(new Date(), "MMM d, yyyy h:mm a")}]\n${newNote.trim()}`;

      const { error } = await supabase
        .from("leads")
        .update({ notes: updatedNotes })
        .eq("id", contact.id);

      if (error) throw error;

      // Log activity
      await supabase.from("lead_activity").insert({
        lead_id: contact.id,
        activity_type: "note_added",
        note: newNote.trim(),
      });

      toast({ title: "Note added" });
      setNewNote("");
      onContactUpdated();
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

  const deleteContact = async () => {
    if (!contact) return;

    try {
      const { error } = await supabase
        .from("leads")
        .delete()
        .eq("id", contact.id);

      if (error) throw error;

      toast({ title: "Contact deleted" });
      onContactDeleted(contact.id);
      onOpenChange(false);
    } catch (error) {
      console.error("Error deleting contact:", error);
      toast({
        title: "Error deleting contact",
        variant: "destructive",
      });
    }
  };

  const getSubjectFromNotes = (notes: string | null) => {
    if (!notes) return "General Inquiry";
    const match = notes.match(/Contact form inquiry: (.+)/);
    return match ? match[1] : "General Inquiry";
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "created":
        return <MessageSquare className="h-4 w-4" />;
      case "status_change":
        return <Clock className="h-4 w-4" />;
      case "note_added":
        return <FileText className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  if (!contact) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-xl font-display">
                {contact.first_name} {contact.last_name}
              </DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">
                {getSubjectFromNotes(contact.notes)}
              </p>
            </div>
            <Badge
              variant="outline"
              className={replyStatusColors[contact.reply_status] || replyStatusColors.unread}
            >
              {replyStatusLabels[contact.reply_status] || "Unread"}
            </Badge>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Status Update */}
          <div className="flex items-center gap-4">
            <Label className="text-sm font-medium">Status</Label>
            <Select
              value={contact.reply_status}
              onValueChange={updateReplyStatus}
              disabled={isUpdating}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="unread">Unread</SelectItem>
                <SelectItem value="read">Read</SelectItem>
                <SelectItem value="replied">Replied</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-3">
              <User className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium">{contact.first_name} {contact.last_name}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href={`mailto:${contact.email}`} className="font-medium text-primary hover:underline">
                  {contact.email}
                </a>
              </div>
            </div>
            {contact.phone && (
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href={`tel:${contact.phone}`} className="font-medium text-primary hover:underline">
                    {contact.phone}
                  </a>
                </div>
              </div>
            )}
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Submitted</p>
                <p className="font-medium">
                  {format(new Date(contact.created_at), "MMM d, yyyy 'at' h:mm a")}
                </p>
              </div>
            </div>
          </div>

          {/* Message Content */}
          {contact.additional_info && (
            <div>
              <Label className="text-sm font-medium mb-2 block">Message</Label>
              <div className="p-4 bg-muted/50 rounded-lg whitespace-pre-wrap">
                {contact.additional_info}
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
                        {activity.activity_type === "created" && "Contact submitted"}
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
                  <AlertDialogTitle>Delete this contact?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete this contact message. This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={deleteContact}>Delete</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <div className="flex gap-2">
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Close
              </Button>
              <Button asChild>
                <a href={`mailto:${contact.email}`}>
                  <Mail className="h-4 w-4 mr-2" />
                  Reply
                </a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
