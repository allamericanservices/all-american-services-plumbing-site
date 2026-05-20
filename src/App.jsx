export default function App() {
  return (
    <main className="site">
      <section className="hero">
        <div className="badge">Licensed • Insured • Reliable</div>

        <h1>All American Services & Plumbing</h1>

        <p>
          Fast, dependable plumbing service for homes and businesses.
        </p>

        <div className="buttons">
          <a href="tel:5127349313" className="call">Call 512-734-9313</a>
          <a href="#services" className="secondary">View Services</a>
        </div>
      </section>

      <section id="services" className="services">
        <h2>Our Plumbing Services</h2>

        <div className="cards">
          <div className="card">
            <h3>Emergency Plumbing</h3>
            <p>Fast help for leaks, burst pipes, and urgent plumbing issues.</p>
          </div>

          <div className="card">
            <h3>Drain Cleaning</h3>
            <p>Clog removal, slow drains, and professional drain service.</p>
          </div>

          <div className="card">
            <h3>Water Heaters</h3>
            <p>Water heater repair, replacement, and installation.</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Need a plumber today?</h2>
        <p>Call now for service.</p>
        <a href="tel:5127349313">512-734-9313</a>
      </section>
    </main>
  );
}
