import "./Achievements.css";

const achievements = [
  "Finalist, Smart India Hackathon (SIH), a national-level innovation competition",
  "Finalist in an inter-college hackathon on SDGs, recognized for a sustainability-driven solution",
  "Conducted a Figma UI/UX design workshop for 250 students",
  "Organizing team member for Chakravyuha, a department-level AI hackathon",
  "MAGIC member of Unnat Bharat Abhiyan (UBA)",
];

const certifications = [
  "Introduction to Internet of Things – NPTEL, IIT Madras (Elite)",
  "Programming in Java – NPTEL",
  "Big Data – Capstone Project – UC San Diego (Coursera)",
  "Cloud Computing Fundamentals – University of Pittsburgh (Coursera)",
  "Human Computer Interaction – BITS Pilani (Coursera)",
  "Power BI for Data Science and Analytics – Edureka (Coursera)",
  "Cryptography, Network Security, and Application Security – Packt (Coursera)",
];

function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <h2 className="section-title">Achievements & Certifications</h2>
      <div className="achievements-grid">
        <div className="info-card">
          <h3>🏆 Achievements</h3>
          <ul>
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="info-card">
          <h3>📜 Certifications</h3>
          <ul>
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Achievements;