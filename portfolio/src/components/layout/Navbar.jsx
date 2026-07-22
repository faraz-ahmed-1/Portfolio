import Container from "../ui/Container";

function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 999,
        backdropFilter: "blur(20px)",
        background: "rgba(3,7,18,.6)",
        borderBottom: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <Container>
        <div
          style={{
            height: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "Sora",
              fontWeight: 700,
            }}
          >
            FA
          </h2>

          <nav
            style={{
              display: "flex",
              gap: "35px",
            }}
          >
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;