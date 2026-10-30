function ProjectCard(props) {
  return (
    <div className="project-card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="tech-list">
        {props.tech.map((item) => (
          <span key={item} className="tech-tag">{item}</span>
        ))}
      </div>
      <a href={props.github} target="_blank" rel="noopener noreferrer" className="project-link">
        View on GitHub →
      </a>
    </div>
  );
}

export default ProjectCard;