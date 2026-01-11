import { Routes, Route, useLocation } from "react-router-dom";

/* Website layout */
import Navbar from "./website/layout/Navbar";
import Footer from "./website/layout/Footer";

/* Website pages */
import LearningLabPage from "./website/pages/LearningLabPage";
import About from "./website/pages/About";
import Topics from "./website/pages/Topics";
import Schedule from "./website/pages/Schedule";
import Register from "./website/pages/Register";
import ThankYou from "./website/pages/ThankYou";
import FAQ from "./website/pages/FAQ";
import Contact from "./website/pages/Contact";
import Interest from "./website/pages/RegisterInterest";
import ScrollToTop from "./website/components/ScrollTop";


/* Admin */
import AdminRoute from "./admin/middleware/AdminRoute";
import LearningAdmin from "./admin/pages/LearningAdmin";
import AdminLogin from "./admin/pages/Login";
import InterestRegistrations from "./admin/pages/InterestRegistrations";
import Registrations from "./admin/pages/Registrations";
import DetailRegister from "./admin/pages/DetailRegister";

export default function App() {
  const location = useLocation();

  // ✅ Hide layout for admin & register pages
  const hideLayout =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/register") ||
    location.pathname.startsWith("/thank-you");

  return (
    <>
      {/* WEBSITE LAYOUT */}
      <ScrollToTop />
      {!hideLayout && <Navbar />}

      <Routes>
        {/* WEBSITE */}
        <Route path="/" element={<LearningLabPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/interest" element={<Interest />} />

        {/* REGISTER (NO NAVBAR / FOOTER) */}
        <Route path="/register/:id" element={<Register />} />
        <Route path="/thank-you" element={<ThankYou />} />


        {/* ADMIN (NO NAVBAR / FOOTER) */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin/learning-labs"
          element={
            <AdminRoute>
              <LearningAdmin />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/interest-registrations"
          element={
            <AdminRoute>
              <InterestRegistrations />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/registrations"
          element={
            <AdminRoute>
              <Registrations />
            </AdminRoute>
          }
        />
        

        <Route
          path="/admin/learning-labs/:id/registrations"
          element={
            <AdminRoute>
              <DetailRegister />
            </AdminRoute>
          }
        />

      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}
