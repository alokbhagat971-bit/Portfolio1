import { FaGithub, FaLinkedin,FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "../assets/Home.css";
import Dp from "../Images/Dp.png";

function Home(){
  return (
    <>
    <div className="container">
      <div className="left-section">
      <h2><p>Hi, I'm</p></h2>
        <h1><span className="Name">Alok Bhagat</span></h1>
      <h3><p>Electronics & Communication Engineering student AI/ML Enthusiast | Full Stack Developer</p></h3>
      <h3><p>I build innovative web applications and solve complex problems with code.</p></h3>
      <div className="btn-group">
            <a 
              href="https://github.com/alokbhagat971-bit?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn"
            >
              View Projects
            </a>

            <a 
              href="https://drive.google.com/file/d/1M9yBkxlsucnvYUkj5uHAAEKB9TsORFYy/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn_res"
            >
              Download Resume
            </a>
          </div>
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
      <div className="right-section">
        <img src={Dp} alt="Profile" className="profile-img" />
      </div>
      </div>
    </>
  );
}

export default Home;