import './App.css'
import ProjectCard from './Projectcard'

function App() {
  return (
    <>
      <nav>
        <div className="nav-inner">
          <span className="nav-brand">Jawad Shalabi</span>
          <div className="nav-links">
            <a href="#hero">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section id="hero">
        <span className="eyebrow">Open to junior roles</span>
        <h1>Jawad Shalabi</h1>
        <p className="hero-role">Software &amp; AI Engineer</p>
        <p className="hero-sub">
          Computer Information Systems graduate focused on full-stack
          development and applied AI.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">View projects</a>
          <a className="btn btn-secondary" href="#contact">Contact me</a>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <ProjectCard
            title="E-commerce Platform"
            description="A full-stack e-commerce system with product listings, cart, and checkout flow."
            stack="Django REST Framework · React · TypeScript · JWT · Stripe.js · PostgreSQL"
            link="https://github.com/jawad204/ecommerce_fullstack"
          />
          <ProjectCard
            title="Patient-Friendly Diabetes RAG System"
            description="A retrieval-augmented Q&A system over NIDDK diabetes content, built to give patients clear answers grounded in trusted medical sources."
            stack="Python · Qdrant (Docker) · Embeddings · Hybrid retrieval + reranking · FastAPI"
            link="https://github.com/jawad204/rag-diabetes"
          />
          <ProjectCard
            title="Pull Review Agent"
            description="Autonomous PR Review Agent, An event-driven GitHub agent built with FastAPI and LangGraph that analyzes incoming pull requests and posts automated code reviews in seconds.."
            stack="Python · FastAPI · LangGraph · LangSmith · GitHub REST API & Webhooks · Smee.io "
            link="https://github.com/jawad204/rag-diabetes"
          />
          <ProjectCard
            title="Quotation Workflow Automation Agent"
            description="An agentic tool that reads quotation PDFs, tracks confirmation emails, fills the data into Excel, and generates material requisitions automatically."
            stack="Python · PDF extraction · Excel automation · Desktop app"
            link="https://github.com/jawad204/fire-alarm-automation"
          />
          <ProjectCard
            title="Photo Management System (Graduation Project)"
            description="A system for photographers to upload photo sets, where an ML classifier automatically sorts good vs. bad shots, trained on a dataset gathered from a real studio."
            stack="Python · OpenCV · Django · Vanilla JS · SQLite"
            link="https://github.com/jawad204/photos-management-classification"
          />
        </div>
      </section>

      <section id="about">
        <h2>About</h2>
        <p>
          I'm a Computer Information Systems graduate from Yarmouk University,
          focused on full-stack development and applied AI. I like building
          practical tools, from automating real business workflows to
          retrieval-augmented systems, and I'm currently deepening my skills
          in Linux, LLMs, MLOps and agentic AI.
        </p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <ul className="contact-list">
          <li>
            <span className="contact-label">Email</span>
            <a href="mailto:jawadshalabi04@gmail.com">jawadshalabi04@gmail.com</a>
          </li>
          <li>
            <span className="contact-label">GitHub</span>
            <a href="https://github.com/jawad204" target="_blank" rel="noopener noreferrer">github.com/jawad204</a>
          </li>
          <li>
            <span className="contact-label">LinkedIn</span>
            <a href="https://www.linkedin.com/in/jawad-shalabi-18038540a/" target="_blank" rel="noopener noreferrer">Jawad Shalabi</a>
          </li>
        </ul>
      </section>
    </>
  )
}

export default App