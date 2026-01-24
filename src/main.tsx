import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;
createRoot(root).render(<App />);

// Fade in after React mounts and initial paint settles
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    root.classList.add("ready");
  });
});
