export type Project = {
  title: string;
  category: string;
  description: string;
  bullets: string[];
  tech: string[];
};

export const projects: Project[] = [
  {
    title: "Student Wellbeing 3D Conversational Agent",
    category: "Thesis Project",
    description:
      "Real-time AI conversational system with 3D avatar interaction focused on student wellbeing support.",
    bullets: [
      "Built async orchestration system for LLM inference, TTS, and avatar state sync",
      "Integrated Meta LLaMA 3 with session-based memory for coherent multi-turn conversations",
      "Achieved sub-350ms latency audio pipeline across multiple languages",
      "Deployed behind NGINX with SSL, reverse proxying, and stateless API design",
      "Honours thesis exploring AI-driven wellbeing systems with commercialization potential",
    ],
    tech: ["Python", "FastAPI", "LLaMA 3", "Three.js", "NGINX"],
  },

  {
    title: "AI-Powered Workout & Macro Tracker",
    category: "Full Stack System",
    description:
      "AI-driven fitness platform generating workouts and tracking nutrition with analytics dashboards.",
    bullets: [
      "Built full-stack platform with locally hosted LLM-generated workouts",
      "Designed REST APIs with Flask, SQLAlchemy, JWT auth, CSRF protection",
      "Containerized system using Docker Compose and deployed to VPS with NGINX + HTTPS",
      "Built analytics dashboards for workouts, calories, and macro tracking",
    ],
    tech: ["Python", "Flask", "Docker", "MySQL", "Ollama"],
  },

  {
    title: "E-Commerce Platform (Cookie Store)",
    category: "MEVN Stack App",
    description:
      "Full-stack e-commerce platform with real-time messaging and scalable architecture.",
    bullets: [
      "Built secure REST APIs for product, auth, and order management",
      "Implemented WebSockets for real-time customer-admin messaging",
      "Used Vuex state management and lazy loading for performance optimization",
      "Designed Mongoose schemas with cascading deletes and relational integrity",
    ],
    tech: ["MongoDB", "Express", "Vue", "Node.js", "WebSockets"],
  },

  {
    title: "Spirémon",
    category: "Game Project",
    description:
      "Turn-based roguelike inspired by Slay the Spire and Pokémon with strategic progression systems.",
    bullets: [
      "Designed node-based progression system with procedural encounters",
      "Built turn-based combat mechanics with scaling difficulty",
      "Focused on strategy, resource management, and replayability",
      "Developed as final Interactive Media course project",
    ],
    tech: ["Godot", "Game Design", "2D Systems"],
  },
];