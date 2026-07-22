function SectionHeading({ title, subtitle }) {
  return (
    <div style={{ marginBottom: "60px" }}>
      <p
        style={{
          color: "#3b82f6",
          fontWeight: 600,
          marginBottom: "10px",
        }}
      >
        {subtitle}
      </p>

      <h2
        style={{
          fontSize: "48px",
          fontWeight: 700,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

export default SectionHeading;