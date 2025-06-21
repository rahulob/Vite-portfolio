import ReactMarkdown from "react-markdown";
import AboutMarkdown from "../Markdown/About.md";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      <ReactMarkdown>{AboutMarkdown}</ReactMarkdown>
    </div>
  );
}

export default App;
