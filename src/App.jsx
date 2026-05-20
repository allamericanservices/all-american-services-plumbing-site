
export default function App() {
  return (
    <main style={{ padding: "40px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
        All American Services & Plumbing
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        Reliable plumbing services you can count on.
      </p>

      <a
        href="tel:5127349313"
        style={{
          background: "#dc2626",
          color: "white",
          padding: "12px 22px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          display: "inline-block",
          marginBottom: "35px"
        }}
      >
        Call 512-734-9313
      </a>

      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Services</h2>

      <section style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gap: "18px" }}>
        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "12px" }}>
          <h3>Emergency Plumbing</h3>
          <p>Fast plumbing help when you need it.</p>
        </div>

        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "12px" }}>
          <h3>Drain Cleaning</h3>
          <p>Clog removal and drain service.</p>
        </div>

        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "12px" }}>
          <h3>Water Heaters</h3>
          <p>Repair and installation services.</p>
        </div>
      </section>
    </main>
  );
}