import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";

// Existing Pages
import Home from "./pages/Home";
import NotFound from "./pages/not-found";

// New Legal & Company Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      {/* Main App */}
      <Route path="/" component={Home} />

      {/* Legal & Policies */}
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms" component={TermsOfService} />
      {/* Example of how to add the rest: */}
      {/* <Route path="/cookie-policy" component={CookiePolicy} /> */}
      {/* <Route path="/intellectual-property" component={IntellectualProperty} /> */}

      {/* Company */}
      
      {/* <Route path="/careers" component={Careers} /> */}
      {/* <Route path="/press" component={Press} /> */}

      {/* Support */}
      {/* <Route path="/help" component={HelpCenter} /> */}
      {/* <Route path="/safety" component={SafetyCenter} /> */}
      {/* <Route path="/guidelines" component={CommunityGuidelines} /> */}
      {/* <Route path="/seller-protection" component={SellerProtection} /> */}

      {/* CRITICAL FIX: The NotFound route MUST be the absolute last route in the Switch. 
        It catches any URL that doesn't match the paths above. 
      */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;