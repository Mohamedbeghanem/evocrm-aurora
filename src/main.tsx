import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "@/components/landing/home-page";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
);
