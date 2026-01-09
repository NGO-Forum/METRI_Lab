import { useState } from "react";
import api from "../../API/api";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
  });

  const submit = e => {
    e.preventDefault();
    api.post("/learning-lab-registrations", form)
      .then(() => alert("Registration submitted"))
      .catch(() => alert("Error submitting form"));
  };

  return (
    <section id="register" className="py-16 bg-gray-50">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Register Interest
        </h2>

        <form onSubmit={submit} className="space-y-4">
          <input
            className="w-full p-3 border rounded"
            placeholder="Full Name"
            required
            onChange={e => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="w-full p-3 border rounded"
            placeholder="Organization"
            required
            onChange={e =>
              setForm({ ...form, organization: e.target.value })
            }
          />

          <input
            type="email"
            className="w-full p-3 border rounded"
            placeholder="Email"
            required
            onChange={e => setForm({ ...form, email: e.target.value })}
          />

          <button className="w-full bg-green-700 text-white py-3 rounded">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
