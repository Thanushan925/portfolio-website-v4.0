import { useEffect, useState } from "react";

export default function Navbar() {
  const links = [
    {
      id: "about",
      f1: "Driver Profile",
      actual: "About",
    },
    {
      id: "projects",
      f1: "Race Results",
      actual: "Projects",
    },
    {
      id: "skills",
      f1: "Garage",
      actual: "Skills",
    },
    {
      id: "contact",
      f1: "Team Radio",
      actual: "Contact",
    },
  ];

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className={`nav-link ${
            activeSection === link.id ? "active" : ""
          }`}
        >
          <span className="nav-f1">{link.f1}</span>
          <span className="nav-real">{link.actual}</span>
        </a>
      ))}
    </nav>
  );
}