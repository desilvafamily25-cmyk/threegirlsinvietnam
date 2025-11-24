import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HCMC from "./pages/HCMC";
import HoiAn from "./pages/HoiAn";
import Hanoi from "./pages/Hanoi";
import DailyBlog from "./pages/DailyBlog";
import DayPost from "./pages/DayPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hcmc" element={<HCMC />} />
          <Route path="/hoi-an" element={<HoiAn />} />
          <Route path="/hanoi" element={<Hanoi />} />
          <Route path="/daily-blog" element={<DailyBlog />} />
          <Route path="/day/:dayId" element={<DayPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
