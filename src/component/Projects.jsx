import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import NDp from "../Images/NotesDp.png";
import TDp from "../Images/trackerDp.png";
import LDp from "../Images/Ludo.png";
import WDp from "../Images/weathrDp.png";
import "../assets/Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Notes App",
      description: "A note-taking app with responsive UI built using MERN stack.",
      languages: ["React", "Node.js", "Express", "MongoDB"],
      image: NDp,
      live: "https://your-live-link.com",
      github: "https://github.com/alokbhagat971-bit/Notes-App"
    },
    {
      id: 2,
      title: "Tracker App",
      description: "A task tracking app with real-time updates and collaboration features.",
      languages: ["React", "Node.js", "Express", "MongoDB"],
      image: TDp,
      live: "https://your-live-link.com",
      github: "https://github.com/alokbhagat971-bit/Expense-Manager"
    },
    {
      id: 3,
      title: "Ludo Game",
      description: "A classic board game implemented with interactive UI.",
      languages: ["HTML", "CSS", "JavaScript"],
      image: LDp,
      live: "https://your-live-link.com",
      github: "https://github.com/alokbhagat971-bit/Ludo_Game"
    },
    {
      id: 4,
      title: "Weather App",
      description: "A weather forecasting app with location-based services.",
      languages: ["HTML", "CSS", "JavaScript"],
      image: WDp,
      live: "https://your-live-link.com",
      github: "https://github.com/alokbhagat971-bit/Weather-app"
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-header">My Projects</h1>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-img-wrapper">
              <img src={project.image} alt={project.title} className="project-img" />
            </div>
            
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.languages.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-btns">
                <a href={project.live} target="_blank" rel="noreferrer" className="btn-live">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-git">
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="view-more-container">
        <a href="https://github.com/alokbhagat971-bit" target="_blank" rel="noopener noreferrer" className="view-more-btn">
          View More Projects
        </a>
      </div>
    </div>
  );
}

export default Projects;