import { useEffect, useState } from "react";
import api from "../../API/api";

export default function Schedule() {
  const [labs, setLabs] = useState([]);

  useEffect(() => {
    api.get("/learning-labs").then(res => setLabs(res.data));
  }, []);

  return (
    <section id="schedule" className="py-16 bg-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          2026 Learning Schedule
        </h2>

        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Topic</th>
                <th className="p-3 text-left">Time</th>
                <th className="p-3 text-left">Format</th>
                <th className="p-3 text-left">Speaker</th>
              </tr>
            </thead>
            <tbody>
              {labs.map(lab => (
                <tr key={lab.id} className="border-t">
                  <td className="p-3">{lab.date}</td>
                  <td className="p-3 font-medium">{lab.topic}</td>
                  <td className="p-3">{lab.time}</td>
                  <td className="p-3">{lab.format}</td>
                  <td className="p-3">{lab.speakers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
