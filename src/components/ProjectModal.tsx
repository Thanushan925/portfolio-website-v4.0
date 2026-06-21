import type { Project } from "../data/projects";

type Props = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <div className="modal-overlay" onClick={onClose}>

      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>

        <div className="modal-header">
          <p className="modal-tag">{project.category}</p>

          <button className="modal-close" onClick={onClose}>
            ESC / CLOSE
          </button>
        </div>

        <h2 className="modal-title">{project.title}</h2>

        <p className="modal-desc">{project.description}</p>

        <div className="modal-section">
          <h3>Telemetry Log</h3>

          <ul>
            {project.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>

        <div className="modal-tech">
          {project.tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>

      </div>
    </div>
  );
}