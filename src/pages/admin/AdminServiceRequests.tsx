import { useState, useEffect, useMemo } from "react";
import { format } from "date-fns";
import { 
  Search, 
  Mail, 
  Phone,
  FileWarning,
  FilePen,
  Award,
  CreditCard,
  FileSearch,
  DollarSign,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  ClipboardList,
  Clock,
  CheckCircle2
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
import { ServiceRequestDetailModal } from "@/components/admin/ServiceRequestDetailModal";

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

const requestTypeLabels: Record<string, string> = {
  service_claim: "Claim",
  service_change: "Policy Change",
  service_cert: "Certificate",
  service_idcard: "ID Cards",
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

type SortField = "created_at" | "status" | "request_type";
type SortDirection = "asc" | "desc";

// Map lead status to service request status
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

export default function AdminServiceRequests() {
  const [requests, setRequests] = useState<ServiceRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [sortField, setSortField] = useState<SortField>("created_at");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const [selectedRequest, setSelectedRequest] = useState<ServiceRequest | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  const fetchRequests = async () => {
    try {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .in("request_type", [
          "service_claim",
          "service_change",
          "service_cert",
          "service_idcard",
          "service_review",
          "service_payment",
        ])
        .order("created_at", { ascending: false });

      if (error) throw error;
      setRequests(data || []);
    } catch (error) {
      console.error("Error fetching service requests:", error);
      toast({
        title: "Error loading requests",
        description: "Please try refreshing the page.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const filteredAndSortedRequests = useMemo(() => {
    let filtered = requests;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (r) =>
          r.first_name.toLowerCase().includes(query) ||
          r.last_name.toLowerCase().includes(query) ||
          r.email.toLowerCase().includes(query)
      );
    }

    // Status filter (map lead status to service status)
    if (statusFilter !== "all") {
      filtered = filtered.filter((r) => mapLeadStatusToServiceStatus(r.status) === statusFilter);
    }

    // Type filter
    if (typeFilter !== "all") {
      filtered = filtered.filter((r) => r.request_type === typeFilter);
    }

    // Sort
    filtered.sort((a, b) => {
      let comparison = 0;
      if (sortField === "created_at") {
        comparison = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      } else if (sortField === "status") {
        comparison = a.status.localeCompare(b.status);
      } else if (sortField === "request_type") {
        comparison = (a.request_type || "").localeCompare(b.request_type || "");
      }
      return sortDirection === "asc" ? comparison : -comparison;
    });

    return filtered;
  }, [requests, searchQuery, statusFilter, typeFilter, sortField, sortDirection]);

  const stats = useMemo(() => ({
    total: requests.length,
    new: requests.filter((r) => mapLeadStatusToServiceStatus(r.status) === "new").length,
    inProgress: requests.filter((r) => mapLeadStatusToServiceStatus(r.status) === "in_progress").length,
    complete: requests.filter((r) => mapLeadStatusToServiceStatus(r.status) === "complete").length,
  }), [requests]);

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

  const handleRowClick = (request: ServiceRequest) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const handleRequestUpdated = () => {
    fetchRequests();
  };

  const handleRequestDeleted = (requestId: string) => {
    setRequests((prev) => prev.filter((r) => r.id !== requestId));
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.delete(requestId);
      return next;
    });
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(new Set(filteredAndSortedRequests.map((r) => r.id)));
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

  const handleBulkStatusUpdate = async (newStatus: string) => {
    if (selectedIds.size === 0) return;

    // Map service status back to lead status
    const leadStatus = newStatus === "complete" ? "won" : newStatus === "in_progress" ? "contacted" : "new";

    try {
      const { error } = await supabase
        .from("leads")
        .update({ status: leadStatus })
        .in("id", Array.from(selectedIds));

      if (error) throw error;

      toast({
        title: "Updated successfully",
        description: `${selectedIds.size} request(s) updated.`,
      });

      setSelectedIds(new Set());
      fetchRequests();
    } catch (error) {
      console.error("Error updating requests:", error);
      toast({
        title: "Error updating",
        description: "Please try again.",
        variant: "destructive",
      });
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
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Service Requests</h1>
        <p className="text-muted-foreground">Manage claims, policy changes, certificates, and more</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <ClipboardList className="h-4 w-4" />
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
              <ClipboardList className="h-4 w-4" />
              New
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-blue-700">{stats.new}</p>
          </CardContent>
        </Card>
        <Card className="border-yellow-200 bg-yellow-50/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-yellow-700 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              In Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-yellow-700">{stats.inProgress}</p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-green-700 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Complete
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-700">{stats.complete}</p>
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
                placeholder="Search by name or email..."
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
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="complete">Complete</SelectItem>
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="service_claim">Claims</SelectItem>
                <SelectItem value="service_change">Policy Changes</SelectItem>
                <SelectItem value="service_cert">Certificates</SelectItem>
                <SelectItem value="service_idcard">ID Cards</SelectItem>
                <SelectItem value="service_review">Reviews</SelectItem>
                <SelectItem value="service_payment">Payments</SelectItem>
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
                onClick={() => handleBulkStatusUpdate("in_progress")}
              >
                Mark In Progress
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleBulkStatusUpdate("complete")}
              >
                Mark Complete
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
                      filteredAndSortedRequests.length > 0 &&
                      selectedIds.size === filteredAndSortedRequests.length
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
                <TableHead>
                  <button
                    onClick={() => handleSort("request_type")}
                    className="flex items-center gap-1 hover:text-foreground transition-colors"
                  >
                    Request Type {getSortIcon("request_type")}
                  </button>
                </TableHead>
                <TableHead>
                  <button
                    onClick={() => handleSort("status")}
                    className="flex items-center gap-1 hover:text-foreground transition-colors"
                  >
                    Status {getSortIcon("status")}
                  </button>
                </TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAndSortedRequests.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    No service requests found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredAndSortedRequests.map((request) => {
                  const serviceStatus = mapLeadStatusToServiceStatus(request.status);
                  const Icon = requestTypeIcons[request.request_type || ""] || ClipboardList;
                  
                  return (
                    <TableRow
                      key={request.id}
                      className={`cursor-pointer transition-colors ${
                        serviceStatus === "new"
                          ? "bg-blue-50/50 font-medium border-l-4 border-l-blue-500"
                          : "hover:bg-muted/50"
                      }`}
                      onClick={() => handleRowClick(request)}
                    >
                      <TableCell onClick={(e) => e.stopPropagation()}>
                        <Checkbox
                          checked={selectedIds.has(request.id)}
                          onCheckedChange={(checked) =>
                            handleSelectOne(request.id, checked as boolean)
                          }
                        />
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        {format(new Date(request.created_at), "MMM d, yyyy")}
                        <br />
                        <span className="text-xs text-muted-foreground">
                          {format(new Date(request.created_at), "h:mm a")}
                        </span>
                      </TableCell>
                      <TableCell>
                        {request.first_name} {request.last_name}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-muted-foreground" />
                          {requestTypeLabels[request.request_type || ""] || "Unknown"}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={statusColors[serviceStatus] || statusColors.new}
                        >
                          {statusLabels[serviceStatus] || "New"}
                        </Badge>
                      </TableCell>
                      <TableCell onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center gap-2">
                          {request.phone && (
                            <a
                              href={`tel:${request.phone}`}
                              className="p-2 hover:bg-muted rounded-md transition-colors"
                              title="Call"
                            >
                              <Phone className="h-4 w-4 text-muted-foreground" />
                            </a>
                          )}
                          <a
                            href={`mailto:${request.email}`}
                            className="p-2 hover:bg-muted rounded-md transition-colors"
                            title="Email"
                          >
                            <Mail className="h-4 w-4 text-muted-foreground" />
                          </a>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Detail Modal */}
      <ServiceRequestDetailModal
        request={selectedRequest}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onRequestUpdated={handleRequestUpdated}
        onRequestDeleted={handleRequestDeleted}
      />
    </div>
  );
}
