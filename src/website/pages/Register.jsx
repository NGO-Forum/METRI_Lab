import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../../API/api";

/* ======================================================
   SESSION HEADER
====================================================== */
function SessionHeader({ lab, formatDate }) {
  return (
    <div className="px-6 pt-6">
      <h3 className="font-serif text-lg font-semibold text-green-700">
        <span className="text-slate-600">Register for:</span> {lab.topic}
      </h3>

      <div className="text-sm text-slate-600 mt-2 space-y-1">
        <p><strong>Date:</strong> {formatDate(lab.date)}</p>
        <p><strong>Time:</strong> {lab.time}</p>
        <p><strong>Format:</strong> {lab.format}</p>
        <p><strong>Speakers / Trainers:</strong> {lab.speakers}</p>
      </div>
    </div>
  );
}

/* ======================================================
   INPUT COMPONENT
====================================================== */
function Input({ label, ...props }) {
  return (
    <div>
      <label className="font-medium">{label}</label>
      <input
        {...props}
        className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
      />
    </div>
  );
}

/* ======================================================
   REGISTRATION FORM
====================================================== */
function RegistrationForm({ learningLabId }) {
  const [form, setForm] = useState({
    full_name: "",
    organization: "",
    role_position: "",
    email: "",
    phone: "",
    province: "",
    is_ngof_member: null,
    ngo_name: "",
    payment_percentage: "",
    special_needs: "",
    consent: false,
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await api.post(`/learning-labs/${learningLabId}/register`, {
        ...form,
        is_ngof_member: Boolean(form.is_ngof_member),
        payment_percentage:
          form.is_ngof_member === false
            ? Number(form.payment_percentage)
            : null,
      });

      // ✅ Redirect to Thank You page
      navigate("/thank-you");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };


  return (
    <form onSubmit={handleSubmit} className="px-6 pt-6 pb-6 space-y-4 text-sm">

      <Input label="Full Name *" name="full_name" value={form.full_name} onChange={handleChange} required />
      <Input label="Organization / Affiliation *" name="organization" value={form.organization} onChange={handleChange} required />
      <Input label="Role / Position *" name="role_position" value={form.role_position} onChange={handleChange} required />
      <Input label="Email *" name="email" type="email" value={form.email} onChange={handleChange} required />
      <Input label="Phone Number (optional)" name="phone" value={form.phone} onChange={handleChange} />
      <Input label="Province / Region in Cambodia" name="province" value={form.province} onChange={handleChange} />

      {/* NGOF MEMBER */}
      <div>
        <label className="font-medium block mb-2">
          Are you an NGOF member? *
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="is_ngof_member"
            checked={form.is_ngof_member === true}
            onChange={() =>
              setForm(prev => ({
                ...prev,
                is_ngof_member: true,
                payment_percentage: "",
              }))
            }
          />
          Yes, my organization is an NGOF member
        </label>

        <label className="flex items-center gap-2 mt-2">
          <input
            type="radio"
            name="is_ngof_member"
            checked={form.is_ngof_member === false}
            onChange={() =>
              setForm(prev => ({
                ...prev,
                is_ngof_member: false,
                ngo_name: "",
              }))
            }
          />
          No, we are not an NGOF member
        </label>
      </div>

      {form.is_ngof_member === true && (
        <Input
          label="NGO Name *"
          name="ngo_name"
          value={form.ngo_name}
          onChange={handleChange}
          required
        />
      )}

      {form.is_ngof_member === false && (
        <div className="space-y-3">

          {/* Info message */}
          <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-4 text-xs text-slate-700 leading-relaxed">
            <strong>Non-NGOF members:</strong> are required to pay a registration fee
            of <strong>USD 250</strong> per participant. Organizations or individuals
            unable to afford the fee may apply for partial sponsorship.
          </div>

          {/* Sponsorship select */}
          <div>
            <label className="font-medium">
              Available Sponsorship Offerred *
            </label>
            <select
              name="payment_percentage"
              value={form.payment_percentage}
              onChange={handleChange}
              required
              className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
            >
              <option value="">Select</option>
              <option value="25">25%</option>
              <option value="50">50%</option>
              <option value="75">75%</option>
              <option value="100">100%</option>
            </select>
          </div>

        </div>
      )}


      <div>
        <label className="font-medium">
          Any special needs or accessibility requirements? (optional)
        </label>
        <textarea
          name="special_needs"
          rows="3"
          value={form.special_needs}
          onChange={handleChange}
          className="w-full mt-1 border rounded-lg px-4 py-2"
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          name="consent"
          checked={form.consent}
          onChange={handleChange}
          required
        />
        <span className="text-xs text-slate-600">
          I agree that the NGO Forum on Cambodia may contact me regarding this session.
        </span>
      </div>

      <button
        type="submit"
        className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-full"
      >
        Complete Registration
      </button>
    </form>
  );
}

/* ======================================================
   REGISTER PAGE (DEFAULT EXPORT)
====================================================== */
export default function Register() {
  const { id } = useParams();
  const [lab, setLab] = useState(null);

  useEffect(() => {
    api.get(`/learning-labs/${id}`).then(res => setLab(res.data));
  }, [id]);

  const formatDate = date =>
    new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  if (!lab) return <p className="p-10 text-center">Loading...</p>;

  return (
    <section className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow">
        <SessionHeader lab={lab} formatDate={formatDate} />
        <RegistrationForm learningLabId={lab.id} />
      </div>
    </section>
  );
}
