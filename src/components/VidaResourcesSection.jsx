import { useEffect, useRef } from "react";
import {
  GraduationCap,
  Shield,
  Flame,
  Headphones,
  Bell,
  Gauge,
  Mic,
  Umbrella,
  Pill,
  Book,
  Monitor,
  Users,
  AlertTriangle,
  Network,
  Sparkles,
  FileText,
} from "lucide-react";

export default function VidaResourcesSection() {
  const scrollRef = useRef(null);

  // ✅ AUTO SCROLL (unchanged logic)
  useEffect(() => {
    const container = scrollRef.current;

    const scroll = () => {
      if (!container) return;

      container.scrollLeft += 1;

      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
        container.scrollLeft = 0;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  const resources = [
    { icon: <GraduationCap size={40} />, label: "CLAPP" },
    { icon: <Shield size={40} />, label: "CONVERGE" },
    { icon: <Flame size={40} />, label: "Fire Safety Audit" },
    { icon: <Headphones size={40} />, label: "Cyber Helpdesk" },
    { icon: <Bell size={40} />, label: "Friday Updates" },
    { icon: <Gauge size={40} />, label: "Clinical Indicators" },
    { icon: <Mic size={40} />, label: "CAHO Podcasts" },
    { icon: <Umbrella size={40} />, label: "P4PSF" },
    { icon: <Pill size={40} />, label: "Medication Pledge" },
    { icon: <Book size={40} />, label: "CAHO Books" },
    { icon: <Monitor size={40} />, label: "Telemedicine Registry" },
    { icon: <Users size={40} />, label: "Standing Committees" },
    { icon: <AlertTriangle size={40} />, label: "Risk Management" },
    { icon: <Network size={40} />, label: "LEADS" },
    { icon: <Sparkles size={40} />, label: "HealthTech Directory" },
    { icon: <FileText size={40} />, label: "The Spark" },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white">

      {/* ===== PREMIUM BACKGROUND GLOW ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[320px] sm:w-[500px] lg:w-[700px] h-[320px] sm:h-[500px] lg:h-[700px] bg-blue-200/30 blur-[120px] sm:blur-[150px] lg:blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[320px] sm:w-[500px] lg:w-[700px] h-[320px] sm:h-[500px] lg:h-[700px] bg-red-200/30 blur-[120px] sm:blur-[150px] lg:blur-[180px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">

          <span className="text-red-500 uppercase tracking-[4px] sm:tracking-[6px] text-xs sm:text-sm font-semibold">
            VIDA Resources
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 sm:mt-4 bg-gradient-to-r from-blue-800 to-red-500 text-transparent bg-clip-text">
            Explore Resources
          </h2>

          <p className="text-gray-600 mt-4 sm:mt-6 max-w-xl mx-auto text-base sm:text-lg leading-relaxed px-2">
            Intelligent tools, frameworks and knowledge systems
            designed to elevate healthcare excellence.
          </p>
        </div>

        {/* ===== AUTO SCROLL STRIP ===== */}
        <div
          ref={scrollRef}
          className="
            flex gap-8 sm:gap-12 md:gap-16
            overflow-x-hidden whitespace-nowrap
            py-10 sm:py-12 md:py-14
            [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
          "
        >
          {[...resources, ...resources].map((item, i) => (
            <div
              key={i}
              className="group relative flex-shrink-0 flex flex-col items-center cursor-pointer"
            >

              {/* FLOATING GLOW ORB */}
              <div className="
                absolute w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44
                rounded-full
                bg-gradient-to-br from-blue-500/30 to-red-400/30
                blur-2xl sm:blur-3xl
                opacity-0 group-hover:opacity-100
                transition duration-500
              " />

              {/* ICON CONTAINER */}
              <div
                className="
                  relative
                  w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32
                  rounded-[20px] sm:rounded-[24px] md:rounded-[28px]
                  bg-white/60 backdrop-blur-2xl
                  border border-white/40
                  flex items-center justify-center
                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]

                  transform transition duration-500
                  group-hover:-translate-y-3 sm:group-hover:-translate-y-4
                  group-hover:rotate-1
                  group-hover:scale-105 sm:group-hover:scale-110
                  group-hover:shadow-[0_25px_60px_rgba(30,58,138,0.25)]
                "
              >

                {/* INNER GRADIENT RING */}
                <div className="
                  absolute inset-0 rounded-[20px] sm:rounded-[24px] md:rounded-[28px]
                  bg-gradient-to-br from-blue-600/10 to-red-500/10
                  opacity-0 group-hover:opacity-100 transition
                " />

                {/* ICON */}
                <div className="
                  relative z-10
                  text-blue-800
                  group-hover:text-red-500
                  transition duration-300
                  scale-75 sm:scale-90 md:scale-100
                ">
                  {item.icon}
                </div>
              </div>

              {/* LABEL */}
              <p className="
                mt-4 sm:mt-5 md:mt-6
                font-semibold text-gray-700
                tracking-wide
                text-sm sm:text-base
                group-hover:text-blue-800
                transition text-center
              ">
                {item.label}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
