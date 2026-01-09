import {
  FaLeaf,
  FaTree,
  FaMoneyBillWave,
  FaCloudSunRain,
  FaTractor,
  FaUniversity,
} from "react-icons/fa";

export default function LearningTopics() {
  const topics = [
    {
      title: "Inclusive and Green Growth in Practice",
      icon: <FaLeaf />,
      text:
        "Explore strategies for economic development that benefits all while protecting Cambodia's natural resources and environment.",
    },
    {
      title: "Fair and Sustainable Natural Resource Governance",
      icon: <FaTree />,
      text:
        "Understand frameworks for equitable management of land, forests, water, and minerals for sustainable development.",
    },
    {
      title: "Effective Public and Climate Finance",
      icon: <FaMoneyBillWave />,
      text:
        "Master tools for tracking public expenditure, accessing climate funds, and ensuring financial transparency in development projects.",
    },
    {
      title: "Climate Governance for Adaptation and Resilience",
      icon: <FaCloudSunRain />,
      text:
        "Develop skills to implement climate policies, build community resilience, and integrate adaptation into development planning.",
    },
    {
      title: "Farmer-Led Agricultural Transformation",
      icon: <FaTractor />,
      text:
        "Learn about climate-smart agriculture, sustainable farming practices, and farmer-centered innovation systems.",
    },
    {
      title: "Institutional Reform and Long-Term Resilience",
      icon: <FaUniversity />,
      text:
        "Understand pathways for strengthening institutions, improving governance, and building systemic resilience to shocks and stresses.",
    },
  ];

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="max-w-full mx-auto px-4 md:px-12">

        {/* HEADER */}
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
          Learning Topics
        </h1>

        <p className=" text-slate-700 text-base sm:text-lg mb-12">
          Our curriculum is designed to address Cambodia's most pressing
          development challenges through practical, evidence-based learning.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {topics.map((item, i) => (
            <div
              key={i}
              className="
                bg-white
                rounded-2xl
                p-6 sm:p-8
                border border-slate-100
                shadow-[0_10px_30px_rgba(15,23,42,0.06)]
                hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              {/* TITLE */}
              <div className="flex items-start gap-3 mb-4">
                <span className="text-green-700 text-2xl mt-1">
                  {item.icon}
                </span>
                <h3 className="font-serif text-lg md:text-xl font-semibold text-green-700">
                  {item.title}
                </h3>
              </div>

              {/* TEXT */}
              <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6">
                {item.text}
              </p>

              {/* BUTTON */}
              {/* <button
                className="
                  inline-flex items-center
                  px-5 py-2
                  rounded-full
                  border border-green-700
                  text-green-700
                  text-sm font-medium
                  hover:bg-green-50
                  transition
                "
              >
                Learn More
              </button> */}
            </div>
          ))}
        </div>

        {/* FOOT NOTE */}
        <div className="mt-6 bg-green-50 rounded-xl px-6 py-4 text-center text-sm sm:text-base text-slate-700">
          Learning areas are reviewed annually to reflect policy developments
          and participant needs. Suggest topics through our registration form.
        </div>

      </div>
    </section>
  );
}
