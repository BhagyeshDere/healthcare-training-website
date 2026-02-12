import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VidaAcademy() {

  useEffect(() => {

    // Header animation
    gsap.to(".academy-header", {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".academy-header",
        start: "top 80%",
      },
    });

    // Cards entrance
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

    // Icon draw
    gsap.to(".card-icon-svg", {
      strokeDashoffset: 0,
      duration: 2,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".program-grid",
        start: "top 75%",
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
    <section className="relative py-28 overflow-hidden bg-[#021a40] text-white">

      {/* ===== Background Layers ===== */}
      <div className="absolute inset-0 z-0">

        <div id="bg-default" className="bg-layer opacity-100 absolute inset-0 bg-cover bg-center transition duration-700"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d)" }}
        />

        <div id="bg-training" className="bg-layer absolute inset-0 bg-cover bg-center opacity-0 transition"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655)" }}
        />

        <div id="bg-cde" className="bg-layer absolute inset-0 bg-cover bg-center opacity-0 transition"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d)" }}
        />

        <div id="bg-masterclass" className="bg-layer absolute inset-0 bg-cover bg-center opacity-0 transition"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1523240795612-9a054b0db644)" }}
        />

        <div id="bg-webinars" className="bg-layer absolute inset-0 bg-cover bg-center opacity-0 transition"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b)" }}
        />

        <div id="bg-cqe" className="bg-layer absolute inset-0 bg-cover bg-center opacity-0 transition"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1507679799987-c73779587ccf)" }}
        />

        <div id="bg-research" className="bg-layer absolute inset-0 bg-cover bg-center opacity-0 transition"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1532094349884-543bc11b234d)" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#021a40]/90" />
      </div>

      {/* ===== Content ===== */}
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
        </div>

        {/* Grid */}
        <div className="program-grid grid md:grid-cols-3 gap-16">

          {items.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => changeBg(item.bg)}
              className="d-card opacity-0 translate-y-10 text-center p-6 cursor-pointer transition hover:-translate-y-3"
            >
              {/* Icon SVG */}
              <svg
                className="card-icon-svg mx-auto mb-6 w-16 h-16"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeDasharray="100"
                strokeDashoffset="100"
                viewBox="0 0 24 24"
                style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.8))" }}
              >
                <circle cx="12" cy="12" r="9" />
              </svg>

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

              <button className="mt-6 px-6 py-2 border-2 border-red-400 text-red-400 rounded-full hover:bg-red-500 hover:text-white transition">
                Read More
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
