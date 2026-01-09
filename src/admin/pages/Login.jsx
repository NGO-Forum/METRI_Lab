import { useState } from "react";
import api from "../../API/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const res = await api.post("/admin/login", { email, password });
    localStorage.setItem("admin_token", res.data.token);
    window.location.href = "/admin/learning-labs";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={submit}
        className="w-full max-w-sm space-y-4 rounded-lg bg-white p-6 shadow"
      >
        <h2 className="text-xl font-semibold text-center">Admin Login</h2>

        <input className="input" placeholder="Email"
          onChange={e => setEmail(e.target.value)} />

        <input className="input" type="password" placeholder="Password"
          onChange={e => setPassword(e.target.value)} />

        <button
          className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
}
