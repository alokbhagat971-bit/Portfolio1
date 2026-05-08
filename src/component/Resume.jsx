import { FaDownload } from "react-icons/fa";
import resumeImg from "../Images/ResDp.png";
import "../assets/Resume.css";

function Resume() {
  return (
    <>
    <div className="resume-container">
      <div className="resume-left">
        <h1 className="resume-header">My Resume</h1>
        <p className="resume-text">
          You can download my resume by clicking the button below. It contains detailed information about my education, skills, projects, and work experience. Feel free to reach out if you have any questions or would like to discuss potential opportunities.
        </p>
        <a 
  href="https://drive.google.com/file/d/1M9yBkxlsucnvYUkj5uHAAEKB9TsORFYy/view?usp=sharing" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="resume-download-button"
>
  <FaDownload /> Download Resume
</a>
      </div>
      <div className="resume-right">
          <div className="resume-image-wrapper">
            <img src={resumeImg} alt="Resume Preview" className="resume-preview-img" />
          </div>
        </div>
    </div>
    </>
  );
}

export default Resume;