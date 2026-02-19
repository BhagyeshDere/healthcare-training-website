import {
  ShieldCheck,
  ShieldPlus,
  FlaskConical,
  Trash2,
  HeartPulse,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom"; // ✅ ADDED

export default function FlagshipSection() {

  const focusAreas = [
    { title: "Infection Prevention & Control", icon: ShieldCheck },
    { title: "HAI Reduction", icon: ShieldPlus },
    { title: "CSSD & Sterilization", icon: FlaskConical },
    { title: "Biomedical Waste Management", icon: Trash2 },
    { title: "Patient Safety", icon: HeartPulse },
  ];

  return (
    <section className="
      relative
      py-16 sm:py-20 md:py-24 lg:py-28
      overflow-hidden
      bg-gradient-to-br from-[#021a40] via-[#032b63] to-[#021a40]
      text-white
    ">

      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-400/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">

          <span className="
            inline-block px-4 py-2 text-xs sm:text-sm
            rounded-full bg-white/10 border border-white/20
            backdrop-blur-md tracking-wide
          ">
            Flagship Initiative
          </span>

          <h2 className="
            mt-5 text-3xl sm:text-4xl md:text-5xl
            font-extrabold leading-tight text-cyan-300
          ">
            Voice for Infection Control & Prevention
          </h2>

          <p className="
            mt-4 text-gray-200
            text-sm sm:text-base md:text-lg
            leading-relaxed
          ">
            A flagship initiative focused on enhancing patient safety,
            promoting infection prevention, and building stronger healthcare
            systems through awareness, training, and professional education.
          </p>

          {/* ✅ UPDATED LINK */}
          <Link
            to="/academy/training"
            className="
              mt-7 inline-flex items-center gap-2
              px-6 sm:px-8 py-3
              rounded-full
              bg-gradient-to-r from-brandBlue to-brandRed
              font-semibold
              shadow-lg
              hover:scale-105
              transition-all duration-300
            "
          >
            Academy / Training
            <ArrowRight size={18} />
          </Link>

        </div>

        {/* CORE FOCUS ICONS */}
        <div className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5
          gap-5 sm:gap-6
        ">
          {focusAreas.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="
                  group relative p-[1px] rounded-2xl
                  bg-gradient-to-br from-cyan-400/30 to-red-400/30
                  hover:from-cyan-400 hover:to-red-400 transition
                "
              >
                <div className="
                  bg-white/10 backdrop-blur-md rounded-2xl
                  h-full p-5 sm:p-6 text-center
                  hover:bg-white/15 transition
                ">
                  <div className="
                    w-12 h-12 sm:w-14 sm:h-14
                    mx-auto mb-3 rounded-full
                    bg-cyan-400/20
                    flex items-center justify-center
                    group-hover:scale-110 transition
                  ">
                    <Icon size={24} className="text-cyan-300" />
                  </div>

                  <p className="
                    text-xs sm:text-sm md:text-base
                    text-gray-100 leading-snug font-medium
                  ">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
