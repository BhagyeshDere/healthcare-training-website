import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  Globe,
  Microscope,
} from "lucide-react";

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

    gsap.to(".icon-ring", {
      strokeDashoffset: 0,
      duration: 1.4,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".program-grid",
        start: "top 75%",
      },
    });

    gsap.to(".bg-slide", {
      opacity: 1,
      duration: 2,
      stagger: {
        each: 4,
        repeat: -1,
        yoyo: true,
      },
    });

  }, []);

  const items = [
    {
      title: "Training Programs",
      desc: "Professional healthcare training programs designed to improve skills.",
      points: ["Certification", "Workshops", "Practical Learning"],
      icon: GraduationCap,
    },
    {
      title: "CDE Series",
      desc: "Continuing Diagnostic Education for healthcare excellence.",
      points: ["Case Studies", "Expert Talks", "Skill Growth"],
      icon: BookOpen,
    },
    {
      title: "Masterclass",
      desc: "Advanced masterclasses by industry experts.",
      points: ["Expert Led", "Advanced Modules", "Interactive"],
      icon: Award,
    },
    {
      title: "Webinars",
      desc: "Live online sessions with global access.",
      points: ["Live Sessions", "Global Access", "Recordings"],
      icon: Globe,
    },
    {
      title: "CQE Series",
      desc: "Quality engagement programs for healthcare.",
      points: ["Standards", "Compliance", "Quality"],
      icon: Users,
    },
    {
      title: "Research",
      desc: "Encouraging innovation & academic publishing.",
      points: ["Data Analysis", "Writing", "Guidance"],
      icon: Microscope,
    },
  ];

  const darkOverlay = `
    linear-gradient(rgba(2,26,64,0.65), rgba(2,26,64,0.9)),
    radial-gradient(circle at center, rgba(2,26,64,0.2), rgba(2,26,64,0.9))
  `;

  return (
    <section className="relative py-28 overflow-hidden text-white">

      {/* ===== BACKGROUND SLIDER ===== */}
      <div className="absolute inset-0 z-0">

        <div
          className="bg-slide absolute inset-0 bg-cover bg-center opacity-0"
          style={{
            backgroundImage: `${darkOverlay}, url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80)`,
          }}
        />

        <div
          className="bg-slide absolute inset-0 bg-cover bg-center opacity-0"
          style={{
            backgroundImage: `${darkOverlay}, url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80)`,
          }}
        />

        <div
          className="bg-slide absolute inset-0 bg-cover bg-center opacity-0"
          style={{
            backgroundImage: `${darkOverlay}, url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80)`,
          }}
        />

        <div
          className="bg-slide absolute inset-0 bg-cover bg-center opacity-0"
          style={{
            backgroundImage: `${darkOverlay}, url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80)`,
          }}
        />

        <div
          className="bg-slide absolute inset-0 bg-cover bg-center opacity-0"
          style={{
            backgroundImage: `${darkOverlay}, url(https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1920&q=80)`,
          }}
        />

        <div
          className="bg-slide absolute inset-0 bg-cover bg-center opacity-0"
          style={{
            backgroundImage: `${darkOverlay}, url(https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=80)`,
          }}
        />

        <div
          className="bg-slide absolute inset-0 bg-cover bg-center opacity-0"
          style={{
            backgroundImage: `${darkOverlay}, url(https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1920&q=80)`,
          }}
        />

      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="academy-header text-center mb-20 opacity-0 -translate-y-10">
          <h2 className="text-5xl font-extrabold text-cyan-300">
            VIDA Academy
          </h2>

          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            Empowering healthcare delivery through Online & Offline training,
            research, and global collaboration.
          </p>
        </div>

        <div className="program-grid grid md:grid-cols-3 gap-16">

          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="d-card opacity-0 translate-y-10 text-center p-6 cursor-pointer transition hover:-translate-y-3"
              >

                <div className="relative w-20 h-20 mx-auto mb-6">

                  <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full" />

                  <svg
                    className="absolute inset-0 w-full h-full -rotate-90"
                    viewBox="0 0 80 80"
                  >
                    <circle
                      cx="40"
                      cy="40"
                      r="30"
                      fill="none"
                      stroke="#22d3ee"
                      strokeWidth="3"
                      strokeDasharray="188"
                      strokeDashoffset="188"
                      className="icon-ring"
                    />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center text-cyan-300">
                    <Icon size={34} strokeWidth={2.2} />
                  </div>
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

                <button className="mt-6 px-6 py-2 border-2 border-red-400 text-red-400 rounded-full hover:bg-red-500 hover:text-white transition">
                  Read More
                </button>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
