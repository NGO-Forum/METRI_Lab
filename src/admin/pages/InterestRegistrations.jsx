import { useEffect, useState } from "react";
import api from "../../API/api";
import AdminLayout from "../components/layout/AdminLayout";

export default function InterestRegistrations() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        api.get("/admin/interest-registrations")
            .then(res => setItems(res.data));
    }, []);

    return (
        <AdminLayout>
            <section className="p-6">
                <h1 className="text-2xl font-semibold mb-6">
                    Interest Registrations
                </h1>

                <div className="overflow-x-auto bg-white rounded-xl shadow">
                    <table className="w-full text-sm">
                        <thead className="bg-slate-100">
                            <tr>
                                <Th>#</Th>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Organization</Th>
                                <Th>Role</Th>
                                <Th>Interests</Th>
                                <Th>Province</Th>
                                <Th>Date</Th>
                            </tr>
                        </thead>

                        <tbody>
                            {items.map((row, index) => (
                                <tr key={row.id} className="border-t">
                                    <Td>{index + 1}</Td>
                                    <Td>{row.full_name}</Td>
                                    <Td>{row.email}</Td>
                                    <Td>{row.organization}</Td>
                                    <Td>{row.role_position}</Td>
                                    <Td>
                                        {row.interests?.length
                                            ? row.interests.join(", ")
                                            : "-"}
                                    </Td>
                                    <Td>{row.province || "-"}</Td>
                                    <Td>
                                        {new Date(row.created_at).toLocaleDateString()}
                                    </Td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </AdminLayout>

    );
}

function Th({ children }) {
    return (
        <th className="px-4 py-3 text-left font-medium text-slate-600">
            {children}
        </th>
    );
}

function Td({ children }) {
    return (
        <td className="px-4 py-3">
            {children}
        </td>
    );
}
