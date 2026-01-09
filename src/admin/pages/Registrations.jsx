import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../API/api";
import AdminLayout from "../components/layout/AdminLayout";

export default function AllRegistrations() {
  const [labs, setLabs] = useState([]);

  useEffect(() => {
    api
      .get("/admin/learning-lab-registration-summary")
      .then(res => setLabs(res.data));
  }, []);

  return (
    <AdminLayout>
      <h2 className="text-xl font-semibold mb-6">
        Learning Lab Registration Summary
      </h2>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Learning Lab</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Time</th>
              <th className="p-3 text-center">Total</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {labs.map(lab => (
              <tr
                key={lab.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-3 font-medium">
                  {lab.topic}
                </td>

                <td className="p-3">
                  {new Date(lab.date).toLocaleDateString()}
                </td>

                <td className="p-3">{lab.time}</td>

                <td className="p-3 text-center font-semibold">
                  {lab.registrations_count}
                </td>

                {/* ✅ ACTION */}
                <td className="p-3">
                  <Link
                    to={`/admin/learning-labs/${lab.id}/registrations`}
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}

            {labs.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="p-6 text-center text-gray-500"
                >
                  No learning labs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
