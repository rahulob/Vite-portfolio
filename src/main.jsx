import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import { SocialLinks } from "./Components/SocialLinks.jsx";
import NotFound from "./Pages/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <div className="app">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          {/* <Route path="/about" element={<Markdown>{AboutMarkdown}</Markdown>} /> */}
          <Route path="*" Component={NotFound} />
        </Routes>
        <SocialLinks />
      </div>
    </HashRouter>
  </StrictMode>
);
