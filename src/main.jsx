import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import { SocialLinks } from "./Components/SocialLinks.jsx";
import NotFound from "./Pages/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/Vite-portfolio" Component={Home} />
          <Route path="/Vite-portfolio/about" Component={About} />
          {/* <Route path="/about" element={<Markdown>{AboutMarkdown}</Markdown>} /> */}
          <Route path="*" Component={NotFound} />
        </Routes>
        <SocialLinks />
      </div>
    </BrowserRouter>
  </StrictMode>
);
