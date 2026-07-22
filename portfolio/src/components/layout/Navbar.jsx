import Container from "../ui/Container";
import "../../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <Container>
        <div className="nav-container">

          <a href="#" className="logo">
            F<span>A</span>
          </a>

          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#" className="resume-btn">
            Resume
          </a>

        </div>
      </Container>
    </header>
  );
}

export default Navbar;