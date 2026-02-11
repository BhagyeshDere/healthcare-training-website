import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  X, // ✅ Latest Twitter (X)
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-brandBlue via-slate-900 to-black text-white overflow-hidden">

      {/* GLOW EFFECTS */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-brandRed/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brandBlue/30 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* LOGO + ABOUT */}
          <div>
            <img
              src="/logo.png"
              alt="VIDA Logo"
              className="h-14 mb-6"
            />

            <p className="text-gray-300 leading-relaxed">
              VIDA Life Sciences is committed to advancing
              healthcare quality, patient safety and
              professional excellence through world-class
              education and accreditation.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-300">

              <div className="flex gap-3">
                <MapPin className="text-brandRed" />
                <p>
                  G-100, Sector 44, Noida,
                  Uttar Pradesh, India 201303
                </p>
              </div>

              <div className="flex gap-3">
                <Phone className="text-brandRed" />
                <p>+91 9870318781</p>
              </div>

              <div className="flex gap-3">
                <Mail className="text-brandRed" />
                <p>info@vidalifesciences.com</p>
              </div>

            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <SocialIcon><Facebook /></SocialIcon>
              <SocialIcon><Instagram /></SocialIcon>
              <SocialIcon><Linkedin /></SocialIcon>
              <SocialIcon><Youtube /></SocialIcon>
              <SocialIcon><X /></SocialIcon> {/* ✅ X icon */}

            </div>

            <p className="text-gray-400 mt-6 text-sm">
              Stay connected for latest updates,
              programs and healthcare insights.
            </p>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/20 my-10"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">

          <p>
            © {new Date().getFullYear()} VIDA Life Sciences.
            All rights reserved.
          </p>

          <p>
           Web Design & Development : Interactive
          </p>

        </div>

      </div>
    </footer>
  );
}

/* ---------- SOCIAL ICON STYLE ---------- */

function SocialIcon({ children }) {
  return (
    <div className="
      p-3 rounded-full
      bg-white/10 backdrop-blur
      hover:bg-brandRed
      hover:scale-110
      transition duration-300
      cursor-pointer
    ">
      {children}
    </div>
  );
}
