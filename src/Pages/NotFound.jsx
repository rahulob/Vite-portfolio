import React from "react";
import Markdown from "../Components/Markdown";

export default function NotFound() {
  const markdown = `
  # 404 - Page Not Found
  The page you are looking for does not exist

  [Back to Home](/)
  
  ---
  `;
  return <Markdown>{markdown}</Markdown>;
}
