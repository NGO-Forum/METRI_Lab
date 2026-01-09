export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-green-50">
      <div className="max-w-full mx-auto px-6 md:px-24 py-6 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="font-serif text-[3rem] leading-tight font-semibold text-slate-900">
              Are you ready to make <br />
              yourself and your <br />
              organization more <br />
              resilient, innovative, and <br />
              transformative?
            </h1>

            <p className="mt-8 max-w-xl text-slate-600 text-lg leading-relaxed">
              Join a national Learning Lab that strengthens capacity, connects
              policy with practice, and supports inclusive, green, resilient,
              and sustainable development across Cambodia.
            </p>

            {/* BUTTON GROUP */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#register"
                className="inline-flex items-center gap-2 rounded-full
                           bg-green-700 px-7 py-4 text-white text-sm font-medium
                           shadow-md hover:bg-green-800 transition"
              >
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                Register Your Interest
              </a>

              <a
                href="#topics"
                className="inline-flex items-center gap-2 rounded-full
                           border border-green-700 px-7 py-4 text-green-700
                           text-sm font-medium hover:bg-green-50 transition"
              >
                📚 Explore Learning Areas
              </a>

              <a
                href="#schedule"
                className="inline-flex items-center gap-2 rounded-full
                           border border-green-700 px-7 py-4 text-green-700
                           text-sm font-medium hover:bg-green-50 transition"
              >
                📅 Learning Schedule
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl bg-white max-w-2xl mx-auto">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
                alt="Learning Lab"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
