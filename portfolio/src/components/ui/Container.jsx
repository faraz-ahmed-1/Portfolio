function Container({ children }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 24px",
      }}
    >
      {children}
    </div>
  );
}

export default Container;