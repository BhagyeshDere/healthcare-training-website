import { motion } from "framer-motion";
import {
  ShieldCheck,
  GraduationCap,
  Microscope,
  Users,
  Globe,
  HeartPulse,
} from "lucide-react";

export default function Objectives() {
  const objectives = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Quality & Compliance Leadership",
      text: "Maintain global sterilization standards, regulatory compliance, and infection-control excellence across healthcare institutions.",
    },
    {
      icon: <GraduationCap size={28} />,
      title: "Healthcare Training Excellence",
      text: "Deliver structured CSSD & infection-control training programs to build highly skilled hospital teams.",
    },
    {
      icon: <Microscope size={28} />,
      title: "Research & Innovation",
      text: "Continuously develop advanced sterilization technologies and evidence-based solutions.",
    },
    {
      icon: <Users size={28} />,
      title: "Capacity Building",
      text: "Strengthen hospital staff capabilities through mentorship, certification, and skill development.",
    },
    {
      icon: <Globe size={28} />,
      title: "Global Healthcare Support",
      text: "Support hospitals worldwide with compliant CSSD infrastructure and sterilization systems.",
    },
    {
      icon: <HeartPulse size={28} />,
      title: "Patient Safety Focus",
      text: "Promote patient-centric healthcare by ensuring safe, reliable sterilization workflows.",
    },
  ];

  return (
    <main className="bg-gradient-to-b from-[#F8FBFF] to-white text-gray-800 overflow-hidden">
{/* ================= HERO ================= */}
<section className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/images/common/medical1.png"
      alt="Healthcare"
      className="w-full h-full object-cover object-center"
    />

    {/* ✅ Dark Gradient Overlay */}
    <div className="absolute inset-0 
                    bg-gradient-to-b 
                    from-black/60 
                    via-black/40 
                    to-black/60" />

    {/* ✅ Soft Vignette Shadow */}
    <div className="absolute inset-0 
                    bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.5))]" />
  </div>

  {/* Glow Effects */}
  <div className="absolute -top-20 left-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"/>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/20 blur-3xl rounded-full"/>

  {/* Content */}
  <motion.div
    initial={{opacity:0, y:40}}
    animate={{opacity:1, y:0}}
    transition={{duration:1}}
    className="relative z-10 px-6 max-w-4xl"
  >

    {/* Glass Badge */}
    <div className="inline-block mb-6 px-6 py-2 
                    bg-white/10 backdrop-blur-md 
                    border border-white/20 
                    text-blue-100
                    rounded-full 
                    text-sm tracking-widest">
      Healthcare Quality • Training • Compliance
    </div>

    {/* Heading */}
    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
      VIDA{" "}
      <span className="text-transparent bg-clip-text 
                       bg-gradient-to-r 
                       from-cyan-300 to-blue-400">
        Objectives
      </span>
    </h1>

    {/* Description */}
    <p className="mt-6 text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
      Driving healthcare quality, sterilization excellence,
      and professional training to build safer,
      compliant and future-ready hospitals.
    </p>

    {/* CTA Buttons */}
    <div className="flex justify-center gap-6 mt-10 flex-wrap">

      <button className="px-10 py-4 
                         bg-gradient-to-r from-blue-600 to-red-500 
                         text-white font-semibold 
                         rounded-full shadow-xl
                         hover:scale-105 transition duration-300">
        Explore Programs
      </button>

      <button className="px-10 py-4 
                         border border-white/40 
                         text-white 
                         rounded-full
                         backdrop-blur-md
                         hover:bg-white/10 transition duration-300">
        Contact VIDA
      </button>

    </div>

  </motion.div>

</section>



    {/* ================= OBJECTIVES SPLIT LAYOUT ================= */}
<section className="max-w-7xl mx-auto px-6 mt-16 md:mt-24 pb-24">

  <div className="space-y-20">

    {objectives.map((item,i)=>(

      <motion.div
        key={i}
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className="group grid md:grid-cols-2 gap-0 items-stretch
                   border border-gray-200 overflow-hidden rounded-2xl
                   bg-white
                   shadow-[-20px_20px_40px_rgba(0,0,0,0.06)]
                   hover:shadow-[-25px_25px_60px_rgba(0,0,0,0.12)]
                   transition duration-500"
      >

        {/* LEFT BIG NUMBER */}
        <div className="relative p-10 md:p-14 bg-white">

          <h1 className="text-[90px] md:text-[130px] font-extrabold
                         text-blue-100 group-hover:text-blue-200
                         transition duration-500 leading-none">
            {String(i+1).padStart(2,"0")}
          </h1>

          {/* Accent Line */}
          <div className="absolute left-10 bottom-10 h-1 w-24
                          bg-gradient-to-r
                          from-blue-600 to-red-500
                          group-hover:w-44
                          transition-all duration-500"/>

          {/* Small Label */}
          <p className="mt-6 text-sm tracking-widest uppercase
                        text-gray-400">
            VIDA Life Sciences Objective
          </p>

        </div>


        {/* RIGHT CONTENT — DARK PANEL */}
        <div className="space-y-6 p-10 md:p-14
                        bg-gradient-to-br
                        from-blue-950 via-slate-900 to-blue-900
                        text-white">

          {/* Icon + Title */}
          <div className="flex items-center gap-5">

            <div className="w-14 h-14 flex items-center justify-center
                            rounded-xl text-white text-xl
                            bg-gradient-to-r from-blue-600 to-red-500
                            shadow-lg
                            group-hover:scale-110 transition">
              {item.icon}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {item.title}
            </h3>

          </div>

          {/* Main Text */}
          <p className="text-blue-100 leading-relaxed text-lg">
            {item.text}
          </p>

          {/* Premium Description */}
          <p className="text-blue-200/90 leading-relaxed">
            VIDA Life Sciences is committed to long-term healthcare
            improvement through structured systems, certified training,
            and reliable sterilization practices. Each objective supports
            safer clinical environments, regulatory readiness,
            and operational excellence for hospitals and medical institutions.
          </p>

          {/* Mini Highlights */}
          <div className="flex flex-wrap gap-6 text-sm text-blue-200">

            <span className="flex items-center gap-2">
              ✔ Quality Driven
            </span>

            <span className="flex items-center gap-2">
              ✔ Compliance Focused
            </span>

            <span className="flex items-center gap-2">
              ✔ Healthcare Ready
            </span>

          </div>

        </div>

      </motion.div>

    ))}

  </div>

</section>

{/* ================= CERTIFICATES AUTO SCROLL ================= */}
<section className="relative py-24 overflow-hidden 
                    bg-gradient-to-br 
                    from-blue-950 via-slate-900 to-blue-950">

  {/* Heading */}
  <div className="text-center mb-14">
    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
      Certifications & Compliance
    </h2>

    <p className="mt-4 text-blue-200">
      International certifications reflecting VIDA’s commitment
      to global healthcare quality standards.
    </p>
  </div>


  {/* Fade edges (dark version) */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-32 
                  bg-gradient-to-r from-blue-950 to-transparent z-10"/>

  <div className="pointer-events-none absolute right-0 top-0 h-full w-32 
                  bg-gradient-to-l from-blue-950 to-transparent z-10"/>  


  {/* Scroll Wrapper */}
  <div
    ref={el => {
      if (!el) return;

      let pos = 0;

      const scroll = () => {
        pos += 0.4;
        if (pos >= el.scrollWidth - el.clientWidth) pos = 0;
        el.scrollLeft = pos;
        requestAnimationFrame(scroll);
      };

      scroll();
    }}
    className="flex gap-12 overflow-hidden px-10"
  >

    {[
      "/images/certificates/cert1.png",
      "/images/certificates/cert2.png",
      "/images/certificates/cert3.png",
      "/images/certificates/cert4.png",
      "/images/certificates/cert5.png",
      "/images/certificates/cert6.png",
    ].map((img,i)=>(

      <div key={i}
           className="min-w-[320px] 
                      bg-white/95 rounded-2xl 
                      shadow-2xl 
                      border border-white/20
                      hover:scale-105 transition duration-300
                      p-4">

        <img
          src={img}
          alt="Certificate"
          className="w-full h-[420px] object-contain"
        />

      </div>
    ))}

  </div>


  {/* Bottom Trust Line */}
  <div className="flex justify-center gap-10 mt-16 
                  text-blue-200 text-sm">

    <span>🌍 ISO Certified</span>
    <span>🛡 GMP Compliant</span>
    <span>✔ Global Standards</span>

  </div>

</section>



{/* ================= TRAINING STRIP ================= */}
<section className="relative py-28 overflow-hidden">

  {/* ===== Light Background ===== */}
  <div className="absolute inset-0 bg-gradient-to-br 
                  from-blue-50 via-white to-red-50" />

  {/* Soft Glow Effects */}
  <div className="absolute -top-20 -left-20 w-96 h-96 
                  bg-blue-200/40 blur-3xl rounded-full"/>

  <div className="absolute bottom-0 -right-20 w-96 h-96 
                  bg-red-200/40 blur-3xl rounded-full"/>

  {/* ===== Content ===== */}
  <div className="relative z-10 max-w-6xl mx-auto text-center px-6">

    {/* Premium Badge */}
    <div className="inline-block mb-6 px-6 py-2
                    bg-white/70 backdrop-blur-xl
                    border border-blue-100
                    text-blue-700
                    rounded-full text-sm tracking-widest shadow-sm">
      VIDA Academy Training
    </div>

    {/* Heading */}
   <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 
               leading-[1.25] md:leading-[1.2] pb-3">

  Empowering Healthcare  

  <span className="block text-transparent bg-clip-text 
                   bg-gradient-to-r 
                   from-blue-600 to-red-500
                   leading-[1.25]">
    Through Training
  </span>

</h2>


    {/* Description */}
    <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
      VIDA Academy equips hospital teams with practical sterilization
      knowledge, compliance skills, and infection-control expertise —
      building confident professionals and safer hospitals.
    </p>

    {/* ===== Glass Stats Panel ===== */}
    <div className="mt-16 bg-white/80 backdrop-blur-xl
                    border border-blue-100
                    rounded-3xl p-10 shadow-xl">

      <div className="grid md:grid-cols-3 gap-10">

        <Stat number="300+" label="Hospitals Supported"/>
        <Stat number="14+" label="Years Experience"/>
        <Stat number="100%" label="Medical Focus"/>

      </div>

    </div>

  </div>
</section>



    </main>
  );
}

/* ================= MINI STAT ================= */

function Stat({number,label}){
  return(
    <div>
      <h3 className="text-4xl font-extrabold text-red-400">
        {number}
      </h3>
      <p className="text-blue-100 mt-2">
        {label}
      </p>
    </div>
  );
}
