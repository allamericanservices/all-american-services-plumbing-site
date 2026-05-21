import React from "react";

const logoUrl = "/logo.png";

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">
      
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center px-6 py-20">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.35),transparent_40%),radial-gradient(circle_at_bottom,rgba(220,38,38,0.25),transparent_40%)]" />

        <div className="relative z-10 mx-auto max-w-7xl text-center">

          {/* Badge */}
          <div className="mb-8 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 text-sm font-bold text-cyan-300">
            Licensed • Insured • Reliable
          </div>

          {/* Logo */}
          <div className="mb-10 flex justify-center">
            <img
              src={logoUrl}
              alt="All American Services and Plumbing"
              className="w-full max-w-lg object-contain"
            />
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Professional Plumbing Services
            <span className="block text-red-500">
              You Can Trust
            </span>
          </h1>

          {/* Text */}
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-zinc-300">
            Fast response times. Honest pricing. Quality workmanship.
            Serving homes and businesses with dependable plumbing solutions.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <a
              href="tel:5127349372"
              className="rounded-2xl bg-orange-500 px-10 py-5 text-xl font-black text-white shadow-2xl transition hover:scale-105 hover:bg-orange-400"
            >
              Call Now
            </a>

            <a
              href="#services"
              className="rounded-2xl border-2 border-white/30 bg-white/5 px-10 py-5 text-xl font-bold text-white transition hover:bg-white/10"
            >
              View Services
            </a>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="mx-auto max-w-7xl px-6 pb-24"
      >

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            Our Plumbing Services
          </h2>

          <p className="mt-5 text-lg text-zinc-400">
            Professional plumbing solutions for homes and businesses.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-blue-500/10 p-8 shadow-xl backdrop-blur">
            <h3 className="mb-4 text-3xl font-black">
              Emergency Plumbing
            </h3>

            <p className="text-lg leading-8 text-zinc-300">
              Fast help for leaks, burst pipes, and urgent plumbing issues.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-blue-500/10 p-8 shadow-xl backdrop-blur">
            <h3 className="mb-4 text-3xl font-black">
              Drain Cleaning
            </h3>

            <p className="text-lg leading-8 text-zinc-300">
              Professional drain cleaning and clog removal services.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-blue-500/10 p-8 shadow-xl backdrop-blur">
            <h3 className="mb-4 text-3xl font-black">
              Water Heaters
            </h3>

            <p className="text-lg leading-8 text-zinc-300">
              Water heater repair, replacement, and installation.
            </p>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black px-6 py-8 text-center text-zinc-500">
        © 2026 All American Services & Plumbing • RMP 47109
      </footer>

    </div>
  );
}