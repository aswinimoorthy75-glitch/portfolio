import ProjectCard from "./ProjectCard";
import "./Projects.css";

const projects = [
  {
    title: "Student Management System",
    description: "A Java desktop application for managing student, faculty, course, marks, attendance and fee records, with role-based dashboards for Admin, Faculty and Student users.",
    tech: ["Java (Swing)", "JDBC", "MySQL"],
    github: "https://github.com/aswinimoorthy75-glitch/student-management-system",
  },
  {
    title: "QuickBite",
    description: "A full-stack food ordering platform with a layered Spring Boot backend and REST API, plus a frontend to browse menus, build a cart and place orders.",
    tech: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "REST API"],
    github: "https://github.com/aswinimoorthy75-glitch/QuickBite",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;