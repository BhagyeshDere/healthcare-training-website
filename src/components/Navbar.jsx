import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const navRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ UPDATED MENU WITH REAL PATHS
  const menu = [
    {
      title: "ABOUT",
      links: [
        { name: "Who We Are", path: "/who-we-are" },
        { name: "Objectives", path: "/objectives" },
        { name: "Leadership", path: "/leadership" },
      ],
    },
    {
      title: "EVENTS",
      links: [
        { name: "Annual Events", path: "/events/annual" },
        { name: "Partner Events", path: "/events/partner" },
        { name: "International Events", path: "/events/international" },
      ],
    },
    {
      title: "MEMBERSHIP",
      links: [
        { name: "Healthcare Institutions", path: "/membership/healthcare" },
        { name: "Diagnostic Centres", path: "/membership/diagnostic" },
        { name: "Quality Professionals", path: "/membership/quality" },
        { name: "Academic Institution", path: "/membership/academic" },
      ],
    },
    {
      title: "ACADEMY",
      links: [
        { name: "Training Programs", path: "/academy/training" },
        { name: "Excellence Programs", path: "/academy/excellence" },
        { name: "Masterclass Series", path: "/academy/masterclass" },
        { name: "Webinars", path: "/academy/webinars" },
      ],
    },
    {
      title: "LIBRARY",
      links: [
        { name: "Articles", path: "/library/articles" },
        { name: "Whitepapers", path: "/library/whitepapers" },
        { name: "Videos", path: "/library/videos" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { name: "Friday Update", path: "/resources/friday" },
        { name: "Toolkits", path: "/resources/toolkits" },
        { name: "Fire Safety Audit", path: "/resources/fire-audit" },
      ],
    },
    {
      title: "ACCOLADE",
      links: [
        { name: "Hall of Fame", path: "/accolade/hall-of-fame" },
        { name: "Awards", path: "/accolade/awards" },
      ],
    },
  ];

  const toggleMenu = (i) => {
    setOpen(open === i ? null : i);
  };

  return (
    <>
      {/* TOP BAR */}
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

      {/* MAIN NAVBAR */}
      <nav
        ref={navRef}
        className="
        sticky top-0 z-50
        bg-white/80 backdrop-blur-xl
        border-b border-gray-200
        px-12 py-4
        flex items-center justify-between
      "
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="VIDA Logo"
            className="h-12 hover:scale-105 transition"
          />
        </Link>

        {/* MENU */}
        <div className="flex items-center gap-10 font-medium text-gray-700">
          
          {/* HOME */}
          <Link
            to="/"
            className="relative font-semibold hover:text-brandBlue transition"
          >
            HOME
          </Link>

          {/* DROPDOWNS */}
          {menu.map((item, i) => (
            <div key={i} className="relative">
              <button
                onClick={() => toggleMenu(i)}
                className="relative hover:text-brandBlue transition"
              >
                {item.title}
              </button>

              {open === i && (
                <div className="
                  absolute top-12 left-0
                  bg-white shadow-xl rounded-xl
                  w-60 border
                  overflow-hidden z-50
                ">
                  {item.links.map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.path}
                      onClick={() => setOpen(null)}
                      className="
                        block px-5 py-3
                        hover:bg-gradient-to-r
                        hover:from-blue-50 hover:to-red-50
                        hover:text-brandBlue
                        transition
                      "
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* CONTACT */}
          <Link
            to="/contact"
            className="relative hover:text-brandBlue transition"
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
