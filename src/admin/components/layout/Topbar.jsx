export default function Topbar() {
  const logout = () => {
    localStorage.removeItem("admin_token");
    window.location.href = "/admin/login";
  };

  return (
    <header className="h-14 bg-white border-b px-6 flex items-center justify-between">
      <span className="font-medium text-gray-700">
        NGOF Admin
      </span>

      <button
        onClick={logout}
        className="text-sm text-red-600 hover:underline"
      >
        Logout
      </button>
    </header>
  );
}
