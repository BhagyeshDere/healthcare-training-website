import { useRef, useEffect } from "react";
import {
  CalendarDays,
  Users,
  Microscope,
  Globe,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

export default function ProgramsMembership() {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      top: dir === "up" ? -240 : 240,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;

    const interval = setInterval(() => {
      if (!slider) return;

      if (
        slider.scrollTop + slider.clientHeight >=
        slider.scrollHeight - 5
      ) {
        slider.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ top: 240, behavior: "smooth" });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">

      {/* BLOBS */}
      <div className="absolute top-0 left-0 
        w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 
        bg-brandBlue/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 
        w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 
        bg-brandRed/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-16 relative z-10">

        {/* LEFT — DARK MEMBERSHIP */}
        <div className="relative rounded-3xl p-6 sm:p-8 md:p-10 bg-gradient-to-br from-[#0B1C2D] via-[#102A43] to-[#0B1C2D] text-white shadow-2xl overflow-hidden">

          {/* dark glow accents */}
          <div className="absolute -top-16 -left-16 sm:-top-20 sm:-left-20 
            w-40 h-40 sm:w-60 sm:h-60 
            bg-brandBlue/30 blur-[100px] sm:blur-[120px] rounded-full"></div>

          <div className="absolute -bottom-16 -right-16 sm:-bottom-20 sm:-right-20 
            w-40 h-40 sm:w-60 sm:h-60 
            bg-brandRed/30 blur-[100px] sm:blur-[120px] rounded-full"></div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 relative z-10">
            VIDA Membership
          </h2>

          <div className="space-y-4 sm:space-y-5 md:space-y-6 relative z-10">
            <MemberCard icon={<Users />} title="Institutions" text="Hospitals & colleges" />
            <MemberCard icon={<Microscope />} title="Diagnostics" text="Labs & imaging" />
            <MemberCard icon={<CalendarDays />} title="Professionals" text="Quality leaders" />
            <MemberCard icon={<Globe />} title="International" text="Global orgs" />
          </div>

        </div>

        {/* RIGHT — PROGRAMS */}
        <div>

          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brandBlue">
              VIDA Programs
            </h2>

            <div className="flex flex-col gap-2">
              <ArrowBtn onClick={() => scroll("up")} icon={<ChevronUp />} />
              <ArrowBtn onClick={() => scroll("down")} icon={<ChevronDown />} />
            </div>
          </div>

          <div
            ref={sliderRef}
            className="max-h-[340px] sm:max-h-[380px] md:max-h-[420px] overflow-y-auto space-y-6 sm:space-y-7 md:space-y-8 no-scrollbar pr-2"
          >
            <ProgramCard place="Chennai" title="Advanced Healthcare Quality Certification" date="20–25 March 2026" />
            <ProgramCard place="Virtual" title="Hospital Safety & Accreditation Training" date="5 April 2026" />
            <ProgramCard place="Mumbai" title="Infection Control Certification" date="18 April 2026" />
            <ProgramCard place="Delhi" title="Patient Safety & NABH Training" date="2 May 2026" />
            <ProgramCard place="Bangalore" title="Clinical Audit Masterclass" date="15 May 2026" />
          </div>

          <button className="mt-6 sm:mt-8 md:mt-10 w-full sm:w-auto bg-gradient-to-r from-brandBlue to-brandRed text-white px-6 sm:px-7 md:px-8 py-3 rounded-full shadow-lg hover:scale-105 transition">
            View Full Calendar
          </button>

        </div>

      </div>
    </section>
  );
}

/* ---------- COMPONENTS ---------- */

function ArrowBtn({ onClick, icon }) {
  return (
    <button
      onClick={onClick}
      className="p-2 sm:p-3 bg-white/80 backdrop-blur rounded-full shadow hover:bg-brandBlue hover:text-white transition"
    >
      {icon}
    </button>
  );
}

function ProgramCard({ place, title, date }) {
  return (
    <div className="relative pl-6 sm:pl-8">

      <div className="absolute left-0 top-2 w-3 h-3 bg-brandRed rounded-full"></div>

      <div className="absolute left-1.5 top-6 w-0.5 h-full bg-gradient-to-b from-brandBlue to-brandRed"></div>

      <div className="bg-white/90 backdrop-blur-xl border border-blue-100 p-4 sm:p-5 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition">

        <span className="text-brandRed font-semibold text-xs sm:text-sm">
          {place}
        </span>

        <h3 className="font-semibold text-base sm:text-lg mt-1 text-gray-800">
          {title}
        </h3>

        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          {date}
        </p>

      </div>
    </div>
  );
}

/* MEMBER CARD */
function MemberCard({ icon, title, text }) {
  return (
    <div className="group p-[1px] rounded-2xl bg-gradient-to-br from-brandBlue/40 to-brandRed/40">

      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 sm:p-5 md:p-6 flex gap-3 sm:gap-4 items-center border border-white/10 hover:bg-white/20 transition">

        <div className="text-brandRed">
          {icon}
        </div>

        <div>
          <h3 className="font-semibold text-base sm:text-lg text-white">
            {title}
          </h3>

          <p className="text-gray-300 text-xs sm:text-sm mt-1">
            {text}
          </p>
        </div>

      </div>
    </div>
  );
}
