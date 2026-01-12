import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../API/api";
import AdminLayout from "../components/layout/AdminLayout";

export default function Registrations() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);


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
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Organization</th>
              <th className="p-3 text-left">Position</th>
              <th className="p-3 text-left">Province</th>
              <th className="p-3 text-left">NGO / Sponsorship</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>


          <tbody>
            {data.map(user => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="p-3 font-medium">{user.full_name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3 capitalize">{user.organization}</td>
                <td className="p-3">{user.role_position}</td>
                <td className="p-3">{user.province}</td>

                {/* NGO / Sponsorship */}
                <td className="p-3">
                  {user.is_ngof_member ? (
                    <span className="text-green-700 font-medium">
                      {user.ngo_name}
                    </span>
                  ) : (
                    <span className="text-orange-600 font-medium">
                      {user.payment_percentage} %
                    </span>
                  )}
                </td>

                <td className="p-3">
                  <button
                    onClick={() => setSelectedUser(user)}
                    className="text-blue-700 font-medium hover:underline"
                  >
                    View
                  </button>
                </td>

              </tr>
            ))}

            {data.length === 0 && (
              <tr>
                <td colSpan="7" className="p-6 text-center text-gray-500">
                  No registrations found.
                </td>
              </tr>
            )}
          </tbody>

        </table>

        {selectedUser && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6 relative">

              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-green-700">
                  Registration Details
                </h3>
                <button
                  onClick={() => setSelectedUser(null)}
                  className="text-gray-400 hover:text-gray-600 text-xl"
                >
                  ✕
                </button>
              </div>

              {/* Content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">

                <Detail label="Full Name" value={selectedUser.full_name} />
                <Detail label="Email" value={selectedUser.email} />
                <Detail label="Phone" value={selectedUser.phone || "-"} />
                <Detail label="Organization" value={selectedUser.organization} />
                <Detail label="Position" value={selectedUser.role_position} />
                <Detail label="Province" value={selectedUser.province || "-"} />

                <Detail
                  label="NGOF Member"
                  value={selectedUser.is_ngof_member ? "Yes" : "No"}
                />

                <Detail
                  label="NGO Name"
                  value={
                    selectedUser.is_ngof_member
                      ? selectedUser.ngo_name
                      : "N/A"
                  }
                />

                <Detail
                  label="Payment Percentage"
                  value={
                    selectedUser.is_ngof_member
                      ? "N/A"
                      : `${selectedUser.payment_percentage || 0}%`
                  }
                />

                <Detail
                  label="Special Needs"
                  value={selectedUser.special_needs || "None"}
                />

              </div>

              {/* Footer */}
              <div className="mt-6 text-right">
                <button
                  onClick={() => setSelectedUser(null)}
                  className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </AdminLayout>
  );


  function Detail({ label, value }) {
    return (
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="font-medium text-gray-800">{value}</p>
      </div>
    );
  }

}
