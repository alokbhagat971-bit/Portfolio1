import {
  FaUser,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCalendarAlt
} from "react-icons/fa";
import "../assets/About.css"; 
import ADp from "../Images/AboutDp.png";

function About() {
  return (
    <div className="section"> 
      <div className="about-header">
        <h1 className="about-head">About Me</h1>
      </div>
      <div className="about-container">

        <div className="about-right">
          <p className="about-text">
            I am a passionate Electronics & Communication Engineering student with a strong interest in AI/ML and Full Stack Development. I enjoy building innovative web applications and solving complex problems with code. With a solid foundation in programming and a keen eye for design, I strive to create seamless user experiences. I am always eager to learn new technologies and collaborate on exciting projects that push the boundaries of what's possible.
          </p>

          <div className="about-details">
            <div className="about-item">
              <FaUser size={20} />
              <span className="about-item-text">Name: Alok Bhagat</span>
            </div>
            <div className="about-item">
              <FaMapMarkerAlt size={20} />
              <span className="about-item-text">Location: Kolkata, India</span>
            </div>
            <div className="about-item">
              <FaGraduationCap size={20} />
              <span className="about-item-text">Education: B.Tech in Electronics & Communication</span>
            </div>
            <div className="about-item">
              <FaCalendarAlt size={20}/>
              <span className="about-item-text">Year: 2nd Year</span>
            </div>
          </div>
        </div>

        <div className="about-left">
          <img src={ADp} alt="About Profile" className="about-profile-img" />
        </div>

      </div>
    </div>
  );
}

export default About;