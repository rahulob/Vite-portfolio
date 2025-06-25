import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

function Markdown({ children }) {
  const components = {
    a: ({ href, children, ...props }) => {
      // Check if the link is internal (starts with /)
      if (href && href.startsWith("/")) {
        return (
          <Link to={`/Vite-portfolio${href}`} {...props}>
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

  return <ReactMarkdown components={components}>{children}</ReactMarkdown>;
}

export default Markdown;
