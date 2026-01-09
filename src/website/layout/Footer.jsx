import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  const baseLink = "transition duration-200";
  const hoverLink = "hover:text-yellow-500";
  const activeLink =
    "text-yellow-400 font-semibold underline underline-offset-4";

  const navClass = ({ isActive }) =>
    isActive
      ? `${baseLink} ${activeLink}`
      : `${baseLink} ${hoverLink}`;

  return (
    <footer className="bg-green-700 text-slate-200">
      <div className="max-w-full mx-auto px-6 md:px-20 py-14">

        {/* TOP GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">

          {/* COLUMN 1 */}
          <div>
            <h3 className="text-white font-semibold text-base md:text-xl mb-5">
              METRI Learning Lab
            </h3>
            <ul className="space-y-3 text-base md:text-lg">
              <li>
                <NavLink to="/about" className={navClass}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/topics" className={navClass}>
                  Learning Topics
                </NavLink>
              </li>
              <li>
                <NavLink to="/schedule" className={navClass}>
                  Schedule
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className={navClass}>
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="text-white font-semibold text-base md:text-xl mb-5">
              Connect
            </h3>
            <ul className="space-y-3 text-base md:text-lg">
              <li>
                <NavLink to="/interest" className={navClass}>
                  Register Interest
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={navClass}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div className="col-span-2">

            <h3 className="font-bold text-base md:text-xl uppercase mb-4">
              Find Us
            </h3>

            <ul className="space-y-3 text-sm md:text-base leading-relaxed">

              <li>
                <span className="font-semibold">Address: </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=NGO+Forum+on+Cambodia+Phnom+Penh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-green-200 transition"
                >
                  #9–11, St.476, Toul Tompoung I, Phnom Penh, Cambodia.
                  P.O. Box 2295 Phnom Penh
                </a>
              </li>

              <li>
                <span className="font-semibold">Email: </span>
                <a
                  href="mailto:info@ngoforum.org.kh"
                  className="underline hover:text-green-200 transition"
                >
                  info@ngoforum.org.kh
                </a>
              </li>

              <li>
                <span className="font-semibold">Tel: </span>
                <a
                  href="tel:+85523214429"
                  className="underline hover:text-green-200 transition"
                >
                  (+855) 23 214 429
                </a>
              </li>

              <li>
                <span className="font-semibold">Fax: </span>
                <span>(+855) 23 994 063</span>
              </li>

            </ul>

            {/* SOCIAL SECTION */}
            <div className="mt-8">
              <p className="font-medium mb-4">
                Keep yourself informed, connect with us
              </p>

              <div className="flex items-center justify-center md:justify-start gap-4">

                <a
                  href="https://www.facebook.com/ngoforumoncambodia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center rounded-full bg-blue-600 hover:scale-110 transition"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.instagram.com/ngo_forum_cambodia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-yellow-500 hover:scale-110 transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.youtube.com/@TheNGOForumonCambodia1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center rounded-full bg-red-600 hover:scale-110 transition"
                >
                  <FaYoutube />
                </a>

                <a
                  href="https://www.linkedin.com/company/the-ngof-on-cambodia/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center rounded-full bg-blue-700 hover:scale-110 transition"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://x.com/thengoforum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center rounded-full bg-black hover:scale-110 transition"
                >
                  <FaXTwitter />
                </a>

              </div>
            </div>

          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white mt-14 pt-8 text-center text-sm text-slate-200">
          <p>© 2026 NGO Forum on Cambodia. All rights reserved.</p>
          <p className="mt-2">
            The METRI Learning Lab is an initiative of the NGO Forum on Cambodia
          </p>
        </div>

      </div>
    </footer>
  );
}
