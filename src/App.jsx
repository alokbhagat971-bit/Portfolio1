import Home from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import Certificate from "./component/Certificate";
import Education from "./component/Education";
import Resume from "./component/Resume";
import Thankyou from "./component/Thankyou";
import Projects from "./component/Projects";
import "./assets/App.css";

function App(){
  return (
    <>
    <nav className="navbar">
      <div className="logo">&lt;Alok Bhagat /&gt;</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certificate">Certificate</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#resume">Resume</a></li>
      </ul>
    </nav>
    <section id="home" className="section">
      <Home />
    </section>
    <section id="about" className="section">
      <About />
    </section>
    <section id="skills" className="section">
      <Skills />
    </section>
    <section id="projects" className="section">
      <Projects />
    </section>
    <section id="certificate" className="section">
      <Certificate />
    </section>
    <section id="education" className="section">
      <Education />
    </section>
    <section id="resume" className="section">
      <Resume />
    </section>
    <section id="thankyou" className="section">
      <Thankyou />
    </section>
    </>
  );
}

export default App;