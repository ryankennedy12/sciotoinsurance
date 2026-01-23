import { useState, useEffect, useMemo } from "react";
import { format } from "date-fns";
import { 
  Search, 
  Mail, 
  Phone, 
  Eye,
  MessageSquare,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  CheckCircle,
  Inbox,
  Reply
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ContactDetailModal } from "@/components/admin/ContactDetailModal";

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

type SortField = "created_at" | "reply_status";
type SortDirection = "asc" | "desc";

export default function AdminContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sortField, setSortField] = useState<SortField>("created_at");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  const fetchContacts = async () => {
    try {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .eq("request_type", "contact_general")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setContacts(data || []);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      toast({
        title: "Error loading contacts",
        description: "Please try refreshing the page.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const filteredAndSortedContacts = useMemo(() => {
    let filtered = contacts;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (c) =>
          c.first_name.toLowerCase().includes(query) ||
          c.last_name.toLowerCase().includes(query) ||
          c.email.toLowerCase().includes(query) ||
          c.additional_info?.toLowerCase().includes(query)
      );
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((c) => c.reply_status === statusFilter);
    }

    // Sort
    filtered.sort((a, b) => {
      let comparison = 0;
      if (sortField === "created_at") {
        comparison = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      } else if (sortField === "reply_status") {
        comparison = (a.reply_status || "").localeCompare(b.reply_status || "");
      }
      return sortDirection === "asc" ? comparison : -comparison;
    });

    return filtered;
  }, [contacts, searchQuery, statusFilter, sortField, sortDirection]);

  const stats = useMemo(() => ({
    total: contacts.length,
    unread: contacts.filter((c) => c.reply_status === "unread").length,
    read: contacts.filter((c) => c.reply_status === "read").length,
    replied: contacts.filter((c) => c.reply_status === "replied").length,
  }), [contacts]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return <ArrowUpDown className="h-4 w-4" />;
    return sortDirection === "asc" ? (
      <ArrowUp className="h-4 w-4" />
    ) : (
      <ArrowDown className="h-4 w-4" />
    );
  };

  const handleRowClick = (contact: Contact) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  };

  const handleContactUpdated = () => {
    fetchContacts();
  };

  const handleContactDeleted = (contactId: string) => {
    setContacts((prev) => prev.filter((c) => c.id !== contactId));
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.delete(contactId);
      return next;
    });
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(new Set(filteredAndSortedContacts.map((c) => c.id)));
    } else {
      setSelectedIds(new Set());
    }
  };

  const handleSelectOne = (id: string, checked: boolean) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (checked) {
        next.add(id);
      } else {
        next.delete(id);
      }
      return next;
    });
  };

  const handleBulkAction = async (action: "read" | "replied") => {
    if (selectedIds.size === 0) return;

    try {
      const { error } = await supabase
        .from("leads")
        .update({ reply_status: action, is_read: true })
        .in("id", Array.from(selectedIds));

      if (error) throw error;

      toast({
        title: "Updated successfully",
        description: `${selectedIds.size} message(s) marked as ${action}.`,
      });

      setSelectedIds(new Set());
      fetchContacts();
    } catch (error) {
      console.error("Error updating contacts:", error);
      toast({
        title: "Error updating",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const getSubjectFromNotes = (notes: string | null) => {
    if (!notes) return "General Inquiry";
    const match = notes.match(/Contact form inquiry: (.+)/);
    return match ? match[1] : "General Inquiry";
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Contact Messages</h1>
        <p className="text-muted-foreground">Manage general contact form submissions</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Inbox className="h-4 w-4" />
              Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{stats.total}</p>
          </CardContent>
        </Card>
        <Card className="border-blue-200 bg-blue-50/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-blue-700 flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Unread
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-blue-700">{stats.unread}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Read
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{stats.read}</p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-green-700 flex items-center gap-2">
              <Reply className="h-4 w-4" />
              Replied
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-700">{stats.replied}</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, or message..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Messages</SelectItem>
                <SelectItem value="unread">Unread</SelectItem>
                <SelectItem value="read">Read</SelectItem>
                <SelectItem value="replied">Replied</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Bulk Actions */}
          {selectedIds.size > 0 && (
            <div className="mt-4 flex items-center gap-3 p-3 bg-muted rounded-lg">
              <span className="text-sm font-medium">
                {selectedIds.size} selected
              </span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleBulkAction("read")}
              >
                Mark as Read
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleBulkAction("replied")}
              >
                Mark as Replied
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setSelectedIds(new Set())}
              >
                Clear Selection
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={
                      filteredAndSortedContacts.length > 0 &&
                      selectedIds.size === filteredAndSortedContacts.length
                    }
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead>
                  <button
                    onClick={() => handleSort("created_at")}
                    className="flex items-center gap-1 hover:text-foreground transition-colors"
                  >
                    Date {getSortIcon("created_at")}
                  </button>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>
                  <button
                    onClick={() => handleSort("reply_status")}
                    className="flex items-center gap-1 hover:text-foreground transition-colors"
                  >
                    Status {getSortIcon("reply_status")}
                  </button>
                </TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAndSortedContacts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                    No contact messages found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredAndSortedContacts.map((contact) => (
                  <TableRow
                    key={contact.id}
                    className={`cursor-pointer transition-colors ${
                      contact.reply_status === "unread"
                        ? "bg-blue-50/50 font-medium border-l-4 border-l-blue-500"
                        : "hover:bg-muted/50"
                    }`}
                    onClick={() => handleRowClick(contact)}
                  >
                    <TableCell onClick={(e) => e.stopPropagation()}>
                      <Checkbox
                        checked={selectedIds.has(contact.id)}
                        onCheckedChange={(checked) =>
                          handleSelectOne(contact.id, checked as boolean)
                        }
                      />
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {format(new Date(contact.created_at), "MMM d, yyyy")}
                      <br />
                      <span className="text-xs text-muted-foreground">
                        {format(new Date(contact.created_at), "h:mm a")}
                      </span>
                    </TableCell>
                    <TableCell>
                      {contact.first_name} {contact.last_name}
                    </TableCell>
                    <TableCell>
                      <a
                        href={`mailto:${contact.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        <Mail className="h-3 w-3" />
                        {contact.email}
                      </a>
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate">
                      {getSubjectFromNotes(contact.notes)}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={replyStatusColors[contact.reply_status] || replyStatusColors.unread}
                      >
                        {replyStatusLabels[contact.reply_status] || "Unread"}
                      </Badge>
                    </TableCell>
                    <TableCell onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center gap-2">
                        {contact.phone && (
                          <a
                            href={`tel:${contact.phone}`}
                            className="p-2 hover:bg-muted rounded-md transition-colors"
                            title="Call"
                          >
                            <Phone className="h-4 w-4 text-muted-foreground" />
                          </a>
                        )}
                        <a
                          href={`mailto:${contact.email}`}
                          className="p-2 hover:bg-muted rounded-md transition-colors"
                          title="Email"
                        >
                          <Mail className="h-4 w-4 text-muted-foreground" />
                        </a>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Detail Modal */}
      <ContactDetailModal
        contact={selectedContact}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onContactUpdated={handleContactUpdated}
        onContactDeleted={handleContactDeleted}
      />
    </div>
  );
}
