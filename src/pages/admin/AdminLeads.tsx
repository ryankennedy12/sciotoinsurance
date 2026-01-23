import { useEffect, useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
import { 
  Search, 
  Filter,
  Mail,
  Phone,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  User,
  Building2,
  Briefcase,
  HelpCircle
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { LeadDetailModal } from "@/components/admin/LeadDetailModal";

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

const statusColors: Record<string, string> = {
  new: "bg-blue-100 text-blue-800 border-blue-200",
  contacted: "bg-yellow-100 text-yellow-800 border-yellow-200",
  quoted: "bg-purple-100 text-purple-800 border-purple-200",
  won: "bg-green-100 text-green-800 border-green-200",
  lost: "bg-gray-100 text-gray-600 border-gray-200",
};

const statusOptions = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "quoted", label: "Quoted" },
  { value: "won", label: "Won" },
  { value: "lost", label: "Lost" },
];

const typeOptions = [
  { value: "personal", label: "Personal" },
  { value: "business", label: "Business" },
  { value: "benefits", label: "Benefits" },
  { value: "not_sure", label: "Not Sure" },
];

const coverageLabels: Record<string, string> = {
  personal: "Personal",
  business: "Business",
  benefits: "Benefits",
  not_sure: "Not Sure",
};

const coverageIcons: Record<string, React.ReactNode> = {
  personal: <User className="h-3.5 w-3.5" />,
  business: <Building2 className="h-3.5 w-3.5" />,
  benefits: <Briefcase className="h-3.5 w-3.5" />,
  not_sure: <HelpCircle className="h-3.5 w-3.5" />,
};

const contactMethodLabels: Record<string, string> = {
  email: "Email",
  phone: "Phone",
  text: "Text",
};

type SortField = "created_at" | "status" | "coverage_type";
type SortDirection = "asc" | "desc";

export default function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [sortField, setSortField] = useState<SortField>("created_at");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setLeads(data || []);
    } catch (error) {
      console.error("Error fetching leads:", error);
      toast({
        title: "Error loading leads",
        description: "Please try refreshing the page.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const filteredAndSortedLeads = useMemo(() => {
    let filtered = [...leads];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (lead) =>
          lead.first_name.toLowerCase().includes(query) ||
          lead.last_name.toLowerCase().includes(query) ||
          lead.email.toLowerCase().includes(query)
      );
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((lead) => lead.status === statusFilter);
    }

    // Type filter
    if (typeFilter !== "all") {
      filtered = filtered.filter((lead) => lead.coverage_type === typeFilter);
    }

    // Sorting
    filtered.sort((a, b) => {
      let comparison = 0;
      
      switch (sortField) {
        case "created_at":
          comparison = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
          break;
        case "status":
          const statusOrder = ["new", "contacted", "quoted", "won", "lost"];
          comparison = statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
          break;
        case "coverage_type":
          comparison = a.coverage_type.localeCompare(b.coverage_type);
          break;
      }
      
      return sortDirection === "asc" ? comparison : -comparison;
    });

    return filtered;
  }, [leads, searchQuery, statusFilter, typeFilter, sortField, sortDirection]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <ArrowUpDown className="h-4 w-4 text-muted-foreground/50" />;
    }
    return sortDirection === "asc" 
      ? <ArrowUp className="h-4 w-4 text-primary" />
      : <ArrowDown className="h-4 w-4 text-primary" />;
  };

  const handleRowClick = (lead: Lead) => {
    setSelectedLead(lead);
    setIsModalOpen(true);
  };

  const handleLeadUpdated = () => {
    fetchLeads();
  };

  const handleLeadDeleted = (leadId: string) => {
    setLeads((prev) => prev.filter((lead) => lead.id !== leadId));
  };

  // Stats
  const stats = useMemo(() => {
    const total = leads.length;
    const newCount = leads.filter((l) => l.status === "new").length;
    const contactedCount = leads.filter((l) => l.status === "contacted").length;
    const quotedCount = leads.filter((l) => l.status === "quoted").length;
    const wonCount = leads.filter((l) => l.status === "won").length;
    const lostCount = leads.filter((l) => l.status === "lost").length;
    
    return { total, newCount, contactedCount, quotedCount, wonCount, lostCount };
  }, [leads]);

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
        <h1 className="heading-lg text-foreground">Leads</h1>
        <p className="text-muted-foreground">
          Track quote requests and manage prospects
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card className="border-border/50">
          <CardContent className="pt-4 pb-3">
            <p className="text-2xl font-bold text-foreground">{stats.total}</p>
            <p className="text-xs text-muted-foreground">Total Leads</p>
          </CardContent>
        </Card>
        <Card className="border-blue-200 bg-blue-50/30">
          <CardContent className="pt-4 pb-3">
            <p className="text-2xl font-bold text-blue-700">{stats.newCount}</p>
            <p className="text-xs text-blue-600">New</p>
          </CardContent>
        </Card>
        <Card className="border-yellow-200 bg-yellow-50/30">
          <CardContent className="pt-4 pb-3">
            <p className="text-2xl font-bold text-yellow-700">{stats.contactedCount}</p>
            <p className="text-xs text-yellow-600">Contacted</p>
          </CardContent>
        </Card>
        <Card className="border-purple-200 bg-purple-50/30">
          <CardContent className="pt-4 pb-3">
            <p className="text-2xl font-bold text-purple-700">{stats.quotedCount}</p>
            <p className="text-xs text-purple-600">Quoted</p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50/30">
          <CardContent className="pt-4 pb-3">
            <p className="text-2xl font-bold text-green-700">{stats.wonCount}</p>
            <p className="text-xs text-green-600">Won</p>
          </CardContent>
        </Card>
        <Card className="border-gray-200 bg-gray-50/30">
          <CardContent className="pt-4 pb-3">
            <p className="text-2xl font-bold text-gray-500">{stats.lostCount}</p>
            <p className="text-xs text-gray-500">Lost</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="border-border/50">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="h-4 w-4 text-muted-foreground hidden sm:block" />
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-36 bg-background">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border z-50">
                  <SelectItem value="all">All Statuses</SelectItem>
                  {statusOptions.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-32 bg-background">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border z-50">
                  <SelectItem value="all">All Types</SelectItem>
                  {typeOptions.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Leads Table */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>
            {filteredAndSortedLeads.length} Lead{filteredAndSortedLeads.length !== 1 ? "s" : ""}
            {(statusFilter !== "all" || typeFilter !== "all" || searchQuery) && (
              <span className="text-muted-foreground font-normal text-sm ml-2">
                (filtered)
              </span>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {filteredAndSortedLeads.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              No leads found matching your criteria.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead 
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => handleSort("created_at")}
                    >
                      <div className="flex items-center gap-1">
                        Date
                        {getSortIcon("created_at")}
                      </div>
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead 
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => handleSort("coverage_type")}
                    >
                      <div className="flex items-center gap-1">
                        Type
                        {getSortIcon("coverage_type")}
                      </div>
                    </TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead 
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => handleSort("status")}
                    >
                      <div className="flex items-center gap-1">
                        Status
                        {getSortIcon("status")}
                      </div>
                    </TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAndSortedLeads.map((lead) => (
                    <TableRow 
                      key={lead.id}
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() => handleRowClick(lead)}
                    >
                      <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
                        {format(new Date(lead.created_at), "MMM d, yyyy")}
                      </TableCell>
                      <TableCell className="font-medium">
                        {lead.first_name} {lead.last_name}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5 text-sm">
                          {coverageIcons[lead.coverage_type]}
                          <span>
                            {coverageLabels[lead.coverage_type] || lead.coverage_type}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs font-normal">
                            {contactMethodLabels[lead.preferred_contact] || lead.preferred_contact}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <a
                              href={`mailto:${lead.email}`}
                              onClick={(e) => e.stopPropagation()}
                              className="text-muted-foreground hover:text-primary p-1"
                              title={lead.email}
                            >
                              <Mail className="h-4 w-4" />
                            </a>
                            {lead.phone && (
                              <a
                                href={`tel:${lead.phone}`}
                                onClick={(e) => e.stopPropagation()}
                                className="text-muted-foreground hover:text-primary p-1"
                                title={lead.phone}
                              >
                                <Phone className="h-4 w-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={`${statusColors[lead.status]} text-xs border`}>
                          {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell onClick={(e) => e.stopPropagation()}>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRowClick(lead)}
                        >
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Lead Detail Modal */}
      <LeadDetailModal
        lead={selectedLead}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onLeadUpdated={handleLeadUpdated}
        onLeadDeleted={handleLeadDeleted}
      />
    </div>
  );
}
