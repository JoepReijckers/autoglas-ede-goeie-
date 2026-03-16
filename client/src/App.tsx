import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import OneTwoThreeRuit from "@/pages/OneTwoThreeRuit";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import OneTwoThreeRuit from "./pages/OneTwoThreeRuit";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
<<<<<<< HEAD
      <Route path={"/123ruit"} component={OneTwoThreeRuit} />
=======
      <Route path={"/123-ruit"} component={OneTwoThreeRuit} />
>>>>>>> c78c886f630316714de8935617efd658efd92f5a
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
