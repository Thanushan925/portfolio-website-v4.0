import { useEffect } from "react";

import Navbar from "./components/Navbar";
import TelemetryBar from "./components/TelemetryBar";
import SecretRaceControl from "./components/SecretRaceControl";
import CinematicSpotlight from "./components/CinematicSpotlight";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    const elements = document.querySelectorAll<HTMLElement>(
      [
        ".hero-intro",
        ".hero-title",
        ".hero-divider",
        ".hero-subtitle",
        ".hero-description",
        ".hero-actions",
        ".section-title-wrapper",
        ".about-grid",
        ".about-text",
        ".project-card",
        ".skills-subtitle",
        ".skill-category",
        "#contact .contact-content",
      ].join(",")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element, index) => {
      element.classList.add("cinematic-reveal");
      element.style.setProperty(
        "--reveal-delay",
        `${(index % 4) * 90}ms`
      );
      observer.observe(element);
    });

    document.body.classList.add("scroll-reveal-ready");

    return () => {
      observer.disconnect();
      document.body.classList.remove("scroll-reveal-ready");

      elements.forEach((element) => {
        element.classList.remove("cinematic-reveal", "is-visible");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return (
    <>
      <TelemetryBar />
      <Navbar />
      <SecretRaceControl />
      <CinematicSpotlight />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;