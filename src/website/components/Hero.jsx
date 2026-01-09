export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-full mx-auto px-6 md:px-20 py-10 md:py-20">

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:order-1 order-2">
            <h1 className="font-serif text-2xl md:text-5xl lg:text-[3rem] leading-tight font-semibold text-slate-900">
              Are you ready to make <br /> <br />
              yourself and your <br /> <br />
              organization more <br /><br />
              resilient, innovative, and <br /><br />
              transformative?
            </h1>

            <p className="mt-5 md:mt-8 max-w-xl text-slate-600 text-base sm:text-lg leading-relaxed">
              Join a national Learning Lab that strengthens capacity, connects
              policy with practice, and supports inclusive, green, resilient,
              and sustainable development across Cambodia.
            </p>

            {/* BUTTON GROUP */}
            <div className="mt-6 md:mt-10 flex flex-wrap gap-4 md:gap-2 lg:gap-5">
              <a
                href="/register"
                className="inline-flex items-center gap-2 rounded-full
                           bg-green-700 px-6 sm:px-7 py-3 sm:py-4
                           text-white text-sm font-medium
                           shadow-[0_12px_32px_rgba(15,23,42,0.08)]
                            hover:shadow-[0_20px_48px_rgba(15,23,42,0.14)]
                            hover:-translate-y-1
                            transition-all
                            duration-300"
              >
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                Register Your Interest
              </a>

              <a
                href="/topics"
                className="inline-flex items-center gap-2 rounded-full
                           border border-green-700 px-6 sm:px-7 py-3 sm:py-4
                           text-green-700 text-sm font-medium
                           shadow-[0_12px_32px_rgba(15,23,42,0.08)]
                            hover:shadow-[0_20px_48px_rgba(15,23,42,0.14)]
                            hover:-translate-y-1
                            transition-all
                            duration-300
                            hover:bg-green-50"
              >
                📚 Explore Learning Areas
              </a>

              <a
                href="/schedule"
                className="inline-flex items-center gap-2 rounded-full
                           border border-green-700 px-6 sm:px-7 py-3 sm:py-4
                           text-green-700 text-sm font-medium
                           hover:bg-green-50 shadow-[0_12px_32px_rgba(15,23,42,0.08)]
                            hover:shadow-[0_20px_48px_rgba(15,23,42,0.14)]
                            hover:-translate-y-1
                            transition-all
                            duration-300"
              >
                📅 Learning Schedule
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 lg:-mt-20">
            <div className="rounded-3xl overflow-hidden shadow-xl bg-white max-w-2xl mx-auto">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
                alt="Learning Lab"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
