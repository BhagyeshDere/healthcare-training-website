import { Award, Users, BookOpen, GraduationCap } from "lucide-react";

export default function AboutStats() {
  return (
    <section
      className="
      relative 
      py-16 sm:py-20 md:py-24
      bg-gradient-to-br from-blue-50 via-white to-red-50 
      overflow-hidden
    "
    >
      {/* DECORATIVE BLOBS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brandBlue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brandRed/10 rounded-full blur-3xl"></div>

      <div
        className="
        max-w-7xl mx-auto 
        grid lg:grid-cols-2 
        gap-10 sm:gap-14 md:gap-16 
        items-center 
        px-4 sm:px-6 
        relative z-10
      "
      >
        {/* LEFT SIDE */}
        <div>
          <span
            className="
            text-brandRed 
            font-semibold 
            tracking-wider 
            uppercase
            text-xs sm:text-sm
          "
          >
            About Us
          </span>

          <h2
            className="
            text-3xl sm:text-4xl md:text-5xl 
            font-bold mt-4 mb-6 
            leading-tight
          "
          >
            <span className="text-brandBlue">Transforming</span>{" "}
            Healthcare Through{" "}
            <span
              className="
              bg-gradient-to-r from-brandRed to-brandBlue 
              bg-clip-text text-transparent
            "
            >
              Education & Quality
            </span>
          </h2>

          {/* ✅ SHORT INTRO SECTION (ADDED) */}
          <p
            className="
            text-gray-700 
            leading-relaxed 
            mb-4
            text-sm sm:text-base
          "
          >
            VIDA (Valuable Inputs Development Academy) Foundation is a
            purpose-driven educational and training organization focused on
            healthcare education, patient safety, and infection prevention.
          </p>

          <p
            className="
            text-gray-600 
            leading-relaxed 
            mb-6
            text-sm sm:text-base
          "
          >
            We bridge the gap between academic knowledge and real-world
            professional skills through practical learning programs designed
            for students, professionals, and healthcare institutions.
          </p>

          <p
            className="
            text-gray-600 
            leading-relaxed 
            mb-8 sm:mb-10
            text-sm sm:text-base
          "
          >
            We partner with hospitals, diagnostic centres and healthcare
            leaders to build a safer, smarter and more effective healthcare
            ecosystem.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <button
              className="
              bg-gradient-to-r from-brandBlue to-brandRed 
              text-white 
              px-6 sm:px-7 py-3 
              rounded-full shadow-lg 
              hover:scale-105 transition
              text-sm sm:text-base
            "
            >
              Who We Are
            </button>

            <button
              className="
              px-6 sm:px-7 py-3 
              rounded-full 
              border border-brandBlue 
              text-brandBlue 
              hover:bg-brandBlue hover:text-white 
              transition
              text-sm sm:text-base
            "
            >
              Leadership
            </button>
          </div>
        </div>

        {/* RIGHT SIDE — MODERN STATS */}
        <div
          className="
          grid 
          grid-cols-1 sm:grid-cols-2 
          gap-6 sm:gap-8
          mt-4 lg:mt-0
        "
        >
          <StatCard
            icon={<BookOpen size={28} />}
            number="75+"
            label="Programs"
          />

          <StatCard
            icon={<Award size={28} />}
            number="900+"
            label="Workshops"
          />

          <StatCard
            icon={<Users size={28} />}
            number="2100+"
            label="Members"
          />

          <StatCard
            icon={<GraduationCap size={28} />}
            number="42K+"
            label="Trainees"
          />
        </div>
      </div>
    </section>
  );
}

/* -------- REUSABLE STAT CARD -------- */

function StatCard({ icon, number, label }) {
  return (
    <div
      className="
      group relative 
      p-[2px] 
      rounded-2xl
      bg-gradient-to-br from-brandBlue/40 to-brandRed/40
      hover:from-brandBlue hover:to-brandRed
      transition
    "
    >
      <div
        className="
        bg-white/70 backdrop-blur-lg
        rounded-2xl 
        p-6 sm:p-8 
        text-center
        group-hover:bg-white
        transition
      "
      >
        <div
          className="
          text-brandRed 
          mb-3 sm:mb-4 
          flex justify-center
        "
        >
          {icon}
        </div>

        <h3
          className="
          text-2xl sm:text-3xl 
          font-bold 
          text-brandBlue
        "
        >
          {number}
        </h3>

        <p
          className="
          text-gray-600 
          mt-2
          text-sm sm:text-base
        "
        >
          {label}
        </p>
      </div>
    </div>
  );
}
