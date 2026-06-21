export default function About() {
const birthDate = new Date(2002, 8, 1);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  return (
    <section className="section">
      <div className="container about-grid">

        <div className="about-left">
          <h2 className="section-title">Driver Profile</h2>

          <p className="about-text">
            Computer Science graduate focused on building reliable systems, strong fundamentals, and continuous improvement through Kaizen.
          </p>
        </div>

        <div className="about-right">
          <div className="stat-card">
            <p className="stat-label">XP Level</p>
            <p className="stat-value">{age}</p>
          </div>

          <div className="stat-card">
            <p className="stat-label">Projects Completed</p>
            <p className="stat-value">8+</p>
          </div>

          <div className="stat-card">
            <p className="stat-label">Focus</p>
            <p className="stat-value">Full Stack</p>
          </div>
        </div>

      </div>
    </section>
  );
}