/* eslint-disable react/prop-types */
import Section from "./Section";

const Skills = ({ skills }) => {
  return (
    <Section title="Skills">
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill.name} - {skill.percent}
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Skills;