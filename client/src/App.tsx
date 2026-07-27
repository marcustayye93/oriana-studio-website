import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Studio from "./pages/Studio";
import Aftercare from "@/pages/Aftercare";
import Contact from "./pages/Contact";
import Book from "./pages/Book";


function Router() {
  return (
    <Layout>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/services"} component={Services} />
        <Route path={"/studio"} component={Studio} />
        <Route path={"/aftercare"} component={Aftercare} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/book"} component={Book} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
