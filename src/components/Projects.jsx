import "../styles/Projects.scss";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce App",
      desc: "MERN stack app with authentication, cart, orders & payments."
    },
    {
      title: "Weather Crop Prediction",
      desc: "Full-stack app with ML-based crop recommendations."
    },
    {
      title: "Portfolio Website",
      desc: "Modern, responsive portfolio using React & SCSS."
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="grid">
        {projects.map((p, i) => (
          <div key={i} className="card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
