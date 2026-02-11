import {
  Presentation,
  FileText,
  Video,
  Download,
  Newspaper,
  Book,
  HeartPulse,
  ArrowRight,
} from "lucide-react";

export default function LibrarySection() {
  const libraryItems = [
    { icon: <Presentation size={26} />, title: "Presentations" },
    { icon: <FileText size={26} />, title: "Articles" },
    { icon: <Video size={26} />, title: "Videos" },
    { icon: <Newspaper size={26} />, title: "CAHO Publication" },
    { icon: <Download size={26} />, title: "Downloads" },
    { icon: <FileText size={26} />, title: "Whitepapers" },
    { icon: <Book size={26} />, title: "CAHO Books" },
    { icon: <HeartPulse size={26} />, title: "Patient Education" },
  ];

  return (
    <section className="relative py-36 overflow-hidden bg-gradient-to-b from-[#071A2F] via-[#0B2A4A] to-[#071A2F] text-white">

      {/* DARK GLOW BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brandBlue/20 blur-[220px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-brandRed/20 blur-[220px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-28">
          <span className="text-brandRed uppercase font-semibold tracking-[6px]">
            VIDA Library
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Knowledge Ecosystem
          </h2>

          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            A premium collection of healthcare knowledge resources,
            publications and professional learning materials.
          </p>
        </div>

        {/* FEATURE BLOCKS */}
        <div className="grid md:grid-cols-2 gap-24 mb-32 items-center">

          <FeatureBlock
            title="VIDA Forms & Templates"
            text="Structured tools, audit templates and ready-to-use healthcare quality documents."
          />

          <FeatureBlock
            title="Lectures & Webinars"
            text="Learn from global healthcare leaders through expert sessions and workshops."
            reverse
          />

        </div>

        {/* EXPLORE RESOURCES */}
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-20">
          Explore Resources
        </h3>

        <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">

          {libraryItems.map((item, i) => (
            <div
              key={i}
              className="
                group flex items-center gap-5
                px-10 py-6
                rounded-full
                bg-white/10 backdrop-blur-xl
                border border-white/10
                hover:bg-white/20
                hover:border-white/20
                hover:-translate-y-2
                hover:scale-105
                transition duration-300
                known as well as knowledge items 
                cursor-pointer
              "
            >
              <div className="
                w-14 h-14 flex items-center justify-center
                rounded-full
                bg-gradient-to-br from-brandBlue/30 to-brandRed/30
                text-white
                group-hover:scale-125
                transition
              ">
                {item.icon}
              </div>

              <span className="text-lg font-semibold text-gray-100">
                {item.title}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

/* FEATURE BLOCK */
function FeatureBlock({ title, text, reverse }) {
  return (
    <div className={reverse ? "md:text-right" : ""}>

      <div className={`w-28 h-1.5 mb-6 rounded-full bg-gradient-to-r from-brandBlue to-brandRed ${reverse ? "ml-auto" : ""}`} />

      <h3 className="text-4xl font-bold mb-6 text-white">
        {title}
      </h3>

      <p className={`text-gray-300 text-lg leading-relaxed mb-8 max-w-xl ${reverse ? "ml-auto" : ""}`}>
        {text}
      </p>

      <button className={`inline-flex items-center gap-2 text-brandRed font-semibold hover:gap-4 transition-all ${reverse ? "ml-auto" : ""}`}>
        Explore <ArrowRight size={18} />
      </button>

    </div>
  );
}
