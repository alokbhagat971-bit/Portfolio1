import "../assets/Education.css"

function Education(){
  return (
    <>
    <div className="education-container">
      <h1 className="education-title">My Education</h1>
      <div className="education-item">
        <h2 className="education-degree">B.Tech in Electronics & Communication</h2>
        <p className="education-institution">National Institute of Technology, Durgapur</p>
        <p className="education-year">2024 - Present | CGPA: 8.53/10</p>
        <h2 className="education-degree">12th(Higher Secondary)</h2>
        <p className="education-institution">Authpur National Model Higher Secondary School</p>
        <p className="education-year">2023 - 2024 | Percentage: 90.5%</p>
        <h2 className="education-degree">10th(Secondary Education)</h2>
        <p className="education-institution">Authpur National Model Higher Secondary School</p>
        <p className="education-year">2021 - 2022 | Percentage: 96.1%</p>
      </div>
    </div>
    </>
  );
}

export default Education;