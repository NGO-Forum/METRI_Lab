import { useState } from "react";
import api from "../../../API/api";

export default function DeleteLearningLabModal({ lab, onClose, onDeleted }) {
  const [loading, setLoading] = useState(false);

  const remove = async () => {
    try {
      setLoading(true);
      await api.delete(`/admin/learning-labs/${lab.id}`);
      onDeleted();
      onClose();
    } catch (err) {
      alert("Failed to delete learning lab.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-2">Confirm Delete</h2>

        <p className="text-sm text-gray-600 mb-4">
          Delete <b>{lab.topic}</b>?
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-md border px-4 py-2 text-sm"
          >
            Cancel
          </button>

          <button
            onClick={remove}
            disabled={loading}
            className="rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? "Deleting…" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
