function ProjectCard({ title, description, stack, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="stack">{stack}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View on GitHub →</a>
    </div>
  )
}

export default ProjectCard