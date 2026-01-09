export default function Topics() {
  const topics = [
    "Inclusive & Green Growth",
    "Natural Resource Governance",
    "Public & Climate Finance",
    "Climate Adaptation & Resilience",
    "Farmer-Led Agriculture",
    "Institutional Reform",
  ];

  return (
    <section id="topics" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Learning Topics
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topics.map(topic => (
            <div
              key={topic}
              className="bg-white rounded-xl shadow p-6 text-center"
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
