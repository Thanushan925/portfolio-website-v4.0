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
          <Button>View Projects</Button>
          <Button>Contact Me</Button>
        </div>

      </div>
    </section>
  );
}