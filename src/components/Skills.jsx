import "./Skills.css";

const skills = [
  "Java", "Spring Boot", "React", "HTML", "CSS",
  "SQL", "MySQL", "Git", "GitHub", "Figma",
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <span key={skill} className="skill-chip">{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;