import Container from "../ui/Container";
import Button from "../ui/Button";
import profile from "../../assets/images/profile.jpeg";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiExpress,
  SiMysql,
} from "react-icons/si";

import "../../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <Container>

        <div className="hero-grid">

          <div className="hero-left">

            <span className="hero-tag">
              👋 Hello, I'm
            </span>

            <h1>
              Faraz Ahmed
            </h1>

            <h2>
              Full Stack Web Developer
            </h2>

            <p>
              Passionate about building modern,
              responsive and scalable web applications
              with clean design and exceptional user
              experiences.
            </p>

            <div className="hero-buttons">

              <Button>
                View Projects
              </Button>

              <Button>
                Contact Me
              </Button>

            </div>

            <div className="tech-stack">

              <FaReact />

              <FaNodeJs />

              <SiExpress />

              <SiMysql />

              <FaGithub />

            </div>

          </div>

          <div className="hero-right">

            <div className="image-circle">

              <img
                src={profile}
                alt="Faraz Ahmed"
              />

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default Hero;