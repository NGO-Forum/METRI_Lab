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

/* Admin */
import AdminRoute from "./admin/middleware/AdminRoute";
import LearningAdmin from "./admin/pages/LearningAdmin";
import AdminLogin from "./admin/pages/Login";

export default function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {/* WEBSITE LAYOUT */}
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* WEBSITE */}
        <Route path="/" element={<LearningLabPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/register" element={<Register />} />

        {/* ADMIN */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/learning-labs"
          element={
            <AdminRoute>
              <LearningAdmin />
            </AdminRoute>
          }
        />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
}
