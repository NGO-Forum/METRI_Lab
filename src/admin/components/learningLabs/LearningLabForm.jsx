import { useState } from "react";
import api from "../../../API/api";

export default function LearningLabForm({ lab, onClose, onSaved }) {
  const [form, setForm] = useState(
    lab || {
      date: "",
      topic: "",
      time: "",
      format: "",
      speakers: "",
      is_published: true,
    }
  );

  const submit = async (e) => {
    e.preventDefault();
    lab
      ? await api.put(`/admin/learning-labs/${lab.id}`, form)
      : await api.post("/admin/learning-labs", form);

    onSaved();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <form
        onSubmit={submit}
        className="w-full max-w-xl space-y-4 rounded-lg bg-white p-6 shadow-lg"
      >
        <h2 className="text-lg font-semibold">
          {lab ? "Edit Learning Lab" : "Create Learning Lab"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="date" className="input"
            value={form.date}
            onChange={e => setForm({ ...form, date: e.target.value })} />

          <input placeholder="Time (9:00–12:00)" className="input"
            value={form.time}
            onChange={e => setForm({ ...form, time: e.target.value })} />
        </div>

        <input placeholder="Topic" className="input"
          value={form.topic}
          onChange={e => setForm({ ...form, topic: e.target.value })} />

        <input placeholder="Format (Online / In-person)" className="input"
          value={form.format}
          onChange={e => setForm({ ...form, format: e.target.value })} />

        <textarea placeholder="Speakers" rows="3" className="input"
          value={form.speakers}
          onChange={e => setForm({ ...form, speakers: e.target.value })} />

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox"
            checked={form.is_published}
            onChange={e =>
              setForm({ ...form, is_published: e.target.checked })
            } />
          Published
        </label>

        <div className="flex justify-end gap-3">
          <button type="button" onClick={onClose}
            className="rounded-md border px-4 py-2 text-sm">
            Cancel
          </button>
          <button
            className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
