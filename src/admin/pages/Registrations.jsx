import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../API/api";

export default function Registrations() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get(`/admin/learning-labs/${id}/registrations`)
      .then(res => setData(res.data.data));
  }, [id]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Registrations</h2>

      {data.map(r => (
        <div key={r.id}
          className="rounded-md border bg-white p-4 shadow-sm">
          <p className="font-medium">{r.full_name}</p>
          <p className="text-sm text-gray-600">{r.email}</p>
        </div>
      ))}
    </div>
  );
}
