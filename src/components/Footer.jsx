import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  X,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-brandBlue via-slate-900 to-black text-white overflow-hidden">

      {/* GLOW EFFECTS */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-brandRed/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brandBlue/30 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 relative z-10">

        {/* TOP GRID */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          gap-12
        ">

          {/* LOGO + ABOUT */}
          <div className="text-center sm:text-left">
            <img
              src="/logo.png"
              alt="VIDA Logo"
              className="h-14 mb-6 mx-auto sm:mx-0"
            />

            <p className="text-gray-300 leading-relaxed max-w-md mx-auto sm:mx-0">
              VIDA Life Sciences is committed to advancing
              healthcare quality, patient safety and
              professional excellence through world-class
              education and accreditation.
            </p>
          </div>

          {/* CONTACT */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-start gap-3 justify-center sm:justify-start">
                <MapPin className="text-brandRed shrink-0 mt-1" />
                <p className="leading-relaxed">
                  Bunglow No.4, 2nd Floor, 'Shriyash',
                  Attrey Society, Gokhalenagar Road,
                  Opp. Hotel Sapna, Maharashtra 411016
                </p>
              </div>

              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <Phone className="text-brandRed" />
                <p>+91 9689491632</p>
              </div>

              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <Mail className="text-brandRed" />
                <p className="break-all">info@vidalife.com</p>
              </div>

            </div>
          </div>

          {/* SOCIAL */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-6">
              Follow Us
            </h3>

            <div className="flex gap-4 justify-center sm:justify-start flex-wrap">
              <SocialIcon><Facebook /></SocialIcon>
              <SocialIcon><Instagram /></SocialIcon>
              <SocialIcon><Linkedin /></SocialIcon>
              <SocialIcon><Youtube /></SocialIcon>
              <SocialIcon><X /></SocialIcon>
            </div>

            <p className="text-gray-400 mt-6 text-sm max-w-xs mx-auto sm:mx-0">
              Stay connected for latest updates,
              programs and healthcare insights.
            </p>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/20 my-10"></div>

        {/* BOTTOM BAR */}
        <div className="
          flex 
          flex-col 
          md:flex-row 
          justify-between 
          items-center 
          gap-4 
          text-gray-400 
          text-sm
          text-center md:text-left
        ">

          <p>
            © {new Date().getFullYear()} VIDA Life Sciences.
            All rights reserved.
          </p>

          <p>
            Designed by DW Innovation Pvt. Ltd
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
      flex items-center justify-center
    ">
      {children}
    </div>
  );
}
