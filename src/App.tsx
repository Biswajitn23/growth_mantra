import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LenisProvider from "./components/LenisProvider";
import CustomCursor from "./components/CustomCursor";
import WhatsAppWidget from "./components/WhatsAppWidget";
import ScrollToTop from "./components/ScrollToTop";
import SplashScreen from "./components/SplashScreen";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";



const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <SplashScreen key="splash" onComplete={() => setIsLoading(false)} />
          ) : (
            <LenisProvider key="content">
              <CustomCursor />
              <WhatsAppWidget />
              <ScrollToTop />
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </LenisProvider>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </QueryClientProvider>
  );
};



export default App;
