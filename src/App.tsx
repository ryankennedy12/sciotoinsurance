import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Layout from "./components/Layout";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const PersonalInsurance = lazy(() => import("./pages/PersonalInsurance"));
const BusinessInsurance = lazy(() => import("./pages/BusinessInsurance"));
const EmployeeBenefits = lazy(() => import("./pages/EmployeeBenefits"));
const Services = lazy(() => import("./pages/Services"));
const GetQuote = lazy(() => import("./pages/GetQuote"));
const Contact = lazy(() => import("./pages/Contact"));
const HGConnect2026 = lazy(() => import("./pages/HGConnect2026"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Admin (lazy)
const AdminLayout = lazy(() => import("./components/admin/AdminLayout").then(m => ({ default: m.AdminLayout })));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AdminLeads = lazy(() => import("./pages/admin/AdminLeads"));
const AdminContacts = lazy(() => import("./pages/admin/AdminContacts"));
const AdminServiceRequests = lazy(() => import("./pages/admin/AdminServiceRequests"));
const AdminPlaceholder = lazy(() => import("./pages/admin/AdminPlaceholder"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" /></div>}>
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
                <Route path="/hgconnect2026" element={<HGConnect2026 />} />
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
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
