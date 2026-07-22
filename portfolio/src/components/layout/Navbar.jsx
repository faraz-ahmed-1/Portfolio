import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import "../../styles/navbar.css";
import Container from "../ui/Container";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <Container>
              <div className="nav-container">

      <a href="#" className="logo">
        F<span>A</span>
      </a>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>
      </Container>

    </header>
  );
}

export default Navbar;