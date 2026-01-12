import { useState } from "react";
import api from "../../API/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/admin/login", { email, password });
      localStorage.setItem("admin_token", res.data.token);
      window.location.href = "/admin/learning-labs";
    } catch (err) {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* HEADER */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-serif font-semibold text-green-700">
            NGOF Admin
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Sign in to manage Learning Labs
          </p>
        </div>

        {/* ERROR */}
        {error && (
          <div className="mb-4 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={submit} className="space-y-4">

          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
              placeholder="admin@ngoforum.org.kh"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
              placeholder="••••••••"
            />
          </div>

          {/* FORGOT PASSWORD */}
          <div className="text-right">
            <a
              href="/admin/forgot-password"
              className="text-sm text-green-700 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
                w-full
                px-6 py-2
                rounded-full
                bg-green-700
                text-white
                font-semibold
                tracking-wide
                hover:bg-green-800
                focus:outline-none
                focus:ring-2
                focus:ring-green-600
                focus:ring-offset-2
                transition
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>


        </form>

        {/* FOOTER */}
        <p className="mt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} NGO Forum on Cambodia
        </p>

      </div>
    </div>
  );
}
