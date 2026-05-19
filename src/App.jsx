
export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          All American Services & Plumbing
        </h1>

        <p className="text-lg text-slate-300 mb-6">
          Reliable plumbing services you can count on.
        </p>

        <a
          href="tel:5127349313"
          className="inline-block bg-red-600 px-6 py-3 rounded-lg font-bold"
        >
          Call 512-734-9313
        </a>
      </section>

      <section className="px-6 py-10 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Services</h2>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-slate-900 p-5 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Emergency Plumbing</h3>
            <p>Fast plumbing help when you need it.</p>
          </div>

          <div className="bg-slate-900 p-5 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Drain Cleaning</h3>
            <p>Clog removal and drain service.</p>
          </div>

          <div className="bg-slate-900 p-5 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Water Heaters</h3>
            <p>Repair and installation services.</p>
          </div>
        </div>
      </section>
    </div>
  );
}