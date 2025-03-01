import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.tsx";
import SubscribeProvider from "./hooks/subscribeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <SubscribeProvider>
    <main className="w-full flex justify-center items-center h-screen">
      <App />
    </main>
  </SubscribeProvider>
);
