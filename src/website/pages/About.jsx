import {
  FaHandsHelping,
  FaTractor,
  FaUsers,
  FaHome,
  FaLandmark,
} from "react-icons/fa";

export default function About() {
  const groups = [
    {
      label: "Civil society & NGO practitioners",
      icon: <FaHandsHelping />,
    },
    {
      label: "Farmers, cooperatives, producer groups",
      icon: <FaTractor />,
    },
    {
      label: "Youth leaders, researchers, practitioners",
      icon: <FaUsers />,
    },
    {
      label: "Community-based organizations",
      icon: <FaHome />,
    },
    {
      label: "Local and national institutions",
      icon: <FaLandmark />,
    },
  ];
  return (
    <main className="bg-white">

      {/* =======================
          ABOUT HEADER
      ======================= */}
      <section className="max-w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-10 md:py-20">
        <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl font-semibold text-slate-900">
          About METRI Learning Lab
        </h1>

        <div className="mt-6 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-green-700 font-serif text-xl md:text-3xl font-bold mb-2 md:mb-6">
              Our Mission
            </h2>

            <p className="text-slate-700 leading-relaxed mb-8 sm:mb-10 text-base sm:text-lg">
              The METRI Learning Lab is a national initiative dedicated to
              strengthening capacity, connecting policy with practice, and
              supporting inclusive, green, resilient, and sustainable
              development across Cambodia.
            </p>

            <h3 className="text-green-700 font-serif text-2xl sm:text-3xl font-bold mb-2 md:mb-6">
              What is METRI Learning Lab for?
            </h3>

            <ul className="space-y-4 sm:space-y-5 text-slate-700">
              {[
                "Brings together civil society, farmers, cooperatives, youth, researchers, and institutions",
                "Centers lived experience and field realities in all discussions",
                "Connects laws, policies, and reforms with daily practice",
                "Strengthens governance and institutional capacity through applied learning",
                "Builds a long-term community of learning, trust, and mindful action",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-700 text-xl">✓</span>
                  <span className="text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT IMAGE + METRI CARD */}
          <div className="space-y-8 sm:space-y-10">

            {/* IMAGE */}
            <div className="rounded-3xl overflow-hidden shadow-lg bg-white">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
                alt="METRI Learning Lab"
                className="w-full h-auto max-h-[420px] md:max-h-none object-contain"
              />
            </div>

            {/* METRI MEANING CARD */}
            <div className="bg-white rounded-3xl border p-6 sm:p-8 shadow-[0_6px_20px_rgba(15,23,42,0.08)]
                  hover:shadow-[0_14px_32px_rgba(15,23,42,0.14)]
                  hover:-translate-y-1
                  hover:border-green-300
                  transition-all
                  duration-300">
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-green-700 mb-4 sm:mb-6">
                What does METRI stand for?
              </h3>

              <ul className="space-y-2 sm:space-y-3 text-slate-700 text-base sm:text-lg">
                <li><strong>M</strong>eaningful Engagement</li>
                <li><strong>E</strong>mpowered Communities</li>
                <li><strong>T</strong>ransformative Resilience</li>
                <li><strong>R</strong>esponsive Innovation</li>
                <li><strong>I</strong>nclusive Development</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* =======================
          WHO IS IT FOR
      ======================= */}
      <section className="bg-slate-50 py-8 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

          <h2 className="font-serif text-2xl md:text-4xl font-semibold mb-8 md:mb-12">
            Who is the METRI Learning Lab for?
          </h2>

          {/* PILLS */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 sm:mb-12">
            {groups.map((item, i) => (
              <div
                key={i}
                className="
                bg-white
                  px-6 sm:px-8
                  py-3 sm:py-4
                  rounded-full
                  border border-slate-200
                  flex items-center gap-3
                  text-slate-700
                  font-medium
                  text-sm sm:text-lg
                  shadow-[0_6px_20px_rgba(15,23,42,0.08)]
                  hover:shadow-[0_14px_32px_rgba(15,23,42,0.14)]
                  hover:-translate-y-1
                  hover:border-green-300
                  transition-all
                  duration-300
                "
              >
                <span className="text-slate-700 text-lg sm:text-xl transition group-hover:text-green-700">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <p className="max-w-3xl mx-auto text-slate-700 text-base md:text-lg">
            If you and your organization seek to drive transformative,
            innovative, and inclusive change for a peaceful, resilient, and
            sustainable Cambodia, this space is for you.
          </p>

        </div>
      </section>

      {/* =======================
          WHO IS BEHIND METRI
      ======================= */}
      <section className="max-w-full mx-auto px-4 sm:px-6 py-8 sm:py-20 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LOGO */}
          <div className="flex flex-col items-center">
            <div className="w-40 md:w-64 h-40 md:h-64 sm:w-48 sm:h-48 rounded-full bg-slate-50 flex items-center justify-center shadow-sm">
              <img src="/logo.png" alt="" />
            </div>

            <h4 className="mt-5 sm:mt-6 font-serif text-xl md:text-2xl text-green-700">
              NGO Forum on Cambodia
            </h4>
          </div>

          {/* TEXT */}
          <div>
            <h2 className="font-serif text-2xl sm:text-4xl font-semibold mb-6">
              Who is behind the METRI Learning Lab?
            </h2>

            <p className="text-slate-700 leading-relaxed mb-6 text-base sm:text-lg">
              The METRI Learning Lab is an initiative of the
              <strong> NGO Forum on Cambodia (NGOF)</strong>, a trusted national
              civil society platform with 40+ years of experience in policy
              dialogue, advocacy, applied research, and capacity development.
            </p>

            <p className="text-slate-700 leading-relaxed mb-8 sm:mb-10 text-base sm:text-lg">
              The Lab is co-designed and co-owned with NGOF members,
              grassroots actors, and experienced experts—ensuring relevance,
              credibility, and real-world impact.
            </p>

            <a
              href="https://ngoforum.org.kh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-700
                         hover:bg-green-800 text-xs md:text-sm text-white px-4 sm:px-8 py-2 sm:py-4
                         rounded-full font-medium transition"
            >
              🔗 Visit NGOF Website
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
