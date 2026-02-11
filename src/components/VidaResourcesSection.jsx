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
  const resources = [
    { icon: <GraduationCap size={22} />, label: "CLAPP" },
    { icon: <Shield size={22} />, label: "CONVERGE" },
    { icon: <Flame size={22} />, label: "Fire Safety Audit" },
    { icon: <Headphones size={22} />, label: "Cyber Helpdesk" },
    { icon: <Bell size={22} />, label: "Friday Updates" },
    { icon: <Gauge size={22} />, label: "Clinical Indicators" },
    { icon: <Mic size={22} />, label: "CAHO Podcasts" },
    { icon: <Umbrella size={22} />, label: "P4PSF" },
    { icon: <Pill size={22} />, label: "Medication Pledge" },
    { icon: <Book size={22} />, label: "CAHO Books" },
    { icon: <Monitor size={22} />, label: "Telemedicine Registry" },
    { icon: <Users size={22} />, label: "Standing Committees" },
    { icon: <AlertTriangle size={22} />, label: "Risk Management" },
    { icon: <Network size={22} />, label: "LEADS" },
    { icon: <Sparkles size={22} />, label: "HealthTech Directory" },
    { icon: <FileText size={22} />, label: "The Spark" },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-brandBlue/5 to-white">
      
      {/* SOFT BACKGROUND GLOWS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-brandBlue/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-brandRed/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="text-brandRed uppercase tracking-[4px] text-sm font-semibold">
            VIDA Resources
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-brandBlue mt-4">
            Explore Resources
          </h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Tools and knowledge systems empowering healthcare excellence.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-12 gap-x-6 place-items-center">

          {resources.map((item, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center text-center cursor-pointer"
            >
              
              {/* SUBTLE GLOW */}
              <div className="absolute w-28 h-28 rounded-full bg-gradient-to-br from-brandBlue/20 to-brandRed/20 blur-xl opacity-0 group-hover:opacity-100 transition" />

              {/* ICON BUBBLE */}
              <div className="relative w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center
                              border border-gray-100
                              group-hover:-translate-y-1 group-hover:shadow-xl
                              transition">

                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brandBlue/10 to-brandRed/10 opacity-0 group-hover:opacity-100 transition" />

                {/* ICON COLOR UPDATED */}
                <div className="relative z-10 text-brandBlue group-hover:text-brandRed group-hover:scale-110 transition">
                  {item.icon}
                </div>
              </div>

              {/* LABEL */}
              <p className="mt-4 font-medium text-gray-700 text-sm group-hover:text-brandBlue transition">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
