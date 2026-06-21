import type { Project } from "../data/projects";

type Props = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <div className="project-card" onClick={onClick}>

      <p className="project-tag">{project.category}</p>

      <h3 className="project-title">{project.title}</h3>

      <p className="project-desc">{project.description}</p>

      <ul className="project-bullets">
        {project.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      <div className="project-meta">
        {project.tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>

    </div>
  );
}