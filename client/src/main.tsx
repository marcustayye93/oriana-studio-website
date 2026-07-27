import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Opt-in flag for entrance animations: `.rise` elements are only hidden when
// JS is actually running (see index.css). Keeps content visible in WebViews
// that block or delay scripts.
document.documentElement.classList.add("js");

createRoot(document.getElementById("root")!).render(<App />);
