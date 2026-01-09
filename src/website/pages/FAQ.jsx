import { useState } from "react";

const faqs = [
  {
    question: "Who can join the Learning Lab?",
    answer:
      "The Lab welcomes civil society practitioners, farmers, cooperatives, youth leaders, researchers, community-based organizations, and institutional representatives committed to Cambodia's sustainable development.",
  },
  {
    question: "Is there a cost to participate?",
    answer:
      "Sessions are free for NGOF members. Non-members pay USD 250 per person, with scholarship options (25%, 50%, 100%) available to ensure inclusion, particularly for grassroots actors.",
  },
  {
    question: "How often are Learning Lab activities held?",
    answer:
      "We offer 8–10 curated sessions annually, scheduled monthly, with additional community discussions and networking events throughout the year.",
  },
  {
    question: "What language are sessions conducted in?",
    answer:
      "Primary language is Khmer, with English translation or support available for sessions involving international experts or partners.",
  },
  {
    question: "Who are the speakers and trainers?",
    answer:
      "We feature Cambodian practitioners, NGOF experts, government specialists, community leaders, and regional specialists—all with deep field experience.",
  },
  {
    question: "How does NGOF membership work?",
    answer:
      "Organizations can apply for NGOF membership through our website. Membership provides access to all Learning Lab sessions, policy briefings, and network events.",
  },
  {
    question: "What does METRI stand for?",
    answer:
      "METRI represents our core values: Meaningful Engagement, Transformative Resilience, and Inclusive Innovation.",
  },
  {
    question: "Can I attend if I'm not from an NGO?",
    answer:
      "Absolutely! The Lab is open to anyone committed to Cambodia’s sustainable development—including farmers, researchers, government officials, students, and private sector representatives.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-center text-3xl md:text-4xl font-serif font-semibold mb-6 md:mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ LIST */}
        <div className="divide-y divide-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-2 md:py-6">
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-start text-left"
                >
                  <span className="text-green-700 font-medium text-base md:text-xl">
                    {faq.question}
                  </span>

                  <span className="text-green-700 text-2xl font-light ml-4">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-2 md:mt-4 text-slate-600 text-sm md:text-lg leading-relaxed max-w-3xl">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
