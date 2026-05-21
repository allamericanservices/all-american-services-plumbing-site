export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        fontFamily: "Arial",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <img
          src="/logo.png"
          alt="All American Services & Plumbing"
          style={{
            width: "100%",
            maxWidth: "320px",
            height: "auto",
            marginBottom: "30px",
          }}
        />

        <h1
          style={{
            fontSize: "56px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          All American Services & Plumbing
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#cbd5e1",
            maxWidth: "800px",
            margin: "0 auto 40px",
          }}
        >
          Professional plumbing services for homes and businesses.
          Fast response times. Honest pricing. Quality workmanship.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "60px",
          }}
        >
          <a
            href="tel:5127349313"
            style={{
              background: "#f97316",
              color: "white",
              padding: "16px 30px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Call Now
          </a>

          <a
            href="#services"
            style={{
              border: "2px solid white",
              color: "white",
              padding: "16px 30px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            View Services
          </a>
        </div>

        <div
          id="services"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            "Emergency Plumbing",
            "Drain Cleaning",
            "Water Heaters",
          ].map((service) => (
            <div
              key={service}
              style={{
                background: "#1e3a8a",
                padding: "30px",
                borderRadius: "20px",
              }}
            >
              <h2>{service}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}