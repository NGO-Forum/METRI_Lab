import { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUserTie,
  FaVideo,
  FaHome,
  FaUsers,
  FaEye
} from "react-icons/fa";
import api from "../../API/api";

export default function Schedule() {
  const [labs, setLabs] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/learning-labs")
      .then(res => setLabs(res.data))
      .finally(() => setLoading(false));
  }, []);

  // Normalize format for filtering safety
  const normalizeFormat = format => {
    if (!format) return "";
    const f = format.toLowerCase();
    if (f.includes("online") && f.includes("person")) return "hybrid";
    if (f.includes("online")) return "online";
    if (f.includes("person")) return "in_person";
    return "";
  };

  const filteredLabs = labs.filter(lab => {
    if (filter === "all") return true;
    return normalizeFormat(lab.format) === filter;
  });

  const formatDate = date =>
    new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <section className="py-12 bg-white">
      <div className="max-w-full mx-auto px-4 md:px-12">

        {/* HEADER */}
        <h1 className="font-serif text-xl sm:text-4xl font-semibold">
          Learning Schedule & Registration
        </h1>
        <p className="text-sm md:text-lg text-slate-600 mt-1 mb-8">
          These sessions are part of the 2026 METRI Learning Lab
        </p>

        {/* PRICING & ELIGIBILITY */}
        <div className="bg-green-50/60 max-w-4xl mx-auto rounded-3xl px-4 sm:px-10 py-10 sm:py-14 text-center mb-12">

          {/* TITLE */}
          <h3 className="font-serif text-green-700 text-xl sm:text-3xl font-semibold mb-8">
            Pricing & Eligibility
          </h3>

          {/* LIST */}
          <ul className="space-y-4 text-base sm:text-lg text-slate-800">

            <li className="flex items-center justify-center gap-3">
              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-slate-900 text-white text-xs">
                ✓
              </span>
              <span>
                <strong>FREE</strong> for NGOF members
              </span>
            </li>

            <li className="flex items-center justify-center gap-3">
              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-slate-900 text-white text-xs">
                ✓
              </span>
              <span>
                <strong>Non-members:</strong> USD 250 per person
              </span>
            </li>

            <li className="flex md:items-center justify-center gap-3 italic">
              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-slate-900 text-white text-xs">
                ✓
              </span>
              <span>
                Scholarship options available: 25%, 50%,
                or 100% support
              </span>
            </li>

          </ul>

          {/* FOOT NOTE */}
          <p className="mt-8 max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
            Our pricing model ensures sustainability while prioritizing inclusion for
            grassroots actors.
          </p>

        </div>


        {/* FILTERS */}
        <div className="grid
            grid-cols-2
            sm:grid-cols-4
            gap-2
            justify-center
            mb-8
            max-w-xl
            mx-auto
            ">
          {[
            { label: "All Sessions", value: "all" },
            { label: "Online Only", value: "online" },
            { label: "In-Person Only", value: "in_person" },
            { label: "Hybrid Only", value: "hybrid" },
          ].map(f => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`
                px-4 py-2 rounded-full text-xs md:text-sm font-medium border
                ${filter === f.value
                  ? "bg-green-700 text-white border-green-700"
                  : "border-green-700 text-green-700 hover:bg-green-50"}
                transition
              `}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* LOADING */}
        {loading && (
          <p className="text-center text-slate-500">Loading sessions…</p>
        )}

        {/* SESSION CARDS */}
        <div className="space-y-6 max-w-full mx-auto">
          {filteredLabs.map(lab => (
            <div
              key={lab.id}
              className="
              bg-white
                border border-slate-200
                rounded-3xl
                px-6 py-7
                sm:px-8 sm:py-8
                hover:shadow-md
                transition
              "
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

                {/* LEFT CONTENT */}
                <div className="flex-1">

                  {/* TITLE */}
                  <h3 className="font-serif text-green-700 font-semibold text-sm sm:text-2xl mb-2 md:mb-4">
                    {lab.topic}
                  </h3>

                  {/* META */}
                  <div className="flex flex-wrap gap-6 text-sm md:text-lg text-slate-800 mb-4">
                    <span className="flex items-center gap-2 text-sm md:text-base text-slate-800">
                      <FaCalendarAlt className="text-slate-900" />
                      <span className="font-medium">
                        {formatDate(lab.date)}
                      </span>
                    </span>

                    <span className="flex items-center gap-2">
                      <FaClock className="text-slate-900" />
                      {lab.time}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-slate-900" />
                      {lab.location || "Phnom Penh"}
                    </span>
                  </div>

                  {/* BADGE */}
                  <span
                    className={`
                      inline-flex items-center gap-2
                      px-4 py-2 rounded-full
                      text-sm md:text-lg font-medium mb-2 md:mb-5
                      ${normalizeFormat(lab.format) === "online"
                        ? "bg-blue-50 text-blue-700"
                        : normalizeFormat(lab.format) === "hybrid"
                          ? "bg-green-100 text-green-700"
                          : "bg-slate-100 text-slate-700"
                      }
                    `}
                  >
                    {normalizeFormat(lab.format) === "online" && (
                      <>
                        <FaVideo className="text-base md:text-lg" />
                        Online
                      </>
                    )}

                    {normalizeFormat(lab.format) === "hybrid" && (
                      <>
                        <FaHome className="text-base md:text-lg" />
                        Hybrid
                      </>
                    )}

                    {normalizeFormat(lab.format) === "in_person" && (
                      <>
                        <FaUsers className="text-base md:text-lg" />
                        In-person
                      </>
                    )}
                  </span>


                  {/* DESCRIPTION */}
                  <p className="text-slate-700 text-base mb-5 max-w-3xl">
                    {lab.description}
                  </p>

                  {/* SPEAKERS */}
                  <p className="text-sm md:text-lg text-slate-800 flex md:items-center gap-2">
                    <FaUserTie className="text-slate-900" />
                    <strong>Speakers:</strong> {lab.speakers}
                  </p>
                </div>

                {/* REGISTER BUTTON */}
                <a
                  href={`/register/${lab.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center gap-2
                    bg-green-600 hover:bg-green-700
                    text-white w-44 text-sm font-medium
                    px-6 py-3
                    rounded-full
                    shadow-[0_10px_30px_rgba(15,23,42,0.06)]
                    hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    whitespace-nowrap
                  "
                >
                  👤➕ Register Now
                </a>

              </div>
            </div>
          ))}
        </div>

        {/* FOOTER BUTTONS */}
        <div className="mt-10 max-w-2xl grid grid-cols-2 gap-4 justify-center mx-auto">

          {/* View More */}
          <button
            className="
              flex items-center justify-center gap-2
              px-2 md:px-6 py-2
              rounded-full
              border border-green-700
            text-green-700
            hover:bg-green-50
              shadow-[0_10px_30px_rgba(15,23,42,0.06)]
                    hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]
                    hover:-translate-y-1
                    transition-all
                    duration-300
              text-sm
            "
          >
            <FaEye className="text-xs md:text-sm" />
            View More Sessions
          </button>

          {/* View Full Schedule */}
          <button
            className="
              flex items-center justify-center gap-2
              px-2 md:px-6 py-2
              rounded-full
            bg-green-700
            text-white
            hover:bg-green-800
              shadow-[0_10px_30px_rgba(15,23,42,0.06)]
                    hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]
                    hover:-translate-y-1
                    transition-all
                    duration-300
              text-sm
            "
          >
            <FaCalendarAlt className="text-xs md:text-sm" />
            View Full Schedule
          </button>

        </div>
      </div>

    </section >


  );
}
