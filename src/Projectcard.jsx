function ProjectCard({ title, description, stack, link }) {
  const tags = stack.split('·').map((t) => t.trim()).filter(Boolean)

  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tags">
        {tags.map((tag) => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>
      <a className="card-link" href={link} target="_blank" rel="noopener noreferrer">
        View on GitHub →
      </a>
    </div>
  )
}

export default ProjectCard