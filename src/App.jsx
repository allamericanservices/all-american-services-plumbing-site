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
    "aria-hidden": "true",
  };

  const paths = {
    phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8 9.67a16 16 0 0 0 6.33 6.33l1.23-1.23a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92z" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-5" /></>,
    clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
    droplet: <><path d="M12 22a7 7 0 0 0 7-7c0-5-7-13-7-13S5 10 5 15a7 7 0 0 0 7 7z" /></>,
    wrench: <><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2.1-2.1 2.8-2.8z" /></>,
    flame: <><path d="M8.5 14.5A4.5 4.5 0 0 0 13 19a5 5 0 0 0 5-5c0-3-2-5-4-7 0 2-1 3-2 4-1-3-3-5-5-6 .5 3-2 5-2 8a5 5 0 0 0 5 5" /></>,
    camera: <><path d="M14.5 4 16 7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3l1.5-3h5z" /><circle cx="12" cy="13" r="4" /></>,
    map: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></>,
    star: <><path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" /></>,
    heart: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" /></>,
    check: <><path d="M20 6 9 17l-5-5" /></>,
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></>,
    badge: <><path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.3 7.2 17.9l.9-5.4-3.9-3.8 5.4-.8L12 3z" /><path d="m9.5 12 1.7 1.7 3.3-3.8" /></>,
  };

  return <svg {...common}>{paths[type] || paths.star}</svg>;
};

const services = [
  { icon: "droplet", title: "Drain Cleaning", text: "Clogged sink, tub, shower, or main line? We show up ready to clear it and explain the fix clearly." },
  { icon: "flame", title: "Water Heaters", text: "Repair, replacement, and installation for tank and tankless water heaters." },
  { icon: "wrench", title: "Pipe Repair", text: "Leak repairs, broken lines, fixture connections, and dependable emergency repairs." },
  { icon: "camera", title: "Camera Inspection", text: "High-quality sewer and drain camera inspections to locate blockages, breaks, and hidden plumbing issues fast." },
];

const trustPoints = [
  { icon: "shield", title: "Licensed & Insured", text: "Your home is protected by licensed professional service, insured workmanship, and dependable plumbing solutions." },
  { icon: "check", title: "Clear, Honest Service", text: "We explain what we find, what needs to be done, and what your options are before work begins." },
  { icon: "heart", title: "Respect for Your Home", text: "We treat every customer like a neighbor and leave the work area clean." },
];

const siteInfo = {
  company: "All American Services and Plumbing",
  phone: "512-734-9372",
  phoneHref: "tel:5127349372",
  email: "aaservicesandplumbing@gmail.com",
  emailHref: "mailto:aaservicesandplumbing@gmail.com",
  rmp: "RMP 47109",
  slogan: "Services You Can Trust",
  serviceArea: "Proudly Serving Central Texas",
};

export default function AllAmericanServicesPlumbingSite() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3" aria-label="All American Services and Plumbing home">
            <img src={logoUrl} alt="All American Services and Plumbing logo" className="h-14 w-20 rounded-xl object-contain" />
            <div>
              <p className="text-lg font-black tracking-wide">ALL AMERICAN</p>
              <p className="-mt-1 text-sm font-bold text-red-500">SERVICES & PLUMBING</p>
            </div>
          </a>
          <nav className="hidden gap-8 text-sm font-semibold text-zinc-300 md:flex" aria-label="Main navigation">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#trust" className="hover:text-white">Why Trust Us</a>
            <a href="#license" className="hover:text-white">License</a>
            <a href="#about" className="hover:text-white">Our Story</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href={siteInfo.phoneHref} className="rounded-full bg-red-600 px-5 py-3 text-sm font-black shadow-lg hover:bg-red-500">
            {siteInfo.phone}
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.35),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(220,38,38,0.35),_transparent_38%)]" />
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)", backgroundSize: "44px 44px" }} />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-[1.05fr_.95fr] md:py-24">
            <div>
              <div className="mb-5 inline-flex flex-wrap items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-100 shadow-xl">
                <span className="inline-flex items-center gap-2"><Icon type="badge" className="h-4 w-4 text-red-400" /> Licensed & Insured</span>
                <span className="hidden h-4 w-px bg-white/25 sm:block" />
                <span>{siteInfo.rmp}</span>
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-tight md:text-7xl">
                Plumbing help from people who treat you like <span className="text-red-500">family.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200">
                When something goes wrong with your plumbing, you deserve a calm, clear answer and a professional who knows what they are doing. All American Services and Plumbing is here to make the process simple, respectful, and dependable.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={siteInfo.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-7 py-4 text-lg font-black shadow-xl hover:bg-red-500">
                  <Icon type="phone" className="h-5 w-5" /> Call {siteInfo.phone}
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-7 py-4 text-lg font-bold hover:bg-white/10">
                  Request Service Online
                </a>
              </div>

              <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <Icon type="shield" className="mb-3 h-7 w-7 text-blue-400" />
                  <p className="font-black">Licensed & Insured</p>
                  <p className="text-sm text-zinc-400">Transparent from the start</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <Icon type="clock" className="mb-3 h-7 w-7 text-red-400" />
                  <p className="font-black">Responsive</p>
                  <p className="text-sm text-zinc-400">Help when plumbing cannot wait</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <Icon type="home" className="mb-3 h-7 w-7 text-white" />
                  <p className="font-black">Respectful</p>
                  <p className="text-sm text-zinc-400">Clean work and clear communication</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/65 p-5 shadow-2xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-6 text-center">
                <img src={logoUrl} alt="All American Services and Plumbing official logo" className="mx-auto max-h-[420px] w-full object-contain drop-shadow-2xl" />
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-sm uppercase tracking-widest text-zinc-400">Phone</p>
                    <p className="mt-1 text-xl font-black">{siteInfo.phone}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-sm uppercase tracking-widest text-zinc-400">RMP Number</p>
                    <p className="mt-1 text-xl font-black">{siteInfo.rmp}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="trust" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-black uppercase tracking-widest text-red-500">You Are In Good Hands</p>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">Trust starts before the work begins.</h2>
              <p className="mt-5 text-lg leading-8 text-zinc-300">
                From the first phone call to the final cleanup, the goal is simple: make customers feel informed, respected, and confident that the job is being handled the right way.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {trustPoints.map((point) => (
                <div key={point.title} className="rounded-3xl border border-white/10 bg-black p-7 shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5">
                    <Icon type={point.icon} className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="mt-5 text-2xl font-black">{point.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-400">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-black uppercase tracking-widest text-blue-400">How We Can Help</p>
              <h2 className="mt-2 text-4xl font-black md:text-5xl">Plumbing services made simple.</h2>
            </div>
            <p className="max-w-md text-zinc-400">Clear service categories, easy call buttons, and simple explanations help customers book fast without feeling pressured.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl transition hover:-translate-y-1 hover:bg-white/[0.07]">
                <Icon type={service.icon} className="h-10 w-10 text-red-500" />
                <h3 className="mt-5 text-xl font-black">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="license" className="mx-auto max-w-7xl px-6 pb-16">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 shadow-2xl">
            <div className="grid gap-0 md:grid-cols-[.8fr_1.2fr]">
              <div className="flex items-center justify-center border-b border-white/10 bg-white/[0.03] p-8 md:border-b-0 md:border-r">
                <img src={logoUrl} alt="All American Services and Plumbing logo with RMP number" className="max-h-80 w-full object-contain" />
              </div>
              <div className="p-8 md:p-10">
                <p className="font-black uppercase tracking-widest text-red-500">Licensed. Insured. Dependable.</p>
                <h2 className="mt-3 text-4xl font-black">A plumber you can feel comfortable calling.</h2>
                <p className="mt-5 leading-8 text-zinc-300">
                  We know inviting a service company into your home takes trust. That is why our RMP number, phone number, service area, and contact options are displayed clearly throughout the site.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-black p-5">
                    <Icon type="shield" className="h-8 w-8 text-blue-400" />
                    <p className="mt-3 text-sm text-zinc-400">Credential</p>
                    <p className="text-lg font-black">Licensed & Insured</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black p-5">
                    <Icon type="star" className="h-8 w-8 text-red-500" />
                    <p className="mt-3 text-sm text-zinc-400">RMP</p>
                    <p className="text-lg font-black">47109</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black p-5">
                    <Icon type="map" className="h-8 w-8 text-white" />
                    <p className="mt-3 text-sm text-zinc-400">Area</p>
                    <p className="text-lg font-black">Central Texas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 md:grid-cols-2">
          <div>
            <p className="font-black uppercase tracking-widest text-blue-400">The Story Behind The Brand</p>
            <h2 className="mt-2 text-4xl font-black">Built on hard work, trust, and American values.</h2>
            <p className="mt-5 leading-8 text-zinc-300">
              All American Services and Plumbing was created with one goal in mind — give homeowners and businesses a plumbing company they can genuinely trust. Too many people feel stressed, pressured, or uncertain when they have plumbing problems. This company was built to change that experience.
            </p>
            <p className="mt-5 leading-8 text-zinc-300">
              The name “All American” represents more than just a brand. It stands for honesty, pride in workmanship, respect for customers, and showing up ready to work hard every single day. From emergency repairs to everyday plumbing needs, the mission is simple: treat people right, communicate clearly, and leave every job better than it was found.
            </p>
            <p className="mt-5 leading-8 text-zinc-300">
              Serving Central Texas with dependable plumbing solutions, All American Services and Plumbing is focused on building long-term relationships with customers who want reliable service from people who truly care.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h3 className="text-2xl font-black">Why customers feel comfortable choosing us</h3>
            <ul className="mt-5 space-y-4 text-zinc-300">
              <li className="flex gap-3"><Icon type="check" className="mt-1 h-5 w-5 shrink-0 text-red-500" /> Licensed and insured with RMP information displayed clearly</li>
              <li className="flex gap-3"><Icon type="check" className="mt-1 h-5 w-5 shrink-0 text-red-500" /> Friendly, respectful communication without pressure</li>
              <li className="flex gap-3"><Icon type="check" className="mt-1 h-5 w-5 shrink-0 text-red-500" /> Honest recommendations focused on solving the problem correctly</li>
              <li className="flex gap-3"><Icon type="check" className="mt-1 h-5 w-5 shrink-0 text-red-500" /> Professional branding and customer-first service experience</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-20">
          <div className="rounded-[2rem] border border-white/10 bg-black p-8 shadow-2xl md:p-10">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="font-black uppercase tracking-widest text-red-500">Request Service</p>
                <h2 className="mt-2 text-4xl font-black">Tell us what is going on. We will help you through it.</h2>
                <p className="mt-4 leading-7 text-zinc-400">Call directly or submit a simple request. We will follow up, listen to the problem, and help you choose the next right step.</p>
                <div className="mt-6 space-y-3 text-lg font-bold">
                  <p className="flex items-center gap-3"><Icon type="phone" className="h-5 w-5 text-red-500" /> {siteInfo.phone}</p>
                  <p className="flex items-center gap-3"><Icon type="map" className="h-5 w-5 text-blue-400" /> {siteInfo.serviceArea}</p>
                  <p className="flex items-center gap-3"><Icon type="shield" className="h-5 w-5 text-white" /> Licensed & Insured • {siteInfo.rmp}</p>
                  <p className="flex items-center gap-3"><Icon type="check" className="h-5 w-5 text-blue-400" /> {siteInfo.email}</p>
                </div>
              </div>
              <form className="space-y-4" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" aria-label="Request plumbing service form">
                <input name="name" required className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none placeholder:text-zinc-500" placeholder="Customer Name" />
                <input name="phone" required className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none placeholder:text-zinc-500" placeholder="Phone Number" />
                <input name="address" className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none placeholder:text-zinc-500" placeholder="Service Address" />
                <textarea name="message" required className="h-32 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none placeholder:text-zinc-500" placeholder="What plumbing issue do you need help with?" />
                <button className="w-full rounded-2xl bg-red-600 px-6 py-4 text-lg font-black hover:bg-red-500">Submit Request</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black px-6 py-8 text-center text-sm text-zinc-500">
        © 2026 {siteInfo.company} • {siteInfo.rmp} • {siteInfo.phone} • {siteInfo.email} • {siteInfo.slogan}
      </footer>
    </div>
  );
}
