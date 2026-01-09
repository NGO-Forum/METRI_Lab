import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="p-6">
          {children}
        </main>

      </div>
    </div>
  );
}
