import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        text-white text-xs md:text-sm
        px-4 md:px-10 py-2
        flex justify-end gap-4 md:gap-6
      ">
        <a className="hover:opacity-80 transition">MEMBER SIGNUP</a>
        <a className="hover:opacity-80 transition">MEMBER LOGIN</a>

        <select className="
          text-black rounded-full
          px-2 md:px-3 py-1 text-xs
          shadow-sm
        ">
          <option>Select Language</option>
          <option>English</option>
          <option>Hindi</option>
        </select>
      </div>

      {/* NAVBAR */}
      <nav
        ref={navRef}
        className="
        sticky top-0 z-50
        bg-white/90 backdrop-blur-xl
        border-b
        px-4 md:px-12 py-3 md:py-4
        flex items-center justify-between
      "
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="VIDA Logo"
            className="h-10 md:h-12"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8 font-medium text-gray-700">

          <Link to="/" className="font-semibold hover:text-brandBlue">
            HOME
          </Link>

          {menu.map((item, i) => (
            <div key={i} className="relative">
              <button
                onClick={() => toggleMenu(i)}
                className="hover:text-brandBlue"
              >
                {item.title}
              </button>

              {open === i && (
                <div className="
                  absolute top-12 left-0
                  bg-white shadow-xl rounded-xl
                  w-60 border overflow-hidden
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
                      "
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link to="/contact" className="hover:text-brandBlue">
            CONTACT US
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* SEARCH */}
          <button className="
            hidden md:flex
            bg-gradient-to-r from-brandBlue to-brandRed
            text-white p-3 rounded-full
            shadow-md hover:scale-110 transition
          ">
            <Search size={18} />
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b shadow-md">

          <Link
            to="/"
            className="block px-6 py-3 border-b"
            onClick={()=>setMobileOpen(false)}
          >
            HOME
          </Link>

          {menu.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => toggleMenu(i)}
                className="w-full text-left px-6 py-3 border-b font-medium"
              >
                {item.title}
              </button>

              {open === i && (
                <div className="bg-gray-50">
                  {item.links.map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.path}
                      onClick={()=>{
                        setMobileOpen(false);
                        setOpen(null);
                      }}
                      className="block px-10 py-3 text-sm border-b"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            to="/contact"
            className="block px-6 py-3"
            onClick={()=>setMobileOpen(false)}
          >
            CONTACT US
          </Link>
        </div>
      )}
    </>
  );
}
