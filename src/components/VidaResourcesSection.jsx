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

  // ✅ AUTO SCROLL (unchanged)
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
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-brandBlue/5 to-white">

      {/* SOFT GLOW BG */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-brandBlue/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-brandRed/10 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-brandRed uppercase tracking-[5px] text-sm font-semibold">
            VIDA Resources
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-brandBlue mt-4">
            Explore Resources
          </h2>

          <p className="text-gray-600 mt-5 max-w-xl mx-auto text-lg">
            Tools and knowledge systems empowering healthcare excellence.
          </p>
        </div>

        {/* ✅ ONE LINE AUTO SCROLL */}
        <div
          ref={scrollRef}
          className="flex gap-14 overflow-x-hidden whitespace-nowrap py-10"
        >
          {[...resources, ...resources].map((item, i) => (
            <div
              key={i}
              className="group relative flex-shrink-0 flex flex-col items-center cursor-pointer"
            >
              {/* Animated Glow Halo */}
              <div className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-brandBlue/30 to-brandRed/30 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Premium Icon Bubble */}
              <div
                className="
                  relative w-32 h-32 rounded-3xl
                  bg-white/70 backdrop-blur-xl
                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  border border-white/60
                  flex items-center justify-center
                  group-hover:-translate-y-3
                  group-hover:scale-110
                  group-hover:shadow-[0_20px_50px_rgba(30,58,138,0.25)]
                  transition duration-500
                "
              >
                {/* Gradient Border Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brandBlue/20 to-brandRed/20 opacity-0 group-hover:opacity-100 transition" />

                <div className="relative z-10 text-brandBlue group-hover:text-brandRed transition duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Label */}
              <p className="mt-5 font-semibold text-gray-700 text-base tracking-wide group-hover:text-brandBlue transition">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
