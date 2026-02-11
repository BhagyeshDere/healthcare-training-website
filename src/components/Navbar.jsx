import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(null);

  const menu = [
    {
      title: "ABOUT",
      links: ["Who We Are", "Objectives", "Leadership"],
    },
    {
      title: "EVENTS",
      links: ["Annual Events", "Partner Events", "International Events"],
    },
    {
      title: "MEMBERSHIP",
      links: [
        "Healthcare Institutions",
        "Diagnostic Centres",
        "Quality Professionals",
        "Academic Institution",
      ],
    },
    {
      title: "ACADEMY",
      links: [
        "Training Programs",
        "Excellence Programs",
        "Masterclass Series",
        "Webinars",
      ],
    },
    {
      title: "LIBRARY",
      links: ["Articles", "Whitepapers", "Videos"],
    },
    {
      title: "RESOURCES",
      links: ["Friday Update", "Toolkits", "Fire Safety Audit"],
    },
    {
      title: "ACCOLADE",
      links: ["Hall of Fame", "Awards"],
    },
  ];

  return (
    <>
      {/* TOP BAR — PREMIUM GRADIENT */}
      <div className="
        bg-gradient-to-r from-brandBlue to-brandRed
        text-white text-sm
        px-10 py-2
        flex justify-end gap-6
        shadow
      ">
        <a className="hover:opacity-80 transition">MEMBER SIGNUP</a>
        <a className="hover:opacity-80 transition">MEMBER LOGIN</a>

        <select className="
          text-black rounded-full
          px-3 py-1 text-xs
          border-none outline-none
          shadow-sm
        ">
          <option>Select Language</option>
          <option>English</option>
          <option>Hindi</option>
        </select>
      </div>

      {/* MAIN NAVBAR — GLASS STYLE */}
      <nav className="
        sticky top-0 z-50
        bg-white/80 backdrop-blur-xl
        border-b border-gray-200
        px-12 py-4
        flex items-center justify-between
      ">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="VIDA Logo"
            className="h-12 hover:scale-105 transition"
          />
        </div>

        {/* MENU */}
        <div className="flex items-center gap-10 font-medium text-gray-700">

          {/* HOME */}
          <Link
            to="/"
            className="
              relative font-semibold
              hover:text-brandBlue transition
              after:absolute after:left-0 after:-bottom-2
              after:h-[2px] after:w-0
              after:bg-gradient-to-r after:from-brandBlue after:to-brandRed
              hover:after:w-full after:transition-all
            "
          >
            HOME
          </Link>

          {/* DROPDOWNS */}
          {menu.map((item, i) => (
            <div
              key={i}
              className="relative"
              onMouseEnter={() => setOpen(i)}
              onMouseLeave={() => setOpen(null)}
            >
              <button className="
                relative hover:text-brandBlue transition
                after:absolute after:left-0 after:-bottom-2
                after:h-[2px] after:w-0
                after:bg-gradient-to-r after:from-brandBlue after:to-brandRed
                hover:after:w-full after:transition-all
              ">
                {item.title}
              </button>

              {open === i && (
                <div className="
                  absolute top-12 left-0
                  bg-white/95 backdrop-blur-xl
                  shadow-xl rounded-xl
                  w-60 border
                  overflow-hidden z-50
                  animate-fadeIn
                ">
                  {item.links.map((link, idx) => (
                    <Link
                      key={idx}
                      to="#"
                      className="
                        block px-5 py-3
                        hover:bg-gradient-to-r
                        hover:from-blue-50 hover:to-red-50
                        hover:text-brandBlue
                        transition
                      "
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* CONTACT */}
          <Link
            to="/contact"
            className="
              relative hover:text-brandBlue transition
              after:absolute after:left-0 after:-bottom-2
              after:h-[2px] after:w-0
              after:bg-gradient-to-r after:from-brandBlue after:to-brandRed
              hover:after:w-full after:transition-all
            "
          >
            CONTACT US
          </Link>
        </div>

        {/* SEARCH */}
        <button className="
          bg-gradient-to-r from-brandBlue to-brandRed
          text-white p-3 rounded-full
          shadow-md hover:scale-110
          transition
        ">
          <Search size={18} />
        </button>
      </nav>
    </>
  );
}
