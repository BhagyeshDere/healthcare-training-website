import { Trophy, Star, Medal, ArrowRight } from "lucide-react";

export default function VidaAwardsSection() {
  const awards = [
    {
      icon: <Star size={34} />,
      title: "Hall of Fame",
      text: "Honoring professionals who made outstanding contributions to healthcare quality and patient safety.",
      pos: "lg:translate-y-10",
    },
    {
      icon: <Trophy size={38} />,
      title: "VIDA Awards",
      text: "Recognizing institutions and leaders driving excellence in healthcare standards.",
      pos: "lg:-translate-y-10",
      highlight: true,
    },
    {
      icon: <Medal size={34} />,
      title: "Contest Winners",
      text: "Celebrating winners of VIDA competitions showcasing innovation and impact.",
      pos: "lg:translate-y-16",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-36 relative overflow-hidden bg-gradient-to-b from-[#F8FBFF] via-white to-[#F9FAFF]">

      {/* PREMIUM LOGO-THEME BACKGROUND */}
      <div className="absolute inset-0 -z-10">

        {/* large soft mesh glow */}
        <div className="absolute top-10 left-1/4 w-[400px] sm:w-[600px] lg:w-[900px] h-[400px] sm:h-[600px] lg:h-[900px] bg-brandBlue/15 blur-[140px] lg:blur-[220px] rounded-full" />

        <div className="absolute bottom-0 right-1/4 w-[400px] sm:w-[600px] lg:w-[900px] h-[400px] sm:h-[600px] lg:h-[900px] bg-brandRed/15 blur-[140px] lg:blur-[220px] rounded-full" />

        {/* subtle center lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7),transparent_70%)]" />

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-14 sm:mb-20 md:mb-24 lg:mb-28">
          <span className="text-brandRed uppercase tracking-[4px] sm:tracking-[6px] font-semibold text-xs sm:text-sm">
            VIDA Recognition
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brandBlue mt-4 sm:mt-6">
            Awards & Achievements
          </h2>

          <p className="text-gray-600 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Celebrating excellence, leadership and innovation in
            healthcare quality and patient safety.
          </p>
        </div>

        {/* ORB LAYOUT */}
        <div className="relative flex flex-col md:flex-row lg:flex-row items-center justify-center gap-12 sm:gap-16 lg:gap-20">

          {awards.map((item, i) => (
            <div
              key={i}
              className={`group relative max-w-sm text-center ${item.pos}`}
            >

              {/* GLOW RING */}
              <div
                className={`
                  absolute inset-0 -z-10 blur-2xl sm:blur-3xl opacity-60 rounded-full
                  ${
                    item.highlight
                      ? "bg-gradient-to-r from-brandRed/40 to-brandBlue/40"
                      : "bg-gradient-to-r from-brandBlue/30 to-brandRed/30"
                  }
                `}
              />

              {/* ICON ORB */}
              <div
                className={`
                  w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto
                  flex items-center justify-center
                  rounded-full
                  backdrop-blur-xl
                  border border-white/40
                  shadow-xl
                  transition duration-500
                  group-hover:scale-110 group-hover:rotate-6
                  ${
                    item.highlight
                      ? "bg-gradient-to-br from-brandRed/10 to-brandBlue/10 text-brandRed"
                      : "bg-white/70 text-brandBlue"
                  }
                `}
              >
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl sm:text-2xl font-bold text-brandBlue mt-6 sm:mt-8">
                {item.title}
              </h3>

              {/* TEXT */}
              <p className="text-gray-600 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                {item.text}
              </p>

              {/* CTA */}
              <button
                className="
                  inline-flex items-center gap-2
                  text-brandRed font-semibold mt-5 sm:mt-6
                  group-hover:gap-4 transition-all
                  text-sm sm:text-base
                "
              >
                Explore <ArrowRight size={18} />
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
