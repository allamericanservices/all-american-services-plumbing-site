export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #021b79 0%, #0575e6 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "inline-block",
          background: "#0ea5e9",
          padding: "10px 24px",
          borderRadius: "999px",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        Licensed • Insured • Reliable
      </div>

      <h1
        style={{
          fontSize: "72px",
          fontWeight: "900",
          marginBottom: "20px",
          lineHeight: "1",
        }}
      >
        All American Services & Plumbing
      </h1>

      <p
        style={{
          fontSize: "28px",
          maxWidth: "1000px",
          margin: "0 auto",
          lineHeight: "1.5",
          marginBottom: "40px",
        }}
      >
        Professional plumbing services for homes and businesses.
        Fast response times. Honest pricing. Quality workmanship.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "60px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="tel:5127349313"
          style={{
            background: "#f97316",
            color: "white",
            padding: "18px 40px",
            borderRadius: "14px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          Call Now
        </a>

        <a
          href="#services"
          style={{
            border: "3px solid white",
            color: "white",
            padding: "18px 40px",
            borderRadius: "14px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          View Services
        </a>
      </div>

      <div
        id="services"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            padding: "40px 20px",
            borderRadius: "24px",
            backdropFilter: "blur(8px)",
          }}
        >
          <h2 style={{ fontSize: "36px", marginBottom: "15px" }}>
            Emergency Plumbing
          </h2>
          <p style={{ fontSize: "22px" }}>
            Fast help for leaks, burst pipes, and urgent plumbing issues.
          </p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            padding: "40px 20px",
            borderRadius: "24px",
            backdropFilter: "blur(8px)",
          }}
        >
          <h2 style={{ fontSize: "36px", marginBottom: "15px" }}>
            Drain Cleaning
          </h2>
          <p style={{ fontSize: "22px" }}>
            Professional drain cleaning and clog removal services.
          </p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            padding: "40px 20px",
            borderRadius: "24px",
            backdropFilter: "blur(8px)",
          }}
        >
          <h2 style={{ fontSize: "36px", marginBottom: "15px" }}>
            Water Heaters
          </h2>
          <p style={{ fontSize: "22px" }}>
            Water heater repair, replacement, and installation.
          </p>
        </div>
      </div>
    </div>
  );
}