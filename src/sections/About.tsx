import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div className="about-left">
          <SectionTitle
            themed="Driver Profile"
            actual="About"
          />

          <p className="about-text">
            Computer Science graduate focused on building reliable systems,
            strong fundamentals, and continuous improvement through Kaizen.
          </p>
        </div>

        <div className="about-right">
          <div className="stat-card">
            <p className="stat-label">Focus</p>
            <p className="stat-value">Software & AI</p>
          </div>

          <div className="stat-card">
            <p className="stat-label">Education</p>
            <p className="stat-value">Computer Science (Honours)</p>
          </div>

          <div className="stat-card">
            <p className="stat-label">Off-Track Activities</p>
            <p className="stat-value">
              Filmmaking · Gaming · Storytelling
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}