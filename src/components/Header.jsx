import "../styles/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h2 className="logo">Himanshu Singh</h2>

      <nav>
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
