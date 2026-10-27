import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="fullscreen">
      <div className="container hero-content">

        <p className="hero-intro">Hi there, I'm</p>
        <h1 className="hero-title">Thanushan</h1>
        <div className="hero-divider" />

        <h2 className="hero-subtitle">Software Developer</h2>
        <p className="hero-description">Computer Science graduate focused on building reliable software and continuously improving through the Kaizen philosophy.</p>

        <div className="hero-actions">
          <a href="#projects" className="btn">
            View Projects
          </a>

          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}