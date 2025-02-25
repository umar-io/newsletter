import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <main className="w-full flex justify-center items-center h-dvh">
    <App />
  </main>
);
