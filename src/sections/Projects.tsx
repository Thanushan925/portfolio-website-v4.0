import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import type { Project } from "../data/projects";
import SectionTitle from "../components/SectionTitle";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section">
      <div className="container">

        <SectionTitle
            themed="Race Results"
            actual="Projects"
        />

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}