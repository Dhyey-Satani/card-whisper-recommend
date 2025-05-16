
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ComparePage from "./pages/ComparePage";
import CreditScorePage from "./pages/CreditScorePage";
import EducationPage from "./pages/EducationPage";
import AnimatedLayout from "./components/AnimatedLayout";
// import GlobalMouseDragEffect from "@/components/ui/GlobalMouseDragEffect"; // removed

const queryClient = new QueryClient();

const App = () => (
  <>
    {/* <GlobalMouseDragEffect /> removed */}
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedLayout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/compare" element={<ComparePage />} />
              <Route path="/credit-score" element={<CreditScorePage />} />
              <Route path="/education" element={<EducationPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatedLayout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </>
);

export default App;
