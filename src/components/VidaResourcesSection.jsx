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
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white">

      {/* ===== PREMIUM BACKGROUND GLOW ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-blue-200/30 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-red-200/30 blur-[180px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-20">

          <span className="text-red-500 uppercase tracking-[6px] text-sm font-semibold">
            VIDA Resources
          </span>

          <h2 className="text-5xl md:text-6xl font-extrabold mt-4 bg-gradient-to-r from-blue-800 to-red-500 text-transparent bg-clip-text">
            Explore Resources
          </h2>

          <p className="text-gray-600 mt-6 max-w-xl mx-auto text-lg leading-relaxed">
            Intelligent tools, frameworks and knowledge systems
            designed to elevate healthcare excellence.
          </p>
        </div>

        {/* ===== AUTO SCROLL STRIP ===== */}
        <div
          ref={scrollRef}
          className="
            flex gap-16 overflow-x-hidden whitespace-nowrap py-14
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
                absolute w-44 h-44 rounded-full
                bg-gradient-to-br from-blue-500/30 to-red-400/30
                blur-3xl opacity-0 group-hover:opacity-100
                transition duration-500
              " />

              {/* ICON CONTAINER */}
              <div
                className="
                  relative w-32 h-32 rounded-[28px]
                  bg-white/60 backdrop-blur-2xl
                  border border-white/40
                  flex items-center justify-center
                  shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                  
                  transform transition duration-500
                  group-hover:-translate-y-4
                  group-hover:rotate-1
                  group-hover:scale-110
                  group-hover:shadow-[0_25px_60px_rgba(30,58,138,0.25)]
                "
              >

                {/* INNER GRADIENT RING */}
                <div className="
                  absolute inset-0 rounded-[28px]
                  bg-gradient-to-br from-blue-600/10 to-red-500/10
                  opacity-0 group-hover:opacity-100 transition
                " />

                {/* ICON */}
                <div className="
                  relative z-10
                  text-blue-800
                  group-hover:text-red-500
                  transition duration-300
                ">
                  {item.icon}
                </div>
              </div>

              {/* LABEL */}
              <p className="
                mt-6 font-semibold text-gray-700
                tracking-wide text-base
                group-hover:text-blue-800
                transition
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
