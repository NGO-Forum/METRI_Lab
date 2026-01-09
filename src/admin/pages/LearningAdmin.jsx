import { useEffect, useState } from "react";
import api from "../../API/api";

import LearningLabTable from "../components/learningLabs/LearningLabTable";
import LearningLabForm from "../components/learningLabs/LearningLabForm";
import DeleteLearningLabModal from "../components/learningLabs/DeleteLearningLabModal";

export default function LearningAdmin() {
  const [labs, setLabs] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const loadLabs = async () => {
    const res = await api.get("/admin/learning-labs");
    setLabs(res.data.data);
  };

  useEffect(() => {
    loadLabs();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Learning Labs
          </h1>
          <p className="text-sm text-gray-500">
            Manage learning lab sessions
          </p>
        </div>

        <button
          onClick={() => {
            setSelected(null);
            setShowForm(true);
          }}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium
                     text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
        >
          + Add Learning Lab
        </button>
      </div>

      <LearningLabTable
        labs={labs}
        onEdit={(lab) => {
          setSelected(lab);
          setShowForm(true);
        }}
        onDelete={(lab) => {
          setSelected(lab);
          setShowDelete(true);
        }}
      />

      {showForm && (
        <LearningLabForm
          lab={selected}
          onClose={() => setShowForm(false)}
          onSaved={loadLabs}
        />
      )}

      {showDelete && (
        <DeleteLearningLabModal
          lab={selected}
          onClose={() => setShowDelete(false)}
          onDeleted={loadLabs}
        />
      )}
    </div>
  );
}
