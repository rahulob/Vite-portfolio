import ReactMarkdown from "react-markdown";
import { Link, useLocation } from "react-router-dom";

function Markdown({ children }) {
  const components = {
    a: ({ href, children, ...props }) => {
      // Check if the link is internal (starts with /)
      if (href && href.startsWith("/")) {
        return (
          <Link to={href} {...props}>
            {children}
          </Link>
        );
      }
      // For external links, render as regular anchor tag
      return (
        <a href={href} {...props}>
          {children}
        </a>
      );
    },
  };

  return (
    <div className="markdown">
      {useLocation().pathname !== "/" && (
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      )}
      <ReactMarkdown components={components}>{children}</ReactMarkdown>
    </div>
  );
}

export default Markdown;
