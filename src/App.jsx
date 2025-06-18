import ReactMarkdown from 'react-markdown';
import { FaWhatsapp, FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa';

function App() {
  const markdown = `
  # Rahul Gupta
  Software engineer, photographer and maker of things. I write about tech, trying to better myself and fatherhood. 
  
  Based in Bengaluru, India. [More about me](https://rahulob.com/about)
  ***
  ## Projects
  - [Day by day](https://github.com/remarkjs/react-markdown) - A Day by Day visualisation of my life
  - Calendar of Wisdom - Daily insight and reflections from A Calendar of Wisdom by Leo Tolstoy
  - Goggins Blocker - A Chrome extension to block unproductive websites featuring David Goggins
  - Jurnl - A stream of consciousness, ephemeral text editors
  - Oxygenie - Mac app to check air quality at your current location
  More projects can be found here
  ***
  `;
  return (
    <div className="app">
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
      <div className='social-links'>
        <a href="https://github.com/rahulob" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={32}/>
        </a>
        <a href="https://twitter.com/rahulob_" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter size={32}/>
        </a>
        <a href="https://www.linkedin.com/in/rahulob" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={32}/>
        </a>
        <a href="https://wa.me/916006077943" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp size={32}/>
        </a>

      </div>
    </div>
  )
}

export default App
