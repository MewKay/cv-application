import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import "./styles/reset.css";
import "./styles/style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <MainSection />
  </StrictMode>
);
