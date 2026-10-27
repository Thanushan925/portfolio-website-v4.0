import { useEffect } from "react";

type DirectorCutProps = {
  onClose: () => void;
};

export default function DirectorCut({ onClose }: DirectorCutProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="director-cut"
      role="dialog"
      aria-modal="true"
      aria-labelledby="director-cut-title"
      onClick={onClose}
    >
      <div
        className="director-cut-content"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="director-cut-label">
          A PERSONAL PRODUCTION
        </p>

        <div className="director-cut-line" />

        <h2 id="director-cut-title">
          THE
          <br />
          DIRECTOR'S CUT
        </h2>

        <p className="director-cut-subtitle">
          Every frame tells a story.
        </p>

        <div className="director-cut-credit">
          <span>CREATED BY</span>
          <span>THANUSHAN</span>
        </div>

        <button
          className="director-cut-close"
          onClick={onClose}
          autoFocus
        >
          BACK TO THE PORTFOLIO
        </button>

        <p className="director-cut-hint">
          CLICK ANYWHERE OUTSIDE OR PRESS ESC
        </p>
      </div>
    </div>
  );
}
