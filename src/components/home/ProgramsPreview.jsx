import {
  Briefcase,
  FileBadge2,
  Layers3,
  Building2,
  ArrowRight,
} from "lucide-react";

export default function ProgramsPreview() {
  const programs = [
    {
      title: "Workshops",
      desc: "Interactive, skill-based healthcare workshops designed for practical learning.",
      icon: Briefcase,
    },
    {
      title: "Certificate Courses",
      desc: "Structured certification programs to enhance professional competency.",
      icon: FileBadge2,
    },
    {
      title: "Advanced Programs",
      desc: "Specialized advanced modules focused on leadership and excellence.",
      icon: Layers3,
    },
    {
      title: "Institutional Training",
      desc: "Customized training solutions for hospitals and healthcare institutions.",
      icon: Building2,
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white via-blue-50 to-red-50 overflow-hidden">

      {/* BACKGROUND BLOBS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brandBlue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brandRed/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm uppercase tracking-wider text-brandRed font-semibold">
            Programs Preview
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Explore Our <span className="text-brandBlue">Training Programs</span>
          </h2>

          <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Discover professional learning pathways designed to empower
            healthcare professionals through practical education and excellence.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {programs.map((program, i) => {
            const Icon = program.icon;

            return (
              <div
                key={i}
                className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-brandBlue/30 to-brandRed/30 hover:from-brandBlue hover:to-brandRed transition"
              >
                <div className="h-full bg-white/80 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white transition">

                  {/* ICON */}
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-brandBlue/10 flex items-center justify-center group-hover:scale-110 transition">
                    <Icon size={26} className="text-brandBlue" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg sm:text-xl font-bold text-brandBlue">
                    {program.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {program.desc}
                  </p>

                </div>
              </div>
            );
          })}

        </div>

        {/* BUTTON */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-brandBlue to-brandRed text-white font-semibold shadow-lg hover:scale-105 transition">
            Explore Academy Pages
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
