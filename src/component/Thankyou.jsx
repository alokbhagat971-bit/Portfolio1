import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "../assets/Thankyou.css";

function Thankyou() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
    <div className="thankyou-section">
      <div className="thankyou-container">
        <h1>Thanks for <span className="visit">visiting!</span></h1>
    <h3 className="thankyou-message">I appreciate your time and interest in my work.</h3>
    <div className="social-icons">
        <a href="https://github.com/alokbhagat971-bit"
        target="_blank"
        rel="noopener noreferrer">
          <FaGithub size={25} />
        </a>
        <a href="https://www.linkedin.com/in/alok-bhagat-06a951256/"
        target="_blank"
        rel="noopener noreferrer">
          <FaLinkedin size={25} />
        </a>
        <a href="https://leetcode.com/u/AlokBhagat/"
        target="_blank"
        rel="noopener noreferrer">
          <SiLeetcode size={25} />
        </a>
        <a href="mailto:alokbhagat971@gmail.com"
        target="_blank"
        rel="noopener noreferrer">
          <FaEnvelope size={25} />
        </a>
      </div>
      </div>
      <div className="footer-bottom">
  <div className="footer-empty"></div> 
  <p>© 2026 Alok Bhagat. All rights reserved.</p>
  <div className="footer-action">
    <button className="scroll-top" onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  </div>
</div>
</div>
    </>
  );
}

export default Thankyou;