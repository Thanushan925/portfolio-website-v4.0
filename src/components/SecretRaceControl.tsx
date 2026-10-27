import { useEffect, useState } from "react";

const SECRET_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
];

export default function SecretRaceControl() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    let progress = 0;

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target;

      // Ignore the sequence while typing in form fields.
      if (
        target instanceof HTMLElement &&
        (target.isContentEditable ||
          ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
      ) {
        return;
      }

      const key = event.key;

      if (key === SECRET_CODE[progress]) {
        progress += 1;
      } else {
        // Restart the sequence if the first key is pressed again.
        progress = key === SECRET_CODE[0] ? 1 : 0;
      }

      if (progress === SECRET_CODE.length) {
        setIsUnlocked(true);
        progress = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!isUnlocked) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsUnlocked(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isUnlocked]);

  if (!isUnlocked) return null;

  return (
    <div
      className="race-secret"
      role="dialog"
      aria-modal="true"
      aria-labelledby="race-secret-title"
      onClick={() => setIsUnlocked(false)}
    >
      <div
        className="race-secret-panel"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="race-secret-eyebrow">
          RACE CONTROL // CLASSIFIED
        </p>

        <div className="race-secret-light" aria-hidden="true" />

        <h2 id="race-secret-title">OVERTAKE MODE</h2>

        <p className="race-secret-message">
          You weren't supposed to find this.
        </p>

        <div className="race-secret-status">
          <span>DRS</span>
          <span>DEPLOYED</span>
          <span>100%</span>
        </div>

        <button
          className="race-secret-close"
          onClick={() => setIsUnlocked(false)}
          autoFocus
        >
          RETURN TO THE GRID ↗
        </button>

        <p className="race-secret-hint">ESC TO EXIT</p>
      </div>
    </div>
  );
}