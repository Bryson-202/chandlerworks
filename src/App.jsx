export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-black tracking-tight text-xl">ChandlerWorks</a>
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#services" className="opacity-80 hover:opacity-100">Services</a>
            <a href="#gallery" className="opacity-80 hover:opacity-100">Gallery</a>
            <a href="#pricing" className="opacity-80 hover:opacity-100">Pricing</a>
            <a href="#reviews" className="opacity-80 hover:opacity-100">Reviews</a>
            <a href="#quote" className="opacity-80 hover:opacity-100">Free Quote</a>
          </nav>
          <a href="#quote" className="inline-flex items-center rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold hover:bg-emerald-500/20">Get a Free Quote</a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-600/10 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Nashville’s On-Call Crew for <span className="text-emerald-400">Real-World Results</span>
            </h1>
            <p className="mt-6 text-neutral-300 max-w-prose">
              Landscaping, power washing, furniture flips, odd jobs—you name it.
              Fast quotes, fair prices, and photo-perfect finishes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#quote" className="rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-neutral-950 hover:bg-emerald-400">Book a Free Quote</a>
              <a href="#services" className="rounded-2xl border border-neutral-700 px-6 py-3 font-semibold hover:bg-neutral-900">See Services</a>
            </div>
            <div className="mt-6 text-xs text-neutral-400">
              Serving: Nashville • Brentwood • Franklin • Murfreesboro
            </div>
          </div>
{/*Placeholder Block*/}          
<div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-4 shadow-2xl">
  <div className="grid gap-3 md:grid-cols-2">
    <figure className="rounded-2xl overflow-hidden bg-neutral-800">
      <img src="/images/driveway-before.jpg" alt="Driveway before cleaning" className="w-full h-full object-cover" />
      <figcaption className="p-2 text-xs text-neutral-400">Before</figcaption>
    </figure>
    <figure className="rounded-2xl overflow-hidden bg-neutral-800">
      <img src="/images/driveway-after.jpg" alt="Driveway after power washing" className="w-full h-full object-cover" />
      <figcaption className="p-2 text-xs text-emerald-400">After</figcaption>
    </figure>
  </div>
  <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
    {[
      ["250+", "Jobs Completed"],
      ["4.9★", "Local Reviews"],
      ["24–48h", "Avg. Turnaround"],
    ].map(([big, small]) => (
      <div key={small} className="rounded-xl border border-neutral-800 p-3">
        <div className="text-xl font-bold">{big}</div>
        <div className="text-neutral-400">{small}</div>
      </div>
    ))}
  </div>
</div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-black">Services</h2>
        <p className="mt-3 text-neutral-300">Pick a package or mix-and-match. Transparent quotes, no surprises.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {title: "Power Washing", desc: "Driveways, siding, patios, decks. Safe pressure + spotless results.", price: "From $149"},
            {title: "Landscaping", desc: "Mowing, edging, mulching, hedge trims, seasonal cleanups.", price: "From $79"},
            {title: "Furniture Flips", desc: "Pickup, restore, resell—or refresh your own pieces.", price: "Custom"},
            {title: "Haul-Away & Odd Jobs", desc: "Garage cleanouts, small moves, assembly, fixes.", price: "Hourly"},
            {title: "Gutter & Window Care", desc: "Clear, clean, and sparkle for curb appeal.", price: "Bundle & save"},
            {title: "Seasonal Packages", desc: "Spring spruce-up to holiday light installs.", price: "Ask for bundle"},
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <div className="text-xl font-bold">{s.title}</div>
              <div className="mt-2 text-neutral-300">{s.desc}</div>
              <div className="mt-4 text-emerald-400 font-semibold">{s.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-black">Before & After</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
  {[
    "/images/yard-1.jpg",
    "/images/yard-2.jpg",
    "/images/siding-1.jpg",
    "/images/deck-1.jpg",
    "/images/gutter-1.jpg",
    "/images/window-1.jpg",
    "/images/flip-1.jpg",
    "/images/flip-2.jpg",
  ].map((src) => (
    <figure key={src} className="aspect-square rounded-xl overflow-hidden bg-neutral-800">
      <img src={src} alt="Project photo" className="w-full h-full object-cover" />
    </figure>
  ))}
</div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-black">Simple Pricing</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {name: "Starter", price: "$149", note: "Driveway wash OR lawn spruce-up", items: ["48h scheduling", "Photo proof", "Local travel included"]},
            {name: "Popular", price: "$299", note: "Combo clean: driveway + siding or lawn + hedges", items: ["Priority booking", "Bundle discount", "Haul-away add-on"]},
            {name: "Pro", price: "$599", note: "Full exterior refresh day", items: ["Crew of 2–3", "All-day rate", "Materials included"]},
          ].map((p) => (
            <div key={p.name} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <div className="flex items-baseline justify-between">
                <div className="text-xl font-bold">{p.name}</div>
                <div className="text-3xl font-black">{p.price}</div>
              </div>
              <div className="mt-2 text-neutral-400">{p.note}</div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300 list-disc list-inside">
                {p.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
              <a href="#quote" className="mt-6 inline-block rounded-xl bg-emerald-500 px-5 py-2 font-semibold text-neutral-950 hover:bg-emerald-400">Choose</a>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-black">Local Reviews</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            "Fast, friendly, and my driveway looks brand new!",
            "Great price for a big yard cleanup—booked again for fall.",
            "Showed up next day and finished early. Highly recommend."
          ].map((quote, i) => (
            <figure key={i} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <blockquote className="text-neutral-200">“{quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-neutral-400">— Happy Customer #{i+1}, Nashville</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
          <h2 className="text-3xl md:text-4xl font-black">Get Your Free Quote</h2>
          <p className="mt-2 text-neutral-300">Tell us about the job. We typically respond within 2 business hours.</p>
          <form className="mt-8 grid md:grid-cols-2 gap-4">
            <input placeholder="Full name" className="rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3"/>
            <input type="tel" placeholder="Phone" className="rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3"/>
            <input type="email" placeholder="Email" className="rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 md:col-span-2"/>
            <select className="rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3">
              <option>Service type</option>
              <option>Power Washing</option>
              <option>Landscaping</option>
              <option>Furniture Flip</option>
              <option>Odd Job / Haul-Away</option>
            </select>
            <input placeholder="ZIP code" className="rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3"/>
            <textarea placeholder="Describe your project" className="rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 md:col-span-2 min-h-[120px]"></textarea>
            <button type="submit" className="md:col-span-2 rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-neutral-950 hover:bg-emerald-400">Request Quote</button>
          </form>
          <p className="mt-3 text-xs text-neutral-500">By submitting, you agree to be contacted about your request.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900/60">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-neutral-400 flex flex-wrap items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} ChandlerWorks LLC • Nashville, TN</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-neutral-200">Google Business</a>
            <a href="#" className="hover:text-neutral-200">Instagram</a>
            <a href="#" className="hover:text-neutral-200">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
