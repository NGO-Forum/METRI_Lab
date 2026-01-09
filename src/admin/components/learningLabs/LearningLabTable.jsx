export default function LearningLabTable({ labs, onEdit, onDelete }) {
  if (!labs.length) {
    return (
      <div className="rounded-lg border bg-white p-6 text-center text-sm text-gray-500">
        No learning labs found.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-600">
          <tr>
            <th className="px-4 py-3 text-left">Topic</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Time</th>
            <th className="px-4 py-3">Format</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {labs.map(lab => (
            <tr key={lab.id} className="hover:bg-gray-50">
              <td className="px-4 py-3 font-medium text-gray-800">
                {lab.topic}
              </td>

              <td className="px-4 py-3">
                {new Date(lab.date).toLocaleDateString()}
              </td>

              <td className="px-4 py-3">{lab.time}</td>

              <td className="px-4 py-3 capitalize">
                {lab.format.replace("_", " ")}
              </td>

              <td className="px-4 py-3 text-right space-x-3">
                <button
                  onClick={() => onEdit(lab)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(lab)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
