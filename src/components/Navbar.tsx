
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
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);

    let animationFrame = 0;

    const updateActiveSection = () => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        const activationLine = window.innerHeight * 0.4;

        let currentSection = sections[0];

        for (const section of sections) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= activationLine) {
            currentSection = section;
          } else {
            break;
          }
        }

        if (currentSection) {
          setActiveSection(currentSection.id);
        }
      });
    };

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveSection);

    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      cancelAnimationFrame(animationFrame);
    };
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
