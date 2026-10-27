import { useEffect, useState } from "react";

export default function CinematicSpotlight() {
  const [active, setActive] = useState(false);
  const [position, setPosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Shift") setActive(true);
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Shift") setActive(false);
    };

    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleBlur = () => setActive(false);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  if (!active) return null;

  return (
    <div
      className="cinematic-spotlight"
      style={{
        "--spotlight-x": `${position.x}px`,
        "--spotlight-y": `${position.y}px`,
      } as React.CSSProperties}
      aria-hidden="true"
    />
  );
}