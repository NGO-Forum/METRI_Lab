import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  // 🔒 Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  const desktopLink =
    "text-slate-800 hover:text-green-700 transition font-medium";

  const desktopActive = "text-green-700 font-semibold";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >
            <span className="text-green-700 text-2xl">🌿</span>
            <span className="font-bold text-lg sm:text-xl text-green-700">
              METRI Learning Lab
            </span>
          </NavLink>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8 text-base lg:text-lg">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Learning Topics", "/topics"],
              ["Schedule", "/schedule"],
              ["Register", "/register"],
              ["FAQ", "/faq"],
              ["Contact", "/contact"],
            ].map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive ? desktopActive : desktopLink
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-slate-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`
          fixed top-16 left-[55%] md:left-[75%] right-0 z-50 bg-white lg:hidden w-[40%] md:w-[20%]
          transform transition-all duration-300 ease-out
          ${open
            ? "translate-y-0 opacity-100"
            : "-translate-y-6 opacity-0 pointer-events-none"}
        `}
      >
        <nav className="flex flex-col divide-y">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Learning Topics", "/topics"],
            ["Schedule", "/schedule"],
            ["Register", "/register"],
            ["FAQ", "/faq"],
            ["Contact", "/contact"],
          ].map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "px-6 py-4 text-green-700 font-semibold bg-green-50"
                  : "px-6 py-4 text-slate-800 hover:bg-slate-100 transition"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
