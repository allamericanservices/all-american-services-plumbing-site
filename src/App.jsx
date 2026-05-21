export default function App() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom right, #0f172a, #1e3a8a)",
      color: "white",
      fontFamily: "Arial",
      padding: "40px"
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        textAlign: "center"
      }}>
        <div style={{
          display: "inline-block",
          background: "#2563eb",
          padding: "8px 18px",
          borderRadius: "999px",
          fontSize: "14px",
          marginBottom: "20px"
        }}>
          Licensed • Insured • Reliable
        </div>

        <h1 style={{
          fontSize: "58px",
          marginBottom: "20px",
          fontWeight: "bold"
        }}>
          All American Services & Plumbing
        </h1>

        <p style={{
          fontSize: "22px",
          color: "#cbd5e1",
          maxWidth: "700px",
          margin: "0 auto 40px"
        }}>
          Professional plumbing services for homes and businesses.
          Fast response times. Honest pricing. Quality workmanship.
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "60px",
          flexWrap: "wrap"
        }}>
          <a
            href="tel:5127349313"
            style={{
              background: "#f97316",
              padding: "16px 28px",
              borderRadius: "12px",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px"
            }}
          >
            Call Now
          </a>

          <a
            href="#services"
            style={{
              border: "2px solid white",
              padding: "16px 28px",
              borderRadius: "12px",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px"
            }}
          >
            View Services
          </a>
        </div>

        <div id="services" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "24px"
        }}>
          <div style={{
            background: "rgba(255,255,255,0.1)",
            padding: "30px",
            borderRadius: "20px"
          }}>
            <h2>Emergency Plumbing</h2>
            <p>
              Fast help for leaks, burst pipes, and urgent plumbing issues.
            </p>
          </div>

          <div style={{
            background: "rgba(255,255,255,0.1)",
            padding: "30px",
            borderRadius: "20px"
          }}>
            <h2>Drain Cleaning</h2>
            <p>
              Professional drain cleaning and clog removal services.
            </p>
          </div>

          <div style={{
            background: "rgba(255,255,255,0.1)",
            padding: "30px",
            borderRadius: "20px"
          }}>
            <h2>Water Heaters</h2>
            <p>
              Water heater repair, replacement, and installation.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}