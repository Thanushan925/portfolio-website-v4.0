import { useState } from "react";
import DirectorCut from "../components/DirectorCut";

export default function Hero() {
  const [directorCutOpen, setDirectorCutOpen] = useState(false);

  return (
    <section className="fullscreen">
      <div className="container hero-content">
        <p className="hero-intro">Hi there, I'm</p>

        <h1
          className="hero-title"
          onClick={(event) => {
            if (event.detail === 3) {
              setDirectorCutOpen(true);
            }
          }}
        >
          Thanushan
        </h1>

        <div className="hero-divider" />

        <h2 className="hero-subtitle">Software Developer</h2>

        <p className="hero-description">
          Computer Science graduate focused on building reliable software
          and continuously improving through the Kaizen philosophy.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn">
            View Projects
          </a>

          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>

      {directorCutOpen && (
        <DirectorCut onClose={() => setDirectorCutOpen(false)} />
      )}
    </section>
  );
}
