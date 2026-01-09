import { useState } from "react";

import api from "../../../API/api";

export default function LearningLabForm({ lab, onClose, onSaved }) {
  const [form, setForm] = useState({
    date: lab?.date || "",
    time: lab?.time || "",
    topic: lab?.topic || "",
    format: lab?.format || "online",
    description: lab?.description || "",
    speakers: lab?.speakers || "",
    link: lab?.link || "",
    is_published: lab?.is_published ?? true,
  });

  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      lab
        ? await api.put(`/admin/learning-labs/${lab.id}`, form)
        : await api.post("/admin/learning-labs", form);
      onSaved();
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
      <form
        onSubmit={submit}
        className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-8 space-y-6 overflow-auto h-auto md:h-[90vh]"
      >
        {/* HEADER */}
        <div>
          <h2 className="text-xl font-semibold text-green-700">
            {lab ? "Edit Learning Lab" : "Create Learning Lab"}
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Manage schedule details and visibility
          </p>
        </div>

        {/* TOPIC */}
        <div>
          <label className="label">Topic:</label>
          <input
            className="input"
            placeholder="Learning Lab topic"
            value={form.topic}
            onChange={(e) =>
              setForm({ ...form, topic: e.target.value })
            }
            required
          />
        </div>

        {/* DATE & TIME */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label">Date:</label>
            <div className="relative">
              <input
                type="date"
                className="input pl-10"
                value={form.date}
                onChange={(e) =>
                  setForm({ ...form, date: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div>
            <label className="label">Time:</label>
            <div className="relative">
              <input
                placeholder="9:00 – 12:00"
                className="input pl-10"
                value={form.time}
                onChange={(e) =>
                  setForm({ ...form, time: e.target.value })
                }
                required
              />
            </div>
          </div>
        </div>

        {/* FORMAT */}
        <div>
          <label className="label">Format:</label>
          <select
            className="input"
            value={form.format}
            onChange={(e) =>
              setForm({ ...form, format: e.target.value })
            }
          >
            <option value="online">🎥 Online</option>
            <option value="in_person">👥 In-person</option>
            <option value="hybrid">🏠 Hybrid</option>
          </select>
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="label">Description:</label>
          <textarea
            rows="3"
            className="input"
            placeholder="Session overview"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            required
          />
        </div>

        {/* SPEAKERS */}
        <div>
          <label className="label">Speakers:</label>
          <textarea
            rows="2"
            className="input"
            placeholder="Names and roles"
            value={form.speakers}
            onChange={(e) =>
              setForm({ ...form, speakers: e.target.value })
            }
            required
          />
        </div>

        {/* LINK */}
        <div>
          <label className="label">Meeting Link (optional)</label>
          <input
            className="input"
            placeholder="https://zoom.us/…"
            value={form.link}
            onChange={(e) =>
              setForm({ ...form, link: e.target.value })
            }
          />
        </div>

        {/* PUBLISHED */}
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={form.is_published}
            onChange={(e) =>
              setForm({ ...form, is_published: e.target.checked })
            }
          />
          Published
        </label>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-full border text-sm"
          >
            Cancel
          </button>

          <button
            disabled={loading}
            className="px-6 py-2 rounded-full bg-blue-600 text-white text-sm hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Saving…" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}
