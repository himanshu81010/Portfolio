import "../styles/Hero.scss";
const Hero = () => {
  return (
    <section id="home" className="hero">
      <h1>
        Hi, I'm <span>Himanshu Singh</span>
      </h1>

      <h2>MERN Stack Developer</h2>

      <p>
        3+ years of experience building scalable full-stack applications
        using MongoDB, Express, React, and Node.js.
      </p>

      <div className="buttons">
        <a href="#projects" className="btn primary">View Projects</a>
          <a
           href="/Himanshu_Singh-cv.pdf"
          download
          className="btn primary"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
