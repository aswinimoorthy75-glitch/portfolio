import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <p className="about-text">
        I'm a final-year Computer and Communication Engineering student who
        enjoys building full-stack applications with Java, Spring Boot and
        MySQL. Through two UI/UX internships, I learned to design interfaces
        with users in mind, and I bring that eye for design to my development
        work. I'm looking for a Software Developer / Java Developer role.
      </p>

      <div className="edu-card">
        <h3>B.E. Computer and Communication Engineering</h3>
        <p>Sri Sairam Institute of Technology, Chennai</p>
        <p>2023 – 2027 · CGPA: 7.96</p>
      </div>
    </section>
  );
}

export default About;