import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef();
  const location = useLocation();

  // CLOSE MENUS ON ROUTE CHANGE
  useEffect(() => {
    setMobileOpen(false);
    setOpen(null);
    setMobileDropdown(null);
  }, [location]);

  // CLICK OUTSIDE (DESKTOP)
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
        { name: "Our Journey", path: "/our-journey" }, // ✅ FIXED
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

  const toggleDesktop = (i) => {
    setOpen(open === i ? null : i);
  };

  const toggleMobile = (i) => {
    setMobileDropdown(mobileDropdown === i ? null : i);
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-brandBlue to-brandRed text-white text-xs md:text-sm px-4 md:px-10 py-2 flex justify-end gap-4 md:gap-6">
        <a>MEMBER SIGNUP</a>
        <a>MEMBER LOGIN</a>

        <select className="text-black rounded-full px-3 py-1 text-xs">
          <option>Select Language</option>
          <option>English</option>
          <option>Hindi</option>
        </select>
      </div>

      {/* NAVBAR */}
      <nav
        ref={navRef}
        className="sticky top-0 z-50 bg-white border-b px-4 md:px-12 py-3 flex items-center justify-between"
      >
        {/* LOGO */}
        <Link to="/">
          <img src="/logo.png" alt="VIDA Logo" className="h-10 md:h-12" />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
          <Link to="/" className="font-semibold">HOME</Link>

          {menu.map((item, i) => (
            <div key={i} className="relative">
              <button onClick={() => toggleDesktop(i)}>
                {item.title}
              </button>

              {open === i && (
                <div className="absolute top-12 left-0 bg-white shadow-xl rounded-xl w-60 border">
                  {item.links.map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.path}
                      className="block px-5 py-3 hover:bg-gray-50"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link to="/contact">CONTACT US</Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex bg-gradient-to-r from-brandBlue to-brandRed text-white p-3 rounded-full">
            <Search size={18} />
          </button>

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
        <div className="lg:hidden fixed inset-0 top-[110px] bg-white z-40 overflow-y-auto shadow-lg">
          <Link to="/" className="block px-6 py-4 border-b">HOME</Link>

          {menu.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => toggleMobile(i)}
                className="w-full text-left px-6 py-4 border-b font-medium"
              >
                {item.title}
              </button>

              {mobileDropdown === i && (
                <div className="bg-gray-50">
                  {item.links.map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.path}
                      className="block px-10 py-4 border-b text-sm"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link to="/contact" className="block px-6 py-4">
            CONTACT US
          </Link>
        </div>
      )}
    </>
  );
}
