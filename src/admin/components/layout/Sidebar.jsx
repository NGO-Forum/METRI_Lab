import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r px-4 py-6">
      <h2 className="text-lg font-semibold mb-6">
        Admin Panel
      </h2>

      <nav className="space-y-2 text-sm">

        <NavItem to="/admin/learning-labs">
          Learning Labs
        </NavItem>

        <NavItem to="/admin/registrations">
          Registrations
        </NavItem>
        <NavItem to="/admin/interest-registrations">
          Interest Registrations
        </NavItem>

      </nav>
    </aside>
  );
}

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-3 py-2 rounded-md transition
        ${isActive
          ? "bg-blue-600 text-white"
          : "text-gray-700 hover:bg-gray-100"}`
      }
    >
      {children}
    </NavLink>
  );
}
