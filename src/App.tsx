import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/personal-insurance" element={<PersonalInsurance />} />
            <Route path="/business-insurance" element={<BusinessInsurance />} />
            <Route path="/employee-benefits" element={<EmployeeBenefits />} />
            <Route path="/services" element={<Services />} />
            <Route path="/get-quote" element={<GetQuote />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
