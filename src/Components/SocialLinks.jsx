import { FaWhatsapp, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://github.com/rahulob"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub size={32} />
      </a>
      <a
        href="https://www.linkedin.com/in/rahulob"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={32} />
      </a>
      <a
        href="https://x.com/rahulob_"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaXTwitter size={32} />
      </a>
      <a
        href="https://wa.me/916006077943"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
      <a
        href="https://youtube.com/@Gearless_Gainz"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FaYoutube size={32} />
      </a>
    </div>
  );
};
