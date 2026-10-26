import SkillCategory from "../components/SkillCategory";
import { skillCategories } from "../data/skills";
import SectionTitle from "../components/SectionTitle";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section"
    >
      <div className="container">

        <SectionTitle
            themed="Garage"
            actual="Skills"
        />

        <p className="skills-subtitle">
          The tools, technologies, and creative systems I use to build software,
          tell stories, and solve problems.
        </p>

        <div className="skills-grid">

          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              category={category}
            />
          ))}

        </div>

      </div>
    </section>
  );
}