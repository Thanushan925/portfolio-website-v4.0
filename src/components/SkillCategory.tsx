import type { SkillCategory as SkillCategoryType } from "../data/skills";

type Props = {
  category: SkillCategoryType;
};

export default function SkillCategory({ category }: Props) {
  return (
    <div className="skill-category">

      <h3>{category.title}</h3>

      <div className="skill-chip-container">

        {category.skills.map((skill) => (
          <span
            key={skill}
            className="skill-chip"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>
  );
}