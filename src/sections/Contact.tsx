
import SectionTitle from "../components/SectionTitle";

const emailUser = "thanush925";
const emailDomain = "hotmail.com";
const email = `${emailUser}@${emailDomain}`;

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle themed="Team Radio" actual="Contact" />

        <div className="contact-content">
          <h3 className="contact-heading">Let's connect.</h3>

          <p className="contact-text">
            I'm open to software development opportunities,
            interesting projects, and conversations about
            technology and creative work.
          </p>

          <div className="contact-links">
            <a className="contact-link" href={`mailto:${email}`}>
              Email ↗
            </a>

            <a
              className="contact-link"
              href="https://www.linkedin.com/in/thanushan925/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              className="contact-link"
              href="https://github.com/Thanushan925"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}