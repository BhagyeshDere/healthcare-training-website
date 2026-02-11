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

  // MANUAL SCROLL
  const scroll = (dir) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      top: dir === "up" ? -240 : 240,
      behavior: "smooth",
    });
  };

  // AUTO SLIDE
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
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">

      {/* BLOBS — BRAND COLORS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brandBlue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brandRed/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 relative z-10">

        {/* LEFT — MEMBERSHIP */}
        <div>

          <h2 className="text-4xl font-bold text-brandBlue mb-10">
            VIDA Membership
          </h2>

          <div className="space-y-6">
            <MemberCard icon={<Users />} title="Institutions" text="Hospitals & colleges" />
            <MemberCard icon={<Microscope />} title="Diagnostics" text="Labs & imaging" />
            <MemberCard icon={<CalendarDays />} title="Professionals" text="Quality leaders" />
            <MemberCard icon={<Globe />} title="International" text="Global orgs" />
          </div>

        </div>

        {/* RIGHT — PROGRAM TIMELINE */}
        <div>

          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-brandBlue">
              VIDA Programs
            </h2>

            <div className="flex flex-col gap-2">
              <ArrowBtn onClick={() => scroll("up")} icon={<ChevronUp />} />
              <ArrowBtn onClick={() => scroll("down")} icon={<ChevronDown />} />
            </div>
          </div>

          <div
            ref={sliderRef}
            className="max-h-[420px] overflow-y-auto space-y-8 no-scrollbar"
          >
            <ProgramCard place="Chennai" title="Advanced Healthcare Quality Certification" date="20–25 March 2026" />
            <ProgramCard place="Virtual" title="Hospital Safety & Accreditation Training" date="5 April 2026" />
            <ProgramCard place="Mumbai" title="Infection Control Certification" date="18 April 2026" />
            <ProgramCard place="Delhi" title="Patient Safety & NABH Training" date="2 May 2026" />
            <ProgramCard place="Bangalore" title="Clinical Audit Masterclass" date="15 May 2026" />
          </div>

          <button className="mt-10 bg-gradient-to-r from-brandBlue to-brandRed text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition">
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
      className="p-3 bg-white/80 backdrop-blur rounded-full shadow hover:bg-brandBlue hover:text-white transition"
    >
      {icon}
    </button>
  );
}

function ProgramCard({ place, title, date }) {
  return (
    <div className="relative pl-8">

      <div className="absolute left-0 top-2 w-3 h-3 bg-brandRed rounded-full"></div>

      <div className="absolute left-1.5 top-6 w-0.5 h-full bg-gradient-to-b from-brandBlue to-brandRed"></div>

      <div className="bg-white/90 backdrop-blur-xl border border-blue-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition">

        <span className="text-brandRed font-semibold text-sm">
          {place}
        </span>

        <h3 className="font-semibold text-lg mt-1 text-gray-800">
          {title}
        </h3>

        <p className="text-gray-600 mt-2">
          {date}
        </p>

      </div>
    </div>
  );
}

function MemberCard({ icon, title, text }) {
  return (
    <div className="group p-[2px] rounded-2xl bg-gradient-to-br from-brandBlue to-brandRed hover:scale-105 transition">

      <div className="bg-white rounded-2xl p-8 text-left flex gap-4 items-center">

        <div className="text-brandRed">
          {icon}
        </div>

        <div>
          <h3 className="font-semibold text-lg text-gray-800">
            {title}
          </h3>

          <p className="text-gray-600 text-sm mt-1">
            {text}
          </p>
        </div>

      </div>
    </div>
  );
}
