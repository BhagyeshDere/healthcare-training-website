import {
  GraduationCap,
  MonitorPlay,
  Globe,
  Microscope,
  BookOpen,
  Award,
  Sparkles,
} from "lucide-react";

export default function VidaAcademy() {

  const items = [
    { icon: <GraduationCap size={28} />, title: "Training Programs", img: "/images/academy/academy1.png" },
    { icon: <Microscope size={28} />, title: "Continuing Diagnostic Education (CDE)", img: "/images/academy/academy2.png" },
    { icon: <Award size={28} />, title: "Masterclass Series", img: "/images/academy/academy3.png" },
    { icon: <MonitorPlay size={28} />, title: "Webinars", img: "/images/academy/academy4.png" },
    { icon: <BookOpen size={28} />, title: "CQE Series", img: "/images/academy/academy5.png" },
    { icon: <Globe size={28} />, title: "International Programs", img: "/images/academy/academy6.png" },
    { icon: <Sparkles size={28} />, title: "Research Initiatives", img: "/images/academy/academy7.png" },
    { icon: <Award size={28} />, title: "National IPC Certification", img: "/images/academy/academy8.png" },
  ];

  return (
    <section className="py-28 bg-white relative overflow-hidden">

      {/* SOFT GLOWS */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-brandBlue/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brandRed/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-brandRed font-semibold uppercase tracking-wider">
            VIDA Academy
          </span>

          <h2 className="text-5xl font-bold text-brandBlue mt-4 mb-6">
            Learn. Lead. Transform Healthcare.
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            VIDA Academy delivers online and offline training,
            certifications and research programs for healthcare
            professionals across the globe.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-brandBlue to-brandRed mx-auto mt-6"></div>
        </div>

        {/* IMAGE CARDS */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">

          {items.map((item, i) => (
            <div key={i} className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer">

              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              <div className="absolute bottom-0 p-6 text-white flex flex-col gap-3">

                <div className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-xl text-brandRed">
                  {item.icon}
                </div>

                <h3 className="font-semibold text-lg leading-snug">
                  {item.title}
                </h3>

                <div className={`
                  h-1 w-0
                  bg-gradient-to-r from-brandBlue to-brandRed
                  group-hover:w-full
                  transition-all duration-500
                `}></div>

              </div>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className={`
            bg-gradient-to-r from-brandBlue to-brandRed
            text-white px-10 py-4 rounded-full
            shadow-xl hover:scale-110 transition
          `}>
            Explore Academy
          </button>
        </div>

      </div>
    </section>
  );
}
