import Hero from "../components/Hero";
import {
  FiThermometer,
  FiTrendingUp,
  FiSliders,
  FiRefreshCw,
} from "react-icons/fi";

import {
  FaBrain,
  FaTools,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";

export default function LearningLabPage() {
  const items = [
    {
      title: "Climate Urgency",
      icon: <FiThermometer />,
      text:
        "Rising temperatures, erratic rainfall, and extreme weather threaten agriculture, livelihoods, and food security across provinces.",
    },
    {
      title: "Growing Inequality",
      icon: <FiTrendingUp />,
      text:
        "Economic growth hasn't reached all equally—marginalized groups, smallholder farmers, and rural communities risk being left behind.",
    },
    {
      title: "Governance Gaps",
      icon: <FiSliders />,
      text:
        "Between policy intent and field practice lies a gap where communities face implementation challenges without adequate support.",
    },
    {
      title: "Need for Continuous Learning",
      icon: <FiRefreshCw />,
      text:
        "Static training isn't enough. Cambodia needs spaces for ongoing, adaptive, multi-stakeholder learning to tackle complex challenges.",
    },
  ];

  const data = [
    {
      title: "Deeper Understanding",
      icon: <FaBrain />,
      text:
        "Practical insight into inclusive and green growth, climate and natural resource governance, public finance, and long-term resilience.",
    },
    {
      title: "Stronger Practice",
      icon: <FaTools />,
      text:
        "Improved program design, monitoring, evidence-based decision-making, and integration of environmental and resilience thinking.",
    },
    {
      title: "Meaningful Engagement",
      icon: <FaHandshake />,
      text:
        "Trusted relationships with NGOs, farmers, cooperatives, youth, researchers, and public institutions.",
    },
    {
      title: "Greater Efficiency & Impact",
      icon: <FaChartLine />,
      text:
        "More coordinated action for equitable development, transparent governance, and climate resilience.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <Hero />

      {/* WHY LEARNING LAB */}
      <section className="bg-white py-8 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* TITLE */}
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-center mb-8 md:mb-16 text-slate-900">
            Why does Cambodia need a Learning Lab now?
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {items.map((item, i) => (
              <div
                key={i}
                className="
                  bg-white
                  rounded-2xl
                  p-6 sm:p-8
                  border border-green-100
                  shadow-[0_12px_32px_rgba(15,23,42,0.08)]
                  hover:shadow-[0_20px_48px_rgba(15,23,42,0.14)]
                  hover:-translate-y-1
                  hover:border-green-200
                  transition-all
                  duration-300
                "
              >
                {/* HEADER */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-green-700 text-xl sm:text-3xl">
                    {item.icon}
                  </span>
                  <h3 className="font-serif text-lg sm:text-2xl font-semibold text-green-700">
                    {item.title}
                  </h3>
                </div>

                {/* BODY TEXT */}
                <p className="text-slate-700 text-sm md:text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-gray-50 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-0">

          {/* TITLE */}
          <h2 className="font-serif text-xl md:text-4xl font-semibold text-center mb-8 md:mb-12 text-slate-900">
            What will you and your organization gain?
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.map((item, i) => (
              <div
                key={i}
                className="
                bg-white
                rounded-2xl
                p-4 sm:p-6
                border border-green-100
                shadow-[0_10px_30px_rgba(15,23,42,0.06)]
                hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]
                hover:-translate-y-1
                hover:border-green-200
                transition-all
                duration-300
              "
              >
                {/* ICON */}
                <div className="text-green-800 text-3xl md:text-5xl flex justify-center mb-6">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="font-serif text-center text-lg sm:text-lg font-semibold text-green-700 mb-4">
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className="text-slate-700 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
