import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import api from "../../API/api";

const INTEREST_OPTIONS = [
  "Inclusive & green growth",
  "Natural resource & environmental governance",
  "Public financial management & climate / development finance",
  "Climate change governance – adaptation, mitigation, resilience",
  "Sustainable agriculture & food systems – farmer-led practices",
  "Institutional governance, reform & resilience",
];

export default function RegisterInterest() {
  const [form, setForm] = useState({
    full_name: "",
    organization: "",
    role_position: "",
    email: "",
    phone: "",
    province: "",
    interests: [],
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const toggleInterest = value => {
    setForm(prev => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter(i => i !== value)
        : [...prev.interests, value],
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/interest-registrations", form);
      setSuccess(true);
    } catch (err) {
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-slate-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-6 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-serif font-semibold mb-4">
            Stay Informed – Register Your Interest
          </h2>
          <p className="text-slate-600 text-lg">
            Not ready to choose a specific session yet? Join our mailing list
            and receive updates about upcoming activities of the{" "}
            <strong>METRI Learning Lab – Exchange</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* WHY REGISTER */}
          <div className="bg-white rounded-3xl shadow-sm p-8 h-fit">
            <h3 className="text-green-700 font-serif font-semibold text-xl md:text-3xl mb-6">
              Why Register?
            </h3>

            <ul className="space-y-3 text-sm md:text-lg">
              {[
                "Early access to session registrations",
                "Receive learning resources and materials",
                "Join our community discussions",
                "Get updates on policy developments",
                "Network with other practitioners",
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FORM */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow p-8">

            {success ? (
              /* SUCCESS STATE */
              <div className="text-center py-12">
                <FaCheckCircle className="text-green-600 text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  Thank you for registering!
                </h3>
                <p className="text-slate-600">
                  We will contact you about upcoming METRI Learning Lab activities.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-sm">

                <Input
                  label="Full Name *"
                  required
                  value={form.full_name}
                  onChange={e => setForm({ ...form, full_name: e.target.value })}
                />

                <Input
                  label="Organization / Affiliation *"
                  required
                  value={form.organization}
                  onChange={e => setForm({ ...form, organization: e.target.value })}
                />

                <Input
                  label="Role / Position *"
                  required
                  value={form.role_position}
                  onChange={e => setForm({ ...form, role_position: e.target.value })}
                />

                <Input
                  label="Email *"
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />

                <Input
                  label="Phone Number (optional)"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                />

                <Input
                  label="Province / Region in Cambodia"
                  value={form.province}
                  onChange={e => setForm({ ...form, province: e.target.value })}
                />

                {/* INTERESTS */}
                <div className="border rounded-xl p-4">
                  <label className="font-medium block mb-3">
                    I am mainly interested in… <span className="text-slate-500">(optional)</span>
                  </label>

                  <div className="grid sm:grid-cols-2 gap-2">
                    {INTEREST_OPTIONS.map(option => (
                      <label key={option} className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          checked={form.interests.includes(option)}
                          onChange={() => toggleInterest(option)}
                        />
                        <span className="-mt-1">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* CONSENT */}
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    required
                    checked={form.consent}
                    onChange={e =>
                      setForm({ ...form, consent: e.target.checked })
                    }
                  />
                  <span className="-mt-1">
                    I agree to receive information about the METRI Learning Lab – Exchange
                    and related learning opportunities.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full px-6 py-3 rounded-full font-medium transition
                    ${loading
                      ? "bg-green-400 text-white cursor-not-allowed"
                      : "bg-green-700 hover:bg-green-800 text-white"
                    }`}
                >
                  {loading ? "Submitting..." : "Register My Interest"}
                </button>

              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}

/* INPUT */
function Input({ label, type = "text", ...props }) {
  return (
    <div>
      <label className="font-medium">{label}</label>
      <input
        type={type}
        {...props}
        className="w-full mt-1 border rounded-lg px-4 py-2
          focus:ring-2 focus:ring-green-600 outline-none transition"
      />
    </div>
  );
}
