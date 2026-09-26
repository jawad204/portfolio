import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ProjectCard from './Projectcard'

function App() {
  return (
    <>
      <nav>
        <a href="#hero">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <section id="hero">
        <h1>Jawad Bassam Shalabi</h1>
        <p>software & ai engineer</p>
        <p>CIS grad · Full-stack + AI</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
        <ProjectCard
    title="E-commerce Platform"
    description="A full-stack e-commerce system with product listings, cart, and checkout flow."
    stack="Django-drf · React · jwt · stripejs · typescipt · postgresql"
    link="https://github.com/jawad204/ecommerce_fullstack"
  />
        <ProjectCard
    title="Patient-Friendly Diabetes RAG System"
    description="A retrieval-augmented Q&A system over NIDDK diabetes content, built to give patients clear answers grounded in trusted medical sources."
    stack="Python · Qdrant (Docker) · Embeddings · Hybrid retrieval + reranking · Fastapi"
    link="https://github.com/jawad204/rag-diabetes"
  />
        <ProjectCard
    title="Quotation Workflow Automation Agent"
    description="An agentic tool that reads quotation PDFs, tracks confirmation emails, fills the data into Excel, and generates material requisitions automatically."
    stack="Python · PDF extraction · Excel automation · desktop-app"
    link="https://github.com/jawad204/fire-alarm-automation"
  />
        <ProjectCard
    title="Photo Management System (Graduation Project)"
    description="A system for photographers to upload photo sets, where an ML classifier automatically sorts good vs. bad shots — trained on a dataset gathered from a real studio."
    stack="Python · OpenCV · Native-Django · Vanilla JS · sqlite"
    link="https://github.com/jawad204/photos-management-classification"
  />
      
      
</div>
      </section>

      <section id="about">
        <h2>About</h2>
        <p>
    I'm a Computer Information Systems graduate from Yarmouk University,
    focused on full-stack development and applied Ai. I like building
    practical tools — from automating real business workflows to
    retrieval-augmented systems — and I'm currently deepening my Linux,
    LLMs, LLMOps and agentic ai.
  </p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:jawadshalabi04@gmail.com">jawadshalabi04@gmail.com</a></p>
  <p>GitHub: <a href="https://github.com/jawad204" target="_blank" rel="noopener noreferrer">github.com/jawad204</a></p>
  <p>LinkedIn: <a href="https://www.linkedin.com/in/jawad-shalabi-18038540a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSi%2BdWxFBRPK87OZIQjDs2w%3D%3D" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </section>
    </>
  )
}

export default App