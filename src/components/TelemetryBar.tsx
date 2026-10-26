import { useEffect, useState } from "react";

export default function TelemetryBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percent = (scrollTop / docHeight) * 100;

      setProgress(percent);
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress);

    return () =>
      window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="telemetry-container">
      <div
        className="telemetry-fill"
        style={{ width: `${progress}%` }}
      />
      <div className="telemetry-label">
        LAP COMPLETED {Math.round(progress)}%
      </div>
    </div>
  );
}