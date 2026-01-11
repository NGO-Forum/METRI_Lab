import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="bg-white rounded-2xl shadow max-w-md w-full p-8 text-center">

        <h1 className="text-2xl font-serif font-semibold text-green-700 mb-4">
          Thank You for Registering 🎉
        </h1>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Your registration has been received successfully.
          <br />
          We will send the <strong>Zoom meeting link</strong> to your email
          <strong> three (3) days before</strong> the METRI Learning Lab begins.
        </p>

        <p className="text-sm text-slate-500 mb-6">
          Please make sure to check your inbox (and spam folder) closer to
          the session date.
        </p>

        <Link
          to="/"
          className="inline-block bg-green-700 hover:bg-green-800 text-white px-4 py-1 rounded-full transition"
        >
          Go to METRI Learning Lab
        </Link>

      </div>
    </section>
  );
}
