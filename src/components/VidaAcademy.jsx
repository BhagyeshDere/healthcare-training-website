import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VidaAcademy() {

  useEffect(() => {

    gsap.to(".academy-header", {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".academy-header",
        start: "top 80%",
      },
    });

    gsap.to(".d-card", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".program-grid",
        start: "top 85%",
      },
    });

  }, []);

  const items = [
    {
      title: "Training Programs",
      desc: "Professional healthcare training programs designed to improve skills.",
      points: ["Certification", "Workshops", "Practical Learning"],
      bg: "bg-training",
    },
    {
      title: "CDE Series",
      desc: "Continuing Diagnostic Education for healthcare excellence.",
      points: ["Case Studies", "Expert Talks", "Skill Growth"],
      bg: "bg-cde",
    },
    {
      title: "Masterclass",
      desc: "Advanced masterclasses by industry experts.",
      points: ["Expert Led", "Advanced Modules", "Interactive"],
      bg: "bg-masterclass",
    },
    {
      title: "Webinars",
      desc: "Live online sessions with global access.",
      points: ["Live Sessions", "Global Access", "Recordings"],
      bg: "bg-webinars",
    },
    {
      title: "CQE Series",
      desc: "Quality engagement programs for healthcare.",
      points: ["Standards", "Compliance", "Quality"],
      bg: "bg-cqe",
    },
    {
      title: "Research",
      desc: "Encouraging innovation & academic publishing.",
      points: ["Data Analysis", "Writing", "Guidance"],
      bg: "bg-research",
    },
  ];

  const changeBg = (id) => {
    document.querySelectorAll(".bg-layer").forEach(el =>
      el.classList.remove("opacity-100")
    );
    document.getElementById(id)?.classList.add("opacity-100");
  };

  return (
    <section className="relative py-28 overflow-hidden bg-[#071A2F] text-white">

      {/* Backgrounds */}
      <div className="absolute inset-0 z-0">

        <div
          id="bg-default"
          className="bg-layer opacity-100 absolute inset-0 bg-cover bg-center transition duration-700"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d)" }}
        />

        {["training","cde","masterclass","webinars","cqe","research"].map(name => (
          <div
            key={name}
            id={`bg-${name}`}
            className="bg-layer absolute inset-0 bg-cover bg-center opacity-0 transition"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655)`
            }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-br from-[#071A2F]/95 via-[#0B2C5A]/90 to-[#071A2F]/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="academy-header text-center mb-20 opacity-0 -translate-y-10">

          <h2 className="text-5xl font-extrabold text-cyan-300">
            VIDA Academy
          </h2>

          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            Empowering healthcare delivery through Online & Offline training,
            research, and global collaboration.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-red-400 mx-auto mt-6 rounded-full"/>
        </div>

        {/* Grid */}
        <div className="program-grid grid md:grid-cols-3 gap-16">

          {items.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => changeBg(item.bg)}
              className="d-card opacity-0 translate-y-10 text-center p-6 cursor-pointer transition hover:-translate-y-3"
            >

              {/* ✅ FIXED ICON LOGIC */}
              <div className="mx-auto mb-6 w-16 h-16 rounded-full
                              bg-white/15 backdrop-blur-md
                              flex items-center justify-center
                              shadow-lg border border-white/30">

                <div className="w-10 h-10 rounded-full border-4 border-white"></div>

              </div>

              <h3 className="text-2xl font-bold text-cyan-300">
                {item.title}
              </h3>

              <p className="text-gray-200 mt-3">
                {item.desc}
              </p>

              <ul className="text-gray-300 mt-4 space-y-1">
                {item.points.map((p, idx) => (
                  <li key={idx}>• {p}</li>
                ))}
              </ul>

              <button className="mt-6 px-6 py-2 border-2 border-red-400 text-red-400 rounded-full hover:bg-red-400 hover:text-white transition">
                Read More
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
