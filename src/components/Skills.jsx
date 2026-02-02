import "../styles/Skills.scss";

const Skills = () => {
  const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Redux",
    "REST APIs",
    "Git & GitHub"
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="grid">
        {skills.map((skill, i) => (
          <div key={i} className="card">{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
