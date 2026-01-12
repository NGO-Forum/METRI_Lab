import { useState } from "react";
import api from "../../API/api";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        setError("");

        try {
            await api.post("/admin/forgot-password", { email });

            setMessage(
                "If this email exists in our system, a password reset link has been sent."
            );
        } catch (err) {
            if (err.response?.status === 429) {
                setError("Please wait a moment before requesting another reset email.");
            } else {
                setError("Unable to send reset link. Please try again.");
            }
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
                    Forgot Password
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                    Enter your admin email to receive a reset link
                </p>
            </div>

            {/* SUCCESS MESSAGE */}
            {message && (
                <div className="mb-4 rounded-lg bg-green-50 border border-green-200 p-3 text-sm text-green-700">
                    {message}
                </div>
            )}

            {/* ERROR MESSAGE */}
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

                <button
                    type="submit"
                    disabled={loading}
                    className="
              w-full
              rounded-full
              bg-green-700
              py-3
              text-white
              font-semibold
              hover:bg-green-800
              transition
              disabled:opacity-60
              disabled:cursor-not-allowed
            "
                >
                    {loading ? "Sending link…" : "Send Reset Link"}
                </button>
            </form>

            {/* BACK TO LOGIN */}
            <div className="mt-6 text-center">
                <a
                    href="/admin/login"
                    className="text-sm text-green-700 hover:underline"
                >
                    Back to login
                </a>
            </div>

            {/* FOOTER */}
            <p className="mt-6 text-center text-xs text-slate-500">
                © {new Date().getFullYear()} NGO Forum on Cambodia
            </p>

        </div>
    </div>
);
}
