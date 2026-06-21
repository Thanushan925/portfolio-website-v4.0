import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import type { Project } from "../data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="section">
      <div className="container">

        <h2 className="section-title">Race Results</h2>

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