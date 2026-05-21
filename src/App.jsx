import React from "react";

const logoUrl = "/logo.png";

const Icon = ({ type, className = "h-6 w-6" }) => {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const paths = {
    phone: (
      <>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8 9.67a16 16 0 0 0 6.33 6.33l1.23-1.23a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92z" />
      </>
    ),
  };

  return <svg {...common}>{paths[type]}</svg>;
};

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt="logo"
              className="h-14 w-20 rounded-xl object-contain"
            />

            <div>
              <p className="text-lg font-black tracking-wide">
                ALL AMERICAN
              </p>

              <p className="-mt-1 text-sm font-bold text-red-500">
                SERVICES & PLUMBING
              </p>
            </div>
          </div>

          <a
            href="tel:5127349372"
            className="rounded-full bg-red-600 px-5 py-3 text-sm font-black shadow-lg hover:bg-red-500"
          >
            512-734-9372
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.35),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(220,38,38,0.35),_transparent_38%)]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
            <div>
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-100 shadow-xl">
                Licensed • Insured • Reliable
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-tight md:text-7xl">
                Plumbing help from people who treat you like{" "}
                <span className="text-red-500">family.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200">
                Professional plumbing services for homes and businesses.
                Fast response times. Honest pricing. Quality workmanship.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:5127349372"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-7 py-4 text-lg font-black shadow-xl hover:bg-red-500"
                >
                  <Icon type="phone" className="h-5 w-5" />
                  Call Now
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-7 py-4 text-lg font-bold hover:bg-white/10"
                >
                  View Services
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/65 p-5 shadow-2xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-6 text-center">
                <img
                  src={logoUrl}
                  alt="All American Services and Plumbing logo"
                  className="mx-auto max-h-[220px] w-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="mx-auto max-w-7xl px-6 py-16"
        >
          <div className="mb-10">
            <p className="font-black uppercase tracking-widest text-blue-400">
              Our Services
            </p>

            <h2 className="mt-2 text-4xl font-black md:text-5xl">
              Plumbing services made simple.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl">
              <h3 className="text-xl font-black">
                Emergency Plumbing
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Fast response for leaks, burst pipes, and urgent
                plumbing issues.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl">
              <h3 className="text-xl font-black">
                Drain Cleaning
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Professional drain cleaning and clog removal
                services.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl">
              <h3 className="text-xl font-black">
                Water Heaters
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Water heater repair, replacement, and installation.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black px-6 py-8 text-center text-sm text-zinc-500">
        © 2026 All American Services & Plumbing
      </footer>
    </div>
  );
}