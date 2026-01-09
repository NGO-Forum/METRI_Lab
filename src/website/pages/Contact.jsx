import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-slate-50 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-14 max-w-xl">
          <h2 className="text-2xl md:text-4xl font-serif font-semibold text-slate-900 mb-3">
            Get in Touch
          </h2>
          <p className="text-slate-600 text-sm md:text-lg">
            We'd love to hear from you. Reach out with questions,
            suggestions, or partnership inquiries.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* LEFT INFO */}
          <div className="space-y-7">

            {/* CARD */}
            <InfoCard
              icon={<FaMapMarkerAlt />}
              title="Our Location"
            >
              NGO Forum on Cambodia: <br />
              #9–11, Street 476, Sangkat Toul Tompong, <br />
              Khan Chamkarmon, Phnom Penh, Cambodia
            </InfoCard>

            <InfoCard
              icon={<FaPhoneAlt />}
              title="Contact Information"
            >
              <strong>Phone:</strong> +855 (0)23 214 429 <br />
              <strong>Email:</strong> info@ngoforum.org.kh <br />
              <strong>Website:</strong> www.ngoforum.org.kh
            </InfoCard>

            <InfoCard
              icon={<FaClock />}
              title="Office Hours"
            >
              <strong>Monday – Friday:</strong> 8:00 AM – 5:00 PM <br />
              <strong>Saturday – Sunday:</strong> Closed <br />
              Cambodia Time (GMT+7)
            </InfoCard>

          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-3xl shadow-md p-8 md:p-10">
            <h3 className="text-green-700 font-serif font-semibold text-xl mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5 text-sm">

              <Input label="Name *" type="text" required />
              <Input label="Email *" type="email" required />
              <Input label="Organization" type="text" />

              <div>
                <label className="font-medium">Message *</label>
                <textarea
                  rows="4"
                  required
                  className="w-full mt-1 border rounded-xl px-4 py-3
                    focus:ring-2 focus:ring-green-600 outline-none
                    transition"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2
                  bg-green-700 hover:bg-green-800
                  text-white py-3 rounded-full
                  font-medium transition"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ==============================
   INFO CARD
============================== */
function InfoCard({ icon, title, children }) {
  return (
    <div className="bg-white rounded-3xl shadow-sm hover:shadow-md transition p-6">
      <h4 className="flex items-center gap-3 text-green-700 font-semibold mb-3 text-lg md:text-2xl">
        <span className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
          {icon}
        </span>
        {title}
      </h4>
      <p className="text-sm md:text-lg text-slate-600 leading-relaxed">
        {children}
      </p>
    </div>
  );
}

/* ==============================
   INPUT
============================== */
function Input({ label, ...props }) {
  return (
    <div>
      <label className="font-medium">{label}</label>
      <input
        {...props}
        className="w-full mt-1 border rounded-xl px-4 py-3
          focus:ring-2 focus:ring-green-600 outline-none
          transition"
      />
    </div>
  );
}
