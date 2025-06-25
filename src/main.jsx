import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import { SocialLinks } from "./Components/SocialLinks.jsx";
import Markdown from "./Components/Markdown.jsx";
import AboutMarkdown from "./Markdown/About.md";
import HomeMarkdown from "./Markdown/Home.md";
import NotFoundMarkdown from "./Markdown/NotFound.md";
import ProjectsMarkdown from "./Markdown/Projects.md";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Markdown>{HomeMarkdown}</Markdown>} />
          <Route path="/about" element={<Markdown>{AboutMarkdown}</Markdown>} />
          <Route
            path="/projects"
            element={<Markdown>{ProjectsMarkdown}</Markdown>}
          />
          <Route path="*" element={<Markdown>{NotFoundMarkdown}</Markdown>} />
        </Routes>
        <SocialLinks />
      </div>
    </HashRouter>
  </StrictMode>
);
