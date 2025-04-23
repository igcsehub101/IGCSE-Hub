import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import LastMinuteTips from "@/pages/LastMinuteTips";
import Resources from "@/pages/Resources";
import HardQuestions from "@/pages/HardQuestions";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Subject Pages
import Chemistry from "@/pages/subjects/Chemistry";
import Biology from "@/pages/subjects/Biology";
import Physics from "@/pages/subjects/Physics";
import French from "@/pages/subjects/French";
import Mathematics from "@/pages/subjects/Mathematics";
import Economics from "@/pages/subjects/Economics";
import ComputerScience from "@/pages/subjects/ComputerScience";
import EnglishLanguage from "@/pages/subjects/EnglishLanguage";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/last-minute-tips" component={LastMinuteTips} />
          <Route path="/resources" component={Resources} />
          <Route path="/hard-questions" component={HardQuestions} />
          
          {/* Subject Routes */}
          <Route path="/subjects/chemistry" component={Chemistry} />
          <Route path="/subjects/biology" component={Biology} />
          <Route path="/subjects/physics" component={Physics} />
          <Route path="/subjects/french" component={French} />
          <Route path="/subjects/mathematics" component={Mathematics} />
          <Route path="/subjects/economics" component={Economics} />
          <Route path="/subjects/computer-science" component={ComputerScience} />
          <Route path="/subjects/english-language" component={EnglishLanguage} />
          
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
