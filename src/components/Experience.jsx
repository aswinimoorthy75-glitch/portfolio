import "./Experience.css";

const experiences = [
  {
    role: "UI/UX Design Intern (Figma)",
    company: "Sri Sairam Techno Incubator",
    date: "Jan 2026",
    points: [
      "Created UI screens and wireframes in Figma for application prototypes.",
      "Learned UI/UX design principles, prototyping and user-centered design through practical tasks.",
    ],
  },
  {
    role: "UI/UX Intern",
    company: "Femtosoft Technologies Pvt. Ltd.",
    date: "2024 – 2025",
    points: [
      "Collaborated with the design team to create intuitive, easy-to-navigate interface layouts for client projects.",
      "Produced wireframes, low-fidelity prototypes and user flows to improve usability.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.company} className="timeline-item">
            <h3>{exp.role}</h3>
            <p className="company">{exp.company}</p>
            <span className="date">{exp.date}</span>
            <ul>
              {exp.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;