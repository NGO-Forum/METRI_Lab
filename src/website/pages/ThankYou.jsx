import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="bg-white rounded-2xl shadow max-w-md w-full p-8 text-center">

        <h1 className="text-2xl font-serif font-semibold text-green-700 mb-4">
          Thank You for Registering 🎉
        </h1>

        <p className="text-slate-600 mb-6">
          Your registration has been received successfully.
          <br />
          We will contact you with further details.
        </p>

        <Link
          to="/schedule"
          className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full transition"
        >
          Back to Schedule
        </Link>

      </div>
    </section>
  );
}
