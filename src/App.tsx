import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import PersonalInsurance from "./pages/PersonalInsurance";
import BusinessInsurance from "./pages/BusinessInsurance";
import EmployeeBenefits from "./pages/EmployeeBenefits";
import Services from "./pages/Services";
import GetQuote from "./pages/GetQuote";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Admin
import { AdminLayout } from "./components/admin/AdminLayout";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLeads from "./pages/admin/AdminLeads";
import AdminContacts from "./pages/admin/AdminContacts";
import AdminServiceRequests from "./pages/admin/AdminServiceRequests";
import AdminPlaceholder from "./pages/admin/AdminPlaceholder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/personal-insurance" element={<PersonalInsurance />} />
              <Route path="/personal-insurance/*" element={<Navigate to="/get-quote" replace />} />
              <Route path="/business-insurance" element={<BusinessInsurance />} />
              <Route path="/business-insurance/*" element={<Navigate to="/get-quote" replace />} />
              <Route path="/employee-benefits" element={<EmployeeBenefits />} />
              <Route path="/services" element={<Services />} />
              <Route path="/get-quote" element={<GetQuote />} />
              <Route path="/contact" element={<Contact />} />
            </Route>

            {/* Admin routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="leads" element={<AdminLeads />} />
              <Route path="contacts" element={<AdminContacts />} />
              <Route path="requests" element={<AdminServiceRequests />} />
              <Route path="clients" element={<AdminPlaceholder title="Clients" description="Client relationship management (coming soon)" />} />
              <Route path="settings" element={<AdminPlaceholder title="Settings" description="Admin settings and preferences" />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
