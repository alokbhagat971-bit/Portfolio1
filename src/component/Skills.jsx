import "../assets/Skills.css";
import { 
  FaCodeBranch, FaLightbulb, FaGithub, 
  FaBrain, FaComments, FaUsers, FaClock, FaSync 
} from "react-icons/fa";

function Skills() {
  const technicalSkills = [
    { name: "HTML", level: "95%" },
    { name: "CSS", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "React", level: "80%" },
    { name: "Node.js", level: "75%" },
    { name: "C/C++", level: "80%" },
    { name: "Java", level: "70%" },
  ];

  const otherSkills = [
    {name:"Problem Solving", icon: <FaLightbulb size={20} />},
    {name:"Communication", icon: <FaComments size={20} />},
    {name:"Time Management", icon: <FaClock size={20} />},
    {name:"Adaptability", icon: <FaSync size={20} />},
    {name:"Data Structures & Algorithms", icon: <FaBrain size={20} />},
    {name:"AI/ML Basics", icon: <FaCodeBranch size={20} />},
    {name:"Git & Github", icon: <FaGithub size={20} />},
    {name:"Team Collaboration", icon: <FaUsers size={20} />}
  ];

  return (
    <div className="skills-container">
      <h1 className="skills-head">My Skills</h1>
      <div className="skills-list">
        <div className="skill-col1">
          <h2>Technical Skills</h2>
          {technicalSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}</span>
              </div>
              <div className="progress-line">
                <span style={{ width: skill.level }}></span>
              </div>
            </div>
          ))}
        </div>

        <div className="skill-col2">
          <h2>Other Skills</h2>
          <div className="skills-grid">
            {otherSkills.map((skill, index) => (
              <div className="skill-box" key={index}>
                <span className="icon">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;