import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../API/api";
import AdminLayout from "../components/layout/AdminLayout";

export default function Registrations() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get(`/admin/learning-labs/${id}/registrations`)
      .then(res => setData(res.data.data));
  }, [id]);

  return (
    <AdminLayout>
      <h2 className="text-xl font-semibold mb-6">
        Registrations List
      </h2>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Organization</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {data.map(user => (
              <tr key={user.id} className="border-t">
                <td className="p-3">{user.full_name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.organization}</td>
                <td className="p-3">
                  {new Date(user.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}

            {data.length === 0 && (
              <tr>
                <td colSpan="4" className="p-6 text-center text-gray-500">
                  No registrations found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
